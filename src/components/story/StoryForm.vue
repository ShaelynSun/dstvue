<template>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label class="form-label">Select Story Type</label>
          <select id="type" name="type" class="form-control" type="text" v-model="type">
            <option value="null" selected disabled hidden>Choose Story Type</option>
            <option value="Myth">Myth</option>
            <option value="Song">Song</option>
            <option value="Custom">Custom</option>
            <option value="Novel">Novel</option>
            <option value="Film">Film</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Select Story Class</label>
          <select id="classes" name="classes" class="form-control" type="text" v-model="classes">
            <option value="null" selected disabled hidden>Choose Story Class</option>
            <option value="Chinese">Chinese</option>
            <option value="English">English</option>
            <option value="Foreign">Foreign</option>
          </select>
        </div>
        <div class="form-group" :class="{ 'form-group--error': $v.title.$error }">
          <label class="form-control-label" name="title">Title</label>
          <input class="form__input" placeholder="enter your title" v-model.trim="title"/>
        </div>
        <div class="error" v-if="!$v.title.required">Title is Required</div>
        <div class="error" v-if="!$v.title.minLength">Title must have at least {{$v.title.$params.minLength.min}} letters.</div>
        <div class="form-group" :class="{ 'form-group--error': $v.content.$error }">
          <label class="form__label">Content</label>
          <input class="form__input" placeholder="enter your story's content" v-model.trim="$v.content.$model"/>
        </div>
        <div class="error" v-if="!$v.content.required">Content is Required</div>
        <div class="error" v-if="!$v.content.minLength">Content must have at least {{$v.content.$params.minLength.min}} letters.</div>
        <p>
          <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Add Story</button>
        </p>
        <p class="typo__p" v-if="submitStatus === 'OK'">Get your story!</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding story</p>
      </form>
</template>

<script>
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
  name: 'StoryForm',
  props: ['storyBtnTitle', 'story'],
  data () {
    return {
      messagetitle: 'Add Stories',
      content: this.story.content,
      title: this.story.title,
      type: this.story.type,
      class: this.story.class,
      username: this.$store.state.username,
      written_times: this.story.written_times,
      upvotes: 0,
      downvotes: 0,
      submitStatus: null
    }
  },
  validations: {
    title: {
      required,
      minLength: minLength(5)
    },
    content: {
      required,
      minLength: minLength(5)
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
          var story = {
            title: this.title,
            type: this.type,
            class: this.classes,
            username: this.$store.state.username,
            content: this.content,
            written_times: this.written_times,
            upvotes: this.upvotes,
            downvotes: this.downvotes
          }
          this.story = story
          console.log('Submitting in StoryForm : ' + JSON.stringify(this.story, null, 5))
          this.$emit('story-is-created-updated', this.story)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
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
  .story-form .form-control-label.text-left{
    text-align: left;
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
  }

  .error:focus {
    width: 550px;
    outline-color: #ffa519;
  }
</style>
