import { FC, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { createQuestion } from "../api/QuestionInstance.tsx";

export const FinalInfo: FC = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputName, setInputName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!inputName.trim()) return;

        const userId = localStorage.getItem("userId")?.replace(/^"|"$/g, "");

        if (!userId) {
            alert("Пользователь не найден 😢");
            return;
        }

        try {
            setIsLoading(true);
            await createQuestion(userId, inputName.trim());

            setInputName("");
            navigate("/question");
        } catch (error) {
            console.error("Ошибка при создании вопроса:", error);
            alert("Произошла ошибка. Попробуйте снова.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center h-screen justify-center px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl w-full bg-[#1e1e1e] rounded-2xl p-8 shadow-lg border border-[#2e2e2e]"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-[#3fe593] text-center">
                    Спасибо за ваш голос! 🥳
                </h1>
                <p className="mt-4 text-lg text-white text-center opacity-80">
                    Нам важно ваше мнение, вы — топ!
                </p>
                <p className="mt-2 text-md text-white text-center opacity-70">
                    Хотите добавить свой вопрос? Впишите его ниже:
                </p>

                <motion.input
                    type="text"
                    placeholder="Введите ваш вопрос"
                    className="w-full bg-[#2a2a2a] mt-6 text-white rounded-xl py-3 px-5 outline-none border transition-all duration-300 placeholder:text-[#aaaaaa] text-base"
                    style={{ borderColor: isFocused ? "#3fe593" : "#2a2a2a" }}
                    animate={{ borderWidth: isFocused ? 2 : 1 }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                />

                <motion.button
                    whileHover={{ scale: inputName.trim() ? 1.03 : 1 }}
                    whileTap={{ scale: inputName.trim() ? 0.98 : 1 }}
                    disabled={!inputName.trim() || isLoading}
                    onClick={handleSubmit}
                    className={`w-full mt-6 py-3 px-6 rounded-xl text-white text-lg font-semibold transition-all duration-200 ${
                        inputName.trim()
                            ? "bg-[#3fe593] hover:bg-[#33d786] active:bg-[#2fc57a]"
                            : "bg-[#3fe593] opacity-50 cursor-not-allowed"
                    }`}
                >
                    {isLoading ? "Отправка..." : "Отправить вопрос"}
                </motion.button>
            </motion.div>
        </div>
    );
};
