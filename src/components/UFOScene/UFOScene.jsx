import Image from "next/image";
import styles from "./UFOScene.module.css";

export default function UFOScene() {
  return (
    <div className={styles["ufo-scene-wrapper"]}>
      <div className={`${styles.floating} ${styles["ufo-scene"]}`}>
        <svg className={styles.ufo__svg} id="svg-ufo" viewBox="0 0 600 351">
          <g id="content">
            <g>
              <path
                id="svg__ufo--back"
                className={`svg__ufo--back ${styles["cls-4"]}`}
                d="m0,251.81s32.97-76.41,300-76.41,300,76.41,300,76.41c0,0-86.91,99.19-300,99.19S0,251.81,0,251.81Z"
              />
              <g>
                <g>
                  <path
                    id="svg__alien--ear-left-outer"
                    className={styles["cls-7"]}
                    d="m251.72,81.65c2.71-4.02,3.61-7.74,2.09-10.35-3.33-5.72-16.99-3.98-30.51,3.9-13.52,7.87-21.78,18.89-18.45,24.62,1.66,2.84,5.86,3.84,11.34,3.16,41.63,1.13,59.5,34.4,63.39,30.31,4.03-4.25-36.64-32.4-27.85-51.63Z"
                  />
                  <path
                    id="svg__alien--ear-right-outer"
                    className={styles["cls-7"]}
                    d="m347.65,81.28c-2.86-3.92-3.9-7.6-2.47-10.27,3.12-5.84,16.83-4.61,30.64,2.76,13.8,7.36,22.47,18.07,19.35,23.91-1.55,2.9-5.72,4.06-11.21,3.58-41.56,2.68-58.17,36.6-62.21,32.65-4.19-4.09,35.41-33.74,25.91-52.63Z"
                  />
                </g>
                <ellipse
                  id="svg__alien--ear-left-inner"
                  className={styles["cls-8"]}
                  cx="229.3"
                  cy="84.83"
                  rx="22.98"
                  ry="7.33"
                  transform="translate(-10.66 131.66) rotate(-31.34)"
                />
                <ellipse
                  id="svg__alien--ear-right-inner"
                  className={styles["cls-8"]}
                  cx="369.8"
                  cy="83.33"
                  rx="7.46"
                  ry="22.21"
                  transform="translate(109.95 359.32) rotate(-59.42)"
                />
              </g>
              <path
                id="svg__alien--body"
                className={styles["cls-7"]}
                d="m234.3,170.13v129.16h130v-130.06c0-38.2-33.12-68.68-72.28-64.44-31.8,3.45-57.72,33.35-57.72,65.33Z"
              />
              <g>
                <ellipse
                  id="svg__alien--eye"
                  className={styles["cls-2"]}
                  cx="299.3"
                  cy="168.31"
                  rx="35"
                  ry="34.99"
                />
                <path
                  id="svg__alien--eye-outline"
                  className={styles["cls-6"]}
                  d="m299.67,206.87c-21.03,0-38.14-17.11-38.14-38.14s17.11-38.14,38.14-38.14,38.14,17.11,38.14,38.14-17.11,38.14-38.14,38.14Zm0-69.82c-17.47,0-31.69,14.21-31.69,31.69s14.22,31.69,31.69,31.69,31.69-14.21,31.69-31.69-14.22-31.69-31.69-31.69Z"
                />
              </g>
              <circle
                id="svg__alien--eye-pupil"
                className={styles["cls-8"]}
                cx="299.8"
                cy="168.81"
                r="12.5"
              />
              <path
                id="svg__ufo--glass"
                className={styles["cls-3"]}
                d="m486.72,198.73s-82.8,50.58-185.25,50.58-185.77-50.58-185.77-50.58C115.7,127.25,198.75,0,301.21,0s185.51,127.25,185.51,198.73Z"
              />
              <path
                id="svg__ufo--front"
                className={styles["cls-1"]}
                d="m485.29,192.52c.15,2.25.23,4.46.23,6.61,0,0-82.8,50.58-185.25,50.58s-185.77-50.58-185.77-50.58c0-2.16.08-4.36.23-6.61C15.87,215.05,0,251.81,0,251.81c0,0,86.91,99.19,300,99.19s300-99.19,300-99.19c0,0-15.87-36.77-114.71-59.29Z"
              />
              <ellipse
                id="svg__ufo--light-1"
                className={styles["cls-5"]}
                cx="48.8"
                cy="219.81"
                rx="21.22"
                ry="12.8"
                transform="translate(-124.83 76.46) rotate(-37.94)"
              />
              <ellipse
                id="svg__ufo--light-2"
                className={styles["cls-5"]}
                cx="142.8"
                cy="278.3"
                rx="21.35"
                ry="19.1"
                transform="translate(-169.58 294.42) rotate(-65.79)"
              />
              <circle
                id="svg__ufo--light-3"
                className={styles["cls-5"]}
                cx="299.8"
                cy="299.79"
                r="21.5"
              />
              <ellipse
                id="svg__ufo--light-4"
                className={styles["cls-5"]}
                cx="457.8"
                cy="278.3"
                rx="19.13"
                ry="21.32"
                transform="translate(-72.99 205.55) rotate(-23.49)"
              />
              <ellipse
                id="svg__ufo--light-5"
                className={styles["cls-5"]}
                cx="547.3"
                cy="219.81"
                rx="12.92"
                ry="21.59"
                transform="translate(45.75 530.13) rotate(-53.63)"
              />
              <path
                id="svg__ufo--shadow"
                className={styles["cls-9"]}
                d="m599.99,251.8s0,0,0,0c0,0,0-.02-.01-.03,0,0,0,0,0,0,0-.02-.02-.04-.03-.06,0,0,0,0,0-.01,0-.02-.02-.04-.03-.07,0,0,0-.02-.01-.02-.02-.03-.03-.06-.05-.1,0-.01-.01-.03-.02-.04-.01-.03-.03-.06-.05-.09,0-.02-.02-.03-.03-.05-.02-.04-.05-.09-.07-.14,0-.02-.02-.04-.03-.05-.02-.04-.04-.07-.06-.11-.01-.03-.03-.05-.04-.08-.02-.04-.05-.08-.07-.12-.02-.04-.04-.07-.06-.11-.03-.05-.05-.1-.08-.15-.02-.04-.04-.07-.06-.11-.02-.04-.05-.08-.07-.12-.02-.04-.05-.08-.07-.12-.04-.07-.08-.13-.12-.2-.03-.04-.06-.09-.08-.14-.03-.04-.05-.09-.08-.13-.03-.05-.06-.1-.09-.15-.04-.06-.08-.12-.12-.18-.05-.07-.1-.15-.15-.23-.03-.04-.06-.09-.09-.14-.04-.06-.08-.12-.12-.18-.03-.05-.06-.09-.09-.14-.07-.11-.15-.22-.23-.33-.03-.04-.06-.09-.09-.13-.05-.07-.1-.14-.15-.21-.03-.04-.06-.08-.09-.12-.1-.14-.2-.29-.31-.44-.02-.03-.04-.06-.07-.09-.06-.08-.12-.17-.19-.25-.03-.04-.06-.08-.09-.12-.21-.28-.43-.57-.67-.87-.03-.04-.06-.08-.09-.12-.24-.31-.5-.63-.77-.96-.03-.03-.06-.07-.09-.1-.09-.11-.18-.22-.28-.33-.01-.01-.02-.03-.03-.04-.19-.23-.4-.47-.61-.71-.02-.02-.03-.04-.05-.05-.11-.12-.21-.25-.32-.37-.02-.02-.04-.04-.05-.06-.34-.38-.7-.78-1.07-1.18-.02-.03-.05-.05-.07-.08-.38-.41-.77-.82-1.19-1.24-.02-.02-.04-.04-.06-.06-.43-.43-.87-.88-1.34-1.33-.01-.01-.03-.03-.04-.04-.64-.62-1.32-1.27-2.05-1.92,0,0,0,0,0,0-.54-.49-1.11-.99-1.69-1.5-.01,0-.02-.02-.03-.03-.58-.51-1.19-1.02-1.82-1.54,0,0-.01-.01-.02-.02-4.93-4.06-11.33-8.58-19.6-13.26,0,0,0,0,0,0-.26-.14-.51-.29-.77-.43-1.8-4.04-5.19-8.2-9.79-11.58-8.77-6.44-18.86-7.79-23.61-3.44-.49-.18-.99-.36-1.49-.54-.07-.03-.15-.05-.22-.08-1.62-.58-3.27-1.16-4.96-1.73-.07-.02-.14-.05-.21-.07-.57-.19-1.13-.38-1.71-.57,0,0-.02,0-.03,0-1.17-.39-2.36-.78-3.57-1.16-.03,0-.06-.02-.08-.03-.58-.19-1.16-.37-1.75-.55-.1-.03-.2-.06-.3-.09-1.76-.55-3.55-1.09-5.37-1.63-.15-.04-.29-.09-.44-.13-1.8-.53-3.63-1.05-5.5-1.57-.17-.05-.34-.09-.51-.14-1.87-.52-3.77-1.03-5.71-1.54-.17-.04-.34-.09-.52-.14-.62-.16-1.25-.32-1.88-.48-.15-.04-.31-.08-.46-.12-1.21-.31-2.43-.61-3.67-.92-.16-.04-.31-.08-.47-.11-.63-.15-1.26-.31-1.9-.46-.23-.06-.47-.11-.7-.17-.95-.23-1.9-.45-2.87-.67-3.76-62.94-65.79-162.28-147.49-187.06,5.42,61.47,7.73,169.39-30.6,244.67-.37,66.24-27.32,96.26-31.16,100.2,7.4.25,14.97.38,22.71.38,49.94,0,92.95-5.45,129.54-13.79,2.44-.56,4.85-1.13,7.23-1.71,1.19-.29,2.37-.58,3.55-.88,3.53-.89,7-1.81,10.4-2.75,1.13-.31,2.26-.63,3.38-.95,14.57-4.14,27.95-8.71,40.19-13.51.94-.37,1.88-.74,2.8-1.11,1.86-.74,3.68-1.49,5.49-2.24.9-.38,1.8-.75,2.68-1.13,65.68-27.97,94.73-61.12,94.73-61.12,0,0,0,0,0-.01Z"
              />
            </g>
          </g>
        </svg>

        <svg
          id="svg-ufo-beam"
          viewBox="0 0 390 526"
          className={styles.ufo__beam}
        >
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
