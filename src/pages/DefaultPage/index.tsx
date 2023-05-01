// import stylesTheme from '../../styles/Theme.module.scss';
// import { useState } from 'react';
import styles from '../Home/Home.module.scss';
import { /*Link,*/ Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';


export default function DefaultPage(){
    // const [color, setColor] = useState(stylesTheme.color);
    
    // function changeColor(){
    //     if (color === stylesTheme.color){
    //         setColor(stylesTheme.color__rgb)
    //     }else{
    //         setColor(stylesTheme.color)
    //     }
        
    // }
    return(
        <body>
            <section className={styles.container}>
            <NavBar></NavBar>
                <Outlet/>
            <Footer></Footer>
            </section>
        </body>
    )
}