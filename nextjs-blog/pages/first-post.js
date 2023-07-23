import Link from "next/link";

export default function FirstPost() {
    return (
        <div>
            <h1>"What's good?"</h1>
            <h2>
                <Link href="/">Home</Link>
            </h2>
        </div>
    )   
}