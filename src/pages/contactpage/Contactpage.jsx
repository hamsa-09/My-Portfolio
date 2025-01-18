import React ,{useEffect, useState}from 'react';
import emailjs from '@emailjs/browser'
import "./Contactpage.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Contactpage = () => {
    const [name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        const serviceId='service_j1wieir';
        const templateId='template_y2elp1w';
        const publicKey='qqDIcb9iqWIsb2d2C';

        const templateParams={
            from_name:name,
            from_email:email,
            to_name:'Hamsa',
            message:message,
        }

        emailjs.send(serviceId,templateId,templateParams,publicKey)
        .then((response)=>{
            console.log('Message sent successfully',response);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((err)=>{
            console.log('Message failed',err);
    })
    }
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
  return (
    <div className="contact-page" data-aos="fade-up">
      <div className="contact-left">
        <h2>CONTACT ME</h2>
        <p>
          I am available to help you.
          Feel free to reach out to discuss your needs.
          Collaboration is key to achieving great results.
          Let's create something amazing together today.
          Don't hesitate to send a message my way.
        </p>
      </div>
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea cols="30" rows="10" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}  placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contactpage;
