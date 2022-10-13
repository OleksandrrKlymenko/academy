<template>
  <header :class="{header__dark: darkTheme}">
    <div class="mobile__menu" v-show="menuVisible">
      <div class="menu" >
        <navbar @click="removeOverlay">
        <li class="contacts">
          Odessa, st. Deribasovskaya 23
        </li>
        <li class="contacts">
          info@hodfutureacademy.com
        </li>
        <li class="socials">
          <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.625 12C23.625 14.875 22.6875 17.4062 20.8125 19.5938C18.9375 21.75 16.6094 23.0469 13.8281 23.4844V15.375H16.5469L17.0625 12H13.8281V9.79688C13.8281 8.60938 14.4531 8.01562 15.7031 8.01562H17.1562V5.15625C16.2812 5 15.4219 4.92188 14.5781 4.92188C13.6719 4.92188 12.8906 5.09375 12.2344 5.4375C11.6094 5.78125 11.1094 6.29687 10.7344 6.98438C10.3594 7.67188 10.1719 8.48438 10.1719 9.42188V12H7.21875V15.375H10.1719V23.4844C7.39062 23.0469 5.0625 21.75 3.1875 19.5938C1.3125 17.4062 0.375 14.875 0.375 12C0.375 8.78125 1.5 6.04688 3.75 3.79688C6.03125 1.51562 8.78125 0.375 12 0.375C15.2188 0.375 17.9531 1.51562 20.2031 3.79688C22.4844 6.04688 23.625 8.78125 23.625 12Z" fill="#00093C"/>
            </svg>
          </a>
          <a href="#">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.70312 7.20312C7.76562 6.14062 9.04688 5.60938 10.5469 5.60938C12.0469 5.60938 13.3125 6.14062 14.3438 7.20312C15.4062 8.23438 15.9375 9.5 15.9375 11C15.9375 12.5 15.4062 13.7812 14.3438 14.8438C13.3125 15.875 12.0469 16.3906 10.5469 16.3906C9.04688 16.3906 7.76562 15.875 6.70312 14.8438C5.67188 13.7812 5.15625 12.5 5.15625 11C5.15625 9.5 5.67188 8.23438 6.70312 7.20312ZM8.0625 13.4844C8.75 14.1719 9.57812 14.5156 10.5469 14.5156C11.5156 14.5156 12.3438 14.1719 13.0312 13.4844C13.7188 12.7969 14.0625 11.9688 14.0625 11C14.0625 10.0312 13.7188 9.20312 13.0312 8.51562C12.3438 7.82812 11.5156 7.48438 10.5469 7.48438C9.57812 7.48438 8.75 7.82812 8.0625 8.51562C7.375 9.20312 7.03125 10.0312 7.03125 11C7.03125 11.9688 7.375 12.7969 8.0625 13.4844ZM17.0156 4.53125C17.2656 4.75 17.3906 5.03125 17.3906 5.375C17.3906 5.71875 17.2656 6.01562 17.0156 6.26562C16.7969 6.51562 16.5156 6.64062 16.1719 6.64062C15.8281 6.64062 15.5312 6.51562 15.2812 6.26562C15.0312 6.01562 14.9062 5.71875 14.9062 5.375C14.9062 5.03125 15.0312 4.75 15.2812 4.53125C15.5312 4.28125 15.8281 4.15625 16.1719 4.15625C16.5156 4.15625 16.7969 4.28125 17.0156 4.53125ZM21 6.6875C21.0312 7.53125 21.0469 8.96875 21.0469 11C21.0469 13.0312 21.0312 14.4688 21 15.3125C20.9062 17.2188 20.3281 18.7031 19.2656 19.7656C18.2344 20.7969 16.7656 21.3438 14.8594 21.4062C14.0156 21.4688 12.5781 21.5 10.5469 21.5C8.51562 21.5 7.07812 21.4688 6.23438 21.4062C4.32812 21.3125 2.85938 20.75 1.82812 19.7188C1.42188 19.3438 1.09375 18.9062 0.84375 18.4062C0.59375 17.9062 0.40625 17.4219 0.28125 16.9531C0.1875 16.4844 0.140625 15.9375 0.140625 15.3125C0.078125 14.4688 0.046875 13.0312 0.046875 11C0.046875 8.96875 0.078125 7.51562 0.140625 6.64062C0.234375 4.76562 0.796875 3.3125 1.82812 2.28125C2.85938 1.21875 4.32812 0.640625 6.23438 0.546875C7.07812 0.515625 8.51562 0.5 10.5469 0.5C12.5781 0.5 14.0156 0.515625 14.8594 0.546875C16.7656 0.640625 18.2344 1.21875 19.2656 2.28125C20.3281 3.3125 20.9062 4.78125 21 6.6875ZM18.75 17.1875C18.8438 16.9375 18.9219 16.625 18.9844 16.25C19.0469 15.8438 19.0938 15.375 19.125 14.8438C19.1562 14.2812 19.1719 13.8281 19.1719 13.4844C19.1719 13.1406 19.1719 12.6562 19.1719 12.0312C19.1719 11.4062 19.1719 11.0625 19.1719 11C19.1719 10.9062 19.1719 10.5625 19.1719 9.96875C19.1719 9.34375 19.1719 8.85938 19.1719 8.51562C19.1719 8.17188 19.1562 7.73438 19.125 7.20312C19.0938 6.64062 19.0469 6.17188 18.9844 5.79688C18.9219 5.39062 18.8438 5.0625 18.75 4.8125C18.375 3.84375 17.7031 3.17188 16.7344 2.79688C16.4844 2.70312 16.1562 2.625 15.75 2.5625C15.375 2.5 14.9062 2.45313 14.3438 2.42188C13.8125 2.39062 13.375 2.375 13.0312 2.375C12.7188 2.375 12.2344 2.375 11.5781 2.375C10.9531 2.375 10.6094 2.375 10.5469 2.375C10.4844 2.375 10.1406 2.375 9.51562 2.375C8.89062 2.375 8.40625 2.375 8.0625 2.375C7.71875 2.375 7.26562 2.39062 6.70312 2.42188C6.17188 2.45313 5.70312 2.5 5.29688 2.5625C4.92188 2.625 4.60938 2.70312 4.35938 2.79688C3.39062 3.17188 2.71875 3.84375 2.34375 4.8125C2.25 5.0625 2.17188 5.39062 2.10938 5.79688C2.04688 6.17188 2 6.64062 1.96875 7.20312C1.9375 7.73438 1.92188 8.17188 1.92188 8.51562C1.92188 8.82812 1.92188 9.3125 1.92188 9.96875C1.92188 10.5938 1.92188 10.9375 1.92188 11C1.92188 11.125 1.92188 11.4219 1.92188 11.8906C1.92188 12.3281 1.92188 12.7031 1.92188 13.0156C1.92188 13.2969 1.92188 13.6719 1.92188 14.1406C1.95312 14.6094 1.98438 15.0156 2.01562 15.3594C2.04688 15.6719 2.09375 16 2.15625 16.3438C2.21875 16.6875 2.28125 16.9688 2.34375 17.1875C2.75 18.1562 3.42188 18.8281 4.35938 19.2031C4.60938 19.2969 4.92188 19.375 5.29688 19.4375C5.70312 19.5 6.17188 19.5469 6.70312 19.5781C7.26562 19.6094 7.70312 19.625 8.01562 19.625C8.35938 19.625 8.84375 19.625 9.46875 19.625C10.125 19.625 10.4844 19.625 10.5469 19.625C10.6406 19.625 10.9844 19.625 11.5781 19.625C12.2031 19.625 12.6875 19.625 13.0312 19.625C13.375 19.625 13.8125 19.6094 14.3438 19.5781C14.9062 19.5469 15.375 19.5 15.75 19.4375C16.1562 19.375 16.4844 19.2969 16.7344 19.2031C17.7031 18.7969 18.375 18.125 18.75 17.1875Z" fill="#00093C"/>
            </svg>
          </a>
          <a href="#">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 2.64062L17.8125 17.5469C17.5625 18.6094 16.9844 18.8906 16.0781 18.3906L11.25 14.8281L8.90625 17.0781C8.59375 17.3906 8.26562 17.5469 7.92188 17.5469L8.29688 12.625L17.25 4.5625C17.4688 4.34375 17.4688 4.21875 17.25 4.1875C17.0625 4.125 16.8594 4.17188 16.6406 4.32812L5.57812 11.3125L0.796875 9.8125C0.265625 9.65625 0.015625 9.42188 0.046875 9.10938C0.078125 8.79688 0.40625 8.53125 1.03125 8.3125L19.6406 1.09375C20.1094 0.9375 20.4844 1 20.7656 1.28125C21.0469 1.53125 21.125 1.98438 21 2.64062Z" fill="#00093C"/>
            </svg>
          </a>
          <a href="#">
            <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.7812 2.8125C25.875 3.1875 25.9531 3.65625 26.0156 4.21875C26.1094 4.78125 26.1719 5.34375 26.2031 5.90625C26.2344 6.4375 26.25 6.9375 26.25 7.40625C26.2812 7.875 26.2969 8.26562 26.2969 8.57812V9C26.2969 11.8125 26.125 13.8906 25.7812 15.2344C25.625 15.7656 25.3438 16.2344 24.9375 16.6406C24.5312 17.0469 24.0469 17.3281 23.4844 17.4844C22.8906 17.6406 21.7656 17.7656 20.1094 17.8594C18.4531 17.9219 16.9375 17.9688 15.5625 18H13.5C8.15625 18 4.82812 17.8281 3.51562 17.4844C2.29688 17.1406 1.53125 16.3906 1.21875 15.2344C1.0625 14.6406 0.9375 13.8281 0.84375 12.7969C0.78125 11.7344 0.734375 10.8438 0.703125 10.125V9C0.703125 6.21875 0.875 4.15625 1.21875 2.8125C1.375 2.25 1.65625 1.76563 2.0625 1.35938C2.46875 0.953125 2.95312 0.671875 3.51562 0.515625C4.10938 0.359375 5.23438 0.25 6.89062 0.1875C8.54688 0.09375 10.0625 0.03125 11.4375 0H13.5C18.8438 0 22.1719 0.171875 23.4844 0.515625C24.0469 0.671875 24.5312 0.953125 24.9375 1.35938C25.3438 1.76563 25.625 2.25 25.7812 2.8125ZM10.875 12.8438L17.5781 9L10.875 5.20312V12.8438Z" fill="#00093C"/>
            </svg>
          </a>

        </li>
        </navbar>
      </div>
    </div>

    <div class="header" :class="{mobileMenu__bcg: menuVisible}">
      <router-link to="/" class="logo__container">
        <img src="../assets/images/logoWhite.svg" alt="Furute Academy Logo" class="logo logoDark">
        <img src="../assets/images/Logo.svg" alt="Furute Academy Logo" class="logo">
      </router-link>
      
      <p class="academy__name">
        Future Academy HOD
      </p>

      <navbar></navbar>

      <div class="button_container" @click="showMenu">
        <div class="menu__button" :class="{closeMenu: menuVisible === true}"></div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">

// Header section styles
 .header {
  width: 100%;
  height: 110px;
  background-color: $white;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  display: flex;
  position:fixed;
  z-index: 10000;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 2px 0px #c9caca;
  .logo__container {
    margin-right: 65px;
  }
  .logoDark {
    display: none;
  }
  .nav__text {
    color: $black;
    cursor: pointer;
  }
 }

.mobileMenu__bcg {
  @include dark;
}

.header__dark {
  .header {
    @include dark;
    nav {
      .sub-menu {
        .nav__text {
          color: $black;        
        }
      }
    }
  }
  .focus {
    &::before {
      background: $white;
    }
  }
  li a.nav__text, .dropdown .nav__text {
    &:hover {
      color: $dark_blue
    }
    &::before {
      border-top: 2px solid $white;
      border-bottom: 2px solid $white;
    }
    &::after {
      background-color: $white;
    }
  }
}

.academy__name {
  display: none;
  font-size: 28px;
  margin-right: 40px;
}

.mobile__menu {
  display: none;
  position: fixed;
  top: 110px;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 1001;
  background: rgba(0, 0, 0, .3);
}

.menu{
    height: 100%;
    width: 320px;
    background-color: $white;
    padding: 30px 0 30px 10px;
    ul {
      display: flex;
      gap: 10px;
      flex-direction: column;
      li {
        max-width: 300px;
      }
    }
}

.button_container {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.menu__button {
  display: none;
  background-color: $dark_blue;
  width: 17px;
  height: 4px;
  border-radius: 10px;
  position: relative;
  margin: auto;    
  top: 50%;
  left: 5px;
  &::before {
      content: '';
      transition: all ease .5s;
      position: absolute;
      top: 10px;
      left: -13px;
      width: 30px;
      height: 4px;
      background-color: $dark_blue;
  }
  &::after {
      content: '';
      transition: all ease .5s;
      position: absolute;
      top: -10px;
      left: -13px;
      width: 30px;
      height: 4px;
      background-color: $dark_blue;
  }
}

.closeMenu {
  height: 0px;
  width: 0px;
  &::before {
    left: -20px;
    top: 0;
    transform: rotate(135deg);
  }
  &::after {
    left: -20px;
    top: 0;
    transform: rotate(45deg);
  }
}

@media screen and (max-width: 1050px) {
  li a.nav__text, .dropdown .nav__text, .menu-item a {
    padding: 0 5px;
    &::before, &::after {
      content: none;
    }
    &:hover {
      color: $dark_blue;
      border-bottom: 1px solid $dark_blue;
      width: max-content;
    }
  }
  .header {
    padding: 0 30px;
    justify-content: space-between;
    .academy__name {
      display: block;
    }
    .logo__container {
      margin: 0;
    }
  }
  .mobile__menu {
    display: block;
    nav {
      .focus {
        &::before {
          display: none;
        }
      }

      .sub-menu {
        padding: 0;
        height: 315px;
        width: 300px;
        margin: 0;
        top: 30px;
        left: 10px;
        h3 {
          display: none;
        }
        .wrapper {
          box-shadow: inset 0px 0px 1px 1px #dedfe0;
          padding: 10px;
          background: $white;
          z-index: 6;
          height: 315px;
          flex-wrap: nowrap;
          width: 300px;
        }
      }
      .dropdown {
        .wrapper {
          gap: 10px; 
        }
      }
    }
  }
  .menu__button {
    display: block;
  }
}


@media screen and (max-width: 870px) {
  .header {
    padding: 10px;
    height: 60px;
    .logo {
      height: 40px;
    }
  }
  header {
    .mobile__menu {
      top: 60px;
    }
  } 
}


@media screen and (max-width: 600px) {
  .header {
    .academy__name {
      display: none;
    }
  }
}
@media screen and (max-width: 450px) {
  .menu {
    width: 100%;
  }
}

</style>

<script>
export default {
  name: 'my_header',
  data() {
    return {
      menuVisible: false
    }
  },
   methods: {
    showMenu() {
      if (this.menuVisible === false) {
          document.body.classList.add('overlay')
          return this.menuVisible = true;
      } else {
          document.body.classList.remove('overlay')
          return this.menuVisible = false;
      }
    },
    removeOverlay() {
      document.body.classList.remove('overlay')
    }
  },   
  props: {
    darkTheme: {
      require: true,
      type: Boolean
    }
  },
}
</script>