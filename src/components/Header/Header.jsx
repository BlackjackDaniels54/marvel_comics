
import clazzes from './Header.module.scss';

const Header = () => {
    return (
        <header className={clazzes.header}>
            <h1 className={clazzes.header__title}>
                <a href="#">
                    <span>Marvel</span>
                    information portal
                </a>
            </h1>
            <nav className={clazzes.header__menu}>
                <ul>
                    <li><a href="#">Characters </a> </li>
                    /
                    <li> <a href="#"> Comics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;