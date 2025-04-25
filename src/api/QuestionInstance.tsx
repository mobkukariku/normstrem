import axiosInstance from "./axiosInstance.ts";

export const getRandomQuestion = async (userId: string | null) => {
    try {
        const res = await axiosInstance.get("/question/random", {
            params: {
                userId,
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const createQuestion = async (userId:string, text:string) => {
    try{
        const res = await axiosInstance.post("/question", {
            userId,
            text
        });
        return res.data;
    }catch (error) {
        console.log(error);
    }
}
