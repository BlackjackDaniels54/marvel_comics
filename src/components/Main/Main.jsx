import CharInfo from "../CharInfo/CharInfo";
import ListChars from "../ListChars/ListChars";
import clazzes from './Main.module.scss';


const Main = () => {
    return (
        <div className={[clazzes.main__container, 'mt-5'].join(' ')}>
            <ListChars/>
            <CharInfo/>
        </div> 
    )
}

export default Main;