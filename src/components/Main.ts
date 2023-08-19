import { ComponentBuilder, renderElement } from "../renderer";
import "../styles/glide.css";
import { DesktopMenu } from "./DesktopMenu";
import { Socials } from "./Socials";

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

  template: string = `<main class="hidden">
  <div class="banner">
    <div class="inner-container">
    <enfold-animate name="fadeRight" duration="2">
      <h1 class="dev-name" >MART SALAZAR</h1>
    </enfold-animate>
    <enfold-animate name="fadeLeft" duration="2">
      <h2 class="upper text-stroke">FULLSTACK</h2>
    </enfold-animate>
    <enfold-animate name="fadeRight" duration="2">
      <h2 class="lower text-stroke">DEVELOPER</h2>
    </enfold-animate>

    ${new DesktopMenu().component()}
    ${new Socials().component()}
    </div>
  </div>


  <div class='main-content'>
    <section id="about" class='center'>
        <blockquote>
          <p>I enjoy creating stuff and putting it on the internet.</p>
        </blockquote>
    </section>

    <section class='center'>
      <blockquote data-aos="fade-up" data-aos-duration="2000">
        <p>Involved in Web, Mobile, and 3D Modelling projects.</p>
      </blockquote>
    </section>

    <section class='center'>
      <blockquote data-aos="fade-up" data-aos-duration="2000" >
        <p>Experienced in both web consulting agency and startup environments.</p>
      </blockquote>
    </section>

  <section id="projects" class='center'>
  </section>

  <section class="center">
    <blockquote>
      <p>The best way out is always through <br />-Robert Frost</p>
    </blockquote>
  </section>
  
  <section id="contact" class="center">
    <blockquote>
      <p>The best way out is always through <br />-Robert Frost</p>
    </blockquote>
  </section>

</div>
</main>

`;
}
