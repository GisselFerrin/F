import styles from './card.module.css'
const Card = (props) => {
    const {nombre, apellido, domicilio, children} = props;
    
    return (
        <div className={styles.card}>
            <button > Descripcion
            <h1 className={styles.nombre}> {nombre}</h1>
            <h2 className={styles.apellido}>{apellido}</h2>
            <h3 className={styles.domicilio}>{domicilio}</h3>
            </button>

            <div className={styles["card-body"]}>{children}</div>

        </div>
    );
};
export default Card;
