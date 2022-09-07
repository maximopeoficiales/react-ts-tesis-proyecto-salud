import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <div className="sticky top-0">
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="./img/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Tesis Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        TESIS
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
                    <Link to="/test">
                        <Navbar.Link>
                            Test
                        </Navbar.Link>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
