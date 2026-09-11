'use client';

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="styled-contact-section">
      <h2 className="numbered-heading numbered-heading-center">
        <span className="number-prefix">04.</span>What’s Next?
      </h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <a className="big-button email-link" href="mailto:ranjit.gb.rg@gmail.com">
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
