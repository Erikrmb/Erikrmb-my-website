import styles from './Home.module.scss'
import Banner from '../../components/Banner';
import { Link } from "react-router-dom";
import stylesTheme from '../../styles/Theme.module.scss'
import classNames from "classnames";
import Logo from "../../components/Logo";
import { useState } from "react";

export default function Home(){
    const [color, setColor] = useState(stylesTheme.color);
    
    function changeColor(){
        if (color === stylesTheme.color){
            setColor(stylesTheme.color__rgb)
        }else{
            setColor(stylesTheme.color)
        }
        
    }
    return(
        <body>
            <main>
            <section className={styles.container__flex}>
                <div className={styles.container__column}>     
                    <h1 className={styles.title}>Hi! I am <span className={color}>Erik</span>, fullstack developer and web designer</h1>
                    <hr></hr>
                    <h2 className={styles.subtitle}>I am a lifelong learner who loves to explore new things on my own and apply that onto new projects.</h2>
                    <Link className={classNames({
                        [stylesTheme.link__banner]: true,
                        [stylesTheme.link]: true,
                        [stylesTheme.link__button]:true
                    })} 
                    to={'/'}>Send a message</Link>
                </div>
                <Banner></Banner>
            </section>
            <button type="reset" className={styles.gaming__mode} onClick={changeColor}>Teste</button>
            <section>
                <hr className={classNames({
                        [stylesTheme.separator]: true,
                        [color]:true,
                    })}></hr>
                <div className={styles.container__aboutme}>
                    <div>
                        <Logo></Logo>
                    </div>
                    <p className={styles.text__aboutme}>Testando mudanca no codigo. Agora site funcionando com load balancer e https.</p>   
                </div>
                <Link className={classNames({
                        [stylesTheme.link__button]: true,
                        [stylesTheme.link]: true,
                        [styles.link__aboutme]:true,
                    })}
                    to={'/aboutme'}>Read More</Link>   
            </section>
            <section>
                <hr className={stylesTheme.separator}></hr>
                <div className={styles.portfolio__brackets__right}>
                        <svg width="318" height="315" viewBox="0 0 318 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="285" y1="35.5" y2="35.5" stroke="#42A1FF" stroke-width="5"/>
                            <line x1="282.5" y1="315" x2="282.5" y2="33" stroke="#42A1FF" stroke-width="5"/>
                            <line x1="318" y1="2.5" x2="33" y2="2.5" stroke="#42A1FF" stroke-width="5"/>
                            <line x1="315.5" y1="282" x2="315.5" y2="-1.09278e-07" stroke="#42A1FF" stroke-width="5"/>
                        </svg>
                </div>
                <div className={styles.portfolio__brackets__left}>
                <svg width="318" height="315" viewBox="0 0 318 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="33" y1="279.5" x2="318" y2="279.5" stroke="#42A1FF" stroke-width="5"/>
                    <line x1="35.5" y1="1.09278e-07" x2="35.5" y2="282" stroke="#42A1FF" stroke-width="5"/>
                    <line x1="1.52588e-05" y1="312.5" x2="285" y2="312.5" stroke="#42A1FF" stroke-width="5"/>
                    <line x1="2.50002" y1="33" x2="2.5" y2="315" stroke="#42A1FF" stroke-width="5"/>
                </svg>
                </div>  
                <div className={styles.container__portfolio}>
                    <div className={styles.portfolio__card}>
                        <p className={classNames({
                        [styles.portfolio__featured]: true,
                        [color]: true,
                    })} >Featured</p>
                        <div className={classNames({
                            [styles.portfolio__card__image]:true,
                            [styles.portfolio__card__imageAluroni]:true,
                        })}></div>
                        <div className={styles.portfolio__infoBar}>
                            <div className={styles.portfolio__background}>
                                <h2 className={classNames({
                        [styles.portfolio__title]: true,
                        [color]: true,
                    })}>Aluroni</h2>
                                <p className={styles.portfolio__text}>Project made using React</p>
                            </div>
                            <Link className={styles.portfolio__link} to='https://github.com/Erikrmb/aluroni-react-ts'>Check it out</Link>
                        </div>
                    </div>
                    <div className={styles.portfolio__card}>
                        <p className={classNames({
                        [styles.portfolio__featured]: true,
                        [color]: true,
                    })} >Featured</p>
                        <div className={classNames({
                            [styles.portfolio__card__image]:true,
                            [styles.portfolio__card__imageAluroni]:true,
                        })}></div>
                        <div className={styles.portfolio__infoBar}>
                            <div className={styles.portfolio__background}>
                                <h2 className={classNames({
                        [styles.portfolio__title]: true,
                        [color]: true,
                    })}>Aluroni</h2>
                                <p className={styles.portfolio__text}>Project made using React</p>
                            </div>
                            <Link className={styles.portfolio__link} to='https://github.com/Erikrmb/aluroni-react-ts'>Check it out</Link>
                        </div>
                    </div>
                </div>
                <Link className={classNames({
                        [stylesTheme.link__button]: true,
                        [stylesTheme.link]: true,
                        [styles.link__aboutme]:true 
                    })}
                    to={'/aboutme'}>Read More</Link>    
            </section>
            <section>
                <hr className={stylesTheme.separator}></hr>
                <div className={styles.blog__container}>
                    <div className={styles.blog__card}>
                        <div className={classNames({
                                [styles.blog__card__image]:true,
                                [styles.blog__card__imageAluroni]:true,
                            })}></div>
                        <div className={styles.blog__infoBar}>
                            <h4 className={styles.blog__infoBar__title}>What is UX?</h4>
                            <p className={styles.blog__infoBar__text}>Understand what is UX and why it is so important.</p>
                            <p>Read More -»</p>
                        </div>
                    </div>
                    <div className={styles.blog__card}>
                        <div className={classNames({
                                [styles.blog__card__image]:true,
                                [styles.blog__card__imageAluroni]:true,
                            })}></div>
                        <div className={styles.blog__infoBar}>
                            <h4 className={styles.blog__infoBar__title}>What is UX?</h4>
                            <p className={styles.blog__infoBar__text}>Understand what is UX and why it is so important.</p>
                            <p>Read More -»</p>
                        </div>
                    </div>
                </div>   
            </section>
        </main>
    </body>
    )
}
