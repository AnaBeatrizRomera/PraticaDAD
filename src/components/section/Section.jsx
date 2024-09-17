import styles from './Section.module.css';
import Titulo from '../titulo/Titulo';
import Tag from '../tag/Tag';
import Plano from '../plano/Plano';
function Section() {
    return (
        <div>
            <div className={styles.alinhar}><Titulo nome="PLANS +"/>
            <Tag nome="red" cor='true'/></div>
           <div className={styles.planos}> <Plano titulo="Free" valor="0"/>
            <Plano titulo="Premium" valor="99"/>
            <Plano titulo="Pro" valor="199"/></div>
            <div className={styles.alinhar}><Titulo nome="NEW MEMBER"/>
            <Tag nome="green" /></div>
           <div className={styles.planos}> <Plano titulo="Free" valor="0" cor='true'/>
            <Plano titulo="Premium" valor="99" cor='true'/>
            <Plano titulo="Pro" valor="199" cor='true'/></div>
            
        </div>
    );
}

export default Section;