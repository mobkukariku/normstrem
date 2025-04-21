import { FC, useState } from "react";
import { Container } from "./Container.tsx";
import { NameInput } from "./NameInput.tsx";
import { motion, AnimatePresence } from "framer-motion";

export const LandingText: FC = () => {
    const [visible, setVisible] = useState(true);

    return (
        <Container>
            <AnimatePresence>
                {visible && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mt-20"
                    >
                        <p className="text-[32px] font-bold my-[10px] text-[#3fe593]">Привет)</p>
                        <span className="opacity-75 text-white font-medium text-[20px]">
                            Я короч по приколу сделал такую веб-страничку
                        </span>

                        <NameInput />
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    );
};
