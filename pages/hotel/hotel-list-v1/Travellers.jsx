import { useState, useEffect } from "react";
import { getSponsorBusinesses } from "../../../services/admin/business";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

const Travellers = () => {
  const [sponsorBusinesses, setSponsorBusinesses] = useState([]);

  const getSponsorBusinessesInPage = async (page) => {
    const res = await getSponsorBusinesses(page);
    if (res.success) {
      setSponsorBusinesses(res.businesses);
    }
  };

  console.log("sponsorBusiness==>", sponsorBusinesses);

  useEffect(() => {
    getSponsorBusinessesInPage();
  }, []);

  var itemSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function ArrowSlick(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  let stars = [
    <i key={0} className="icon-star text-10 text-yellow-2"></i>,
    <i key={1} className="icon-star text-10 text-yellow-2"></i>,
    <i key={2} className="icon-star text-10 text-yellow-2"></i>,
    <i key={3} className="icon-star text-10 text-yellow-2"></i>,
    <i key={4} className="icon-star text-10 text-yellow-2"></i>,
  ];

  return (
    <div className="pt-40 overflow-hidden js-section-slider">
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-places-next",
          prevEl: ".js-places-prev",
        }}
        pagination={{
          el: ".js-places-pag",
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {sponsorBusinesses.map((item, index) => (
          <SwiperSlide key={item?._id}>
            <Link
              href="/tour/tour-list-v1"
              className="citiesCard -type-2"
              data-aos="fade"
              data-aos-delay={index * 150}
            >
              <div className="pt-20 mt-28 border-top-light">
                <div className="row x-gap-20 y-gap-20 items-center">
                  <div className="col-auto">
                    <Image
                      width={50}
                      height={50}
                      // src={"/img/avatars/1.png"}
                      src={
                        !item.reviews
                          ? "/img/avatars/1.png"
                          : item.reviews[0]?.user?.avatar
                      }
                      // alt={"item.username"}
                      className="size-50 rounded-22 object-cover "
                    />
                  </div>
                  <div className="col-auto">
                    <div className="text-15 fw-500 lh-14">
                      {!item.ContactName
                        ? "Dennis Cheeseman"
                        : item.ContactName}
                      {/* {!item.reviews
                        ? "Dennis Cheeseman"
                        : item.reviews.map((item1) => {
                            return item1?.user?.username;
                          })} */}
                    </div>
                    <div className="text-14 lh-14 text-light-1 mt-5">
                      {item.designation}
                    </div>
                  </div>
                </div>
              </div>
              <Slider
                {...itemSettings}
                arrows={true}
                nextArrow={<ArrowSlick type="next" />}
                prevArrow={<ArrowSlick type="prev" />}
              >
                {item.BImage === null ? (
                  <div className="cardImage ratio ratio-1:1">
                    <div className="cardImage__content ">
                      <Image
                        width={300}
                        height={300}
                        className="rounded-4 col-12 js-lazy"
                        src={"/img/placeholder/business.png"}
                        alt={"image"}
                      />
                    </div>
                  </div>
                ) : (
                  item.BImage &&
                  item.BImage.split(",,").map((slide, i) => (
                    <div className="cardImage ratio ratio-1:1" key={i}>
                      <div className="cardImage__content ">
                        <Image
                          width={300}
                          height={300}
                          className="rounded-4 col-12 js-lazy"
                          src={slide}
                          alt={"image"}
                        />
                      </div>
                    </div>
                  ))
                )}
              </Slider>
              <div className="citiesCard__content mt-10">
                <h4 className="text-18 lh-13 fw-500 text-dark-1">
                  {item?.BusinessName}
                </h4>
                {/* <div className="text-14 text-light-1">
                  Rating:{!item.reviews
                            ? ""
                            : stars.slice(0, item?.reviews.Rated)
                          }
                </div> */}

                {/* <div className="text-14 text-light-1">
                  {item.travellers} travellers
                </div> */}
                <div className="text-14 text-light-1">{item?.Industry}</div>
              </div>
              <div>Continue Reading...</div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Travellers;
