import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link to="/">
                    <Navbar.Link>
                        Home
                    </Navbar.Link>
                </Link>
                <Link to="/blog">
                    <Navbar.Link>
                        Blog
                    </Navbar.Link>
                </Link>
                <Link to="/lakjds">
                    <Navbar.Link>
                        NotFound
                    </Navbar.Link>
                </Link>

            </Navbar.Collapse>
        </Navbar>
    )
}
