import styles from "./Contact.module.css"
import ContactImg from "../../img/contact.svg"

import { useState } from "react"
import { useForm } from "react-hook-form"

import emailjs from "@emailjs/browser"

// import Wip from '../../components/Wip/Wip'

export default function Contact() {
  const [isSending, setisSending] = useState(false)
  const [isSent, setisSent] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const sendEmail = (formData) => {
    setisSending(true)
    setisSent(false)

    emailjs.send("service_icl1hlr", "template_m41raek", formData, "user_eNarrmAP5MHSpgC348mSW").then(
      (result) => {
        console.log(result.text)
        setisSending(false)
        setisSent(true)
        reset()
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  const removeSentMessage = () => {
    setisSent(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles["l-side"]}>
        <img src={ContactImg} alt="Contact" />
      </div>
      <div className={styles["r-side"]}>
        <form onSubmit={handleSubmit(sendEmail)}>
          <label>Name</label>
          <input type="text" placeholder="Name" onClick={removeSentMessage}{...register("user_name", { required: true })} />
          <label>Subject</label>
          <input type="text" placeholder="Subject" {...register("user_subject", { required: true })} />
          <label>Email</label>
          <input type="email" placeholder="Email" {...register("user_email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i })} />
          <label>Message</label>
          <textarea placeholder="Message" {...register("message", { required: true })} />
          {isSending && <div className={styles.loader}></div>}
          {isSent &&  <label className={styles.sent}>Message Sent!</label>}
          <input type="submit" />
        </form>
      </div>
    </div>
    // <Wip page="CONTACT" />
  )
}
