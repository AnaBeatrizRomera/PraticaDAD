import styles from './Tag.module.css';

function Tag(prop) {
    function cor(){
        if(prop.cor=='true'){
            return(
                <button className={styles.tag}>{prop.nome}</button>
            )
        }else{
            return(
                <button className={styles.tag1}>{prop.nome}</button>
            )
        }
    }
    return (
        <div className={styles.fundo}>
           {cor()}
        </div>
    );
}

export default Tag;