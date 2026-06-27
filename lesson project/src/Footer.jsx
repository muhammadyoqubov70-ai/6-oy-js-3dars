import styles from "./Footer.module.css";
import logoImg from "../assets/logo.svg";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";
import Instagram from "../assets/instagram.png";

function Footer() {
  return (
    <>
      <footer className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <div className={styles.footerCol}>
            <img src={logoImg} alt="logo" />
            <ul>
              <li>Smart business</li>
              <li>Community</li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Resources</h4>
            <ul>
              <li>Start Business</li>
              <li>Digital Marketing</li>
              <li>Course Creation</li>
              <li>Business Accelerator</li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Mission</h4>
            <ul>
              <li>About Digital Analyst</li>
              <li>Team</li>
              <li>Become a Partner</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Contact</h4>
            <ul>
              <li>041-774073</li>
              <li>hello@digitalanalyst.org</li>
              <li>Contact Form</li>
            </ul>
          </div>
        </div>
        {/* =============tag qismi============== */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomContainer}>
            <p>
              © 2021 DigitalAnalyst.org. A 50 non-profit organization. EIN:
              -3410655
            </p>

            <div className={styles.bottomRight}>
              <div className={styles.socialIcons}>
                <img src={Facebook} alt="facebook" />
                <img src={Twitter} alt="twitter" />
                <img src={Youtube} alt="youtube" />
                <img src={Instagram} alt="instagram" />
              </div>
              <button className={styles.signUpBtn}>Sign Up</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
