import styles from './header.module.css'
const Header =() => {
    console.log(styles)
    return (
        <header>
            <h1 className='titulo'>My app</h1>
            <img src="" width="50px" height="50px"alt="Alvaro Perrone" />
        </header>
    )
}
export default Header