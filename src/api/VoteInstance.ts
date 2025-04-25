import axiosInstance from "./axiosInstance.ts";

interface VotePayload {
    userId: string;
    vote: boolean;
    questionId: string;
}

export const VotePost = async ({ userId, vote, questionId }: VotePayload) => {
    try {
        const res = await axiosInstance.post("/vote/save", {
            userId,
            vote,
            questionId
        });
        return res.data;
    } catch (error) {
        console.error("Ошибка при сохранении голоса:", error);
        throw error;
    }
};
