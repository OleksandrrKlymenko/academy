<template>

<my_header></my_header>

  <section class="main__screen">
      <div class="container">
        <div class="main__descr--wrapper">
          <div class="main__descr">
            <h1>
              Образовательная платформа ХОД Future Academy
            </h1>
            <p class="subTitle">
              Актуальные знания для новичков и профессионалов
            </p>
          </div>
        </div>
        <div class="decoration__wrapper">
            <div class="bcg__item line1">
              <img src="../assets/images/decoration/line1.svg" alt="line">
            </div>
            <div class="bcg__item line2">
              <img src="../assets/images/decoration/line2.svg" alt="line">
            </div>
            <div class="bcg__item line3">
              <img src="../assets/images/decoration/line3.svg" alt="line">
            </div>
            <div class="bcg__item line4">
              <img src="../assets/images/decoration/line4.svg" alt="line">
            </div>
            <div class="bcg__item trigon">
              <img src="../assets/images/decoration/trigon.svg" alt="trigon">
            </div>
            <div class="bcg__item circle">
              <img src="../assets/images/decoration/circle.svg" alt="circle">
            </div>
            <div class="bcg__item X">
              <img src="../assets/images/decoration/X.svg" alt="X image">
            </div>
            <div class="bcg__item X--rightSide">
              <img src="../assets/images/decoration/X.svg" alt="small X image">
            </div>
        </div>
      </div>
  </section>

  <section class="aboutUs">
    <div class="container">
      <div class="wrapper">
        <div class="decoration__wrapper">
          <div class="bcg__item line4">
            <img src="../assets/images/decoration/line4.svg" alt="line">
          </div>
          <div class="bcg__item line5">
            <img src="../assets/images/decoration/line5.svg" alt="line">
          </div>
          <div class="bcg__item trigon">
            <img src="../assets/images/decoration/trigon-white.svg" alt="trigon">
          </div>
          <div class="bcg__item X">
            <img src="../assets/images/decoration/X-white.svg" alt="X image">
          </div>
        </div>
        <div class="video__wrapper">
          <a href="#" @click.prevent="showVideo">
            <img src="../assets/images/aboutUsVideo.png" alt="About academy video">
          </a>
          <div v-html="showMeVideo"></div>
        </div>
      </div>
      <div class="aboutUs__descr">
        <h4>
          Актуальные знания от признанных экспертов рынка 
          для новичков и практикующих специалистов.
        </h4>
        <div class="descr__container" >
          <div>
            <p class="text--gradient">600</p>
            <p class="subTitle">
              Курсы
            </p>
          </div>
          <div>
            <p class="text--gradient">82</p>
            <p class="subTitle">
              Ведущих преподавателей
            </p>
          </div>
          <div>
            <p class="text--gradient">14 795</p>
            <p class="subTitle">
              Выпускников
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <transition name="bounce" mode="out-in">
    <popupModal v-if="popup"></popupModal>
  </transition>

  <section class="events events--main">
    <div class="container">
      <div class="card__event event--main hover">
        <div class="card__wrapper">
          <div class="event__date">
            <p class="text--date">
              25
            </p>
            <p>
              ноября
            </p>
          </div>
          <div class="event__descr">
            <h3>День открытых дверей</h3>
            <p>
              Приглашаем всех желающих на бесплатную экскурсию 
              в мир востребованных профессий и полезных навыков
            </p>
          </div>
          <button type="button" class="button" @click="showPopup">
            Записаться
          </button>
        </div>
      </div>
      <div class="card__study hover">
        <div class="card__wrapper">
          <img src="../assets/images/monitor.svg" alt="monitor icon">
          <h4>Программы обучения</h4>
          <p>
            В списке наших курсов вы сможете найти 
            профессию и занятие по душе, изучить новое и получить 
            практические знания, которые помогут получить работу мечты.
          </p>
          <button type="button">
            Подробнее
          </button>
        </div>
      </div>
      <div class="card__news--sm mint hover">
        <div class="card__wrapper">
            <img src="../assets/images/newspaper.svg" alt="newspaper icon">
            <h4>
              Новости Академии
            </h4>
        </div>
      </div>
      <div class="card__news--sm lavender hover">
        <div class="card__wrapper">
          <img src="../assets/images/diagram.svg" alt="diagram icon">
          <h4>
            Мир IT
          </h4>
        </div>
      </div>
      <div class="card__justTry hover">
        <div class="card__wrapper">
          <img src="../assets/images/justTry.svg" alt="motivation picture">
          <div>
            <h4>
              Попробуй!
            </h4>
            <p>
              Пройдите тест и узнайте 
              свои способности в сфере информационных технологий.
            </p>
          </div>
        </div>
      </div>
      <div class="sm-cards">
        <div class="card__news--sm mint hover">
          <div class="card__wrapper">
              <img src="../assets/images/newspaper.svg" alt="newspaper icon">
              <h4>
                Новости Академии
              </h4>
          </div>
        </div>
        <div class="card__news--sm lavender hover">
          <div class="card__wrapper">
            <img src="../assets/images/diagram.svg" alt="diagram icon">
            <h4>
              Мир IT
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="feetback">
    <slider></slider>
  </section>

  <section class="ourPluses">
    <div class="container">
      <h2>Добро пожаловать в Академию будущего ХОД</h2>
      <div class="ourPluses__wrapper">
        <div class="item">
          <div>
            <img src="../assets/images/icons/tools.png" alt="tools icon">
          </div>
          <p>Передовой подход к образовательному прогрессу</p>
        </div>
        <div class="item">
          <div>
            <img src="../assets/images/icons/book.png" alt="book icon">
          </div>
          <p>Непрерывное усовершенствование и пополнение базы курсов</p>
        </div>
        <div class="item">
          <div>
            <img src="../assets/images/icons/classRoom.png" alt="class room icon">
          </div>
          <p>Только практикующие преподователи</p>
        </div>
        <div class="item">
          <div>
            <img src="../assets/images/icons/man.png" alt="man icon">
          </div>
          <p>Сопровождение на всех этапах. От начала обучения до трудоустройства</p>
        </div>
      </div>
    </div>
  </section>

  <modal></modal>

  <my_footer></my_footer>
</template>

<style lang="scss">

:root {
  --swiper-theme-color: linear-gradient(to right, #F7941D, #27AAE1);
}

// For all
  html, body, main {
    width: 100%;
    height: 100%;
  }

  #app {
    width: 100%
  }

  *, *:before, *::after, section {
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .bcg__item, .card__wrapper {
    img {
        width: max-content;
        height: max-content;
    }
  }

  // hover

  .hover {
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      display: block;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      background: linear-gradient(to right, $orange, $blue);
      filter: blur(25px);
      transition: all .3s ease;
      opacity: 0;
      z-index: -1;
    }

    &:hover::before {
      opacity: 1;
    }
    &:active {
      transform: scale(1.005);
    }
    &:active::before {
      opacity: 1;
      filter: blur(15px);
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
    }
  }

// Text styles
  .text--gradient {
  background: -webkit-linear-gradient(0deg, $orange 0%, $blue 100%);
  -webkit-background-clip: text;
  -webkit-text-stroke: 8px transparent;
  color: $white;
  font-size: 86px;
  letter-spacing: 10px;
  }

  .subTitle {
    color: $black;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
  }

// link styles
  a {
    text-decoration: none;
  }

// List elements styles
  ul {
    list-style: none;
  }

// Logo
  .logo {
    width: 100%;
    height: 70px;
  }

// Button 
  button {
    min-width: 100px;
    width: 100%;
    max-width: 210px;
    height: 60px;
    background-color: transparent;
    border: 2px solid $black;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Montserrat',serif;
    position: relative;
    transition: 0.5s ease all;
    @include text__button--dark;
  }

// Body
  #app {
    background-color: #F6F7F9;
  }

//  Section tag
  section {
    width: 100%;
    max-width: 1920px;
    padding: 50px 0;
  }
  
  .container {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    margin-top: 110px;
    position: relative;
  }

//  First screen section
  .main__screen {
    background-image: url('../assets/images/mainScreenImg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    max-width: 1920px;
    width: 100%;
    height: 480px;
    .main__descr--wrapper {
      max-width: 620px;
      margin-top: 60px;
      .main__descr{
        color: $white;
        h1 {
          @include title;
          line-height: 66px;
          color: $white;
          background-color: $dark_blue;
          padding: 0 20px;
        }
        .subTitle {
          color: $white;
          margin-top: 30px;
          background-color: $dark_blue;
          padding: 10px;
        }
      }
    }
    .line1 {
      top: 50px;
      left: -17%;
    }
    .line2 {
    top: -100px;
    left: 37.2%;
    }
    .line3 {
      top: -195px;
      left: 66%;
    }
    .line4 {
      top: -65px;
      left: 100%;
    }  
    .X {
      top: -243px;
      left: -11.5%;
    } 
    .X--rightSide {
      top: -204px;
      left: 91.5%;
      img {
        width: 85px;
        height: 85px;
      }
    }   
    .circle {
      top: -279px;
      left: 50%;
    }
    .trigon {
      top: 24px;
      left: 24%;
    }
  }
// Tags for all background decoration item
  .decoration__wrapper {
    margin: auto;
    position: relative;
  }

  .bcg__item {
    position: absolute;
    width: min-content;
    height: min-content;
  }

// About Us section with video
  .aboutUs {
    .wrapper {
      margin: 200px auto 0;
      .video__wrapper {
        position: relative;
        max-width: 780px;
        margin: auto;
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        img {
          width: 100%;
        }
      }
      .decoration__wrapper {
        .trigon {
          top: -75px;
          left: 9%;
          img {
            width: 164px;
            height: 136px;
          }
        }
        .X {
          top: 383px;
          left: 78%;
          img {
            width: 235px;
            height: 230px;
          }
        }
        .line4 {
          top: 203px;
          left: 2%;
          img {   
            transform: rotate(270deg);
          }
        }
        .line5 {
          top: -75px;
          left: 76%;
        }
      }
    }
    .aboutUs__descr {
      margin-top: 115px;
      h4 {
        font-size: 24px;
        line-height: 36px;
        font-weight: 700;
        width: 700px;
        margin-bottom: 40px;
      }
      .descr__container {
        display: flex;
        gap: 50px;
        div {
          &:nth-child(2) {
            width: 200px;
          }
        }
      }
    }
  }

// News section 
  .events--main .container {
      display: grid;
      gap: 20px;
  }
  .events {
    .card__event {
      width: 100%;
      background-color: $tree_poppy;
      grid-column: 1/4;
      .event__date {
        p {    
          font-size: 24px;
          font-weight: 600;
        }
        .text--date {
          line-height: 70px;
          font-size: 82px;
          font-weight: 700;
        }
      }
      .event__descr {
        max-width: 540px;
        h3 {
          @include title;
          line-height: 36px;
          font-weight: 500;
          margin-bottom: 30px
        }
        p {
          color: $gray;
        }
      }
      button {
        margin-left: auto;
        &:hover, &:active {
          background-color: $black;
          color: $white
        }
      }
    }
    h4 {
      font-size: 24px;
      font-weight: 500;
      color: $black;
    }
    p {
      color: $gray;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 5px;
    }

    .card__justTry, .card__study, .card__event, .card__news--sm {
      cursor: pointer;
    }

    .card__wrapper {
      background-color: inherit;
      width: 100%;
      height: 100%;
    }
    .card__event > .card__wrapper {
      padding: 25px 40px;
      display: flex;
      align-items: center;
      gap: 50px;
    }
    .card__study > .card__wrapper {
      padding: 40px 30px 50px;
    }
    .card__news--sm > .card__wrapper {
      padding: 20px 35px 45px;
    }
    .card__study > .card__wrapper {
      padding: 40px 30px 50px;
    }
    .card__justTry > .card__wrapper {
      padding: 50px 80px 55px;
      display: flex;
      align-items: center;
      gap: 30px;
    }
    
    .hover, .card__wrapper {
      border-radius: 20px;
    }
    .card__study {
      width: 100%;
      max-width: 480px;
      background-color: $tropical_blue;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-row: 2/4;
      grid-column: 1;
      gap: 40px;
      img {
        margin-bottom: 35px;
      }
      p {
        margin: 15px 0 20px;
      }
      button {
        border-color: $dark_blue;
        color: $dark_blue;
        height: 50px;
        &:focus, &:hover {
          background-color: $dark_blue;
          color: $white;
        }
      }
    }
    .sm-cards {
      display: none;
    }
    .card__news--sm {
      width: 330px;
      height: 220px;
      text-align: center;
      img {
        margin-bottom: 45px;
      }
    }
    .mint {
      background-color: $magic_mint;
      grid-column: 2;
    }
    .lavender {
      background-color: $lavender_blush;
      grid-column: 3;
    }
    .card__justTry {
      height: 220px;
      width: 100%;
      max-width: 660px;
      background-color: $golden_glow;
      grid-column: 2/4;
      h4 {
        margin-bottom: 30px;
      }
    }

  }

// Our pluses section

.ourPluses {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    @include title;
    line-height: 34px;
  }
  .ourPluses__wrapper {
    display: flex;
    gap: 50px;
    margin-top: 60px;
    flex-wrap: wrap;
    .item {
    display: flex;
    flex-direction: column;
    width: 205px;
      img {
        object-fit: none;
        height: inherit;
        width: inherit;
        margin-bottom: 25px
      }
    }
  }
}

.overlay {
  overflow: hidden;  
}

// responsive 

@media screen and (max-width: 1250px) {
  .main__screen {
    .main__descr--wrapper {
      margin: 30px 0 0 60px;
      max-width: 400px;
    }
    .decoration__wrapper {
      display: none;
    }
  }
  .aboutUs {
    .aboutUs__descr {
      justify-content: center;
    }
    .decoration__wrapper {
        .trigon, .X {
          display: none;
      }
      h4 {
        margin: auto
      }
      .descr__container {
        justify-content: center;
      }
    }
  }
  .container {
    padding: 0 30px;
  }
}

@media screen and (max-width: 1090px) {
  .main__screen {
    background-image: url('../assets/images/mainScreenImgResponsive.png');
    background-position: center;
    background-size: cover;
    margin-top: -8px;
    height: 400px;
    .main__descr--wrapper {
      max-width: 75%;
      padding: 0 20px;
      .main__descr {
        .subTitle, h1 {
          padding: 0px;
        }
        .subTitle {
          margin-top: 20px;
        }
      }
    }
    .container {
      position: relative;
      top: 116%;
      background-color: #00093C;
      padding: 30px 10px 60px;
    }
  }
  .aboutUs {
    padding-top: 200px;
    .aboutUs__descr {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .events--main {
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .event--main {
      max-width: max-content;
      .card__wrapper {
        align-items: flex-start;
        flex-direction: column-reverse;
        button {
          position: absolute;
          top: 70%;
          right: 9%;
        }
      }
    }
    .card__news--sm {
      display: none
    }
    .card__study {
      max-width: 620px;
    }
    .sm-cards {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
      .card__news--sm {
        display: flex;
      }
    }
  }
  .ourPluses {
    h2 {
      text-align: center;
    }
    .container {
      max-width: 590px;
      .ourPluses__wrapper {
        justify-content: space-evenly;
      }
    }
  }
}

@media screen and (max-width: 870px) {
  main {
    margin-top: 60px;
  }
  .main__screen {
    height: 350px;
    .main__descr--wrapper {
      max-width: 500px;
      margin: 0;
      .main__descr {
        h1{
          font-size: 24px;
          line-height: 44px;
        }
      }
    }
    .container {
      top: 120%;
      padding: 30px 40px 40px;
    }
  }
  .aboutUs__descr {
    flex-wrap: wrap;
    text-align: center;
     h4 {
      max-width: 100%;
    }
    .descr__container {
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  .events--main {
    .card__justTry, .card__study, .card__event, .card__news--sm {
      width: 100%;
      max-width: 600px;
      height: max-content;
    }
    .card__justTry {
      .card__wrapper {
        flex-direction: column;
        text-align: center;
      }
    }
    .sm-cards {
      justify-content: center;
    }
  }
  .ourPluses {
    .ourPluses__wrapper {      
      align-items: center;
      justify-content: center;

      .item {
        width: 145px;
        p {
          font-size: 12px;
          line-height: 18px;
          font-weight: 500;
        }
      }
    }
  }
}

@media screen and (max-width: 560px) {
  .container {
    padding: 0 10px;
  }
  .main__screen {
    height: 225px;
    .main__descr--wrapper {
      max-width: 360px;
      padding: 0 20px;
      margin: 0;
      .main__descr {
        h1{
          font-size: 18px;
          line-height: 36px;
        }
        .subTitle {
          margin-top: 10px;
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
    .container {
      top: 140%;
      padding: 30px 10px 40px;  
    }
  }
  .aboutUs {
    .wrapper {
      margin-top: 100px;
    }
    .aboutUs__descr {
        margin: 0;
    }
    .decoration__wrapper {
      display:  none;
    }
  }
  .events--main {
    .event--main {
      .card__wrapper {
        flex-direction: column;
        .event__date {
          display: none;
        }
        button {
          position: static;
          margin: auto;
        }
      }
    }
  }
}


@media screen and (max-width: 360px) {
  .main__screen {
    .main__descr--wrapper {
      max-width: 320px;
      padding: 0;
      margin: auto;
    }
  }
  .aboutUs__descr {
    .descr__container {
      .text--gradient {
        font-size: 78px;
      }
    }
  }
  .ourPluses .ourPluses__wrapper {
    gap: 10px;
  }
}

</style>

<script>
import slider from "@/components/slider.vue"

  export default {
    components: {
      slider
    },
    data() {
      return {
        showMeVideo: ``,
        disabled: false,
        popup: false,
      }
    },
    methods: {
      showVideo(){
        this.showMeVideo = `
        <iframe src="https://www.youtube.com/embed/2EaopRDxNrw"
        title="How to Selec
        't Your First Programming Language" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen /> `
      },
      showPopup() {
        if (this.popup === false) {
            document.body.classList.add('overlay')
            return this.popup = true;
        } else {
            document.body.classList.remove('overlay')
            return this.popup = false;
        }
      }
    },
    mounted () {
      window.scrollTo(0, 0)
    }
  }
</script>
