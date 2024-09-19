import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "79473857-616d-467a-9dde-ef7200a33639");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>

      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out to contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" /> akshay.gaur028@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91-9311211182</li>
            <li><img src={location_icon} alt="" />New Delhi, India</li>
        </ul>
      </div>

      <div className='contact-col'>
        {/* Web3Forms have been used to get data on email after submit the form */}
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Your Number</label>
            <input type="tel" name='phone' placeholder='Enter your Mobile Number' required />
            <label> Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

            <button type='submit' className='btn dark-btn'>Submit Now</button>

        </form>
        <span>{result}</span>
      </div>  

    </div>
  )
}

export default Contact
