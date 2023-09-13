import styles from './card.module.css'
const Card = (props) => {
    const {nombre, apellido, children} = props;
    
    return (
        <div className={styles.card}>
            
            <h1 className={styles.nombre}> {nombre}</h1>
            <h2 className={styles.apellido}>{apellido}</h2>
            <div>
                <img src="./src/Components/Img/Dr Alvaro Perrone.png" alt="Alvaro Perrone" />
        </div>
        )};
        <section class="grid">
			<div class="card">
				<img src="img/1.png" alt="">
				<div class="botones">
					<a href="#" class="boton primario">Comprar</a>
					<a href="#" class="boton secundario">Ver más</a>
				</div>
			</div>
			<div class="card">
				<img src="C:\Users\FAM\Desktop\DigitalHouse\F\FinalGisselFerrinFE3\src\Img\Dr Alvaro Perrone.png" alt="Alvaro">
				<div class="botones">
					
                <a href="#" class="boton primario"> ❤️</a>
				</div>
			</div>
			<div class="card">
				<img src="img/3.png" alt="">
				<div class="botones">
                <a href="#" class="boton primario"> ❤️</a>
					
				</div>
			</div>
			<div class="card">
				<img src="img/4.png" alt="">
				<div class="botones">
					<a href="#" class="boton primario"> ❤️</a>
					
				</div>
			</div>
			<div class="card">
				<img src="img/5.png" alt="">
				<div class="botones">
					<a href="#" class="boton primario"> ❤️</a>
					
				</div>
			</div>
			<div class="card">
				<img src="img/6.png" alt="">
				<div class="botones">
					<a href="#" class="boton primario"> ❤️</a>
					
				</div>
            
<div className={styles["card-body"]}>{children}</div>

        </div>
    
)};
export default Card;
