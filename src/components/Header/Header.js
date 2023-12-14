
import clazzes from './Header.module.css';

const Header = () => {
    return (
        <header className={clazzes.header}> 
            <div>Marvel information portal</div>
            <div>
                <span>Characters</span> 
                /
                <span>Comics</span> 
            </div>
        </header>
    )
}

export default Header;