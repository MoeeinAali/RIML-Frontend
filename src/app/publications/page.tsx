import {PublicationsList} from "@/ui/components/publication-list/publications-list";

export default function PublicationsPage() {
    return (
        <>
            <h1 className={"text-4xl font-bold text-neutral-700 mb-2"}>All Publications</h1>
            <hr/>
            <br/>
            <br/>
            <PublicationsList/>
        </>
    );
}
