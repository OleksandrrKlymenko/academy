<template>
    <div class="dropdown">
        <div class="menu-item" @click="isOpen = !isOpen">
            <p class="nav__text">
                {{ city }}
            </p>
        </div>
        <transition name="fade" appear>
            <div class="sub-menu" v-if="isOpen">
                <h3>Выберите свой город</h3>
                <div class="wrapper" @click="isOpen = false">
                    <div v-for="(item, i) in location" :key="i" class="menu-item"  @click="isOpen = !isOpen" :class="{hideChoosenCity: item.title === city}">
                        <router-link to="/map" class="dropdown__text" @click="getCity(item.title, item)" v-if="item.title !== city">
                            {{item.title}}
                        </router-link>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
    .nav__text {
        cursor: pointer;
    }
    .sub-menu {
        background-color: $white;
        color: $black;
        position: absolute;
        top: 110px;
        margin: 0 auto;
        height: 150px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 1180px;
        border-radius: 0 0 10px 10px;
        &::before {
          content: '';
          position: absolute;
          display: inline;
          top: 20px;
          left: 0px;
          right: 0px;
          bottom: -2px;
          background: linear-gradient(to right, #F7941D, #27AAE1);
          filter: blur(10px);
          transition: all .3s ease;
          opacity: 1;
          z-index: -1;
        }
        h3 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 25px;
        }
        .wrapper {
            display: flex;
            height: 50px;
            flex-direction: column;
            justify-content: space-between;
            align-content: center;
            flex-wrap: wrap;
            .menu-item {
                margin-right: 100px;
                position: relative;
            }
        }
    }
    .menu-item {
        position: relative;
    }
    .hideChoosenCity {
        display: none;
    }
    .dropdown__text {
        color: $black;
    }
</style>

<script>
  export default {
    name: 'dropdown',
    data() {
        return {
            city:'Одесса',
            isOpen: false,
            map: '/',
            location: this.$store.state.location,
        }
    },
    methods: {
        getCity(title, item) {
            this.$store.state.choosenCity = item
            return this.city = title
        },
    }
  }
</script>