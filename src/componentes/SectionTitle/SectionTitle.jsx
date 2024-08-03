import "../SectionTitle/SectionTitle.css";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="main_section_title_contaienr">
      <p
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        {subHeading}
      </p>
      <div
        className="headeing_contaienr"
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {heading}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
