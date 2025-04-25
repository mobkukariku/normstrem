import { useEffect, useState } from "react";
import { Question } from "../components/Question.tsx";
import { Loader } from "../components/Loader.tsx";

export const QuestionPage = () => {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const id = localStorage.getItem("userId");
        if (id) {
            setUserId(id.replace(/^"|"$/g, ""));
        }
    }, []);

    return (
        <div>
            {userId ? <Question userId={userId} /> : <Loader />}
        </div>
    );
};
