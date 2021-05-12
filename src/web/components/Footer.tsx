import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="text-center text-white text-sm p-5">
    <Link to="/VIP/">
      <h3>Buy us a coffee and get exclusive rewards</h3>
    </Link>
    <h4>Copyright © 2021 Baka Project All rights reserved.</h4>
  </footer>
);
export default Footer;
