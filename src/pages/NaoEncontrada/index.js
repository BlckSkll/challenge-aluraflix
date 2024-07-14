import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O video que você procura não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;