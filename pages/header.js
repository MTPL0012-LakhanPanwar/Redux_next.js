import classes from "./Header/header.module.css";
import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <div className={classes.header}>
            <div className={classes.logo}>
            <Link href="/" ><img src="/images/jego-header-logo.png" alt="logo" /></Link>
            </div>
                <div className={classes.navigations}>

                    <div className={classes["job-categories"]}  >
                    <Link href="/" ><p>Home</p></Link>
                    </div>

                    <div  className={classes["job-categories"]}>
                    <Link href="/about" ><p>About</p></Link>
                    </div>

                    <div className={classes["job-categories"]}>
                    <Link href="/event" ><p>Events</p></Link>
                    </div>
                </div>

                <div className={classes.frameSec}>
                    <div className={classes.go_premium}>
                    <button className={classes.btn}><Link href="https://app.jego.co.in/LoginScreen" target="_blank"><span>Log In</span></Link></button>
                    </div>
                    <div className={classes.go_premium}>
                    <button className={classes.btn}><Link href="https://app.jego.co.in/Signup" target="_blank"><span>Sign Up</span></Link></button>
                    </div>  
                </div>
            </div>
        </div>
    );
};


export default Header;
