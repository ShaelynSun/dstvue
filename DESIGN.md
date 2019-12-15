Name: Xinyue Sun (Shaelyn)
ID:   20086486

Web App functionality
- Description
This is a dynamic storytelling website. Everyone can post their own story. When uploaded, other users will see your incomplete story, and if he is interested, he will help you continue this story.
(p.s. The main part means the original story uploaded. And the comments mean the continuation of the story.)

First enter the web page, you can first see a Home page, the time above is the countdown to the Spring Festival, which uses the Vue component (will be introduced below).

Click stories to go in and view all the uploaded stories. Of course, because the user is not logged in, the user cannot edit and delete. And you cannot add stories and comments.
Top Bar shows login and registration on the right. There is a username and password login and Google Jump Login on the login interface.
(I'm sorry I can only log in here simply, because I don't use a backend such as jwt, so I didn't learn how to save the Google login status in the session, so this Google login button can only implement the jump page login, and then return (Original interface)
(It is worth noting that this page refresh will log out, so please choose to click the Top Bar to jump to the page and return to the current page to implement the function of ‘refreshing.’)

Use your username and password to log in to the webpage, you can query all the stories, like the content of the story, downvotes (this data is not visible, from the comfort of the app, I personally think it ’s bad The larger the number, the user will have a certain blind guide to read the story), edit, or delete the story.

The user clicks "Add Story" to enter the story editing page. At this time, the webpage obtains the currently logged in user name and automatically transfers the username into the database with the story.

On the stories page, you can see the id. Copy the ID to the input box of the comments page and enter the id to query all the comments of the story. Can implement the delete function.

The Map page uses Google's api, and the input box is also a built-in function of the api, which can search for places. But because the bank card is not bound, the map function cannot be realized.

On the registration page, the button below is "To Sign". When the registration is successful, the button changes to "Successful! To Sign" and jumps to the login interface.

Login interface, enter the user name and password, and click Login. Landing successfully jumps to the personal page. You can query all your uploaded stories.

When the user is not logged in, the top right corner of the Top Bar is Register and Sign in. When the user logs in, Personal and Logout are displayed in the upper right corner.
- Server & Client
Server:
+ GET /stories - Get all stories.
+ GET /stories/:id - Get story with a specific ID.
+ GET /stories/find/:keyword - Fuzzy search the stories' title and content with a keyword.
+ GET /comments/:id - Get all comments from one story.
+ GET /mystories/:username - Get stories by specific username.

+ PUT /stories/:id/upvote - Update specific story's upvotes.
+ PUT /stories/:id/downvote - Update specific story's downvotes.
+ PUT /stories/:id/downvote - Update specific story's downvotes.
+ PUT /comments/:id/upvote - Update specific comment's upvotes.
+ PUT /stories/:id/addcomment - Add the story's new comment, at the same time, the attribute 'written_times' of story should be increased by 1.

+ POST /stories - Add a new story.
+ POST /edit/:id - Edit the specific story's title and content.
+ POST /reg - Register a new user (the username should be unique).
+ POST /login - User login with username and password identification.

+ DELETE /stories/:id - Delete the specific story.
+ DELETE /comments//comments/:story/:id - Delete the specific story's a comment.

Client:
1. Comments
fetchComment (id) {return Api().get(`/comments/${id}`)},
addComment (id, comment) {return Api().put(`/stories/${id}/addComment`, comment)},
deleteComment (story, id) {return Api().delete(`/comments/${story}/${id}`)}

2. Stories
fetchStories () {return Api().get('/stories')},
fetchMyStories (username) {return Api().get(`/mystories/${username}`)},
addStories (story) {return Api().post('/stories', story)},
upvoteStories (id) {return Api().put(`/stories/${id}/upvote`)},
downvoteStories (id) {return Api().put(`/stories/${id}/downvote`)},
deleteStory (id) {return Api().delete(`/stories/${id}`)},
fetchStory (id) {return Api().get(`/stories/${id}`)},
editStory (id, story) {return Api().post(`/edit/${id}`, story)}

3. User
userRegister (user) {return Api().post('/reg', user)},
userLogin (user) {return Api().post('/login', user)}

- Specific Components used
FlipCountdown

- Google APIs used.
Sign in:
ClientID: '827758022600-39rgbiksk05me4fql6sp7v34ee2ljlht.apps.googleusercontent.com'

Map:
API key: 'AIzaSyD5g3ZVaqAurQ6Jq-y8Mi5e8ax2hvZEHes',

