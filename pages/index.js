import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>Top Page</h1>
            <ul>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
