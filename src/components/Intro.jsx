import React from 'react';
import './Intro.css';

const Intro = () => {
    return (
        <section className="section intro-section">
            <div className="container">
                <div className="intro-content">
                    <h2 className="heading-secondary animate-on-scroll">
                        Introducing Orbit.<br />
                        <span className="text-gradient">The AI Brain Behind Modern Living.</span>
                    </h2>

                    <div className="intro-text-blocks">
                        <p className="text-body-large animate-on-scroll delay-100">
                            Orbit is not another smart device.<br />
                            It is the intelligence layer that connects, understands, and evolves with your home.
                        </p>

                        <p className="text-body-large animate-on-scroll delay-200 mt-8">
                            Built on the Wave automation ecosystem, Orbit transforms ordinary spaces into intelligent environments that think, respond, and adapt.
                        </p>

                        <div className="orchestration-statement animate-on-scroll delay-300 mt-12">
                            <p className="statement-fade">This is not control.</p>
                            <p className="statement-pop">This is <span className="highlight">orchestration</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
