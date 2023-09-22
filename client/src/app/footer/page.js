import styles from './footer.module.scss';

const Footer = ()=>{

    return(
        <ul className={styles.footerMenu}>
            <li> Carrier </li>
            <li> Legal </li>
            <li> Resources </li>
            <li> © 2023 Copyright </li>
            <li> Top </li>
        </ul>
    )
}

export default Footer;