import React from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const Stars = () => {
    const particlesInit = async (engine) => {
        await loadStarsPreset(engine);
    };

    const particlesOptions = {
        preset: "stars",
        background: {
            color: {
                value: "#0f0f0f"
            }
        },
        fullScreen: {
            zIndex: -1
        },
        particles: {
            number: {
                value: 80,  // 🌟 Reduce star count for subtle effect
                density: {
                    enable: true,
                    area: 800
                }
            },
            size: {
                value: 1.5,  // 🌟 Smaller stars
                random: { enable: true, minimumValue: 0.5 }
            },
            move: {
                speed: 0.3,  // 🌟 Slow movement
                direction: "none",
                outModes: {
                    default: "out"
                }
            },
            opacity: {
                value: 0.7,
                random: { enable: true, minimumValue: 0.3 },
                animation: {
                    enable: true,
                    speed: 0.5,  // 🌟 Slow twinkle effect
                    minimumValue: 0.3,
                    sync: false
                }
            }
        }
    };

    return <Particles init={particlesInit} options={particlesOptions} />;
};

export default Stars;
