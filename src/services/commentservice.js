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
}
