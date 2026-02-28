import React from 'react';
import './Market.css';

const Market = () => {
    return (
        <section className="section market-section">
            <div className="container">
                <div className="market-container animate-on-scroll">
                    <div className="market-bg-glow"></div>

                    <h2 className="heading-secondary text-center mb-16">
                        Designed for the <span className="text-glow">Future Market.</span>
                    </h2>

                    <div className="market-content">
                        <div className="market-text-block">
                            <p className="text-body-large">
                                Smart home adoption is accelerating globally.<br />
                                Yet most solutions remain fragmented, expensive, and complex.
                            </p>
                        </div>

                        <div className="market-divider"></div>

                        <div className="market-pillars">
                            <p className="pillars-intro">Wave + Orbit introduce:</p>
                            <ul className="pillars-list">
                                <li><span className="bullet-glow"></span>Affordable Intelligence</li>
                                <li><span className="bullet-glow"></span>Retrofit-Friendly Hardware</li>
                                <li><span className="bullet-glow"></span>AI-Driven Automation</li>
                                <li><span className="bullet-glow"></span>Modular Scalability</li>
                            </ul>
                        </div>
                    </div>

                    <div className="market-footer animate-on-scroll delay-200">
                        <p className="market-target">Built for middle-class families.</p>
                        <p className="market-target mt-4 text-glow">Ready for enterprise deployment.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Market;
