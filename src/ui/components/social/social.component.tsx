import {FC, ReactElement} from "react";

export const Social: FC<{ href: string; icon: ReactElement }> = ({href, icon}) => {

    return (
        <>
            {
                href && (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-40 hover:no-underline flex items-center w-8 h-8 justify-center transition-all"
                    >
                        {icon}
                    </a>
                )
            }
        </>
    )
}
