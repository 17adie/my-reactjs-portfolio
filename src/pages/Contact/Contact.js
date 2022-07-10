import styles from "./Contact.module.css"
import ContactImg from "../../img/contact.svg"

// import Wip from '../../components/Wip/Wip'
import ContactForm from "../../components/ContactForm/ContactForm"

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles["l-side"]}>
        <img src={ContactImg} alt="Contact" />
      </div>
      <div className={styles["r-side"]}>
        <ContactForm />
      </div>
    </div>
    // <Wip page="CONTACT" />
  )
}
