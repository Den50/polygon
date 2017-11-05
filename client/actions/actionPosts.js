import dispatcher from "../dispatcher/dispatcher";
import consts from "../constants/consts";
import api from "../api";

export default {
	loadPosts: () => {
		dispatcher.dispatch({
			type: consts.LOAD_POSTS_REQUEST
		});

		api.loadPost.then((res) => {
			dispatcher.dispatch({
				type: consts.LOAD_POSTS_SUCCESS,
				posts: res
			})
		})
		.catch(err => {
			dispatcher.dispatch({
				type: consts.LOAD_POSTS_ERROR,
				error: err
			});

		});
	}
};