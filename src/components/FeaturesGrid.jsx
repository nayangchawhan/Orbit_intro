import React from 'react';
import './FeaturesGrid.css';

const features = [
    {
        num: "01",
        title: "Adaptive Intelligence",
        desc: "Orbit learns your daily routines and automatically adjusts lighting, climate, and device usage."
    },
    {
        num: "02",
        title: "Autonomous Energy Optimization",
        desc: "Reduces unnecessary power usage without compromising comfort."
    },
    {
        num: "03",
        title: "Dual Mode Automation",
        desc: "Wave's Home Safe Mode and Out of Home Mode integrate seamlessly with Orbit for complete environmental control."
    },
    {
        num: "04",
        title: "Secure by Architecture",
        desc: "Built with encrypted communication between hardware and cloud infrastructure."
    },
    {
        num: "05",
        title: "Scalable Infrastructure",
        desc: "From apartments to enterprise buildings — Orbit scales effortlessly."
    },
    {
        num: "06",
        title: "Hardware-Agnostic",
        desc: "Works with existing electrical systems. No need to replace your home."
    }
];

const FeaturesGrid = () => {
    return (
        <section className="section features-section">
            <div className="container">
                <div className="features-grid-container">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-item glass-card animate-on-scroll delay-${(index % 3 + 1) * 100}`}
                        >
                            <div className="feature-number">— {feature.num}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
