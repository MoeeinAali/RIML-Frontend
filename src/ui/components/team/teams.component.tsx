import {FC} from "react";
import {Team as TeamType} from "@/lib/types/team.type";
import {API_URL} from "@/lib/configs/global";
import {TeamList} from "@/ui/components/team/team-list.component";

async function getTeams(): Promise<TeamType[]> {
    const response = await fetch(`${API_URL}/core/teams/`, {
        next: {
            revalidate: 0
        }
    })
    if (!response.ok) {
        throw new Error("Failed to fetch teams.");
    }
    const teamsData: TeamType[] = await response.json();
    return teamsData;
}


export const Teams: FC<{ isSkeleton?: boolean; }> = async ({isSkeleton = false}) => {
    const teams = await getTeams();
    return (
        <TeamList teams={teams} isSkeleton={false}/>
    );
}
