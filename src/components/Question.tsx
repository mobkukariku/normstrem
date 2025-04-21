import { FC, useState } from "react";
import { Container } from "./Container";
import { motion, AnimatePresence } from "framer-motion";

export const Question: FC = () => {
    const [visible, setVisible] = useState(true);
    const [answer, setAnswer] = useState<string | null>(null);

    const handleAnswer = (answer: string) => {
        console.log("Ответ:", answer);
        setAnswer(answer);
        setVisible(false);
    };

    return (
        <Container>
            <AnimatePresence>
                {visible && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <p className="text-[24px] mt-[20px] mb-[100px] font-bold text-[#3fe593] text-center">
                            Вопрос №1
                        </p>
                        <p className="text-[20px] font-medium mb-[100px] text-white text-center">
                            Джава — это хороший язык программирования!
                        </p>

                        <div className="flex justify-around gap-6 mt-8">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#ef4444" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#1f1f1f] border border-red-500 px-6 py-3 rounded-[6px]"
                                onClick={() => handleAnswer("Стрем")}
                            >
                                <span className="text-white font-medium text-[18px]">Стрем</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#22c55e" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#1f1f1f] border border-green-500 px-6 py-3 rounded-[6px]"
                                onClick={() => handleAnswer("Норм")}
                            >
                                <span className="text-white font-medium text-[18px]">Норм</span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    );
};
