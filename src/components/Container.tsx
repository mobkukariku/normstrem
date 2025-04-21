import { FC, ReactNode } from "react";

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="w-full max-w-[600px] px-4 mx-auto">
            {children}
        </div>
    );
};
