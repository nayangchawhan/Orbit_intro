import React from 'react';
import './NewCategory.css';

const NewCategory = () => {
    return (
        <section className="section category-section">
            <div className="container">
                <div className="category-header">
                    <span className="tagline animate-on-scroll">A New Standard in Smart Infrastructure</span>
                    <h2 className="heading-secondary animate-on-scroll delay-100">
                        Homes shouldn't just respond.<br />
                        <span className="text-glow">They should anticipate.</span>
                    </h2>
                </div>

                <div className="category-content animate-on-scroll delay-200">
                    <div className="glass-card category-card">
                        <p className="description-text">
                            Most automation systems react to commands.<br />
                            <span className="highlight-text">Orbit predicts patterns, analyzes behavior, and optimizes energy, security, and comfort — automatically.</span>
                        </p>

                        <div className="role-divider"></div>

                        <div className="role-container">
                            <div className="role-item">
                                <h3 className="role-title">Wave</h3>
                                <p className="role-desc">provides the hardware layer.</p>
                            </div>
                            <div className="role-icon">+</div>
                            <div className="role-item highlight">
                                <h3 className="role-title">Orbit</h3>
                                <p className="role-desc">provides the intelligence.</p>
                            </div>
                        </div>

                        <p className="conclusion-text">Together, they redefine home automation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewCategory;
