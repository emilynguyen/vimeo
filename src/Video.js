import React, { Component } from "react";
import "./Video.css";

const videos = {
  monsoon: {
    title: "MONSOON III",
    description:
      "Lorem ipsum dolor sit amet, wisi fugit aliquando ne vis, mutat homero facete ad vim, lorem summo moderatius cum ne. Nam omnis erant vivendo cu, cu vis movet affert salutandi, essent offendit principes in has. Cu habemus perpetua evertitur mel.",
    img: "https://i.vimeocdn.com/video/595198868_505x160.jpg"
  },
  beam: {
    title: "BEAMS",
    description:
      "Lorem ipsum dolor sit amet, wisi fugit aliquando ne vis, mutat homero facete ad vim, lorem summo moderatius cum ne. Nam omnis erant vivendo cu, cu vis movet affert salutandi, essent offendit principes in has. Cu habemus perpetua evertitur mel.",
    img: "https://i.vimeocdn.com/video/589972810_530x315.jpg"
  },
  move2: {
    title: "Move 2",
    description:
      "Lorem ipsum dolor sit amet, wisi fugit aliquando ne vis, mutat homero facete ad vim, lorem summo moderatius cum ne. Nam omnis erant vivendo cu, cu vis movet affert salutandi, essent offendit principes in has. Cu habemus perpetua evertitur mel.",
    img: "https://i.vimeocdn.com/video/590587169_530x315.jpg"
  }
};

class Video extends Component {
  render() {
    return (
      <div
        className={
          "container video-container " + (this.props.reverse ? "reverse" : "")
        }
      >
        <div className="text">
          <div>
            <h2 style={{ color: this.props.textColor }}>
              {this.props.video.title}
            </h2>
            <p style={{ color: this.props.textColor }}>
              {this.props.video.description}
            </p>
          </div>
        </div>
        <div className="video">
          <img src={this.props.video.img} alt={this.props.video.title} />
        </div>
      </div>
    );
  }
}

export class VideoBlock extends Component {
  render() {
    return (
      <div>
        <section className="bg-white">
          <Video video={videos.monsoon} reverse={true} />
        </section>

        <section className="bg-gray">
          <Video video={videos.beam} textColor="white" />
        </section>

        <section className="bg-gradient">
          <Video video={videos.move2} reverse={true} textColor="white" />
        </section>
      </div>
    );
  }
}
