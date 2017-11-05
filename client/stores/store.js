import EventEmmiter from "events";

import consts from "../constants/consts";
import dispatcher from "../dispatcher/dispatcher";
import action from "../actions/actionPosts";

const CHANGE_EVENT = "change";

let _isLoading = false;
let _posts = [];
let _loadingError = null;

function formatPost(post) {
  return {
    title: post.title,
    text: post.text,
    name: post.name
  };
}

const TaskStore = Object.assign({}, EventEmmiter.prototype, {
	getLoading: () =>{
		return _isLoading;
	},
	getPosts: ()=> {
		return _posts;
	},
 emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
	}
});


dispatcher.register((action) => {
	switch(action.type){
		case consts.LOAD_POSTS_REQUEST:{
			_isLoading = true;

			TaskStore.emitChange();
			break;
		}
		case consts.LOAD_POSTS_SUCCESS:{
			_isLoading = fasle;

			_posts = action.posts.map(postForm);
			store.emitChange();

		}
		case consts.LOAD_POSTS_ERROR:{
			_isLoading = false;
			_loadingError = action.err;
			store.emitChange();
		}
	}
});

export default TaskStore;