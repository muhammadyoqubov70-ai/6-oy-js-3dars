import styles from "./Main.module.css";
import aboutImg from "./assets/about.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import avatar1 from "./assets/avatar1.png";
import avatar2 from "./assets/avatar2.png";
import email from "./assets/email.png";
function Main() {
  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutLeft}>
            <img src={aboutImg} alt="about" />
          </div>
          <div className={styles.aboutRight}>
            <p className={styles.tag}>ABOUT US</p>
            <h2>Platform Dedicated To Promoting</h2>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vestibulum sagittis ultrices consectetur adipiscing elit.
              fringilla quisque pulvinar..
            </p>
            <button className={styles.btn}>What we do?</button>
          </div>
        </div>
      </section>
      {/* works */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <h2 className={styles.title}>How We Work</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.iconBox}>
                <img src={icon1} alt="icon1" />
              </div>
              <h3>Start Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                suscipit adipiscing elit.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconBox}>
                <img src={icon2} alt="icon2" />
              </div>
              <h3>Go to Code</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                suscipit adipiscing elit.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconBox}>
                <img src={icon3} alt="icon3" />
              </div>
              <h3>Final Delivered</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                suscipit adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ==========================customer========================= */}
      <section className={styles.reviewsSection}>
        <div className={styles.reviewsContainer}>
          <div className={styles.reviewsHeader}>
            <h2>What Our Customers are Saying.</h2>
            <div className={styles.reviewsArrows}>
              <button className={styles.reviewsArrow}>&#8249;</button>
              <button className={styles.reviewsArrow}>&#8250;</button>
            </div>
          </div>

          <div className={styles.reviewsCards}>
            <div className={styles.reviewsCard}>
              <div className={styles.reviewsBlueLine}></div>
              <div className={styles.reviewsCardContent}>
                <p>
                  I recently concluded a complete messaging revamp for an
                  exciting com
                </p>
                <div className={styles.reviewsPerson}>
                  <img src={avatar1} alt="leo" />
                  <div>
                    <h4>— Leo Aminoff</h4>
                    <span>Product Designer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.reviewsCard}>
              <div className={styles.reviewsBlueLine}></div>
              <div className={styles.reviewsCardContent}>
                <p>
                  I recently concluded a complete messaging revamp for an
                  exciting company
                </p>
                <div className={styles.reviewsPerson}>
                  <img src={avatar2} alt="carla" />
                  <div>
                    <h4>— Carla Dias</h4>
                    <span>Product Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =================EMAIL SECTION========================== */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContainer}>
          <h2>Sign Up to Our Newsletter</h2>
          <p>Yours could be one of them.</p>
          <div className={styles.newsletterForm}>
            <div className={styles.newsletterInput}>
              <img src={email} alt="email" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <button className={styles.newsletterBtn}>Send</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
