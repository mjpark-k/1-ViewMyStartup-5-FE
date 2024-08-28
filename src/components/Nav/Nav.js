import { NavLink } from "react-router-dom";
import navLogo from "../../images/navLogo.png";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-bar">
      <div className="nav-logo-container">
        <NavLink to="/">
          <img className="nav-logo" src={navLogo} alt="navLogo" />
        </NavLink>
      </div>
      <div className="nav-link">
        <NavLink
          to="/myCompany"
          className={({ isActive }) =>
            isActive ? "nav-text active" : "nav-text"
          }
        >
          나의 기업 비교
        </NavLink>
        <NavLink
          to="/compare"
          className={({ isActive }) =>
            isActive ? "nav-text active" : "nav-text"
          }
        >
          비교 현황
        </NavLink>
        <NavLink
          to="/investment"
          className={({ isActive }) =>
            isActive ? "nav-text active" : "nav-text"
          }
        >
          투자 현황
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
