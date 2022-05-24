import styles from './Wip.module.css'
import { FaHammer } from 'react-icons/fa'

export default function Wip({page}) {
  return (
    <div className={styles.container}>
      <h4>{page} PAGE</h4>
      <span>< FaHammer /></span>
      <div>Work in progress</div>
    </div>
  )
}
