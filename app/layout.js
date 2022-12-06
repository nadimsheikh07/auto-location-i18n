import Link from "next/link"

const RootLayout = ({ children }) => {
    return (
        <div>
            <Link href="/">
                Home
            </Link>
            <Link href="/test">
                Test
            </Link>

            {children}
        </div>
    )
}

export default RootLayout