import * as THREE from 'three';

// Basic Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a simple planet for instantiation
const simplePlanetGeometry = new THREE.SphereGeometry(1, 32, 32);
const simplePlanetMaterial = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
const simplePlanet = new THREE.Mesh(simplePlanetGeometry, simplePlanetMaterial);
scene.add(simplePlanet);

// Create the sun
const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.set(5, 0, 0);
scene.add(sun);

// Position the camera
camera.position.z = 5;

function animate() {
    simplePlanet.rotation.x += 0.01;
    simplePlanet.rotation.y += 0.01;

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);