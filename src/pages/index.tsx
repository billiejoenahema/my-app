import React, { FC } from 'react'
import Link from "next/link"

const Index: FC = () => {
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

export default Index
