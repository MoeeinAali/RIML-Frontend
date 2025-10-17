import Link from 'next/link'

export default function NotFound() {
    return (
        <div className={"mx-auto flex flex-col justify-center items-center gap-4 h-screen"}>
            <h2 className={"text-5xl font-bold"}>Not Found!</h2>
            <p>Could not find requested resource.</p>
            <Link href="/" className={"px-4 py-2 bg-secondary rounded-sm hover:bg-secondary/80"}>Return Home</Link>
        </div>
    )
}