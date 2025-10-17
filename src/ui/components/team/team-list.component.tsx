import {FC} from "react";
import {Team as TeamType} from "@/lib/types/team.type";
import {API_URL} from "@/lib/configs/global";
import {Team} from "@/ui/components/team/team.component";

async function getTeams(): Promise<TeamType[]> {
    await new Promise(resolve => setTimeout(resolve, 2000)); // TODO: remove this dev timeout
    const response = await fetch(`${API_URL}/core/teams/`,
        {
            cache: "no-store",
        }
    )
    const teamsData: TeamType[] = await response.json();
    return teamsData;
}


export const TeamList: FC = async () => {
    const teams = await getTeams();
    return (
        <div className={"flex flex-col gap-10 mt-10"}>
            {teams.map(team => <Team key={`${team.id}-${team.name}`} team={team}/>)}
        </div>
    );
}
