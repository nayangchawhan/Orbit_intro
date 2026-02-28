import React from 'react';
import { Layers, Cpu, Cloud, Shield, Zap, Home } from 'lucide-react';
import './Ecosystem.css';

const Ecosystem = () => {
    return (
        <section className="section ecosystem-section">
            <div className="container">
                <div className="ecosystem-grid">
                    {/* Block 1 - Wave */}
                    <div className="ecosystem-card wave-card animate-on-scroll delay-100">
                        <div className="card-header">
                            <div className="icon-wrapper">
                                <Layers size={32} />
                            </div>
                            <h3 className="heading-secondary">Wave</h3>
                            <p className="layer-label">The Physical Layer.</p>
                        </div>

                        <div className="card-body">
                            <p className="text-body mt-4">
                                Wave connects your existing appliances — lights, fans, switches, security systems — without replacing them.
                            </p>

                            <ul className="benefit-list">
                                <li>No expensive ecosystem lock-in.</li>
                                <li>No forced device upgrades.</li>
                                <li className="list-highlight">Just seamless integration.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Block 2 - Orbit */}
                    <div className="ecosystem-card orbit-card animate-on-scroll delay-200">
                        <div className="card-ambient-glow"></div>
                        <div className="card-header relative-z">
                            <div className="icon-wrapper orbit-icon">
                                <Cpu size={32} />
                            </div>
                            <h3 className="heading-secondary">Orbit</h3>
                            <p className="layer-label">The Cognitive Layer.</p>
                        </div>

                        <div className="card-body relative-z">
                            <p className="text-body mt-4">
                                Orbit analyzes real-time sensor data, user behavior, and environmental inputs to make autonomous decisions.
                            </p>

                            <ul className="feature-list mt-8">
                                <li>
                                    <Zap size={20} className="icon-accent" />
                                    <span>Predictive device control</span>
                                </li>
                                <li>
                                    <Home size={20} className="icon-accent" />
                                    <span>Energy optimization</span>
                                </li>
                                <li>
                                    <Shield size={20} className="icon-accent" />
                                    <span>Smart security automation</span>
                                </li>
                                <li>
                                    <Cloud size={20} className="icon-accent" />
                                    <span>Context-aware responses</span>
                                </li>
                            </ul>

                            <p className="orbit-conclusion mt-8">Orbit turns data into intelligence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
