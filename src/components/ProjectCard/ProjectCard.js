import styles from "./ProjectCard.module.css"

// data
import { data } from "../../data/projects"

export default function Card() {
  const ProjectList = data.map((items) => {
    return (
      <li key={items.id}>
        <img src={items.img_url} alt="" />
        <div className={styles.overlay}>
          <span>{items.title}</span>
        </div>
      </li>
    )
  })

  return <ul className={styles["image-gallery"]}>{ProjectList}</ul>
}
