import classes from "./Footer/footer.module.css";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={classes.footer}>
    
      <div className={classes.frame}>
      <div className={classes.title}>
        Company</div>
        <div className={classes.sub}>
          <p><Link  href="https://www.jego.co.in/#about"><span>About Us</span></Link></p>
          <p><Link  href="https://www.jego.co.in/#"><span>Blog</span></Link></p>
          <p><Link  href="https://www.jego.co.in/#"><span>Careers</span></Link></p>
          <p><Link  href="https://www.jego.co.in/#contact"><span>Contact Us</span></Link></p>
        </div>
        </div>

        <div className={classes.frame}>
        <div className={classes.title}>
          Support</div>
          <div className={classes.sub}>
            <p><Link href="https://www.jego.co.in/#"><span>Help Center</span></Link></p>
            <p><Link href="https://www.jego.co.in/#"><span>Safety Center</span></Link></p>
            <p><Link href="https://www.jego.co.in/#"><span>Community Guidelines</span></Link></p>
          </div>
        </div>

        <div className={classes.frame}>
      <div className={classes.title}>
        Legal</div>
        <div className={classes.sub}>
          <p><Link href="https://www.jego.co.in/cookies-policy/"><span>Cookies Policy</span></Link></p>
          <p><Link href="/privacy"><span>Privacy Policy</span></Link></p>
          <p><Link href="/termCond"><span>Terms of Service</span></Link></p>
          <p><Link href="https://www.jego.co.in/#"><span>Law Enforcement</span></Link></p>
        </div>
        </div>

        <div className={classes.frame}>
      <div className={classes.title}>
        Install App</div>
        <div className={classes.sub}>
        <Link href="https://play.google.com/store/apps/details?id=com.miraclelensapp&hl=en_GB">
            <span><img src="/images/getonGoogleApp.svg" alt="" /></span>
        </Link>
        <Link href="https://apps.apple.com/pk/app/jego/id1552859701">
             <span><img src="/images/getOnApple.svg" alt="" /></span>
        </Link>
        </div>
      </div>
      </div>
  );
};

export default Footer;
