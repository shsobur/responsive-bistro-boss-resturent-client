import "../Reviews/Reviews.css";
import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

// Swiper js
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
    .then(res => res.json())
    .then(data => setReviews(data))
  }, []);

  return (
    <div className="main_review_container">
      <div className="main_review_inner_container">
        <div>
          <SectionTitle
            heading={"TESTIMONIALS"}
            subHeading={"---What Our Clients Say---"}
          ></SectionTitle>
        </div>

        <div className="main_reciew_text_container">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
              reviews.map(review => <SwiperSlide key={review._id}>
                <div className="main_reciew_text_inner_container">
                  <div className="review_icon_container">

                    <div className="review_reating_container">
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={review.rating}
                      readOnly
                    />
                    </div>

                    <div className="review_icon_container">
                      <FaQuoteLeft />
                    </div>

                  </div>
                  <p>{review.details}</p>
                  <h2>{review.name}</h2>
                </div>
              </SwiperSlide>)
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
