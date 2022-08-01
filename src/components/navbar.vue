<template>
    <nav>
        <ul>
          <li>
            <router-link to="/" class="nav__text">
              Все курсы
            </router-link>
          </li>
          <li>
            <router-link to="/events" class="nav__text">
              Мероприятия
            </router-link>
          </li>
          <li>
            <router-link to="/news/" class="nav__text">
              Новости
            </router-link>
          </li>
          <li>

            <dropdown></dropdown>

          </li>
          <li class="number contacts">+38(097)123 1234</li>
          <slot></slot>
        </ul>
    </nav>
</template>

<style lang="scss">
  nav {
    display: flex;
    font-weight: 500;
    ul {
      display: flex;
      align-items: center;
      gap: 40px;
    }
    a{
      color: $white;
    }
  }

  .nav__text {
    color: $black;
  }

  select {
    border: none;
    background-color: $white;
  }

  .nav__text, .dropdown__text {
    position: relative;
    display: block;
    padding: 10px;
    transition: .5s;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 110%;
      border-top: 2px solid $dark_blue;
      border-bottom: 2px solid $dark_blue;
      transform: scaleY(2);
      opacity: 0;
      transition:  all ease .3s;
      border-radius: 25px;
    }
    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 0;
      border-radius: 25px;
      width: 100%;
      height: 100%;
      background-color: $dark_blue;
      transform: scale(0);
      opacity: 0;
      transition: all ease .3s;
      z-index: -1;
    }
    &:hover {
      color: #fff;
      &:before {
        transform: scaleY(1);
        opacity: 1;
      }
      &:after {
        transform: scaleY(1);
        opacity: 1;
      }
    }
  }

@media screen and (max-width: 1050px) {
  header {
    nav {
      display: none;
    }
    .mobile__menu {
      nav {
        display: block;
        line-height: 38px;
        ul {
          gap: 20px; 
          justify-content: flex-start;
          align-items: flex-start;
          .contacts {
            color: $dark_blue;
            font-weight: 500;
            &:nth-child(2) {
              margin: 2px 0;
            }
          }
          .number {
            margin-top: 40px;
            color: $dark_blue;
            font-size: 18px;
            font-weight: 600;
          }
          .socials {
            margin-top: 25px;
            display: flex;
            gap: 40px;
            flex-direction: row;
          }
        }
      }
    }
  }
}
</style>

<script>
  export default {
    name: 'navbar',
  }
</script>