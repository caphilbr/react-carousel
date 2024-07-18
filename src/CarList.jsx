import { useContext, useEffect } from "react"
import { carsContext } from "./StateContext"
import CarTile from "./styling/CarTile"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "./../node_modules/swiper/swiper-bundle.min.css"
import "./../node_modules/swiper/swiper.min.css"

const CarList = () => {
  const { cars } = useContext(carsContext)

  return (
    <div>
      <Swiper
        slidesPerView={3}
        speed={500}
        loop={true}
        cssMode={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {cars.map((car) => {
          return (
            <SwiperSlide key={car.id}>
              <CarTile key={car.id}>
                <p>Make: {car.make}</p>
                <p>Model: {car.model}</p>
                <p>Year: {car.year}</p>
              </CarTile>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default CarList
