<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-book" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <story-form :story="story" storyBtnTitle="Add Story" @story-is-created-updated="addStory"></story-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import StoryForm from '@/components/story/StoryForm'
import storyservice from '@/services/storyservice'

export default {
  data () {
    return {
      story: {
        title: '',
        username: '',
        type: 'Myth',
        class: 'Chinese',
        content: ''
      },
      messagetitle: ' Add Story '
    }
  },
  components: {
    'story-form': StoryForm
  },
  methods: {
    addStory: function (story) {
      storyservice.addStories(story)
        .then(response => {
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
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
