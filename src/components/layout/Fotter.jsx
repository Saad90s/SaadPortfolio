import React from 'react';

export default function Footer() {
  return (
    
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-5 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Designed and Developed by me :)
          </p>
        </div>
  );
}
