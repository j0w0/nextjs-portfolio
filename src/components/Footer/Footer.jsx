import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./Footer.module.scss";

const RocketImage = () => {
  return (
    <Image
      width="175"
      height="550"
      src="/images/rocket-with-flames.svg"
      alt="rocketship"
      className={styles.rumble}
    />
  );
};

export default function Footer() {
  return (
    <footer>
      <div className={styles.rocket__mobile}>
        <RocketImage />
      </div>

      <div className={styles.footer__background}>
        <div className={styles.footer__container}>
          <div className={styles.footer__grid}>
            <div className={styles.column_1}>
              <RocketImage />
            </div>
            <div className={styles.column_2}>
              <h3>Ready for launch?</h3>
              <p className="text-xl">
                Contact me on{" "}
                <a
                  href="https://www.linkedin.com/in/j0w0/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                ,{" "}
                <a href="//resume.j0w0.com" target="_blank" rel="noreferrer">
                  view my resume
                </a>
                , or use the form below to send me a message.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* <div className={styles.footer__ground}></div> */}
        <div className={styles.footer__bottom}>
          <div>Josh Woodcock {"//"} Front-End Developer</div>
          <div>🏳️‍🌈✌🏼</div>
        </div>
      </div>
    </footer>
  );
}
