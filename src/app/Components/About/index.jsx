"use client"
import { useState } from "react";
import { FaAnglesRight, FaRegCircleCheck } from "react-icons/fa6";
import Button from "../Buttons";
import SectionHeading from "../SectionHeading";
import VideoModal from "../VideoSection/Modal";
import Image from "next/image";

const About = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  const [iframeSrc, setIframeSrc] = useState("about:blank");

  const handelClick = () => {
    setIframeSrc(`${data.videoUrl}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };
  return (
    <>
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_about_thumb">
              {/* Flip Card Start */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image src="https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/dr-image//top10women-pic-1.jpg" alt="Front Image" width={444} height={505} />
                  </div>
                  <div className="flip-card-back">
                    <Image src={data.headImgUrl} alt="Back Image" width={444} height={505} />
                  </div>
                </div>
              </div>
              {/* Flip Card End */}
              <style jsx>{`
                .flip-card {
                  background-color: transparent;
                  width: 444px;
                  height: 505px;
                  perspective: 1000px;
                  margin-bottom: 24px;
                }
                .flip-card-inner {
                  position: relative;
                  width: 100%;
                  height: 100%;
                  text-align: center;
                  transition: transform 0.6s;
                  transform-style: preserve-3d;
                }
                .flip-card:hover .flip-card-inner {
                  transform: rotateY(180deg);
                }
                .flip-card-front, .flip-card-back {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  backface-visibility: hidden;
                }
                .flip-card-front {
                  z-index: 2;
                }
                .flip-card-back {
                  transform: rotateY(180deg);
                  z-index: 1;
                }
              `}</style>
              <a
                className="cs_about_player_btn cs_video_open"
                onClick={handelClick}
              >
                <span className="cs_player_btn cs_center">
                  <span />
                </span>
                <span className="cs_about_play_btn_text cs_white_color">
                  {data.videoText}
                </span>
              </a>
            </div>
            <div className="cs_experience_box cs_center" data-aos="zoom-in">
              <p className="cs_experience_box_number">
                {data.experienceYears}
              </p>
              <p className="cs_experience_box_title">
                {data.experienceTitle}
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="cs_about_content">
              <SectionHeading
                SectionSubtitle={data.sectionSubtitle}
                SectionTitle={data.sectionTitle}
              />

              <p className="cs_about_text">{data.aboutText}</p>
              <div className="row cs_gap_y_30">
                {data.iconboxes.map((box, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="cs_iconbox cs_style_1">
                      <div className="cs_iconbox_head">
                        <div className="cs_iconbox_icon cs_center">
                          <Image src={box.imgUrl} alt="img" width={26} height={26}   />
                        </div>
                        <h3 className="cs_iconbox_title m-0">{box.title}</h3>
                      </div>
                      <p className="cs_iconbox_subtitle mb-0">{box.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cs_about_iconbox">
                <div className="cs_about_iconbox_icon cs_center">
                  <i>
                    <FaRegCircleCheck />
                  </i>
                </div>
                <p
                  className="cs_about_iconbox_subtitle"
                  dangerouslySetInnerHTML={{ __html: data.service }}
                />
              </div>
              <Button
                btnText={data.btnText}
                variant={"cs_btn cs_style_1 cs_color_1"}
                btnIcons={<FaAnglesRight />}
                btnUrl={data.btnText}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal  */}
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
};

export default About;
