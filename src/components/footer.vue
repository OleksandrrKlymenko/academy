<template>
  <footer>
    <div class="container">
      <div class="contacts">
        <a href="#" class="logo">
          <img src="../assets/images/logoWhite.svg" alt="Logo icon">
        </a>
        <p class="contacts_phone">
          +38(097)123 1234
        </p>
        <p>
          г. Одесса, ул.Дерибассовская, д.23
        </p>
        <p>
          info@hodfutureacademy.com
        </p>
        <div class="contacts__socials">
          <a href="#">
            <img src="../assets/images/icons/instagram.svg" alt="instagram icon">
          </a>
  
          <a href="#">
            <img src="../assets/images/icons/facebook.svg" alt="facebook icon">
          </a>
  
          <a href="#">
            <img src="../assets/images/icons/youtube.svg" alt="youtube icon">
          </a>
  
          <a href="#">
            <img src="../assets/images/icons/telegram.svg" alt="telegram icon">
          </a>
        </div>
        <p class="socials__mark">
          @ХОД, Future Academy
        </p>
      </div>
  
      <div class="list">
        <p>LOREM</p>
        <ul>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
        </ul>
      </div>
  
      <div class="list">
        <p>LOREM</p>
        <ul>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
        </ul>
      </div>
  
      <div class="list">
        <p>LOREM</p>
        <ul>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
        </ul>
      </div>
      <div class="list">
        <p>LOREM</p>
        <ul>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

  footer {
    height: 600px;
    width: 100%;
    max-width: 1920px;
    background-color: #00093c;
    padding: 70px 0 50px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    .container {
      display: flex;
      justify-content: center;
      gap: 60px;
      img {
        width: min-content;
      }
      .list {
        p {
          font-size: 16px;
          line-height: 26px;
          font-weight: 700;
        }
        ul {
          li {
            line-height: 34px;
            a {
              color: $white;
            }
          }
        }
      }
      .contacts {
        display: flex;
        flex-direction: column;
        gap: 15px;
        .contacts_phone {
          font-size: 18px;
          font-weight: 600;
        }
        .logo {
          margin-bottom: 45px;
        }
        .contacts__socials {
          display: flex;
          gap: 20px;
          margin: 35px 0 25px 0;
        }
        .socials__mark {
          font-size: 12px;
          color: #BDBDBD;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    footer {
      height: 100%;
      .logo {
        display: none;
      }
      .list {
        display: none;
      }
    }
  }

</style>

<script>
  export default {
    name: 'my_footer'
  }
</script>