import axiosInstance from "./axiosInstance.ts";

export const createUser = async (name:string) => {
    try {
        const res = await axiosInstance.post('/user', {
            name: name
        });
        localStorage.setItem('userId', JSON.stringify(res.data._id));
        console.log(res.data);
    } catch (err) {
        console.error(err);
    }
};