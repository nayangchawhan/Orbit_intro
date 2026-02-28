import React from 'react';
import './Vision.css';

const Vision = () => {
    return (
        <section className="section vision-section">
            <div className="vision-ambient-light"></div>

            <div className="container">
                <div className="vision-content text-center">
                    <h2 className="heading-primary animate-on-scroll">
                        This is only the beginning.
                    </h2>

                    <div className="vision-box glass-card animate-on-scroll delay-100">
                        <p className="vision-intro">The next phase integrates:</p>

                        <ul className="vision-list">
                            <li className="animate-on-scroll delay-200">
                                <span className="vision-bullet"></span>
                                AI-driven behavioral prediction
                            </li>
                            <li className="animate-on-scroll delay-300">
                                <span className="vision-bullet"></span>
                                ML-based anomaly detection
                            </li>
                            <li className="animate-on-scroll delay-400">
                                <span className="vision-bullet"></span>
                                Voice-based contextual automation
                            </li>
                            <li className="animate-on-scroll delay-500">
                                <span className="vision-bullet"></span>
                                Full Matter protocol compatibility
                            </li>
                        </ul>
                    </div>

                    <div className="vision-conclusion animate-on-scroll delay-600">
                        <p className="evolution-text">Orbit evolves.</p>
                        <p className="evolution-text text-glow">Your home evolves with it.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
