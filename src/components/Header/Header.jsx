import './Header.scss';
import icon from '../../assets/images/Mohan-muruge.jpg';
import logo from '../../assets/BrainFlix-logo.svg';

export function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="brainflix logo" />
            <form action="submit" className="header__nav" id="searchForm">
                <input className="header__search" type="text" placeholder="Search" name="search"/>
                <button className="header__search-btn" type="button">UPLOAD</button>                
            </form>
            <img className="header__pfp" src={icon} alt="user profile picture" />
        </header>
    )

}

export default Header;