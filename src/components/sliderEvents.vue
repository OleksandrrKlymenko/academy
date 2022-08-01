<template>
    <swiper
    :pagination="{
      type: 'progressbar',
    }"
    :slidesPerView="6"
    :space-between="20"
    :navigation="true"
    :modules="modules"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :breakpoints="{
      320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        centeredSlides: true
      },
      530: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true
      },
      1200: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 20
      },
      1400: {
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 20
      },
      1600: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 20,
      }
    }"
    :grabCursor="true"
    class="mySwiper"
  >
    <swiper-slide v-for="image in teamImg" :key="image">
        <img :src="image.img" alt="team work">
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>

:root {
  --swiper-theme-color: linear-gradient(to right, #F7941D, #27AAE1);
}

.swiper-slide, .swiper-slide.swiper-slide-duplicate {
  width: 320px;
  height: 210px;
  img {
    border-radius: 20px;
    height: 210px;
    object-fit: cover;
  }
}

.mySwiper {
  margin-top: -110px;
  height: 390px;
  background-image: none;
  background-color: inherit;
}

.swiper-pagination {
  margin: 0 auto;
  position: absolute;
  top: 96.5% !important; 
  max-width: 1180px;
  background-color: $white;
}

</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import teamImages from '@/assets/json/eventsImages.json'

// import required modules
import {Pagination, Navigation} from "swiper";

export default {
  name: 'sliderEvents',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
      teamImg: teamImages
    };
  },
}
</script>