import clazzes from './RandomChar.module.scss';
import thorImg from '../../img/thor.jpeg';
import mjolnir from '../../img/mjolnir.png';
import MarvelBtn from '../ui/Button/MarvelBtn';


const RandomChar = () => {

    return (
            <div className={[clazzes.randomchar__container, 'mt-5'].join(' ')}>
                        <div className={clazzes.randomchar__info}>
                            <div className={clazzes.parent}>
                                <div className={clazzes.img__container}> 
                                    <img src={thorImg} alt="" />
                                </div>
                                <div className={clazzes.info__title}>
                                    THOR    
                                </div>
                                <div className={clazzes.info__descr}> 
                                    As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
                                </div>
                                <div className={[clazzes.info__btn__container, 'mt-2'].join(' ')}>
                                    <div className={clazzes.btn__container}>
                                        <MarvelBtn isRed={true}>
                                            homepage
                                        </MarvelBtn>
                                        <MarvelBtn>
                                            wiki
                                        </MarvelBtn>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={clazzes.randomchar__choice}>
                                <p className={clazzes.randomchar__title}>
                                    Random character for today! <br />
                                    Do you want to get to know him better?
                                </p>
                                <p className={clazzes.randomchar__title}>
                                    Or choose another one
                                </p>
                                <MarvelBtn isRed={true} addClazzes={['mt-3']}>
                                            try it
                                </MarvelBtn>
                                <img src={mjolnir} alt="mjolnir" className={clazzes.randomchar__decoration}/>
                        </div>
                </div>
    )
}

export default RandomChar;