<template>
  <div class="container modal__container">
    <div class="modal hover">
      <div class="modal__wrapper">
        <owl></owl>
        <div class="question">
          <div v-if="isValid">
              <h4 class="valid__message">Спасибо! 
                  В течении следующих 3-х рабочих дней мы с вами свяжемся!</h4>
          </div>
          <div v-if="error">
            <h4 class="error__message">Все поля должны быть заполненными!</h4>
          </div>
          <div v-if="owlMessage">
              <h4>
                  Помочь с выбором?
              </h4>
              <p>
                  Оставьте заявку и наши специалисты свяжутся 
                  с вами, ответят на все вопросы 
                  и подберут подходящий вариант обучения.
              </p>
          </div>
        </div>
        <form class="form" method="post" >
          <div class="userName hover">
            <div class="wrapp__item">
              <input type="text" placeholder="Ваше имя" v-model="state.text"  :class="{input__error: error, input__required: isValid}">
            </div>
          </div>
          <div class="input__wrapper"> 
            <div class="hover">
              <div class="wrapp__item">
                <input class="input--sm" type="text" placeholder="Ваш телефон" v-model="state.phoneNumber" :class="{input__error: error, input__required: isValid}">
              </div>
            </div>
            <div class="hover">
              <div class="wrapp__item">
                <input class="input--sm" type="text" placeholder="Ваш e-mail" v-model="state.email" :class="{input__error: error, input__required: isValid}">
              </div>
            </div>
          </div>
          <div class="input__wrapper">
            <span>
              <a href="#">
                Нажимая на кнопку, я соглашаюсь на обработку персональных 
                данных и с правилами пользования Платформой.
              </a>
            </span>
            <button type="submit" @click.prevent="isRequired">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

 h4 {
   margin-bottom: 25px;
   font-size: 24px;
 }
 p {
   font-size: 16px;
 }

.modal {
  height: 270px;
  border-radius: 20px;
  background-color: $white;
  position: relative;
  top: 40px;
  width: 100%;
  max-width: 1180px;
  .modal__wrapper {
    border-radius: 20px;
    background-color: $white;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: center;
    padding: 20px;
    .owl {
      position: relative;
      left: -5%;
      top: 50px;
    }
    .question {
      background-image: url("../assets/images/questionBcg.svg");
      background-repeat: no-repeat;
      position: relative;
      left: -4%;
      top: -15px;
      background-size: contain;
      max-width: 390px;
      height: 190px;
      color: $black;
      div {
        padding: 25px 25px 15px 50px;          
        height: inherit;
        font-weight: 600;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: relative;
      right: auto;
      .input__wrapper {
        display: flex;
        gap: 20px;
      }
      .wrapp__item {
        background-color: $white;
      }
      input {
        width: 100%;
        max-width: 440px;
        background-color: rgba(0, 9, 60, 0.204);
        padding: 15.5px 19px 17.5px;
        border-radius: 6px;
        border: none;
        z-index: 50;
        position: relative;
        &:focus {
          background: 
            linear-gradient(rgb(227, 227, 227), rgb(227, 227, 227)) padding-box,
            linear-gradient(to right, $orange, $blue) border-box;
          border-radius: 6px;
          border: 2px solid transparent;
          outline: none;
        }
      }
      .input--sm, span, button {
        max-width: 210px;
      }
      a {
        color: gray;
        font-size: 10px;
      }
      button {
        background-color: $orange;
        color: $white;
        border: none;
        height: 50px;
        &:hover {
          background-color: #FFAE4D;
        }
      }
    }
  }
}

.error__message {
  margin-top: 30px;
}

.input__error {
  outline: tomato 1px solid;
}

.input__required {
  outline: green 1px solid;
}

@media screen and (max-width: 1090px){
  .valid__message {
    margin: 30px 15px 0 0;
  }
  .container {
    padding-top: 100px;
  }
  .modal {
    height: max-content;
    max-width: 750px;
    margin: auto;
    .modal__wrapper {
      .owl {
        left: -77px;
        top: 5px;
      }
      .question {
        background-image: url("../assets/images/owlMessageResponsive.svg");
        position: absolute;
        max-width: 350px;
        top: -140px;
        left: 7%;
        div{
          padding: 10px;
          width: 85%;
          margin-left: auto;
        }
      }
    }
  }
  h4 {
    font-size: 18px;
    margin-bottom: 15px;
  }
  p {
    font-size: 16px;
  }
}

@media screen and (max-width: 720px) {
  .container {
    padding-top: 0;
  }
  .modal {
    width: 100%;
    .modal__wrapper {
      flex-wrap: wrap;
      .owl {
        position: relative;
        left: -77px;
        top: -5px;
      }
      .question {
        background-image: url("../assets/images/questionBcg.svg");
        top: 18px;
        left: 23%;
      }
      .form {
        margin: auto;
      }
    }
  }
}


@media screen and (max-width: 500px) {
  .container {
    padding: 0;
  }
  .modal {
    max-width: 400px;

    .modal__wrapper {
      flex-direction: column;
      align-items: flex-start;
      gap: 50px;
      .owl {
        position: absolute;
        top: 50px;
        left: -57px;
      }
      .question {
        position: relative;
        background-size: contain;
        width: 245px;
        height: 150px;
        left: 14%;
        top: 31px;
        div {
          padding: 0;
          width: 85%;
          margin-left: auto;
        }
      }
      form {
        margin: auto;
      }
    }
  }
  h4 {
    font-size: 14px;
    line-height: 20px;
    margin: 4px 0;
  }
  p {
    font-size: 12px;
    line-height: 16px;
  }
}
</style>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { reactive } from 'vue'

export default {
  name: 'modal',
  data() {
    return {
      v$: useVuelidate(),
      text: '',      
      email: '',
      phoneNumber: '',
      isValid: false,
      error: false,
      owlMessage: true
    }
  },
  methods: {
    isRequired() {
      this.v$.$validate()
      this.owlMessage = false
      if(!this.v$.$error) {
        this.error = false
        return this.isValid = true 
      } else {
        this.isValid = false 
        return this.error = true
      }
    }
  },
  validations() {
    return {
      text: { required },      
      email: { required, email },
      phoneNumber: { required },
    }
  },
  setup () {
    const state = reactive({
      text: '',      
      email: '',
      phoneNumber: '',
    })
    const rules = {
      text: { required },      
      email: { required, email },
      phoneNumber: { required },
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  }
}
</script>