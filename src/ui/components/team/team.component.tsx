import {TeamProps} from "@/ui/components/team/team.interface";
import {FC} from "react";
import {MemberCard} from "@/ui/components/member/member.component";

export const Team: FC<TeamProps> = ({team}) => {

    return (
        <section className={"w-full"}>
            <h2 className={"text-3xl font-bold text-neutral-700 mb-2"}>{team.name}</h2>
            <hr/>
            <p className={"w-full text-wrap text-justify mt-2 text-neutral-600"}>{team.description}</p>
            <br/>
            <div className="flex flex-wrap justify-between gap-6">
                {[...team.members, ...team.members, ...team.members, ...team.members].map(
                    (member, index) => (
                        <MemberCard key={`${member.id}-${index}`} member={member} />
                    )
                )}
            </div>

        </section>
    );
}
