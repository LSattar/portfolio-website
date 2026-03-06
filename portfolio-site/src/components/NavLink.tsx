import { Link } from "react-router-dom";

type NavLinkProps = {
  linkObject: {
    linkName: string;
    linkDestination: string;
  };
};

export const NavLink = ({ linkObject }: NavLinkProps) => {
  const { linkDestination, linkName } = linkObject;
  return (
    <Link to={linkDestination} className="nav-link">
      {linkName}
    </Link>
  );
};