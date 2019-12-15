<template>
  <div id="app2" class="hero">
    <h3 class="vue-title"><i class="fa fa-coffe" style="padding: 3px"/>{{messagetitle}}</h3>
      <form @submit.prevent="submit">
        <div class="form-group">
          <input class="form__input" name="story" placeholder="enter your story's ID" v-model="story"/>
          <button class="btn btn-primary btn1" type="submit">Search</button>
        </div>
      </form>
      <v-client-table :name="comments" :columns="columns" :data="comments" :options="options">
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x"
           @click="deleteComment(props.row.story,props.row._id)"/>
      </v-client-table>
  </div>
</template>

<script>
import commentservice from '@/services/commentservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
Vue.use(VueSweetalert2)
export default {
  name: 'Comments',
  data () {
    return {
      comments: [],
      messagetitle: 'Search for comments',
      props: ['_id'],
      username: this.$store.state.username,
      com_content: '',
      story: '',
      com_upvotes: 0,
      com_downvotes: 0,
      columns: ['story', 'username', 'com_content', 'remove'],
      options: {
        perPage: 10,
        filterable: ['username', 'com_content'],
        sortable: ['upvotes'],
        headings: {
          story: 'StoryID',
          username: 'Username',
          com_content: 'Content'
        }
      }
    }
  },
  created () {
    this.searchComment()
  },
  methods: {
    submit () {
      console.log('submit!')
      //  this.$v.$touch()
      setTimeout(() => {
        var story = this.story
        this.story = story
        this.searchComment(this.story)
      }, 500)
    },
    searchComment: function (story) {
      commentservice.fetchComment(story)
        .then(response => {
          // JSON responses are automatically parsed.
          this.comments = response.data
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    deleteComment: function (story, id) {
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
          commentservice.deleteComment(story, id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.searchComment(story)
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this comment ' + JSON.stringify(response.data, null, 5), 'success')
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
  #app2 {
    width: 60%;
    margin: 0 auto;
  }
  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 300px;
    height: 40px;
  }
  .btn1 {
    width: 100px;
    height: 40px;
    font-size:18pt;
    text-align: center;
    padding: 0;
  }
</style>
