import btn from './MarvelBtn.module.scss';

const MarvelBtn = ({children, isRed, addClazzes}) => {
    const clazzes = [btn.btn];

    if(addClazzes) {
        clazzes.push(...addClazzes) 
    }


    isRed ?
            clazzes.push(btn.red)
            :
            clazzes.push(btn.gray)
    

    return (
        <button className={clazzes.join(' ')}>
            <div>{children}</div>
        </button>
        
    ) 
}

export default MarvelBtn;