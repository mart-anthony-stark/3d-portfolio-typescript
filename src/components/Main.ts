import { ComponentBuilder, renderElement } from "../renderer";
import "../styles/glide.css";
import { Projects } from "./Projects";

export class Main extends ComponentBuilder {
  constructor() {
    super();
  }
  OnMount(): void {
    const script = document.createElement("script");
    script.innerHTML = `
      AOS.init();
      new Glide(".multi1", {
        type: "carousel",
        autoplay: 3500,
        focusAt: 'center',
        perView: 2,
      }).mount();
      new Glide(".multi2", {
        type: "carousel",
        autoplay: 3000,
        focusAt: 'center',
        perView: 2,
      }).mount();
    `;
    renderElement(script);
  }

  template: string = `<main>
  <div class="banner" id="home">
    <div class="inner-container">
    <enfold-animate name="fadeRight" duration="2">
      <h3 class="text-stroke dev-name" >Mart Salazar</h3>
    </enfold-animate>
    <enfold-animate name="fadeLeft" duration="2">
      <h1 class="upper">FULLSTACK</h1>
    </enfold-animate>
    <enfold-animate name="fadeRight" duration="2">
      <h1 class="lower text-stroke">DEVELOPER</h1>
    </enfold-animate>
    </div>
    <div class="indicator"></div>
  </div>

  <section data-aos="fade-up" data-aos-duration="2000" id="about">
      <blockquote>
        <p>I enjoy creating stuff and putting it on the internet.</p>
      </blockquote>
  </div>
  </section>

  <section>
    <blockquote data-aos="fade-up" data-aos-duration="2000">
      <p>Involved in Web, Mobile, and 3D Modelling projects.</p>
    </blockquote>
  </section>

  <section>
  <blockquote data-aos="fade-up" data-aos-duration="2000" class="text-right">
    <p>Experienced in both web consulting agency and startup environments.</p>
  </blockquote>
  </section>

<section id="projects">
  <blockquote data-aos="fade-up" data-aos-duration="2000">
    <p>Here are some of my recent projects</p>
  </blockquote>
</section>

${new Projects().component()}
  

<section class="center">
  <blockquote>
    <p>The best way out is always through <br />-Robert Frost</p>
  </blockquote>
</section>
</main>

`;
}
