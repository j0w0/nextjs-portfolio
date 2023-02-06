import Image from "next/image";
import styles from "./UFOScene.module.css";

export default function UFOScene() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={`${styles.floating} ${styles["ufo-scene"]}`}>
        <Image
          width="600"
          height="400"
          src="/images/ufo.svg"
          alt="a ufo with a lil j0w0 alien"
          className={styles.ufo__svg}
        />
        <svg id="Layer_2" viewBox="0 0 390 526" className={styles.ufo__beam}>
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="195.19"
              y1="512.39"
              x2="195.19"
              y2="180.49"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#409234" stopOpacity="0" />
              <stop offset="1" stopColor="#409234" />
            </linearGradient>
          </defs>
          <g id="content">
            <polygon
              style={{
                fill: "url(#linear-gradient)",
                opacity: ".5",
              }}
              points="390.38 526.44 0 524.7 137.76 0 254.8 0 390.38 526.44"
            />
          </g>
        </svg>
      </div>
      <Image
        width="275"
        height="200"
        src="/images/cow.png"
        alt="cow being abducted by aliens"
        className={`${styles["floating-cow"]} ${styles.ufo__cow}`}
      />
    </div>
  );
}
