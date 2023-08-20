import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

//style
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navBar">
        <ul>
          <FontAwesomeIcon
            icon={faEarthAmericas}
            style={{ paddingRight: "10px" }}
          />
          my travel journal
        </ul>
      </nav>
    </div>
  );
}
