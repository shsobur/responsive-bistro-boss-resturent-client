import "../SectionTitle/SectionTitle.css";

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="main_section_title_contaienr">
      <p>{subHeading}</p>
      <div className="headeing_contaienr">
        <h2>{heading}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;