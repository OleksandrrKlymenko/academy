<template>
  <div>
    <swiper
    :pagination="{
      type: 'progressbar',
    }"
    :space-between="20"
    :navigation="true"
    :modules="modules"
    :spaceBetween="10"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :breakpoints="{
      530: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true
      },
      780: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 20
      },
      990: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20
      },
      1200: {
        slidesPerGroup: 3,
        slidesPerView: 5,
        spaceBetween: 20
      },
      1600: {
        slidesPerView: 6,
        spaceBetween: 20,
      }
    }"
    :grabCursor="true"
    class="mySwiper"
  >
    <h3 class="swiper__title">Отзывы наших студентов</h3>
    <div>
      <div class="bcg__item line1__swiper">
        <svg width="340" height="133" viewBox="0 0 340 133" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.915527 131.432L81.9998 46.3475H339V0" stroke="url(#paint0_linear_62_3559)" stroke-width="2"/>
        <defs>
        <linearGradient id="paint0_linear_62_3559" x1="0.915527" y1="131.432" x2="0.915528" y2="0" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F7941D"/>
        <stop offset="1" stop-color="#27AAE1"/>
        </linearGradient>
        </defs>
        </svg>
      </div>
      <div class="bcg__item X__swiper">
        <svg width="131" height="130" viewBox="0 0 131 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M127.996 32.8195L127.977 32.837L127.958 32.8556L99.8822 60.9317C97.7122 63.1017 97.7122 66.8983 99.8822 69.0683L127.958 97.1444C129.347 98.5333 129.347 101.064 127.958 102.453L102.453 127.958C101.064 129.347 98.5333 129.347 97.1444 127.958L69.0683 99.8823C66.8983 97.7123 63.1017 97.7123 60.9317 99.8823L32.8556 127.958C31.4667 129.347 28.9363 129.347 27.5474 127.958L2.04171 102.453C0.652764 101.064 0.652764 98.5333 2.04171 97.1444L30.1177 69.0683C32.2877 66.8983 32.2877 63.1017 30.1177 60.9317L2.04171 32.8556C0.652764 31.4667 0.652764 28.9363 2.04171 27.5474L27.5474 2.04171C28.9363 0.652764 31.4667 0.652764 32.8556 2.04171L60.9317 30.1178C63.1017 32.2877 66.8983 32.2877 69.0683 30.1178L97.1444 2.04171C98.5333 0.652764 101.064 0.652764 102.453 2.04171L127.958 27.5474C129.567 29.1559 129.51 31.4569 127.996 32.8195Z" stroke="url(#paint0_linear_62_3558)" stroke-width="2"/>
        <defs>
        <linearGradient id="paint0_linear_62_3558" x1="0" y1="65" x2="130.148" y2="65" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F7941D"/>
        <stop offset="1" stop-color="#27AAE1"/>
        </linearGradient>
        </defs>
        </svg> 
      </div>
      <div class="bcg__item trigon__swiper">
        <svg width="99" height="82" viewBox="0 0 99 82" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.082 1.97163L48.082 1.97165L48.0865 1.96414C48.8355 0.715796 50.6238 0.633165 51.5413 1.9895L97.6613 77.3532L97.6663 77.3612C98.5815 78.8255 97.5203 80.7278 95.9371 80.7278H49.8062H3.67521C2.09765 80.7278 1.01752 78.9509 1.95591 77.3452L48.082 1.97163Z" stroke="url(#paint0_linear_62_3557)" stroke-width="2"/>
        <defs>
        <linearGradient id="paint0_linear_62_3557" x1="0.612305" y1="40.8639" x2="99" y2="40.8639" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F7941D"/>
        <stop offset="1" stop-color="#27AAE1"/>
        </linearGradient>
        </defs>
        </svg>
      </div>
      <div class="bcg__item line4__swiper">
        <svg width="129" height="268" viewBox="0 0 129 268" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0V140L127.589 266.589" stroke="url(#paint0_linear_62_30)" stroke-width="2"/>
        <defs>
        <linearGradient id="paint0_linear_62_30" x1="1" y1="266.589" x2="1.00001" y2="0" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F7941D"/>
        <stop offset="1" stop-color="#27AAE1"/>
        </linearGradient>
        </defs>
        </svg>
      </div>
      <div class="bcg__item circle__swiper">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 119C27.4614 119 1 92.5386 1 60C1 27.4614 27.4614 1 60 1C92.5386 1 119 27.4614 119 60C119 92.7185 92.5406 119 60 119Z" stroke="url(#paint0_linear_62_3556)" stroke-width="2"/>
        <defs>
        <linearGradient id="paint0_linear_62_3556" x1="0" y1="60" x2="120" y2="60" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F7941D"/>
        <stop offset="1" stop-color="#27AAE1"/>
        </linearGradient>
        </defs>
        </svg>
      </div>
    </div>
    <swiper-slide v-for="autor in autors" :key="autor"> 
      <div class="slider__item">
      <div class="autor__header">
      <img :src="`img/${autor.img}`" alt="">
      
      <div class="autor__title">
        <h6>{{autor.name}}</h6>
        <p class="autor__status">
          {{autor.status}}
        </p>
      </div>
    </div>
    <div class="autor__descr">
      <p class="autor__text">
        {{autor.text}}
      </p>
      <p class="autor__rate">
        {{autor.rate}}
      </p>
    </div>
      </div>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import autorsData from '@/assets/json/autors.json'

// import required modules
import {Pagination, Navigation} from "swiper";

export default {
  name: 'slider',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules:  [Pagination, Navigation],
      autors: autorsData
    };
  },
}
</script>

<style lang="scss">
// my styles

.line1__swiper {
  left: 1350px;
  top: -16px;
}

.line4__swiper {
  top: 350px;
  left: 70px;
  svg {
    transform: rotate(270deg);
  }
}

.X__swiper {
  left: 280px;
  top: 85px;
}

.trigon__swiper {
  left: 914px;
  top: 455px;
}

.circle__swiper {
  left: 1530px;
  top: 420px;
}

.swiper__title {
  margin: 0 auto;
  font-weight: 700;
  font-size: 36px;
  padding: 10px;
  background-color: $dark_blue;
  text-align: center;
  color: $white;
  max-width: 535px;
  height: min-content;
  position: absolute;
  top: 65px;
}

.swiper-wrapper {
  position: absolute;
  top: 110px;
  height: min-content;
  margin: auto;
  }
.slider__item {
  background-color: $white;
  padding: 20px;
  max-width: 300px;
  height: 100%;
  max-height: 370px;
  margin: 0;
  flex-direction: column;
  border-radius: 20px;
  text-align: left;
  .autor__header {
    display: flex;
    gap: 10px;
    img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    }
    .autor__title {
      h6 {
        font-weight: 700;
      }
      .autor__status {
        font-size: 14px;
        color: #333333;
        margin: 8px 0 12px;
      }
    }
  }
  .autor__descr {
    font-size: 14px;
    font-weight: 500;
    .autor__text {
      color: $black;
    }
    .autor__rate {
      margin-top: 20px;
      color: #333333;
    }
  }
  h6, p {
    &:focus {
      color: inherit;
    }
  }
}

.swiper-button-prev, .swiper-button-next {
  display: none;
  height: 100%;
}

.swiper {
  width: 100%;
  max-width: 1920px;
  height: 600px;
  background-image: url('../assets/images/sliderBcg.png');
}

.swiper-pagination {
  margin: 0 auto;
  position: absolute;
  top: 96.5% !important; 
  max-width: 1180px;
  background-color: $white;
}


@media screen and (max-width: 530px) {
  .slider__item {
    margin: auto;
  }
}
</style>
