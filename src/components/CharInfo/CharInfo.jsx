import info from './CharInfo.module.scss';
import thor from '../../img/thor.jpeg';
import MarvelBtn from '../ui/Button/MarvelBtn';


const CharInfo = () => {
    return (
        <div className="info__main__container">
            <div className={info.info__top__container}>
                <div className={info.div1}> 
                    <img src={thor} alt="thor" />
                </div>
                <div className={info.div2}>
                    thor
                </div>
                        
                
                <div className={info.div3}>
                        <MarvelBtn isRed={true}>
                            homepage
                        </MarvelBtn>
                </div>
                <div className={info.div4}> 
                        <MarvelBtn addClazzes={['mt-2']}>
                            wiki
                        </MarvelBtn>    
                </div>
            </div>
        </div>
            
    )
}

export default CharInfo;