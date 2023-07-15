import styles from './Home.module.scss'
import Banner from '../../components/Banner';
import { Link } from "react-router-dom";
import stylesTheme from '../../styles/Theme.module.scss'
import classNames from "classnames";
import Logo from "../../components/Logo";
import { useState } from "react";

export default function Home(){
    
    
    const englishText = {
        "intro":"Hi! I am ",
        "intro_occupation":", fullstack developer and web designer",
        "short_about_me":"I am a lifelong learner who loves to explore new things on my own and apply that onto new projects.",
        "button_send_message":"Send a message",
        "about_me":"I'm a full stack developer who loves learning about new technologies and applying new frameworks onto different projects. Over the past 3 years, I have studied and developed my skills as a developer, until recently I started working as a freelancer. I am really interested in new projects, so if you have a project or an idea try contacting me!",
        "featured":"Featured",
        "project_title":["Aluroni","Voll.med API"],
        "project_description":["Project made using React","API REST developed in Java"],
        "button_check_it":"Check it out",
        "button_read_more":"Read More",
        "blog_title":["Developing my website Front-end","Developing my website Back-end"],
        "blog_short":["Understand what is React and how to use it","Understand what is an API and how it works"],
        "blog_read_more":"Read more",
        "designed_by":"Website designed and developed by ErikRMB",
    };
    const frenchQuebecText = {
        "intro":"Salut! Je suis ",
        "intro_occupation":", développeur full stack et concepteur web",
        "short_about_me":"Je suis un apprenant perpétuel qui aime explorer de nouvelles choses par moi-même et les appliquer à de nouveaux projets.",
        "button_send_message":"Envoyer un message",
        "about_me":"Je suis un développeur full stack qui aime apprendre de nouvelles technologies et appliquer de nouveaux frameworks sur différents projets. Au cours des 3 dernières années, j'ai étudié et développé mes compétences en tant que développeur, jusqu'à récemment où j'ai commencé à travailler en tant que freelance. Je suis vraiment intéressé par de nouveaux projets, alors si vous avez un projet ou une idée, essayez de me contacter !",
        "featured":"En vedette",
        "project_title":["Aluroni","API Voll.med"],
        "project_description":["Projet réalisé avec React","API REST développée en Java"],
        "button_check_it":"Voir le projet",
        "button_read_more":"Lire la suite",
        "blog_title":["Développement de mon site web Front-end","Développement de mon site web Back-end"],
        "blog_short":["Comprendre ce qu'est React et comment l'utiliser","Comprendre ce qu'est une API et comment elle fonctionne"],
        "blog_read_more":"Lire la suite",
        "designed_by":"Site web conçu et développé par ErikRMB",
        };
        const [currentLanguage, setLanguage] = useState(englishText);
        const [color, setColor] = useState(stylesTheme.color);
      
        function changeLanguage() {
          if (JSON.stringify(currentLanguage) === JSON.stringify(englishText)) {
            setLanguage(frenchQuebecText);
          } else {
            setLanguage(englishText);
          }
        }

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
                    <h1 className={styles.title}>{currentLanguage.intro}<span className={color}>Erik</span>{currentLanguage.intro_occupation}</h1>
                    <hr></hr>
                    <h2 className={styles.subtitle}>{currentLanguage.short_about_me}</h2>
                    <Link className={classNames({
                        [stylesTheme.link__banner]: true,
                        [stylesTheme.link]: true,
                        [stylesTheme.link__button]:true
                    })} 
                    to="mailto:commercial@erikrmb.com">{currentLanguage.button_send_message}</Link>
                </div>
                <div className={styles.banner}>
                    <Banner></Banner>
                </div>
            </section>
            <button type="button" className={styles.gaming__mode} onClick={changeLanguage}></button>
            <section>
                <hr className={classNames({
                        [stylesTheme.separator]: true,
                        [color]:true,
                    })}></hr>
                <div className={styles.container__aboutme}>
                    <div>
                        <Logo></Logo>
                    </div>
                    <p className={styles.text__aboutme}>{currentLanguage.about_me}</p>   
                </div>
                <Link className={classNames({
                        [stylesTheme.link__button]: true,
                        [stylesTheme.link]: true,
                        [styles.link__aboutme]:true,
                    })}
                    to={'/about'}>{currentLanguage.button_read_more}</Link>   
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
                    })} >{currentLanguage.featured}</p>
                        <div className={classNames({
                            [styles.portfolio__card__image]:true,
                            [styles.portfolio__card__imageAluroni]:true,
                        })}></div>
                        <div className={styles.portfolio__infoBar}>
                            <div className={styles.portfolio__background}>
                                <h2 className={classNames({
                        [styles.portfolio__title]: true,
                        [color]: true,
                    })}>{currentLanguage.project_title[0]}</h2>
                                <p className={styles.portfolio__text}>{currentLanguage.project_description[0]}</p>
                            </div>
                            <Link className={styles.portfolio__link} to='https://github.com/Erikrmb/aluroni-react-ts'>{currentLanguage.button_check_it}</Link>
                        </div>
                    </div>
                    <div className={styles.portfolio__card}>
                        <p className={classNames({
                        [styles.portfolio__featured]: true,
                        [color]: true,
                    })} >{currentLanguage.featured}</p>
                        <div className={classNames({
                            [styles.portfolio__card__image]:true,
                            [styles.portfolio__card__imageAluroni]:true,
                        })}></div>
                        <div className={styles.portfolio__infoBar}>
                            <div className={styles.portfolio__background}>
                                <h2 className={classNames({
                        [styles.portfolio__title]: true,
                        [color]: true,
                    })}>{currentLanguage.project_title[1]}</h2>
                                <p className={styles.portfolio__text}>{currentLanguage.project_description[1]}</p>
                            </div>
                            <Link className={styles.portfolio__link} to='https://github.com/Erikrmb/aluroni-react-ts'>{currentLanguage.button_check_it}</Link>
                        </div>
                    </div>
                </div>
                <Link className={classNames({
                        [stylesTheme.link__button]: true,
                        [stylesTheme.link]: true,
                        [styles.link__aboutme]:true 
                    })}
                    to={'/portfolio'}>{currentLanguage.button_read_more}</Link>    
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
                            <h4 className={styles.blog__infoBar__title}>{currentLanguage.blog_title[0]}</h4>
                            <p className={styles.blog__infoBar__text}>{currentLanguage.blog_short[0]}</p>
                            <p>{currentLanguage.blog_read_more} -»</p>
                        </div>
                    </div>
                    <div className={styles.blog__card}>
                        <div className={classNames({
                                [styles.blog__card__image]:true,
                                [styles.blog__card__imageAluroni]:true,
                            })}></div>
                        <div className={styles.blog__infoBar}>
                            <h4 className={styles.blog__infoBar__title}>{currentLanguage.blog_title[1]}</h4>
                            <p className={styles.blog__infoBar__text}>{currentLanguage.blog_short[1]}</p>
                            <p>{currentLanguage.blog_read_more} -»</p>
                        </div>
                    </div>
                </div>   
            </section>
        </main>
    </body>
    )
}
