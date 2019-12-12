<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-star" style="padding: 3px"></i>{{messagetitle}}</h3>
  <form @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group--error': $v.story.$error }">
      <label class="form-control-label" name="story">Story ID</label>
      <input class="form__input" placeholder="storyId" v-model.trim="$v.story.$model"/>
    </div>
    <div class="error" v-if="!$v.story.required">storyId is Required</div>
    <div class="error" v-if="!$v.story.minLength">StoryID must have at least {{$v.story.$params.minLength.min}} letters.</div>
    <div class="form-group" :class="{ 'form-group--error': $v.com_content.$error }">
      <label class="form__label">Com_Content</label>
      <input class="form__input" placeholder="comment content" v-model.trim="$v.com_content.$model"/>
    </div>
    <div class="error" v-if="!$v.com_content.required">Content is Required</div>
    <div class="error" v-if="!$v.com_content.minLength">Content must have at least {{$v.com_content.$params.minLength.min}} letters.</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Add Comment</button>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Add successful!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding your comment...</p>
  </form>
  </div>
</template>

<script>
import commentservice from '@/services/commentservice'
import { required, minLength } from 'vuelidate/lib/validators'
import Vue from 'vue'
import {Vuelidate} from 'vuelidate'
import VueForm from 'vueform'
import VueSweetalert from 'vue-sweetalert'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)
export default {
  data () {
    return {
      messagetitle: 'Add Comments',
      com_content: '',
      story: '',
      comment: {},
      submitStatus: null
    }
  },
  validations: {
    com_content: {
      required,
      minLength: minLength(5)
    },
    story: {
      required,
      minLength: minLength(24)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var comment = {
            story: this.story,
            com_content: this.com_content
          }
          this.comment = comment
          this.submitComment(this.comment)
        }, 500)
      }
    },
    submitComment: function (comment) {
      commentservice.addComment(comment.story, comment)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 30pt;
    margin-bottom: 10px;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }
  .form-group {
    width: 550px;
    margin-left: 150px;
  }
  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 550px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    width: 550px;
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
    margin-left: 150px;
  }

  .error:focus {
    width: 550px;
    outline-color: #ffa519;
    margin-left: 150px;
  }
</style>
