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
                    className="flex flex-col justify-center min-h-[90vh] text-center px-4"
                >
                    <p className="text-[32px] font-bold my-4 text-[#3fe593]">Привет)</p>
                    <span className="opacity-75 text-white font-medium text-[20px] ">
                        Я короч по приколу сделал такую веб-страничку
                    </span>

                    <NameInput />
                </motion.div>
            </AnimatePresence>
        </Container>
    );
};
