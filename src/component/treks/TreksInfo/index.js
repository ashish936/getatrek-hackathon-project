import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export default function (props) {
  return (
    <section className="cont-treks">
      <div className="container">
        <div className="trek-info-wrap">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="trek-info-wrap-heading-sec-title mb-20">
                <h5 className="gray">
                  <span>
                    <hr className="page-heading" />
                  </span>
                  <span>ABOUT</span>
                </h5>
                <h1>
                  <strong>{props.title}</strong>
                </h1>
                <div className="share_btns mt-20">
                  <div className="media_l">
                    <FacebookShareButton url={props.path}>
                      <FacebookIcon size={30} round={true} />
                    </FacebookShareButton>
                  </div>
                  <div className="media_l">
                    <FacebookMessengerShareButton url={props.path}>
                      <FacebookMessengerIcon size={30} round={true} />
                    </FacebookMessengerShareButton>
                  </div>
                  <div className="media_l">
                    <TwitterShareButton url={props.path}>
                      <TwitterIcon size={30} round={true} />
                    </TwitterShareButton>
                  </div>
                  <div className="media_l">
                    <LinkedinShareButton url={props.path}>
                      <LinkedinIcon size={30} round={true} />
                    </LinkedinShareButton>
                  </div>
                  <div className="media_l">
                    <WhatsappShareButton url={props.path}>
                      <WhatsappIcon size={30} round={true} />
                    </WhatsappShareButton>
                  </div>
                  <div className="media_l">
                    <EmailShareButton url={props.path}>
                      <EmailIcon size={30} round={true} />
                    </EmailShareButton>
                  </div>
                  <div className="media_l">
                    <RedditShareButton url={props.path}>
                      <RedditIcon size={30} round={true} />
                    </RedditShareButton>
                  </div>
                  <div className="media_l">
                    <TelegramShareButton url={props.path}>
                      <TelegramIcon size={30} round={true} />
                    </TelegramShareButton>
                  </div>
                  <div className="media_l">
                    <TumblrShareButton url={props.path}>
                      <TumblrIcon size={30} round={true} />
                    </TumblrShareButton>
                  </div>
                </div>
              </div>

              <div className="cont-wrap-trek">
                <div className="abt-trek">
                  <p className="trek-info-para line-h f-size-18">
                    {parse(props.content || "")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="">
                <Link to="/contact-us">
                  <button className="btn bg-color white btn-r width100 mt-30">
                    <h5 className="margin0">Book {props.title} now</h5>
                  </button>
                </Link>
              </div>
              <div className="post mt-40 mb-40">
                <Link to="/book-guide">
                  <img
                    src="/images/guide-post.jpg"
                    alt="book guide?"
                    className="img-responsive"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
