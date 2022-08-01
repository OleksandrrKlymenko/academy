<template>
    <div class="event__days">
        <div class="day hover" @click="showEventDay(day)"
        v-for="day in daysList" :key="day">
        <div class="close" :class="{rotate: day.show === true}">
            <h5>{{ day.title }}</h5>
            <transition name="slide">
                    <p v-if="day.show">
                        {{ day.text }}
                    </p>
            </transition>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.event__days {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .day {
        div {
            border-radius: 10px;
            padding: 20px 30px;
            background-color: $white;
            position: relative;
            cursor: pointer;
            .close {
                width: 15px;
                background-color: $dark_blue;
                height: 3px;
                top: 30px;
                padding: 0;
                position: absolute;
                left: auto;
                margin-right: 30px;
                &::before {
                    content: '';
                    width: 3px;
                    height: 15px;
                    background-color: $dark_blue;
                    position: absolute;
                    top: -6px;
                    left: 6px;
                }
            }
        }
        h5 {
            font-size: 18px;
            font-weight: 500;
            line-height: 34px;
        }
        p {
            font-size: 14px;
            line-height: 26px;
            max-width: 85%;
        }
    }
}

.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}

.day, .close {
    transition: all ease .3s;
}
// .rotate {
//     transform: rotate(45deg);
// }
</style>

<script>
export default {
    name: 'accordeon',
    data () {
       return {
           daysList: [
                {
                    title: 'День первый',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.',
                    show: false

                },
                {
                    title: 'День второй',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.',
                    show: false
                },
                {
                    title: 'День третий',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem.',
                    show: false
                }
           ]
       }
    },
    methods: {
        showEventDay(day) {
            console.log(day);
            if (day.show === false) {
                return day.show = true
            }else {
                return day.show = false
            }
        }
   }
}
</script>