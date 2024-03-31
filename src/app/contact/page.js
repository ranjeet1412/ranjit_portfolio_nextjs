import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div
        data-aos="fadeInUpBig"
        data-aos-offset="100"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-once="true"
        className="section contact"
        id="contact"
      >
        <div className="section-heading">What&apos;s Next?</div>
        <div className="about-content">
          <div className="contact-heading">Get In Touch</div>
          <div className="info-text">
            Although I&apos;m not currently looking for freelance opportunities, my
            inbox is always open. Whether for a potential project or just to say
            hi, I&apos;ll try my best to answer your email!
          </div>
          <div className="mail-link-container">
            <div className="link-box">
              <a href="mailto:ranjit.gb.rg@gmail.com" className="mail-link">
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
