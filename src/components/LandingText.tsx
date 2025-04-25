import { FC } from "react";
import { Container } from "./Container.tsx";
import { NameInput } from "./NameInput.tsx";
import { motion, AnimatePresence } from "framer-motion";

export const LandingText: FC = () => {
    return (
        <Container>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col w-fit justify-center min-h-[90vh] text-center px-4"
                >
                    <p className="text-4xl font-bold my-4 text-[#3fe593] drop-shadow-lg">
                        Добро пожаловать 👋
                    </p>
                    <span className="text-white font-medium text-xl max-w-xl opacity-80 mb-6">
                        Я собрал этот сайт по приколу — просто захотелось попробовать кое-что новое.
                        Если интересно — залетай!
                    </span>

                    <NameInput />
                </motion.div>
            </AnimatePresence>
        </Container>
    );
};
