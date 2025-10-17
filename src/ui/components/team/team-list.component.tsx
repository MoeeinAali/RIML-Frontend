import {FC} from "react";
import {Team as TeamType} from "@/lib/types/team.type";
import {API_URL} from "@/lib/configs/global";
import {Team} from "@/ui/components/team/team.component";

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


export const TeamList: FC = async () => {
    const teams = await getTeams();
    return (
        <div className={"flex flex-col gap-10 mt-10"}>
            {teams
                .filter((team) => team.members.length > 0)
                .map(team => <Team key={`${team.id}-${team.name}`} team={team}/>
                )}
        </div>
    );
}
