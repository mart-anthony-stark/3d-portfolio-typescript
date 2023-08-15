import { ComponentBuilder } from "../renderer";

export class Main extends ComponentBuilder {
  constructor() {
    super();
  }
  OnMount(): void {}

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

  <enfold-animate name="fadeRight" duration="2">
  <section id="about">
      <blockquote>
        <p>I enjoy creating stuff and putting it on the internet.</p>
      </blockquote>
  </div>
  </section>
  </enfold-animate>

  <section>
    <blockquote>
      <p>Involved in Web, Mobile, and 3D Modelling projects.</p>
    </blockquote>
  </section>

  <enfold-animate name="fadeLeft" duration="2">
  <section>
  <blockquote class="text-right">
    <p>Experienced in both web consulting agency and startup environments.</p>
  </blockquote>
  </section>
  </enfold-animate>

<section>
  <blockquote>
    <p>The best way out is always through <br />-Robert Frost</p>
  </blockquote>
</section>
</main>

`;
}
