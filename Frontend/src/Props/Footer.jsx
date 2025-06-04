import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer = memo(() => {
  return (
    <footer className="w-381  bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} BrainScanAI. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
        <Link to="/" className="hover:underline text-sm">
          Privacy Policy
        </Link>
        <Link to="/" className="hover:underline text-sm">
          Terms of Service
        </Link>
        <Link to="/" className="hover:underline text-sm">
          Contact
        </Link>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
