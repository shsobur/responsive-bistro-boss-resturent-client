import "../SectionButton/SectionButton.css";

const SectionButton = ({btnName}) => {
  return (
    <div className="main_section_btn_container">
      <button>{btnName}</button>
    </div>
  );
};

export default SectionButton;