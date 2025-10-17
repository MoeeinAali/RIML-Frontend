import {ReactNode} from "react";

export default function TextArea({
                                     children,
                                 }: Readonly<{ children: ReactNode }>) {
    return (
        <p className={"my-4 w-full text-wrap text-justify text-neutral-600"}>
            {children}
        </p>
    );
}

