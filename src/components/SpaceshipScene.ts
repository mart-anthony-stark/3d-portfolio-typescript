import { ComponentBuilder } from "../renderer";
import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export class SpaceshipScene extends ComponentBuilder {
  constructor() {
    super();
  }

  template: string = `<canvas id="spaceship"></canvas>`;

  OnMount(): void {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#spaceship") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(0);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    // ORBIT CONTROLS TO CONTROL ROTATION OF SCENE
    const orbit = new OrbitControls(camera, renderer.domElement);
    const axesHelper = new THREE.AxesHelper(3);
    scene.add(axesHelper);

    camera.position.set(3, 3, 5);
    orbit.update();

    // const assetLoader = new GLTFLoader();
    // assetLoader.load("/assets/gltf/space_ship4.glb", function (model) {
    //   const spaceship = model.scene;
    //   scene.add(spaceship);
    //   console.log(spaceship);
    //   // spaceship.scale.set(-500, -500, -500);
    //   // spaceship.position.set(0, 0, 55);
    //   spaceship.rotateY(45.2);
    //   spaceship.rotateZ(4);
    //   spaceship.position.set(0, -5, -5);
    // });
    // scene.add(moon);

    // transparent bg
    renderer.setClearColor(0x000000, 0);

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
  }
}
