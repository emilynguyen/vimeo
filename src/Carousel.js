import React, { Component } from "react";
import "./Carousel.css";

const movies = [
  {
    title: "Hunt for the Wilderpeople",
    description:
      "Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows.",
    img: "/images/hunt.jpg",
    theme: "rgb(81, 122, 160, 0.4)",
    buttonColor: "#509dde"
  },
  {
    title: "Nichts passiert / A Decent Man",
    description:
      "A Swiss family takes a ski vacation and runs into trouble when the father, a titular decent man, finds himself in a series of moral quandaries.",
    img: "/images/nichts-passiert.jpg",
    theme: "rgb(82, 146, 183, 0.4)",
    buttonColor: "#4FB3E8"
  },
  {
    title: "Vice Versa",
    description:
      "Come along with the Good Company Crew as they travel throughout the US, Japan, BC and Quebec to showcase skiing in the best way possible.",
    img: "/images/vice-versa.jpg",
    theme: "rgb(113, 110, 91, 0.4)",
    buttonColor: "#B5AF6A"
  },
  {
    title: "The Fourth Phase",
    description:
      "From the creators of The Art of FLIGHT, Red Bull Media House presents THE FOURTH PHASE, a snowboarding epic starring iconic athlete Travis Rice.",
    img: "/images/fourth-phase.jpg",
    theme: "rgb(54, 117, 168, 0.4)",
    buttonColor: "#4276A4"
  },
  {
    title: "Full Moon",
    description:
      "Be inspired by women who push boundaries. FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifestyle sport.",
    img: "/images/full-moon.jpg",
    theme: "rgb(150, 150, 160, 0.4)",
    buttonColor: "#858485"
  }
];

class Slide extends Component {
  render() {
    return (
      <li
        className={"slide " + this.props.className}
        style={{ backgroundColor: this.props.movie.theme }}
      >
        <section>
          <img className="slide-bg" src={this.props.movie.img} alt="" />
          <div className="slide-container-wrapper">
            <div className="container slide-container">
              <div className="thumbnail">
                <img src={this.props.movie.img} alt={this.props.movie.title} />
              </div>
              <div className="text">
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.movie.description}</p>
                <div className="buttons">
                  <button
                    className="primary-btn"
                    style={{ backgroundColor: this.props.movie.buttonColor }}
                  >
                    <span>
                      <img className="buy-icon" src="/images/buy.svg" alt="" />
                      Buy Now
                    </span>
                  </button>
                  <button className="secondary-btn">Watch Trailer</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </li>
    );
  }
}

export class Carousel extends Component {
  render() {
    const slides = movies.map((movie, i) => (
      <Slide movie={movie} key={"slide-" + i} className={"slide-" + i} />
    ));
    return <ul id="carousel-slides">{slides}</ul>;
  }
}
