import styles from "./Contact.module.css"
import ContactImg from "../../img/contact.svg"

// import Wip from '../../components/Wip/Wip'
import ContactForm from "../../components/ContactForm/ContactForm"

// icons
import { FaPhoneSquareAlt, FaEnvelopeSquare, FaHome } from "react-icons/fa"

export default function Contact() {
  const info = {
    mobile: "0909 776 2803",
    email: "aldrinefacistol@yahoo.com",
    address: "Calamba City, Laguna 4027",
  }

  return (
    <div className={styles.container}>
      <div className={styles["l-side"]}>
        <img src={ContactImg} alt="Contact" />
      </div>
      <div className={styles["r-side"]}>
        <div className={styles["contact-me"]}>
          <h2>Contact me</h2>
          <div className={styles["contact-info"]}>
            <div>
              <FaPhoneSquareAlt />
              <span>{info.mobile}</span>
            </div>
            <div>
              <FaEnvelopeSquare />
              <span>{info.email}</span>
            </div>
            <div>
              <FaHome />
              <span>{info.address}</span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
    // <Wip page="CONTACT" />
  )
}
