import { ComponentBuilder, renderElement } from "../renderer";
import "../styles/glide.css";
import "../styles/contact.css";
import { DesktopMenu } from "./DesktopMenu";
import { Projects } from "./Projects";
import { Socials } from "./Socials";

export class Main extends ComponentBuilder {
  constructor() {
    super();
  }
  OnMount(): void {
    console.log(" 🚀Main Component did mount🚀");
    const script = document.createElement("script");
    // const glide = `new Glide(".multi1", {
    //   type: "carousel",
    //   autoplay: 3500,
    //   focusAt: 'center',
    //   perView: 2,
    // }).mount();
    // new Glide(".multi2", {
    //   type: "carousel",
    //   autoplay: 3000,
    //   focusAt: 'center',
    //   perView: 2,
    // }).mount();`;
    script.innerHTML = `
      AOS.init();
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

  <section id="projects" class='projects center'>
  ${new Projects().component()}

  <a class="archive" href="https://github.com/mart-anthony-stark" target="_blank">
    <span>
      View Full Project Archive
    </span>
    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
  </a>
  </section>

  <section action="#" method="post" id="contact" class="center">
    <form id="contact-form">
      <h3>Send Me A Message🚀</h3>
      <input type="text" placeholder="Full name*" required/>
      <input type="email" placeholder="Email Address*" required/>
      <input type="text" placeholder="Subject" />
      <p>Tell me more</p>
      <textarea placeholder="Message"></textarea>
      <input type="submit" value="Submit" />
    </form>
  </section>

  <section class="center">
    <blockquote>
      <p>The best way out is always through <br />-Robert Frost</p>
    </blockquote>
  </section>
  <div class="end">
    <p>
    Built using 
    <span>HTML</span>,
    <span>CSS</span>, and 
    <span>Typescript</span> with 
    <a href="https://vitejs.dev/" target="blank">
      <span>Vite</span>
    </a>
    </p>
    Coded in <span>VSCode</span> by yours truly 
  </div>

</div>
</main>

`;
}
