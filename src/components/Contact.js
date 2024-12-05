
import React, { useState } from 'react';
import './Contact.css';
import contactData from '../data/contactdata'; // Import contact data

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const { contactDetails, faq } = contactData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been sent.`);
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-page container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 section-heading">Contact Me</h1>
        <p className="lead text-white">
          I'd love to hear from you! Fill out the form below or connect with me on social media.
        </p>
        <hr className="my-4" />
      </div>

      <div className="row">
      
        <div className="col-12 col-md-6">
          <section className="faq-section mt-5">
            <div className="text-center mb-4">
              <h2 className="display-4 section-heading">Frequently Asked Questions</h2>
            </div>

            <div className="row">
              <div className="col-12">
                {faq.map((item, index) => (
                  <div className="faq-item" key={index}>
                    <h5 className="faq-question">{item.question}</h5>
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>


        <div className="col-12 col-md-6">
          <form onSubmit={submitForm} className="bg-custom shadow-lg rounded-lg p-4 back">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Your Phone"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleInputChange}
                className="form-control"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-gradient btn-block">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
