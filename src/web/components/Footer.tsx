import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="shadow-inner text-center text-white text-sm p-5 flex flex-col items-center">
    <Link to="/VIP/">
      <h3>Dukung kami dengan mendaftar menjadi VIP</h3>
    </Link>
    <h4>Copyright © 2021 Baka Project All rights reserved.</h4>
  </footer>
);
export default Footer;
