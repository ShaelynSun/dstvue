import Api from '@/services/api'

export default {
  fetchComment (id) {
    return Api().get(`/comments/${id}`)
  },
  addComment (id, comment) {
    console.log('REQUESTING ' + comment._id + ' ' +
        JSON.stringify(comment, null, 5))
    return Api().put(`/stories/${id}/addComment`, comment)
  },
  deleteComment (story, id) {
    return Api().delete(`/comments/${story}/${id}`)
  }
  // fetchStory (id) {
  //   return Api().get(`/stories/${id}`)
  // },
  // editStory (id, story) {
  //   console.log('REQUESTING ' + story._id + ' ' +
  //     JSON.stringify(story, null, 5))
  //   return Api().post(`/edit/${id}`, story)
  // }
}
