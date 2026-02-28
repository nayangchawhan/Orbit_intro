import React from 'react';
import './Cta.css';

const Cta = () => {
    return (
        <section className="section cta-section">
            <div className="container">
                <div className="cta-container glass-card animate-on-scroll">
                    <h2 className="heading-secondary cta-title">
                        Be Part of the <span className="text-glow">Intelligent Living Revolution.</span>
                    </h2>

                    <div className="cta-subtext-container">
                        <p className="cta-subtext">Early access.</p>
                        <p className="cta-subtext">Investor updates.</p>
                        <p className="cta-subtext">Product roadmap previews.</p>
                    </div>

                    <button className="btn btn-primary cta-btn mt-12 animate-on-scroll delay-200">
                        <span className="btn-text">Early Access(Comming Soon)</span>
                        <span className="btn-glow"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cta;
