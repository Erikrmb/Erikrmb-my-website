import stylesTheme from '../../styles/Theme.module.scss';
import styles from '../home/Home.module.scss';
import classNames from 'classnames';


export default function Blog(){
    return(
        <section>
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
    )
}