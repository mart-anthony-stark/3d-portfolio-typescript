import "../app";
import * as THREE from "three";
// import GLTFLoader from "three-gltf-loader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg") as HTMLCanvasElement,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.2, 24, 25);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill(null)
    .map(() => THREE.MathUtils.randFloatSpread(300));
  star.position.set(x, y, z);
  scene.add(star);
}

Array(500).fill(null).forEach(addStar);

// ADD BACKGROUND
renderer.setClearColor(0x212024);

// MOON
const moonTexture = new THREE.TextureLoader().load("./assets/moon.jpg");
const normalTexture = new THREE.TextureLoader().load("./assets/normal.jpg");
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({ map: moonTexture, normalMap: normalTexture })
);
scene.add(moon);
moon.position.z = 5;
moon.position.setX(-10);

// EARTH
const assetLoader = new GLTFLoader();
let earth: THREE.Group, mars: THREE.Group, saturn: THREE.Group, spaceship;
assetLoader.load("/assets/gltf/spaceship.glb", function (model) {
  spaceship = model.scene;
  console.log(spaceship);
  scene.add(spaceship);
  // spaceship.position.set(50, -25, 18);
});

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  console.log(t);
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  if (mars) {
    mars.rotation.x += 0.03;
    mars.rotation.y += 0.025;
    mars.rotation.z += 0.04;
  }
  if (earth) {
    earth.rotation.y += 0.025;
  }

  if (saturn) {
    saturn.rotation.y += 0.05;
  }

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.02;
  camera.position.y = t * -0.02;

  camera.updateProjectionMatrix();
}
moveCamera();
document.body.onscroll = moveCamera;

function animate() {
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

// MAKING SCENE RESPONSIVE
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
