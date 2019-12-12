import Api from '@/services/api'

export default {
  fetchStories () {
    return Api().get('/stories')
  },
  addStories (story) {
    return Api().post('/stories', story)
  },
  upvoteStories (id) {
    return Api().put(`/stories/${id}/upvote`)
  },
  downvoteStories (id) {
    return Api().put(`/stories/${id}/downvote`)
  },
  deleteStory (id) {
    return Api().delete(`/stories/${id}`)
  },
  fetchStory (id) {
    return Api().get(`/stories/${id}`)
  },
  editStory (id, story) {
    console.log('REQUESTING ' + story._id + ' ' +
      JSON.stringify(story, null, 5))
    return Api().post(`/edit/${id}`, story)
  }
}
