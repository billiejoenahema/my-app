import Link from "next/link"

export default function index() {
    return (
        <div>
            <h1>Top Page</h1>
            <ul>
                <li>
                    <Link href="/About">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Form">
                        <a>Contact Us</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
