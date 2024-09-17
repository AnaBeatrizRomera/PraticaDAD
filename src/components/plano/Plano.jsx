import styles from "./Plano.module.css"
import link from "../../assets/Icon pack (1).png"
import link2 from "../../assets/Icon pack.png"

function Plano(prop){
    function cor(){
        if(prop.cor=='true'){
            return(
                <button className={styles.button}>Try now</button>
            )
        }else{
            return(
                <button className={styles.button1}>Try now</button>
            )
        }
    }
    return(
        <div>
            <div className={styles.fundo}>
                <h1 className={styles.titulo}>{prop.titulo}</h1>
                <div className={styles.certo}>
                    <img src={link} className={styles.img}/>
                    <p className={styles.texto}>PNG templates</p>
                </div>
                <div className={styles.errado}>
                    <img src={link2} className={styles.img1}/>
                    <p className={styles.texto1}>PNG Figma responsive
                    components</p>
                </div>
                <div className={styles.errado}>
                    <img src={link2} className={styles.img1}/>
                    <p className={styles.texto1}>Constant updates</p>
                </div>
                <div className={styles.errado}>
                    <img src={link2} className={styles.img1}/>
                    <p className={styles.texto1}>Custom templates</p>
                </div>
                <h1 className={styles.titulo1}>${prop.valor}</h1>
                <p className={styles.textinho}>per month</p>
                {cor()}
                
            </div>
        </div>
    )

    
}
export default Plano;