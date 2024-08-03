import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";
import "../OrderImageSlider/OrderImageSlider.css";

const OrderImageSlider = () => {
  return (
    <section>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      ></SectionTitle>

      <div className="main_image_slider_container">
        <h2>Hello Image Slider</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nobis rerum ducimus possimus commodi pariatur veritatis provident. Soluta animi repellendus modi enim repudiandae provident laudantium, temporibus dicta quod distinctio nemo.</p>
      </div>
    </section>
  );
};

export default OrderImageSlider;
