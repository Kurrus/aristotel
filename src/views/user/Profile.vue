<template>
  <div class="user-content-section">
    <template v-if="user">
      <div class="page-sub-title user-sub-title">
        <h2><i class="fa-title"></i>Профиль</h2>
      </div>
      <div class="profile-list">
        <div class="profile-item">
          <div class="profile-title">
            <div class="courses-title-frame cart-title">
              <i class="fa-title"></i>
              <h2>Личные данные</h2>
              <svg class="invalid"
                   v-if="user.first_name === '' || user.last_name === '' || user.full_name === '' || user.date_birth === '' || user.login === '' || user.city === '' || user.street === ''"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                <path fill="currentColor"
                      d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path>
              </svg>
            </div>
            <i class="fa-reset profile-icon"></i>
          </div>
          <form action="#" @change.prevent="submitUpdate" method="post" class="user-form user-form-input">

            <div class="user-form-group">
              <input type="text" :class="{invalid: !$v.user.first_name.required && $v.user.first_name.$dirty}"
                     v-model="user.first_name" class="user-profile-input" placeholder="Имя">
              <div class="error" v-if="!$v.user.first_name.required && $v.user.first_name.$dirty">Введите ваше Имя</div>
            </div>

            <div class="user-form-group">
              <input type="text" :class="{invalid: !$v.user.last_name.required && $v.user.last_name.$dirty}"
                     v-model="user.last_name" class="user-profile-input" placeholder="Отчество">
              <div class="error" v-if="!$v.user.last_name.required && $v.user.last_name.$dirty">Введите ваше Отчество
              </div>
            </div>

            <div class="user-form-group">
              <input type="text" :class="{invalid: !$v.user.full_name.required && $v.user.full_name.$dirty}"
                     v-model="user.full_name" class="user-profile-input" placeholder="Фамилия">
              <div class="error" v-if="!$v.user.full_name.required && $v.user.full_name.$dirty">Введите вашу Фамилию
              </div>
            </div>

            <div class="user-form-group">
              <date-picker
                  v-model="user.date_birth"
                  format="YYYY-MM-DD"
                  value-type="YYYY-MM-DD"
                  type="date"
                  :input-attr="{class:'user-profile-input'}"
                  placeholder="Select date"
                  @change="submitUpdate"
                  style="width: 100%;"
              ></date-picker>
            </div>

            <div class="user-form-group">
              <input type="text" :class="{invalid: !$v.user.phone.required && $v.user.phone.$dirty}"
                     v-model="user.phone" name="" class="user-profile-input input-mask"
                     v-maska="'+ 998 - ## - ### - ## - ##'" placeholder="+ 998 - __ - ___ - __ - __">
              <div class="error" v-if="!$v.user.phone.required && $v.user.phone.$dirty">Введите номер телефона</div>
            </div>

            <div class="user-form-group">
              <div></div>
            </div>

            <div class="user-form-group">
              <input type="text" :class="{invalid: !$v.user.city.required && $v.user.city.$dirty}" v-model="user.city"
                     class="user-profile-input" placeholder="Введите город">
              <div class="error" v-if="!$v.user.city.required && $v.user.city.$dirty">Введите ваш город</div>
            </div>

            <div class="user-form-group">
              <input type="text" :class="{invalid: !$v.user.street.required && $v.user.street.$dirty}"
                     v-model="user.street" class="user-profile-input" placeholder="Введите улицу">
              <div class="error" v-if="!$v.user.street.required && $v.user.street.$dirty">Введите вашу улицу</div>
            </div>


          </form>
        </div>
        <div class="profile-item">
          <div class="profile-title">
            <div class="courses-title-frame cart-title">
              <i class="fa-title"></i>
              <h2>Пароль</h2>
            </div>
            <i class="fa-reset profile-icon"></i>
          </div>
          <form action="#" method="post" class="user-form user-form-password">
            <div class="user-form-group" v-if="!old_password_check">
              <input type="password" v-model="old_password" class="user-profile-input" placeholder="Старый пароль">
              <div class="error" v-if="!$v.old_password.required && $v.old_password.$dirty">Введите пароль</div>
              <div class="error" v-if="!$v.old_password.minLength && $v.old_password.$dirty">Пароль должен иметь минимум
                {{ $v.old_password.$params.minLength.min }} символов.
              </div>
            </div>
            <div class="user-form-group" v-if="old_password_check">
              <input type="password" :class="{invalid: !$v.password1.required && $v.password1.$dirty}"
                     v-model="password1" class="user-profile-input" placeholder="Новый пароль">
              <div class="error" v-if="!$v.password1.required && $v.password1.$dirty">Введите пароль</div>
              <div class="error" v-if="!$v.password1.minLength && $v.password1.$dirty">Пароль должен иметь минимум
                {{ $v.password1.$params.minLength.min }} символов.
              </div>
            </div>
            <div class="user-form-group" v-if="old_password_check">
              <input type="password" :class="{invalid: !$v.password2.sameAsPassword && $v.password2.$dirty}"
                     v-model="password2" class="user-profile-input" placeholder="Повторите новый пароль">
              <div class="error" v-if="!$v.password2.sameAsPassword && $v.password2.$dirty">Пароли не совпадают</div>
            </div>
            <label class="user-sub" v-if="!old_password_check">
              <input type="submit" @click.prevent="submitCheckPassword">Проверить
            </label>
            <label class="user-sub" v-else>
              <input type="submit" @click.prevent="submitNewPassword">Подтвердить
            </label>
          </form>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ru';
import {minLength, required, sameAs} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      old_password: '',
      old_password_check: false,
      password1: '',
      password2: ''
    }
  },
  methods: {
    async submitUpdate() {
      let user = new FormData();
      if (user.date_birth === null)
      {
        user.date_birth = '2021-12-12'
      }
      user.append('image', "");
      user.append('first_name', this.user.first_name);
      user.append('last_name', this.user.last_name);
      user.append('full_name', this.user.full_name);
      user.append('phone', this.user.phone.replace(/-|\s/g, "").replace(/[{()}]/g, ''));
      user.append('country', "Узбекистан");
      user.append('city', this.user.city);
      user.append('date_birth', this.user.date_birth || '');
      user.append('street', this.user.street);

      try {
        await this.$store.dispatch('profileUpdate', user)
      } catch (e) {
        console.log(e)
      }
    },
    async submitCheckPassword() {
      this.$v.old_password.$touch()
      if (this.$v.old_password.$invalid) {
        return
      }
      let password = {
        old_password: this.old_password
      }
      try {
        await this.$store.dispatch('checkPassword', password)
        this.old_password_check = true
        this.old_password = ''
        this.password1 = ''
        this.password2 = ''
        this.$v.$reset()
        this.$v.user.$touch()
      } catch (e) {
        this.old_password_check = false
        this.old_password = ''
        this.password1 = ''
        this.password2 = ''
        this.$v.$reset()
        this.$v.user.$touch()
      }
    },
    async submitNewPassword() {
      this.$v.$touch()
      if (this.$v.password1.$invalid || this.$v.password2.$invalid) {
        return
      }
      let password = {
        password1: this.password1,
        password2: this.password2
      }
      try {
        await this.$store.dispatch('newPassword', password)
        this.old_password_check = false
        this.old_password = ''
        this.password1 = ''
        this.password2 = ''
        this.$v.$reset()
        this.$v.user.$touch()
      } catch (e) {
        this.old_password_check = false
        this.old_password = ''
        this.password1 = ''
        this.password2 = ''
        this.$v.$reset()
        this.$v.user.$touch()
      }
    }
  },
  created() {
    this.$v.user.$touch()

  },
  validations: {
    user: {
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      full_name: {
        required,
      },
      date_birth: {
        required,
      },
      phone: {
        required,
      },
      city: {
        required,
      },
      street: {
        required,
      },
    },
    old_password: {
      required,
      minLength: minLength(6)
    },
    password1: {
      required,
      minLength: minLength(6)
    },
    password2: {
      sameAsPassword: sameAs('password1')
    },

  },
  computed: {
    user() {
      return this.$store.getters.getUserCredentials;
    },
  },
  components: {DatePicker},
}
</script>