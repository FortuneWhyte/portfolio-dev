import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
    void main() {
        gl_Position = vec4(position, 1.0);
    }
`;

const fragmentShader = `
    uniform float u_time;
    uniform vec2 u_resolution;
    float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float time = u_time * 0.15;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;
        float f = 0.0;
        for(int i=1; i<6; i++) {
            float fi = float(i);
            f += 0.5/fi * sin(fi*p.x + time + 0.5*fi*p.y);
            f += 0.5/fi * cos(fi*p.y - time*0.5 + 0.3*fi*p.x);
        }
        // Stormy space palette: Deep blues and occasional electric flashes
        vec3 col1 = vec3(0.02, 0.05, 0.1); // Deep Space
        vec3 col2 = vec3(0.0, 0.4, 0.6);   // Cyan Glow
        vec3 col3 = vec3(0.8, 0.5, 0.2);   // Distant Lightning
        float flash = step(0.98, fract(time * 0.5 + noise(uv*time)));
        vec3 finalCol = mix(col1, col2, abs(f));
        finalCol += col3 * flash * 0.15;
        gl_FragColor = vec4(finalCol, 0.45);
    }
`;

export default function ShaderBackground() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Honour the OS setting rather than running a shader loop against it.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // No WebGL, a blocked or lost context, or a driver the browser refuses
        // to use: the background is decoration, so fail quietly to the CSS
        // gradient underneath rather than taking the page down.
        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        } catch {
            return;
        }

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_time: { value: 0 },
                u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
            },
            vertexShader,
            fragmentShader,
            transparent: true
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        camera.position.z = 1;

        let frameId;
        const animate = (time) => {
            material.uniforms.u_time.value = time * 0.001;
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        frameId = requestAnimationFrame(animate);

        const onResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", onResize);

        // The original ran unguarded in a plain script; in React the effect can
        // re-run, so everything allocated above has to be released here.
        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", onResize);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            if (renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div id="canvas-container" ref={containerRef} aria-hidden="true" />;
}
