import { ComponentBuilder } from "../renderer";

export class Main extends ComponentBuilder {
  constructor() {
    super();
  }
  OnMount(): void {}

  template: string = `<main>
  <div class="banner" id="home">
    <div class="inner-container">
    <enfold-animate name="fadeRight" duration="2" once>
      <h3 class="text-stroke dev-name" >Mart Salazar</h3>
    </enfold-animate>
    <enfold-animate name="fadeLeft" duration="2" once>
      <h1 class="upper">FULLSTACK</h1>
    </enfold-animate>
    <enfold-animate name="fadeRight" duration="2" once>
      <h1 class="lower text-stroke">DEVELOPER</h1>
    </enfold-animate>
    </div>
    <div class="indicator"></div>
  </div>

  <section id="about">
      <blockquote>
        <p>I enjoy creating stuffs and putting it on the internet.</p>
      </blockquote>
    <!-- <div class="container">
    <h2>📜 About</h2>
    <p>
      Mart Anthony Salazar is a highly passionate and driven individual
      who is dedicated to expanding his knowledge of various programming
      languages, technologies, and skills. With a strong desire to excel
      in his future endeavors and projects, Mart has amassed valuable
      experience in freelancing, particularly in the fields of web
      development and data science.
    </p>
  </div> -->
  </section>

  <section></section>

  <blockquote data-aos="fade-right" data-aos-duration="2000">
    <p>The best way out is always through <br />-Robert Frost</p>
  </blockquote>
</main>

`;
}
