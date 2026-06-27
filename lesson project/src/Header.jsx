import styles from "./Header.module.css";
import logoImg from "./assets/LOGO.svg";
import heroImg from "./assets/hero.png";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logoImg} alt="logo" />
          </div>
          <nav>
            <ul className={styles.navList}>
              <li>
                <a href="#home" className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
            </ul>
          </nav>
          <button className={styles.btn}>Get Started</button>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.tag}>SMART BUSINESS</p>
          <h1>
            Connecting people is our{" "}
            <span className={styles.blue}>business</span>
          </h1>
          <p className={styles.desc}>
            As a rule the organization settles on the inventive and media
            choices. Regularly it supplies supporting statistical.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.btn}>Get Started</button>
            <button className={styles.playBtn}>
              <span className={styles.playIcon}>▶️</span>
              Play Video
            </button>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img src={heroImg} alt="hero" />
        </div>
      </section>
    </>
  );
}

export default Header;
