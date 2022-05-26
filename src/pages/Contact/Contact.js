import styles from "./Contact.module.css"
import ContactImg from "../../img/contact.svg"

import { useForm } from "react-hook-form"

// import Wip from '../../components/Wip/Wip'

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <div className={styles.container}>
      <div className={styles["l-side"]}>
        <img src={ContactImg} alt="Contact" />
      </div>
      <div className={styles["r-side"]}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input type="text" placeholder="Name" {...register("Name", { required: true })} />
          <label>Subject</label>
          <input type="text" placeholder="Subject" {...register("Subject", { required: true })} />
          <label>Email</label>
          <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i })} />
          <label>Message</label>
          <textarea placeholder="Message" {...register("Message", { required: true })} />

          <input type="submit" />
        </form>
      </div>
    </div>
    // <Wip page="CONTACT" />
  )
}
