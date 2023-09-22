import Link from "next/link";
import './header.css';
import styles from './header.module.scss';

const Header = ()=>{

    return(
        // <ul className="login-menu">
        <ul className={styles.headerMenu}>
            <li><Link href={'/'}> Home </Link></li>
            <li><Link href={'/dashboard'}> My Dashboard </Link></li>
            <li><Link href={'/about'}> About </Link></li>
            <li><Link href={'/signup'}> SignUp </Link></li>
            <li><Link href={'/login'}> SignIn </Link></li>
            <li><Link href={'/'}> LogOut </Link></li>
            <li><Link href={'/myprofile'}> My Profile </Link></li>            
        </ul>
    )
}

export default Header;