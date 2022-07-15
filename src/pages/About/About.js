import styles from "./About.module.css"

// svg
import PersonalInfo from "../../img/personal_info.svg"
// import Wip from '../../components/Wip/Wip'

// icons
import { FaReact, FaJsSquare, FaGit, FaHtml5, FaCss3Alt, FaPhp, FaNpm, FaCheckCircle } from "react-icons/fa"

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles["l-side"]}>
        <img src={PersonalInfo} alt="PersonalInfo" />
      </div>
      <div className={styles["r-side"]}>
        <h2>About me</h2>
        <div className={styles.line}></div>
        <p>Hello! I am a Web Developer experienced in building Web Applications. I enjoy developing interactive web applications and I use my free time to learn and practice my skills.</p>

        <h4>Qualities</h4>
        <ul>
          <li>
            <FaCheckCircle className={styles.check} />
            <div>Highly organized and efficient.</div>
          </li>
          <li>
            <FaCheckCircle className={styles.check} />
            <div>Good research skills and attention to details.</div>
          </li>
          <li>
            <FaCheckCircle className={styles.check} />
            <div>Ability to work independently or as a part of a team.</div>
          </li>
          <li>
            <FaCheckCircle className={styles.check} />
            <div>Can work efficiently even under pressure.</div>
          </li>
        </ul>
        <h4>Skills</h4>
        <div className={styles["skills-icon"]}>
          <FaJsSquare />
          <FaHtml5 />
          <FaCss3Alt />
          <FaReact />
          <FaNpm />
          <FaPhp />
          <FaGit />
        </div>
        <div className={styles["skills-text"]}>
          <span>MySQL</span>
          <span>Framework7</span>
          <span>Rest API</span>
          <span>Stored Procedure</span>
          <span>Cordova</span>
          <span>Adobe Photoshop</span>
        </div>
      </div>
    </div>
    // <Wip page="ABOUT" />
  )
}
