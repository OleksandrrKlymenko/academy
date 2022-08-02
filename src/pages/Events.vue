<template>
    <my_header :darkTheme="true"></my_header>
        <div class="page__title container">
            <h1>Все мероприятия</h1>
        </div>
        
          <transition name="bounce" mode="out-in">
                <popupModal v-if="popup" >
                    <div @click="hide" class="popup__close"></div>
                </popupModal>
          </transition>


        <section class="events">
            <div class="container">
                <div class="events__wrapper">
                   <div class="card__event hover" @click="showPopup">
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
                          <button type="button" class="button">
                            Записаться
                          </button>
                        </div>
                    </div>

                    <div class="item__wrapper hover" v-for="event in eventsList" :key="event.id" :class="{special: qwe}">
                        <router-link to="/Event" class="card">
                            <img src="../assets/images/manWithLaptop.jpg" alt="man with laptop" class="event__image">
                            <div class="card__wrapper">
                                <p class="event__type">
                                    {{ event.type }}
                                </p>
                                <h4 class="event__title">
                                    {{ event.title }}
                                </h4>
                                <p class="event__descr">
                                    {{ event.descr}}
                                </p>
                                <p class="event__date">
                                    {{event.date}}
                                </p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    <modal></modal>
    <my_footer></my_footer>
</template>

<style lang="scss" scoped>
.popup__close {
    width: 100%;
    height: 100%;
}

.events {
    .page__title {
        margin-bottom: 30px;
    }
}

.events__wrapper {
    display: grid;
    gap: 20px;
    justify-content: center;
}

.special {
    &:nth-child(2) {
        .card {
            background-color: #c7eeff;
        }
    }
    &:nth-child(3) {
        .card {
            background-color: #ffe38e;
        }
    }
    &:nth-child(4) {
        .card {
            background-color: #ddddff;
        }
    }
    &:nth-child(5n) {
        grid-column: 1/3;
        .card {
            background-color: #B8EFCF;
            max-width: 780px;
            .event__image {
                display: block;
                border-radius: 20px;
            }
        }
    }
    &:nth-child(6) {
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 20px;
            background: rgba(0, 60, 45, .1);
        }
        .card {
            background-image: url('../assets/images/manWithLaptop.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            height: min-content;
            .event__title, .event__descr {
                color: $white;
            }
        }
    }
    &:nth-child(7) {
        .card {
            background-color: #c5ddff;
        }
    }
    &:nth-child(8) {
        .card {
            background-color: #ffeef6;
        }
    }
    &:nth-child(9) {
        .card {
            background-color: #ffce94;
        }
    }
}
.card {
    max-width: 380px;
    min-height: 250px;
    border-radius: 20px;
    display: flex;
    .card__wrapper {
        padding: 30px;
    }
    .event__image {
        display: none;
        max-width: 280px;
        height: 250px;
        object-fit: cover;
    }
}
.page__title {
    margin-right: auto;
    p {
        color: gray;
    }
    p {
        margin: 20px 0;
    }
}

@media screen and (max-width: 1250px) {
    .card {
        max-width: 500px;
    }
    .card__event {
        max-width: 1065px;
        grid-column: 1/3;
    }
    .special {
        &:nth-child(5) {
            grid-column: 2;
            width: 100%;
            .card {
                height: inherit;
                max-width: 500px;
                .event__image {
                    display: none;
                }
            }
        }
    }
}

@media screen and (max-width: 1050px) {
    .card__event {
        .card__wrapper {
            flex-direction: column;
        }
        .event__date {
            display: none;
        }
    }
    .item__wrapper{
        max-width: inherit;
    }
    .special {
        &:nth-child(5) {
            .card {
                max-width: inherit;

            }
        }
    }
}

@media screen and (max-width: 670px) {
    .events__wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
    }
    .card {
        max-width: 100%;
    }
    .special {
        &:nth-child(5) {
            .card {
                max-width: 100%;

            }
        }
    }
}

</style>

<script>
import events from '../assets/json/events.json'

    export default {
        data() {
            return {
                eventsList: events,
                qwe: true,
                darkTheme: true,
                popup: false
            }
        } ,
        methods: {
            hide( ) {
                document.body.classList.remove('overlay')
                return this.popup = false;
            },
            showPopup() {
                if (this.popup === false) {
                    document.body.classList.add('overlay')
                    return this.popup = true;
                } else {
                    hide()
                }
            }
        },
        mounted () {
            window.scrollTo(0, 0)
        },
    }
</script>