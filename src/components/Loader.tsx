import { ClipLoader } from "react-spinners";

export const Loader = () => {
    return (
        <div className="flex justify-center items-center h-32">
            <ClipLoader color="#3fe593" size={48} />
        </div>
    );
};
