import * as THREE from "three";
// import GLTFLoader from "three-gltf-loader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ComponentBuilder } from "../renderer";

export class GalaxyScene extends ComponentBuilder {
  public boudingTop: number = 0;
  constructor() {
    super();
  }
  template: string = `<canvas id="bg"></canvas>`;

  OnMount(): void {
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
      new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      })
    );
    scene.add(moon);
    moon.position.set(0, -15, -15);

    const assetLoader = new GLTFLoader();
    let spaceship1: THREE.Group;
    assetLoader.load("/assets/gltf/space_ship4.glb", function (model) {
      spaceship1 = model.scene;
      scene.add(spaceship1);
      spaceship1.rotateY(45.2);
      spaceship1.rotateZ(4);
      spaceship1.position.set(20, -15, 1);
    });

    const moveCamera = () => {
      this.boudingTop = document.body.getBoundingClientRect().top;
      console.log(this.boudingTop);

      camera.position.z = this.boudingTop * -0.01;
      camera.position.x = this.boudingTop * -0.02;
      camera.position.y = this.boudingTop * 0.02;

      camera.updateProjectionMatrix();
    };
    moveCamera();
    document.body.onscroll = moveCamera;

    function animate() {
      renderer.render(scene, camera);

      moon.rotation.x += 0.005;
      moon.rotation.y += 0.0075;
      moon.rotation.z += 0.005;

      if (spaceship1) {
        spaceship1.rotation.y += 0.001;
        spaceship1.rotation.z -= 0.00001;
      }
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
