const { Link } = require("react-router-dom")
const { default: SignedInLinks } = require("./SignedInLinks")
const { default: SignedOutLinks } = require("./SignOutLinks")

const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Project Mgt</Link>
                <SignedInLinks/>
                <SignedOutLinks />
            </div>
        </nav>
    );
}

export default NavBar;