import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Developed by
        & {' '}
        <a
          href="https://www.saudshaikh.com"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Saud Shaikh
        </a>
      </section>


    </footer>
  );
};

export default Footer;
