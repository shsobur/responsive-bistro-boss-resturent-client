import "../ChackOutMenu/ChackOutMenu.css";
import featuredImg  from "../../../assets/home/featured.jpg"

const ChackOutMenu = () => {
  return (
    <div className="main_chackout_container">

      <div className="main_chackout_bg_container">
        <div className="chackout_bg_shad_container">

          <div className="chackout_inner_section_title_contaienr">
            <p
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              ---Check it out---
            </p>
            <div
              className="chackout_headeing_contaienr"

              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <h2
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                FROM OUR MENU
              </h2>
            </div>
          </div>

          <div className="main_chackout_content_container">

            <div className="chackout_image_container">
              <div className="chackout_inner_image_comtaienr">

                <img src={featuredImg} alt="featured" />

              </div>
            </div>

            <div className="chackout_text_container">
              <div className="chackout_inner_text_container">

                <h2>
                  August 04, 2024 <br/> WHERE CAN I GET SOME?
                </h2>
                <p>
                  Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Error voluptate facere, deserunt
                  dolores maiores quod nobis quas quasi. Eaque repellat recusandae
                  ad laudantium tempore consequatur consequuntur omnis ullam
                  maxime tenetur.
                </p>
                <button>Read More</button>

              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ChackOutMenu;
