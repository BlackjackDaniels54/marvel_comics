// import  from './ListChars.module.scss';
import abyss from '../../img/abyss.jpg';

import clazz from './ListChars.module.scss';

const ListChars = () => {
    console.log(clazz);
    return (
        <div>
            <ul className={clazz.list__grid }>
                <li className={clazz.list__item}>
                    <figure>
                        <img src={abyss} alt="" />
                    </figure>
                    <div className={clazz.list__name }>
                        abyss
                    </div>    
                </li>
                <li className={[clazz.list__item, clazz.active].join(' ')}>
                    <figure>
                        <img src={abyss} alt="" />
                    </figure>
                    <div className={clazz.list__name }>
                        abyss
                    </div>    
                </li>
                <li className={clazz.list__item}>
                    <figure>
                        <img src={abyss} alt="" />
                    </figure>
                    <div className={clazz.list__name }>
                        abyss
                    </div>    
                </li>
                <li className={clazz.list__item}>
                    <figure>
                        <img src={abyss} alt="" />
                    </figure>
                    <div className={clazz.list__name }>
                        abyss
                    </div>    
                </li>
                <li className={clazz.list__item}>
                    <figure>
                        <img src={abyss} alt="" />
                    </figure>
                    <div className={clazz.list__name }>
                        abyss
                    </div>    
                </li>
                <li className={clazz.list__item}>
                    <figure>
                        <img src={abyss} alt="" />
                    </figure>
                    <div className={clazz.list__name }>
                        abyss
                    </div>    
                </li>
                <li className={clazz.list__item}>
                    <figure>
                        <img src={abyss} alt="" />
                    </figure>
                    <div className={clazz.list__name }>
                        abyss
                    </div>    
                </li>
                <li className={clazz.list__item}>
                    <figure>
                        <img src={abyss} alt="" />
                    </figure>
                    <div className={clazz.list__name }>
                        abyss
                    </div>    
                </li>
                <li className={clazz.list__item}>
                    <figure>
                        <img src={abyss} alt="" />
                    </figure>
                    <div className={clazz.list__name }>
                        abyss
                    </div>    
                </li>
                
                
            </ul>
        </div>
    )
}

export default ListChars;