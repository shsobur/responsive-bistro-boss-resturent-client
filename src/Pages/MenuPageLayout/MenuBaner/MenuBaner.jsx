import "../MenuBaner/MenuBaner.css";

const MenuBaner = () => {
  return (
    <div className="main_menu_baner_container">
      <div className="mani_menu_baner_bg_container">

        <div className="menu_title_container" >
          <h2
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >OUR MENU</h2>
          <p 
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >Would you like to try a dish?</p>
        </div>

      </div>
    </div>
  );
};

export default MenuBaner;