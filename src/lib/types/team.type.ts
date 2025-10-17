import {Member} from "@/lib/types/member.type";

export type Team = {
    id: number;
    name: string;
    description: string;
    members: Member[]
}