import React from 'react';
import ContactForm from '../components/contact/ContactForm.jsx';
import { MapPin, Phone, Mail } from 'lucide-react';

// Constantes
const CONTACT_INFO = {
  phone: '+212763744143',
  email: 'Saadlarabi.05@gmail.com',
  location: 'Sale, Maroc',
};

// Composant pour les liens de contact
const ContactLink = ({ icon: Icon, href, text, external }) => (
  <div className="flex items-center space-x-4 text-gray-700 transition-colors duration-300 hover:text-blue-600 group">
    <Icon className="w-6 h-6 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
    {href ? (
      <a
        href={href}
        className="text-gray-700 transition-colors duration-300 hover:text-blue-600"
        {...(external && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
      >
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

const Contact = () => {
  const whatsappLink = `https://wa.me/${CONTACT_INFO.phone}`;
  const emailLink = `mailto:${CONTACT_INFO.email}`;

  return (
    <section className="min-h-screen py-24 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <h1 className="mb-12 text-5xl font-bold text-center text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
            Contactez-nous
          </h1>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Section Informations de Contact */}
            <div className="p-8 transition-all duration-300 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-2">
              <h2 className="relative mb-8 text-3xl font-bold text-gray-800">
                Contact Information
                <div className="absolute left-0 w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 -bottom-2"></div>
              </h2>
              <div className="space-y-6">
                <ContactLink icon={MapPin} text={CONTACT_INFO.location} />
                <ContactLink
                  icon={Phone}
                  href={whatsappLink}
                  text={CONTACT_INFO.phone}
                  external
                />
                <ContactLink
                  icon={Mail}
                  href={emailLink}
                  text={CONTACT_INFO.email}
                />
              </div>
            </div>

            {/* Section Formulaire de Contact */}
            <div className="p-8 transition-all duration-300 border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;