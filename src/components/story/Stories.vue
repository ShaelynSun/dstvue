<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
      <v-client-table :columns="columns" :data="stories" :options="options">
        <a slot="upvote" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="upvote(props.row._id)"></a>
        <a slot="downvote" slot-scope="props" class="fa fa-thumbs-down fa-2x" @click="downvote(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteStory(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editStory(props.row._id)"></a>
      </v-client-table>
  </div>
</template>

<script>
import storyservice from '@/services/storyservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
Vue.use(VueSweetalert2)

export default {
  name: 'Stories',
  data () {
    return {
      stories: [],
      errors: [],
      props: ['_id'],
      messagetitle: 'Stories',
      columns: ['title', 'username', 'type', 'class', 'content', 'written_times', 'upvotes', 'upvote', 'downvote', 'edit', 'remove'],
      options: {
        perPage: 10,
        filterable: ['title', 'type', 'class', 'upvotes'],
        sortable: ['upvotes'],
        headings: {
          title: 'Title',
          username: 'Username',
          type: 'Type',
          class: 'Class',
          Content: 'Content',
          written_times: 'Written times',
          upvotes: 'Upvotes',
          downvotes: 'Downvotes'
        }
      }
    }
  },
  created () {
    this.loadStories()
  },
  methods: {
    loadStories: function () {
      storyservice.fetchStories()
        .then(response => {
          // JSON responses are automatically parsed.
          this.stories = response.data
          console.log(this.stories)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    upvote: function (id) {
      storyservice.upvoteStories(id)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    downvote: function (id) {
      storyservice.downvoteStories(id)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editStory: function (id) {
      this.$router.params = id
      this.$router.push('edit')
    },
    deleteStory: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result)
        if (result) {
          storyservice.deleteStory(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadStories()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this story ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          this.$swal('Cancelled', 'Your Story still Counts!', 'info')
        }
      })
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
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
</style>
