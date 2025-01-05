import React from 'react'
import "./Contactpage.css"
const Contactpage = () => {
  return (
    <div>
        <div className="contact">
            <h2>Get in Touch</h2>
            <form>
                <input type="text" name="name" placeholder="Your Name"/>
                <input type="email" name="email" placeholder="Your Email"/>
                <textarea name="message" placeholder="Your Message"/>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contactpage
