import {TeamProps} from "@/ui/components/team/team.interface";
import {FC} from "react";

export const Team: FC<TeamProps> = ({team}) => {

    return (
        <section>
            <h2 className={"text-3xl font-bold text-neutral-700 mb-2"}>{team.name}</h2>
            <hr/>
        </section>
    );
}
