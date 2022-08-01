<template>
    <my_header></my_header>    
    <section class="about_section">
        <div class="container">
            <div class="event__container">
                <div class="event__title">
                    <h1 class="title"> 
                        Название мероприятия
                    </h1>
                    <p class="subTitle">
                        Подпись к названию
                    </p>
                </div>
                <div class="event__motivation">
                    <div class="item">
                        <div></div>
                        <p>
                          Узнайте самые востребованные профессии, на которые более 113 тысяч вакансия.
                        </p>
                    </div>
                    <div class="item">
                        <div></div>
                        <p>
                            Выберите походящую именно для вас.
                        </p>
                    </div>
                    <div class="item">
                        <div></div>
                        <p>
                          Сделайте первые шаги и возможности выйти на доход более 9000 тысяч евро.
                        </p>
                    </div>
                </div>
                <h4>
                    Запишись сейчас
                </h4>
                <button type="button" class="event__button">
                    Записаться на интенсив
                </button>
            </div>
            <div class="bcg__item line1">
                <img src="../assets/images/decoration/line1.svg" alt="line">
              </div>
              <div class="bcg__item line6">
                <img src="../assets/images/decoration/line6.svg" alt="line">
              </div>
              <div class="bcg__item line1--sm">
                <img src="../assets/images/decoration/line1.svg" alt="line">
              </div>
              <div class="bcg__item trigon">
                <img src="../assets/images/decoration/trigon.svg" alt="trigon">
              </div>
                <div class="bcg__item trigon--sm">
                <img src="../assets/images/decoration/trigon.svg" alt="trigon">
              </div>
              <div class="bcg__item X">
                <img src="../assets/images/decoration/X.svg" alt="X image">
              </div>                  
              <div class="bcg__item circle">
                <img src="../assets/images/decoration/circle.svg" alt="X image">
              </div>
              <div class="bcg__item X--rightSide">
                <img src="../assets/images/decoration/X.svg" alt="small X image">
              </div>
            <div class="image__container">
                <img src="../assets/images/manWithLaptop.png" alt="man with laptop">
            </div>
        </div>
    </section>
    <section class="event__short">
        <div class="container">
            <div class="block__wrapper">
                <div class="owl__message">
                    <owl></owl>
                    <div class="message">
                        <p>Текст призывающий записаться на мероприятие</p>
                    </div>
                </div>
                <div class="description">
                    <img src="../assets/images/XEventIcon.svg" alt="X symbol">
                    <h4>Заголовок</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Fusce mi elit, egestas ut 
                        feugiat id, laoreet volutpat risus. Cras 
                        condimentum, ligula eget
                    </p>
                </div>
                <div class="description">
                    <img src="../assets/images/circleEventIcon.svg" alt="circle symbol">
                    <h4>Заголовок</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Fusce mi elit, egestas ut 
                        feugiat id, laoreet volutpat risus. Cras 
                        condimentum, ligula eget
                    </p>
                </div>
                <div class="description">
                    <img src="../assets/images/trigonEventIcon.svg" alt="trigon symbol">
                    <h4>Заголовок</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Fusce mi elit, egestas ut 
                        feugiat id, laoreet volutpat risus. Cras 
                        condimentum, ligula eget
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="event__descr">
        <div class="container">
            <h2>
                Программа мероприятия
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce mi elit, egestas ut feugiat id, laoreet volutpat 
                risus. Cras condimentum, ligula eget varius eleifend, 
                massa nibh imperdiet est, vel sagittis quam justo 
                vestibulum eros. Cras dignissim mi quis fringilla feugiat. 
                Proin malesuada luctus diam, vitae faucibus dolor venenatis 
                vel. In hac habitasse platea dictumst.
            </p>
            <accordeon></accordeon>
        </div>
    </section>
    <section class="event__leader">
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
        <div class="container">
            <h2>Мероприяте проводят</h2>
            <div class="leaders">
                <div class="leader hover" v-for="leader in leaders" :key="leader">
                    <div>
                        <img :src="leader.img" alt="leader img">
                        <h6>
                            {{ leader.name }}
                        </h6>
                        <p>
                            {{ leader.education }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="event__photos">
        <div class="container">
            <h2>
                Фотографии с прошлых мероприятий
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh imperdiet est, vel sagittis quam justo.
            </p>
        </div>
        <sliderEvents></sliderEvents>
    </section>
    <modal></modal>
    <my_footer></my_footer>
</template>

<style lang="scss" scoped>

:root {
  --swiper-theme-color: linear-gradient(to right, #F7941D, #27AAE1);
}

h2 {
    font-size: 36px;
    color: $black;
    font-weight: 700;
}

.about_section {
    background-color: $dark_blue;
    padding: 0;
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .title, h4, p, button {
        color: white;
    }
    .title {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
}
    .subtitle {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 20px;
    }
}


.event__container {
    display: flex;
    gap: 40px;
    flex-direction: column;
    padding: 40px 25px 25px;
    .event__motivation {
        display: flex;
        justify-content: center;
        gap: 20px;
        .item {
            width: 180px;
            div {
                width: 100%;
                height: 2px;
                background: linear-gradient(to right, #F7941D, #27AAE1);
                margin-bottom: 15px;
            }
            p {
                font-size: 14px;
                font-weight: 500;
            }
        }
    }
    h4 {
        font-size: 28px;
        font-weight: 700;
    }
    .event__button {
        background-color: #F7941D;
        max-width: 286px;
        height: 50px;
        border: none;
        border-radius: 6px;
        &:hover {
          background-color: #FFAE4D;
        }
    }
}
.image__container {
    height: 480px;
    margin-left: auto;
    img {
        width: 500px;
        height: 100%;
        object-fit: cover;
    }
}

.event__short {
    padding: 115px 0 50px;
    .block__wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .owl__message {
        max-width: 260px;
        margin-right: 80px;
        .owl {
            width: 170px;
            height: 190px;
            position: relative;
            top: 70px;
            left: -52px;
            z-index: 5;
        }
        .message {
            height: 137px;
            width: 350px;
            background-image: url('../assets/images/owlMessageResponsive.svg');
            background-repeat: no-repeat;
            background-size: contain;
            position: relative;
            top: -230px;
            left: 21%;
            p {
                max-width: 325px;
                padding: 30px 50px 60px 20px;
                font-size: 16px;
                font-weight: 500;;
            }
        }
    }
    .description {
        display: flex;
        flex-direction: column;
        width: 246px;
        height: 210px;
        gap: 15px;
        img {
            object-fit: contain;
        height: 40px;
        width: min-content;
        }
        h4 {
            font-size: 24px;
            font-weight: 700;
        }
        p {
            font-size: 14px;
        }
    }
}

.event__descr {
    padding: 50px 0 100px;
    p {
        max-width: 980px;
    }
    .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}

.event__leader {
    min-height: 600px;
    background-image: url('../assets/images/sliderBcg.png');
    background-size: auto;
    position: relative;
    cursor: pointer;
    .container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        height: min-content;
    }
    .leaders {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .leader {
        transition: all ease .3s;
        &::before {
            filter: blur(25px);
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
        }
        &:hover {
            transform: scale(1.2);
        }
        div {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            position: relative;
            background-color: $white;
            width: 280px;
            height: 360px;
            border-radius: 20px;
            padding: 30px 20px;
        }
        img {
            width: 120px;
            height: 120px;
            position: relative;
        }
        h6 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 15px;
        }
        p {
            font-weight: 500;
            font-size: 14px;
        }
    }
    h2 {
        margin: 0 auto;
        padding: 10px;
        background-color: $dark_blue;
        text-align: center;
        color: $white;
        max-width: 535px;
    }
}

.event__photos {
    padding: 100px 0 50px;
    h2 {
        margin-bottom: 15px;
    }
}

:root {
  --swiper-theme-color: linear-gradient(to right, $orange, $blue);
}

// BCG el

.circle {
    top: 315px;
    left: 61%;
}
.line6 {
    left: -17%;
    top: 250px;
}
.line1 {
    top: 380px;
    left: 26%;
}
.line1--sm {
    top: 380px;
    left: 96%;
    img {
        transform: rotateY(180deg)
    };
}
.trigon {
    left: 113%;
    top: 45px;
}
.trigon--sm {
    top: 26px;
    left: 67%;
    img {
        width: 100px;
        height: 80px;
    }
}
.X {
    top: 54px;
    left: -12%;
}
.X--rightSide {
    top: 175px;
    left: 88%;
    img {
        height: 85px;
        width: 85px;
    }
}

@media screen and (max-width: 1160px) {
    .about_section {
        background-image: url(../assets/images/manWithLaptop.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        .container {
            background-color: rgba(0, 0, 0, .4);
            // text-align: center;
        }
        .image__container {
            display: none;
        }
        .event__container {
            margin: auto;
            .event__motivation {
                flex-wrap: wrap;
            }
            h4 {
                text-align: center;
            }
        }
        .bcg__item {
            display: none;
        }
        button {
            margin: auto;
        }
    }
    .event__short {
        .block__wrapper {
            max-width: 700px;
            margin: auto;        
            .owl__message {
                .owl {    
                    left: -70px;
                }
            }
        }
    }
}

@media screen and (max-width: 950px) {
    .leaders {
        flex-wrap: wrap;
        justify-content: center;
    }
}

@media screen and (max-width: 700px) {
    .about_section {
        text-align: center;
    }
    .event__short {
        .block__wrapper {
            gap: 20px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .owl__message {
                height: 230px;
                margin-bottom: 40px;
            }
        }
    }
}

@media screen and (max-width: 500px) {
    .about_section {
        .title {
            font-size: 32px;
        }
        .subtitle {
            font-size: 20px;
        }
    }
    .event__short {
        .block__wrapper {
            .owl__message {
                margin-bottom: 0;
                left: 10%;
                .owl {
                    left: -10px;
                }
                .message {
                    width: 320px;
                }
            }
        }
    }
}

</style>

<script>
import leadersData from "@/assets/json/leaders.json"
import sliderEvents from "@/components/sliderEvents.vue"
export default {
    data() {
        return {
            leaders: leadersData
        }
    },
    components: {
        sliderEvents
    },
    mounted () {
        window.scrollTo(0, 0)
    }
}
</script>