import {FC} from "react";
import {Team as TeamType} from "@/lib/types/team.type";
import {Team} from "@/ui/components/team/team.component";


export const TeamList: FC<{ isSkeleton?: boolean; teams: TeamType[] }> = async ({isSkeleton = false, teams}) => {
    return (
        <div className={`flex flex-col gap-10 mt-10 ${isSkeleton ? "skeleton" : ""}`}>
            {teams
                .filter((team) => team.members.length > 0)
                .map(team => <Team key={`${team.id}${isSkeleton ? `-skeleton` : ''}-${team.name}`} team={team}/>
                )}
        </div>
    );
}
