import React from 'react';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="ambient-light hero-light-1"></div>
            <div className="ambient-light hero-light-2"></div>

            <div className="container hero-container">
                <div className="hero-content animate-on-scroll">
                    <div className="hero-badge delay-100 animate-on-scroll">
                        <span>Introducing Ordit to the WORLD</span>
                    </div>

                    <h1 className="hero-title animate-on-scroll delay-200">Orbit</h1>
                    <p className="hero-subtext animate-on-scroll delay-300">
                        The Intelligent Core of Your Home.<br />
                        <span className="text-accent">Powered by Wave.</span>
                    </p>
                </div>

                <div className="scroll-indicator animate-on-scroll delay-400">
                    <ChevronDown size={32} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
