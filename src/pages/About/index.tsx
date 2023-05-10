import stylesTheme from '../../styles/Theme.module.scss'
import Logo from 'components/Logo'
import classNames from 'classnames'
// import { useState } from 'react'
import styles from './About.module.scss'

export default function About(){
    // const [color, setColor] = useState(stylesTheme.color);
    
    // function changeColor(){
    //     if (color === stylesTheme.color){
    //         setColor(stylesTheme.color__rgb)
    //     }else{
    //         setColor(stylesTheme.color)
    //     }
        
    // }

    return(
        <section>
            <section>
                <h2 className={styles.subtitle}>I am a lifelong learner who loves to explore new things on my own and apply that onto new projects.</h2>
                <div className={styles.container__aboutme}>
                    <div>
                        <Logo></Logo>
                    </div>
                    <p className={styles.text__aboutme}>Testando mudanca no codigo. Agora site funcionando com load balancer e https.</p>   
                </div>
            </section>
            <section>
                <hr className={classNames({
                        [stylesTheme.separator]: true,
                        // [color]:true,
                    })}></hr>
                <h2 className={styles.text__aboutme}>I am a lifelong learner who loves to explore new things on my own and apply that onto new projects.</h2>
                <div className={styles.container__aboutme}>
                    <p className={styles.text__aboutme}>Testando mudanca no codigo. Agora site funcionando com load balancer e https.</p>
                    <div>
                        <Logo></Logo>
                    </div>   
                </div>
            </section>
            <section>
                <hr className={classNames({
                        [stylesTheme.separator]: true,
                        // [color]:true,
                    })}></hr>
                <div className={styles.container__aboutme}>
                    <div>
                        <Logo></Logo>
                    </div>
                    <p className={styles.text__aboutme}>Testando mudanca no codigo. Agora site funcionando com load balancer e https.</p>   
                </div>
            </section>
        </section>
    )
}