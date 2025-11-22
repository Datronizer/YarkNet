import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Basic Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const controls = new OrbitControls(camera, document.body);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const axisHelper = new THREE.AxesHelper(5);
scene.add(axisHelper);

const plane = new THREE.PlaneHelper(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), 10, 0x999999);
scene.add(plane);

// Create a simple cube to represent an asteroid
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


// Create a simple line to represent an orbit
const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
const orbitGeometry = new THREE.BufferGeometry();
const orbitPoints = [];

const segments = 50;
const radius = 3;
for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    orbitPoints.push(new THREE.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta)));
}
orbitGeometry.setFromPoints(orbitPoints);
const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
scene.add(orbitLine);


// Make the cube orbit around the origin
cube.position.x = radius;


// Position the camera
camera.position.x = 4;
camera.position.y = 4;
camera.position.z = 5;

camera.lookAt(0, 0, 0);

// Test rotation on an axis
cube.rotation.z = degToRad(20);

function animate()
{
    // Rotate the cube for some basic animation
    // cube.rotation.x += 0.01;
    cube.rotateOnAxis(new THREE.Vector3(0, 1, 0), 0.01);
    // cube.rotation.z += 0.01;

    cube.position.x = radius * Math.cos(Date.now() * 0.001);
    cube.position.z = radius * Math.sin(Date.now() * 0.001);
    
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);