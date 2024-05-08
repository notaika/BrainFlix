import "./Header.scss";
import { Link, useNavigate } from 'react-router-dom';
import icon from "../../assets/images/Mohan-muruge.jpg";
import logo from "../../assets/BrainFlix-logo.svg";

export function Header() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate('/upload');
  }

  return (
    <header className="header">
      <Link to='/'><img className="header__logo" src={logo} alt="brainflix logo" /></Link>
      <form action="submit" className="header__nav" id="searchForm">
        <input
          className="header__search"
          type="text"
          placeholder="Search"
          name="search"
        />
        <button className="header__search-btn" type="button" onClick={handleClick}>
          UPLOAD
        </button>
      </form>
      <img className="header__pfp" src={icon} alt="user profile picture" />
    </header>
  );
}

export default Header;
