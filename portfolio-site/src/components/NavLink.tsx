import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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