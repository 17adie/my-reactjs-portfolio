import styles from "./Projects.module.css"

// import Wip from '../../components/Wip/Wip'
import ProjectCard from "../../components/ProjectCard/ProjectCard"

export default function Projects() {
  return (
    <div className={styles.container}>
      <h2>My Projects</h2>
      <div className={styles.line}></div>
      <ProjectCard />
    </div>
    // <Wip page="PROJECT" />
  )
}
