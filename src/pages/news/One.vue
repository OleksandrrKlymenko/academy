<template>
    <my_header :darkTheme="true"></my_header>
    <section class="currentNews">
        <div class="container">
            <div class="oneNews">
                <p class="page__now">

                </p>
                <h1 class="currentNews__title">
                    {{ item.title }}
                </h1>
                <p class="currentNews__date">
                    publishing DATE
                </p>
                <p class="currentNews__text">
                    {{ item.description }}
                </p>

                <div class="decoration__wrapper">
                    <svg class="bcg__item line4" width="129" height="268" viewBox="0 0 129 268" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0V140L127.589 266.589" stroke="url(#paint0_linear_62_30)" stroke-width="2"/>
                    <defs>
                    <linearGradient id="paint0_linear_62_30" x1="1" y1="266.589" x2="1.00001" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F7941D"/>
                    <stop offset="1" stop-color="#27AAE1"/>
                    </linearGradient>
                    </defs>
                    </svg>

                    <svg class="bcg__item line5" width="352" height="351" viewBox="0 0 352 351" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0V180H181L351 350" stroke="url(#paint0_linear_62_32)" stroke-width="2"/>
                    <defs>
                    <linearGradient id="paint0_linear_62_32" x1="1" y1="175" x2="351" y2="175" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F7941D"/>
                    <stop offset="1" stop-color="#27AAE1"/>
                    </linearGradient>
                    </defs>
                    </svg>

                    <svg  class="bcg__item trigon" width="99" height="82" viewBox="0 0 99 82" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.082 1.97163L48.082 1.97165L48.0865 1.96414C48.8355 0.715796 50.6238 0.633165 51.5413 1.9895L97.6613 77.3532L97.6663 77.3612C98.5815 78.8255 97.5203 80.7278 95.9371 80.7278H49.8062H3.67521C2.09765 80.7278 1.01752 78.9509 1.95591 77.3452L48.082 1.97163Z" stroke="url(#paint0_linear_62_3557)" stroke-width="2"/>
                    <defs>
                    <linearGradient id="paint0_linear_62_3557" x1="0.612305" y1="40.8639" x2="99" y2="40.8639" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F7941D"/>
                    <stop offset="1" stop-color="#27AAE1"/>
                    </linearGradient>
                    </defs>
                    </svg>

                    <svg class="bcg__item X" width="230" height="230" viewBox="0 0 131 130" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M127.996 32.8195L127.977 32.837L127.958 32.8556L99.8822 60.9317C97.7122 63.1017 97.7122 66.8983 99.8822 69.0683L127.958 97.1444C129.347 98.5333 129.347 101.064 127.958 102.453L102.453 127.958C101.064 129.347 98.5333 129.347 97.1444 127.958L69.0683 99.8823C66.8983 97.7123 63.1017 97.7123 60.9317 99.8823L32.8556 127.958C31.4667 129.347 28.9363 129.347 27.5474 127.958L2.04171 102.453C0.652764 101.064 0.652764 98.5333 2.04171 97.1444L30.1177 69.0683C32.2877 66.8983 32.2877 63.1017 30.1177 60.9317L2.04171 32.8556C0.652764 31.4667 0.652764 28.9363 2.04171 27.5474L27.5474 2.04171C28.9363 0.652764 31.4667 0.652764 32.8556 2.04171L60.9317 30.1178C63.1017 32.2877 66.8983 32.2877 69.0683 30.1178L97.1444 2.04171C98.5333 0.652764 101.064 0.652764 102.453 2.04171L127.958 27.5474C129.567 29.1559 129.51 31.4569 127.996 32.8195Z" stroke="url(#paint0_linear_62_3558)" stroke-width="2"/>
                    <defs>
                    <linearGradient id="paint0_linear_62_3558" x1="0" y1="65" x2="130.148" y2="65" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F7941D"/>
                    <stop offset="1" stop-color="#27AAE1"/>
                    </linearGradient>
                    </defs>
                    </svg>    
                </div>
                <div class="currentNews__img">
                    <img :src="item.urlToImage" alt="news image">
                </div>

                <p class="currentNews__text">
                    {{ item.content }}
                </p>
                <router-link to="/news" class="currentNews_toNews">Вернуться назад</router-link>
            </div>
        </div>
    </section>
    <modal></modal>
    <my_footer></my_footer>
</template>

<style lang="scss" scoped>
    .oneNews {
        max-width: 950px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .currentNews_toNews {
            display: block;
            margin-top: 15px;
        }
        .currentNews__date {
            padding: 10px 0 15px;
        }
        .currentNews__img {
            border-radius: 20px;
            padding: 80px 0;
            z-index: 40;
            align-self: flex-end;
            max-width: 780px;
            height: 600px;
            img {
                border-radius: 20px;
            }
        }
        .X {
            left: 385px;
            top: 365px;
        }
        .trigon {
            left: -358px;
            top: 33px;
        }
        .line4 {
            left: -455px;
            transform: rotate(270deg);
            top: 280px;
        }
        .line5 {
            top: 25px;
            left: 385px;
        }
    }
    @media screen and (max-width: 1000px) {
        .oneNews {
            .currentNews__img {
                align-self: center;
            }
        }
        .decoration__wrapper {
            display: none;
        }
    }
</style>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                item: {}
            }
        },
        created() {
            let url = `https://newsapi.org/v2/everything?q=${this.$route.params.title}&searchIn=title&apiKey=3c06f925e3bd454eb809ae9e059a0066`
            axios   
                .get(url)
                .then(resp => {
                    this.item = resp.data.articles[0]
                })
        },
        mounted () {
            window.scrollTo(0, 0)
        }
    }
</script>