import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PointLight,
  AmbientLight,
  SphereGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  TextureLoader,
  MathUtils,
} from "three";
import { ComponentBuilder } from "../renderer";

export class GalaxyScene extends ComponentBuilder {
  public boudingTop: number = 0;
  constructor() {
    super();
  }
  template: string = `<canvas id="bg"></canvas>`;

  async OnMount(): Promise<void> {
    const { GLTFLoader } = await import(
      "three/examples/jsm/loaders/GLTFLoader.js"
    );

    const scene = new Scene();

    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new WebGLRenderer({
      canvas: document.querySelector("#bg") as HTMLCanvasElement,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    const pointLight = new PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    function addStar() {
      const geometry = new SphereGeometry(0.2, 24, 25);
      const material = new MeshBasicMaterial({ color: 0xffffff });
      const star = new Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill(null)
        .map(() => MathUtils.randFloatSpread(400));
      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(800).fill(null).forEach(addStar);

    // ADD BACKGROUND
    renderer.setClearColor(0x212024);
    const mainDiv = document.querySelector("main");
    mainDiv?.classList.remove("hidden");

    // MOON
    const moonTexture = new TextureLoader().load("./assets/moon.jpg");
    const normalTexture = new TextureLoader().load("./assets/normal.jpg");
    const moon = new Mesh(
      new SphereGeometry(3, 32, 32),
      new MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      })
    );
    scene.add(moon);
    moon.position.set(0, -15, -15);

    const assetLoader = new GLTFLoader();
    let spaceship1: THREE.Group, saturn: THREE.Group;
    assetLoader.load("/assets/gltf/space_ship4.glb", function (model) {
      spaceship1 = model.scene;
      scene.add(spaceship1);
      spaceship1.rotateY(45.2);
      spaceship1.rotateZ(4);
      spaceship1.position.set(20, -15, 1);
    });

    assetLoader.load("/assets/gltf/saturn.glb", function (model) {
      saturn = model.scene;
      scene.add(saturn);
      saturn.rotateX(0.4);
      saturn.position.set(60, -40, 1);
    });

    const moveCamera = () => {
      this.boudingTop = document.body.getBoundingClientRect().top;

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

      if (saturn) {
        saturn.rotation.y += 0.04;
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
