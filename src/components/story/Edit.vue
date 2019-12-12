<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <story-form :story="story" storyBtnTitle="Update Story"
                           @story-is-created-updated="editStory"/>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import StoryForm from '@/components/story/StoryForm'
import storyservice from '@/services/storyservice'

export default {
  name: 'Edit',
  data () {
    return {
      story: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: 'Edit Stories'
    }
  },
  components: {
    'story-form': StoryForm
  },
  created () {
    this.getStory()
  },
  methods: {
    getStory: function () {
      storyservice.fetchStory(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.story = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Story in Edit: ' + JSON.stringify(this.story, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editStory: function (story) {
      console.log('Before PUT ' + JSON.stringify(story, null, 5))
      storyservice.editStory(this.$router.params, story)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(story, null, 5))
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

</style>
