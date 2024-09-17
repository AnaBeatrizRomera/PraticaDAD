import styles from './Titulo.module.css';

function Titulo(props) {
    return (
        <div>
            <h1 className={styles.titulo}>
                {props.nome}
            </h1>
        </div>
    );
}

export default Titulo;