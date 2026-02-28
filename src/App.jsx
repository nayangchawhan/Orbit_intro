import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import NewCategory from './components/NewCategory';
import Ecosystem from './components/Ecosystem';
import FeaturesGrid from './components/FeaturesGrid';
import Market from './components/Market';
import Vision from './components/Vision';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="app-container">
      <Hero />
      <Intro />
      <NewCategory />
      <Ecosystem />
      <FeaturesGrid />
      <Market />
      <Vision />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
