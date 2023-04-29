import stylesTheme from '../../styles/Theme.module.scss'
import styles from '../NavBar/Navbar.module.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default function NavBar(){
    const routes =[{
        label: 'Home',
        to: '/'
    },{
        label: 'Portfolio',
        to: '/portfolio'
    },{
        label: 'About me',
        to: '/aboutme'
    },{
        label: 'Blog',
        to: '/blog'
    },{
        label: 'Resumé',
        to: '/resume'
    }]
    const conversionRoutes = [{
        label: 'Contact me',
        to: 'mailto:erikrmb@gmail.com'
    }]
    return(
        <nav className={styles.container}>
            <div className={classNames({
                        [styles.container]: true,
                        [styles.container__logo]: true
            })}>
                <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.0975 18.5512L42.3867 26.3642L57.1554 37.4708L40.9346 51.7792H47.8763L64.5858 37.6054L41.0975 18.5512Z" fill="#42A1FF"/>
                    <path d="M41.0975 85L42.3867 77.1871L57.1554 66.0804L40.9346 51.7792H47.8763L64.5858 65.9458L41.0975 85Z" fill="#42A1FF"/>
                    <path d="M65.2556 20.1851L17.511 61.1657L19.7346 63.7564L67.4792 22.7758L65.2556 20.1851Z" fill="#F1E4E4"/>
                    <path d="M41.8554 0L40.5662 7.81292L25.7975 18.9196L42.0112 33.2208H35.0767L18.36 19.0542L41.8554 0Z" fill="#42A1FF"/>
                    <path d="M41.8554 66.4487L40.5662 58.6358L25.7975 47.5292L42.0112 33.2208H35.0767L18.36 47.3946L41.8554 66.4487Z" fill="#42A1FF"/>
                </svg>
                <h2 className={stylesTheme.title}>Erikrmb</h2>
            </div>
            <div className={classNames({
                        [styles.container]: true,
                        [styles.container__tabs]: true
            })}>
                {routes.map( (route, index) => 
                    <Link key={index} className={classNames({
                        [stylesTheme.link__tabs]: true,
                        [stylesTheme.link]: true
                    })} 
                    to={route.to} >{route.label}
                    </Link>
                )}
            </div>
            <div >
                {conversionRoutes.map( (route, index) => 
                    <Link key={index} className={classNames({
                        [stylesTheme.link__button]:true,
                        [stylesTheme.link__conversion]: true,
                        [stylesTheme.link]: true
                    })} 
                    to={route.to} >{route.label}
                    </Link>
                )}
            </div>           
        </nav>
    )
}