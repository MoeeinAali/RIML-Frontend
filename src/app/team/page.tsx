import {Suspense} from "react";
import {TeamList} from "@/ui/components/team/team-list.component";
import {Teams} from "@/ui/components/team/teams.component";
import {SkeletonData} from "@/lib/mock/mock-data";

export default function TeamPage() {
    return (
        <>
            <h1 className={"text-4xl font-bold text-neutral-700 mb-2"}>Team Members</h1>
            <hr/>
            <p className={"w-full text-wrap text-justify mt-2 text-neutral-600"}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
            </p>
            <Suspense fallback={<TeamList teams={SkeletonData.teams} isSkeleton={true}/>}>
                <Teams/>
            </Suspense>
        </>
    );
}
