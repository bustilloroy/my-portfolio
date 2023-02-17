// import contactLogo from '../images/undraw_profile_re_4a55.svg'
// import { useEffect } from 'react'
import emailjs from 'emailjs-com'
import { useState } from 'react';

// img
import check from '../images/check2-circle.svg'

export default function Contact(props) {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_lrwtvsa', 'template_ym1hmjz', e.target, 'eHse63F5nqTL08-q0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();

      setShowModal(true);
      
      // alert('Sent Successfully');
  }

  function closeModal() {
    setShowModal(false);
  }

  const [showModal, setShowModal] = useState(false);

  if (showModal) {
    document.documentElement.style.overflow = "hidden";
  }
  else {
    document.documentElement.style.overflow = 'auto'
  }

  return(
    <>
    {showModal &&
    <div className='modal-container' id='modal-container' onClick={closeModal}>
      <div className='modal-sent' id='modal-sent'>
        <img src={check} alt=""/>
        <h2 className='text-success'>Thank You!</h2>
        <p>Your message has been sent. I will get back to you as soon as possible.</p>
        <button type='button' className='btn btn-secondary close-modal' id='close' onClick={closeModal}>Close</button>
      </div>
    </div>
    }
    <section className={`${props.themeMode ? 'bg-dark bg-img' : 'bg-light'}`} id='contact' style={{position: 'relative'}}>
      <h1 className={`mb-5 ${props.themeMode ? 'text-gradient' : ''}`}><i className="bi bi-person-rolodex"></i> Contact</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-3" data-aos='fade-right'>
            <div className={`card contact-card ${props.themeMode ? 'bg-dark border shadow-light' : 'bg-light shadow-lg'}`}>
                <div className={`card-header h4 ${props.themeMode ? 'text-gradient' : ''}`}><i className="bi bi-envelope-at-fill"> </i>Send Email</div>
                  <div className="card-body">
                    <form method='post' onSubmit={sendEmail}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' aria-describedby="nameHelp" id='name' required/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" required/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="text" name='subject' className="form-control" id="subject" aria-describedby="emailHelp" required/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" name='message' id="message" rows='5' required></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary float-end open-modal" id='submit'>Submit</button>
                    </form>
                    
                  </div>
              </div>
          </div>
          
          <div className="col-12 col-md-6" data-aos='fade-left'>
            <div className={`card contact-card ${props.themeMode ? 'bg-dark border shadow-light' : 'bg-light shadow-lg'}`}>
              <div className={`card-header h4 ${props.themeMode ? 'text-gradient' : ''}`}>Contact</div>
            <div className="card-body">
              <div className="row row-cols-1 mb-2 g-2">
                <div className="col">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping" style={{width: 98}}><i className="bi bi-person-fill">&nbsp;</i>Name</span>
                    <input type="email" disabled className="form-control" value='Roy Jr P. Bustillo' aria-label="Email" aria-describedby="addon-wrapping"/>
                  </div>
                </div>
                <div className="col">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping" style={{width: 98}}><i className="bi bi-envelope-at-fill">&nbsp;</i>Email</span>
                    <input type="email" disabled className="form-control" value='bustilloroyjr@gmail.com' aria-label="Email" aria-describedby="addon-wrapping"/>
                  </div>
                </div>
                <div className="col">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping" style={{width: 98}}><i className="bi bi-telephone-fill">&nbsp;</i>Phone</span>
                    <input type="email" disabled className="form-control" value='09274967621' aria-label="Email" aria-describedby="addon-wrapping"/>
                  </div>
                </div>
                <div className="col">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping" style={{width: 98}}><i className="bi bi-geo-alt-fill">&nbsp;</i>Address</span>
                    <input type="email" disabled className="form-control" value='Balintawak, Quezon City' aria-label="Email" aria-describedby="addon-wrapping"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
}