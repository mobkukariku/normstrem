import axiosInstance from "./axiosInstance.ts";

export const createUser = async (name:string) => {
    try {
        const res = await axiosInstance.post('/user', {
            name: name
        });
        console.log(res.data);

        return res.data._id;
    } catch (err) {
        console.error(err);
    }
};