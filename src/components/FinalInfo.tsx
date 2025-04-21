import {FC} from "react";

export const FinalInfo:FC = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-[100px] w-full h-full p-4 text-center">
            <h1 className="text-3xl font-bold text-[#3fe593]">Спасибо что проголосовали!</h1>
            <p className="mt-4 text-lg text-white opacity-75 ">Ваш голос очень важен нам)))</p>
            <p className="mt-2 text-lg text-white ">Если вы хотите дополнить этот список, то вот кнопочка)</p>

            <button className={"bg-[#22c55e] text-black font-medium  rounded-[6px] py-2 px-4 mt-4 hover:bg-[#1e9f4d] transition-colors duration-200 cursor-pointer active:bg-[#1c8e4a]"}>
                Дать свой вопрос
            </button>
        </div>
    );
}