import NavBar from "../../components/NavBar";
import styles from './Home.module.scss'
import Banner from '../../components/Banner';
import { Link } from "react-router-dom";
import stylesTheme from '../../styles/Theme.module.scss'
import classNames from "classnames";
import Logo from "../../components/Logo";

export default function Home(){
    return(
        <section className={styles.container}>
            <NavBar></NavBar>
            <section className={styles.container__flex}>
                <div className={styles.container__column}>     
                    <h1 className={styles.title}>Hi! I am <span className={styles.highlight}>Erik</span>, fullstack developer and web designer</h1>
                    <hr></hr>
                    <h2 className={styles.subtitle}>I am a lifelong learner who loves to explore new things on my own and apply that onto new projects.</h2>
                    <Link className={classNames({
                        [stylesTheme.link__conversion]: true,
                        [stylesTheme.link]: true,
                        [styles.link__home]: true
                    })} 
                    to={'/'} >Send a message</Link>
                </div>
                <Banner></Banner>
            </section>
            <section>
                <hr className={stylesTheme.separator}></hr>
                <div className={styles.container__aboutme}>
                    <div>
                        <Logo></Logo>
                    </div>
                    <p className={styles.text__aboutme}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin justo tellus, bibendum et tortor eu, mattis placerat massa. Pellentesque a elit finibus, viverra elit in, pellentesque nisl. Phasellus porta odio dolor, ac aliquam turpis vehicula vel. Quisque fermentum nunc in nunc aliquet, in egestas mi porttitor. Morbi a nisi sit amet mauris molestie pellentesque.</p>   
                </div>
                <Link className={classNames({
                        [stylesTheme.link__conversion]: true,
                        [stylesTheme.link]: true,
                        [styles.link__aboutme]:true 
                    })}
                    to={'/aboutme'}>Read More</Link>    
            </section>
            <section>
                <hr className={stylesTheme.separator}></hr>
                <div className={styles.container__aboutme}>
                    <div>
                        <svg width="318" height="315" viewBox="0 0 318 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="33" y1="279.5" x2="318" y2="279.5" stroke="#42A1FF" stroke-width="5"/>
                            <line x1="35.5" y1="1.09278e-07" x2="35.5" y2="282" stroke="#42A1FF" stroke-width="5"/>
                            <line x1="1.52588e-05" y1="312.5" x2="285" y2="312.5" stroke="#42A1FF" stroke-width="5"/>
                            <line x1="2.50002" y1="33" x2="2.5" y2="315" stroke="#42A1FF" stroke-width="5"/>
                        </svg>
                        <div >

                        </div>
                        <img src="" className={styles.portfolio__frame} alt="React Project"></img>
                        <Logo></Logo>
                        <svg width="318" height="315" viewBox="0 0 318 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="285" y1="35.5" y2="35.5" stroke="#42A1FF" stroke-width="5"/>
                            <line x1="282.5" y1="315" x2="282.5" y2="33" stroke="#42A1FF" stroke-width="5"/>
                            <line x1="318" y1="2.5" x2="33" y2="2.5" stroke="#42A1FF" stroke-width="5"/>
                            <line x1="315.5" y1="282" x2="315.5" y2="-1.09278e-07" stroke="#42A1FF" stroke-width="5"/>
                        </svg>
                    </div>
                    <p className={styles.text__aboutme}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin justo tellus, bibendum et tortor eu, mattis placerat massa. Pellentesque a elit finibus, viverra elit in, pellentesque nisl. Phasellus porta odio dolor, ac aliquam turpis vehicula vel. Quisque fermentum nunc in nunc aliquet, in egestas mi porttitor. Morbi a nisi sit amet mauris molestie pellentesque.</p>   
                </div>
                

                <Link className={classNames({
                        [stylesTheme.link__conversion]: true,
                        [stylesTheme.link]: true,
                        [styles.link__aboutme]:true 
                    })}
                    to={'/aboutme'}>Read More</Link>    
            </section>
        </section>
    )
}