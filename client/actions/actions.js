import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConsts';

import api from '../api';

const AppAction = {
	loadUsers(){
		AppDispatcher.dispatch({
			type: Constants.LOAD_USERS_REQUEST
		});
		api.listUsers()
		.then(({ data }) =>
			AppDispatcher.dispatch({
				type: Constants.LOAD_USERS_SUCCESS,
				users: data
			})
		)
		.catch(err =>
			AppDispatcher.dispatch({
				type: Constants.LOAD_USERS_FAIL,
				error: err
			})
		)
	}
}