import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
export default function ProductSlider({
  product,
}: {
  product: { images?: string[]; thumbnail?: string };
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full max-w-full md:max-w-[600px] px-4 md:px-0">
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-4 md:gap-6 items-start relative">
        {(product?.images ?? []).length > 0 && (
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            spaceBetween={10}
            watchSlidesProgress
            className="w-full lg:w-[120px] lg:h-[500px]"
            breakpoints={{
              0: { direction: "horizontal", slidesPerView: 4 },
              1024: { direction: "vertical", slidesPerView: 4 },
            }}
          >
            {(product?.images ?? []).map((img: string, index: number) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-[100px] rounded-md border-2 border-transparent hover:border-[#4e01f0] transition duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <Swiper
          modules={[Navigation, Thumbs]}
          loop
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full h-[400px] md:w-[500px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
        >
          {(product?.images ?? []).length > 0 ? (
            (product?.images ?? []).map((img: string, index: number) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full rounded-lg"
                  loading="lazy"
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <img
                src={product.thumbnail}
                alt="Product"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}