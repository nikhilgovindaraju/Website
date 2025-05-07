import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

function Stars() {
    const particlesInit = useCallback(async (engine) => {
        await loadStarsPreset(engine);
    }, []);

    const options = {
        preset: "stars",
        background: {
            color: {
                value: "transparent"   // ✅ THIS IS CRITICAL!
            }
        }
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1
            }}
        />
    );
}

export default Stars;
