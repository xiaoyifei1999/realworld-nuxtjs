<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input class="form-control"
                       type="text"
                       v-model="user.image"
                       placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg"
                       type="text"
                       v-model="user.username"
                       placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg"
                          rows="8"
                          v-model="user.bio"
                          placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg"
                       type="text"
                       v-model="user.email"
                       placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg"
                       type="password"
                       v-model="user.password"
                       placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right"
                      @click="onSubmmit">
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr>
          <button class="btn btn-outline-danger"
                  @click="logout">
            Or click here to logout.
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { updateMyMessage, getMyMessage } from '@/api/myMessage'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'authenticated',
  name: 'settingIndex',
  data () {
    return {
      user: {
        email: '',
        bio: '',
        image: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmmit () {
      try {
        const { data } = await updateMyMessage({
          user: this.user
        })
        this.$router.push('/profile')
      } catch (err) {

      }
    },
    logout () {
      this.$store.commit('setUser', null)
      Cookie.remove('user')
      this.$router.push('/')
    }
  },
  async created () {
    const { data: { user } } = await getMyMessage()
    console.log(user);
    this.user.email = user.email
    this.user.bio = user.bio
    this.user.image = user.image
    this.user.username = user.username
  }
}
</script>

<style>
</style>