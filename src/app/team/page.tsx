import {Suspense} from "react";
import {TeamList} from "@/ui/components/team/team-list.component";

export default function TeamPage() {
    return (
        <>
            <h1 className={"text-4xl font-bold text-neutral-800 mb-2"}>Team Member</h1>
            <hr/>

            <Suspense fallback={<p className={"animate-pulse"}>kir</p>}>
                <TeamList/>
            </Suspense>
        </>
    );
}
