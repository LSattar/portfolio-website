import { NavLink } from "./NavLink";
import "../css/navbar.css"

type LinkType = {
    linkName: string;
    linkDestination: string;
}

export const NavBar = () => {
    const links: LinkType[] = [
        { linkName: "Home", linkDestination: "/" },
        { linkName: "About Me", linkDestination: "/about-me" },
        { linkName: "Projects", linkDestination: "/projects" }
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <nav className="navbar navbar-light bg-light px-3">
                        {links.map((link) => (
                            <div key={link.linkName}>
                                <NavLink linkObject={link} />
                            </div>
                        ))}
                    </nav>
                </div>
                <div className="col-4"></div>
            </div>

        </div>

    );
}