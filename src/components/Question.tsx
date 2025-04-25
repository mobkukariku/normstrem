import { FC, useEffect, useState } from "react";
import { Container } from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import { getRandomQuestion } from "../api/QuestionInstance.tsx";
import { VotePost } from "../api/VoteInstance.ts";
import { FinalInfo } from "./FinalInfo.tsx";
import { Loader } from "./Loader.tsx";

export const Question: FC<{ userId: string }> = ({ userId }) => {
    const [visible, setVisible] = useState(true);
    const [question, setQuestion] = useState<{ text: string; _id: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [isFetching, setIsFetching] = useState(false);

    const fetchQuestion = async () => {
        if (isFetching || !userId) return;
        setIsFetching(true);
        setLoading(true);

        try {
            const fetchedQuestion = await getRandomQuestion(userId);
            setQuestion(fetchedQuestion);
        } catch (error) {
            console.error("Ошибка при получении вопроса:", error);
        } finally {
            setLoading(false);
            setIsFetching(false);
            setVisible(true);
        }
    };

    useEffect(() => {
        fetchQuestion();
    }, [userId]);

    const handleAnswer = async (vote: boolean) => {
        if (question?._id && userId) {
            try {
                await VotePost({
                    userId,
                    vote,
                    questionId: question._id,
                });
            } catch (error) {
                console.error("Ошибка при отправке голоса:", error);
            }
        }

        setVisible(false);

        setTimeout(() => {
            setQuestion(null);
            fetchQuestion();
        }, 500);
    };

    if (loading) {
        return (
            <Container>
                <div className="h-screen flex justify-center items-center">
                    <Loader />
                </div>
            </Container>
        );
    }

    if (!question && !loading && userId) {
        return (
            <Container>
                <FinalInfo />
            </Container>
        );
    }

    return (
        <Container>
            <AnimatePresence>
                {visible && question && (
                    <motion.div
                        key={question._id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center justify-center min-h-screen text-center px-4"
                    >
                        <p className="text-[24px] font-bold text-[#3fe593] mb-6">
                            Вопрос
                        </p>

                        <p className="text-[20px] font-medium text-white mb-12 max-w-2xl">
                            {question.text}
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#ef4444" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#1f1f1f] border border-red-500 px-8 py-4 rounded-md"
                                onClick={() => handleAnswer(false)}
                            >
                                <span className="text-white font-medium text-[18px]">Стрем</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#22c55e" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#1f1f1f] border border-green-500 px-8 py-4 rounded-md"
                                onClick={() => handleAnswer(true)}
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
