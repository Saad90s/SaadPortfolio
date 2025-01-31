import imageProfile from '../../image/Saad.jpg';
import { Github, Linkedin, Mail } from 'lucide-react';

function Hero() {
  // Définition des liens sociaux
  const socialLinks = {
    github: "https://github.com/Saad90s",
    linkedin: "https://www.linkedin.com/in/larabi-saad/",
    email: "saadlarabi.05@gmail.com"
  };

  // Définition des liens de navigation
  const navigationLinks = {
    resume: "/resume",
    projects: "/projects"
  };

  return (
    <section className="flex items-center justify-center min-h-screen pt-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <div className="container flex flex-col items-center px-6 py-16 mx-auto md:flex-row">
        {/* Left Content */}
        <div className="space-y-8 text-center md:w-1/2 md:text-left">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-wide uppercase md:text-base text-secondary animate-fade-in">
              Welcome to my portfolio
            </h2>
            <h1 className="text-4xl font-bold md:text-6xl text-primary">
              Hi, I'm{' '}
              <span className="text-transparent bg-gradient-to-r from-secondary to-blue-500 bg-clip-text">
                Saad Larabi
              </span>
            </h1>
            <h2 className="text-2xl font-bold text-gray-700 md:text-3xl">
              Full Stack Developer
            </h2>
          </div>

          <p className="max-w-lg text-lg leading-relaxed text-gray-600">
            I build exceptional and accessible digital experiences for the web.
            Passionate about creating elegant solutions to complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href={navigationLinks.resume}
              className="px-8 py-3 font-medium text-white transition-all duration-300 transform rounded-full bg-gradient-to-r from-secondary to-blue-500 hover:shadow-lg hover:shadow-secondary/30 hover:scale-105"
            >
              My Resume
            </a>
            <a
              href={navigationLinks.projects}
              className="px-8 py-3 font-medium transition-all duration-300 transform border-2 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white hover:scale-105"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center pt-4 space-x-6 md:justify-start">
            <a 
              href={socialLinks.github}
              className="p-3 text-gray-600 transition-all duration-300 transform rounded-full hover:text-secondary hover:bg-secondary/10 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href={socialLinks.linkedin}
              className="p-3 text-gray-600 transition-all duration-300 transform rounded-full hover:text-secondary hover:bg-secondary/10 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${socialLinks.email}`}
              className="p-3 text-gray-600 transition-all duration-300 transform rounded-full hover:text-secondary hover:bg-secondary/10 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative mt-12 md:w-1/2 md:mt-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-blue-500 blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src={imageProfile}
              alt="Saad Larabi Profile"
              className="relative object-cover w-64 h-64 mx-auto transition-all duration-300 transform border-4 border-white rounded-full shadow-2xl md:w-80 md:h-80 hover:scale-105"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;