import { FC, useState } from "react";
import { motion } from "framer-motion";
import { createUser } from "../api/UserInstance.ts";

export const NameInput: FC = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputName, setInputName] = useState('');

    const handleStart = () => {
        if (inputName.trim()) {
            createUser(inputName);

            setTimeout(() => {
                window.location.href = "/question";
            }, 500);
        }
    };

    return (
        <div className="flex flex-col mt-[50px] gap-2">
            <label htmlFor="name" className="text-white font-medium">Ваше имя</label>
            <motion.input
                type="text"
                id="name"
                placeholder="Введите ваше имя"
                className="bg-[#383838] text-white rounded-[10px] py-3 px-6 outline-none border transition-colors duration-200"
                style={{ borderColor: isFocused ? "#22c55e" : "transparent" }}
                animate={{
                    borderWidth: isFocused ? 1 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
            />
            <motion.button
                onClick={handleStart}
                className="bg-[#22c55e] cursor-pointer text-white rounded-[10px] py-3 px-6 mt-4 hover:bg-[#1e9f4d] transition-colors duration-200 active:bg-[#1c8e4a]"
            >
                Начать
            </motion.button>
        </div>
    );
};
