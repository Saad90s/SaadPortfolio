// NavLink.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NavLink({ href, children, className = '', onClick }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      onClick={onClick}
      className={`${className} transition-all duration-300 ${
        isActive ? 'text-cyan-400 font-semibold' : ''
      }`}
    >
      {children}
    </Link>
  );
}