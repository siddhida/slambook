import Link from "next/link";
import styles from './dashboard.module.scss';

const Header = ()=>{

    return(
        // <ul className="login-menu">
        <ul className={styles.headerMenu}>
            <li><Link href={'/dashboard'}> Home </Link></li>
            <li><Link href={'/dashboard'}> My Dashboard </Link></li>
            <li><Link href={'/dashboard/createbook'}> Create a new Book </Link></li>
            <li><Link href={'/dashboard/addpal'}> Add a new Friend to the book </Link></li>
            <li><Link href={'/dashboard'}> List of important Dates </Link></li>
            <li><Link href={'/dashboard'}> Current Page </Link></li>
            <li><Link href={'/dashboard'}> My Profile </Link></li>            
        </ul>
    )
}

export default Header;