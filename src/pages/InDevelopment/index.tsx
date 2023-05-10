import styles from "./InDevelopment.module.scss"
// import inDevelopmentBanner from 'assets/inDevelopmentBanner.svg'

export default function InDevelopment(){
    return(
        <main className={styles.inDevelopment__container}>
            {/* <img src={inDevelopmentBanner} className={styles.inDevelopment__image}></img> */}
            <p className={styles.inDevelopment__text}>This page is currently in development,</p>
            <p className={styles.inDevelopment__text}>Come back later!</p>
        </main>
    )
}