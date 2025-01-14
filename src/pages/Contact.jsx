import emailjs from 'emailjs-com';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // Debugging: Log the form data

    emailjs
      .sendForm(
        'service_madislp',  // Your service ID from EmailJS
        'template_60kqalt',  // Your template ID from EmailJS
        e.target,
        'AQAegX2n6Motma05t' // Your user ID from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent Successfully!');
          // Clear the form fields after successful submission
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
          });
          e.target.reset(); // Optional: Reset the form DOM
        },
        (error) => {
          console.log(error.text);
          alert('Something went wrong, please try again.');
        }
      );
  };

  return (
    <>
      <section className="contact-wrapper p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className=" text">Reach Out to Us</h1>
              <p className="text fs-3">We are only a step away from you</p>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-wrapper-details p-5">
        <div className="container-xxl">
          <div className="row text-center align-items-center">
            <div className="col-lg-6 col-md-12 p-3">
              <div className="map card m-auto embed-responsive embed-responsive-16by9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0947899225316!2d90.47372639999999!3d23.708308799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7514af6b4ff%3A0xa62a167fb7b4d141!2zQWhtYWQncyBFZHVjYXRpb24gKCDZhdiv2LHYs9ipINin2K3ZhdivKQ!5e0!3m2!1sen!2sbd!4v1720360543599!5m2!1sen!2sbd"
                  width="300"
                  height="200"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ahmad's Education Location"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="card p-5">
                <h2 className="footer-title mb-3">
                  <b>Contact Us</b>
                </h2>
                <p className="mb-2">
                  <b>Address:</b> Ahmad Education, Dogair Bazar, Demra, Dhaka
                </p>
                <p className="mb-2">
                  <b>Phone:</b>{" "}
                  <a className="footer-tel" href="tel:+880 1887-484441">
                    Call us at +880 1887-484441
                  </a>
                </p>
                <p className="mb-4">
                  <b>Hours:</b> From 8 a.m To 10 p.m
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos iusto rerum architecto a eaque
                  consequuntur impedit! Harum earum iste, suscipit soluta, culpa necessitatibus quia sit nulla
                  doloremque officia cum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit hic veniam unde numquam in ullam
                  laudantium odit explicabo itaque! Voluptate similique, accusantium consequatur provident soluta quaerat
                  maxime adipisci vero sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-message p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
              <div className="card p-5">
                <h2 className="text-center mb-4">Leave Us A message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control w-100"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control w-100"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="email" className="form-label mb-3">
                          Enter Your Email address
                        </label>
                        <input
                          type="email"
                          className="form-control w-100"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">
                          Type in your message
                        </label>
                        <textarea
                          className="form-control"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          id="message"
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="col-12 text-center gap-2">
                        <button type="submit" id='button-link'>Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
