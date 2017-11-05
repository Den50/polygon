import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConsts';

const CHANGE_EVENT = 'change';

let _users = [];
let _loadingError = null;
let _isLoading = true;

function formatUser(user) {
    return {
        login: user.login,
        password: user.password,
        name: user.name,
        email: user.email
    };
}

const TasksStore = Object.assign({}, EventEmitter.property, {
	isLoading() {
    return _isLoading;
  },
  getUsers() {
    return _users;
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

AppDispatcher.register(function(action) {
  switch(action.type) {
    case AppConstants.LOAD_USERS_REQUEST: {
        _isLoading = true;

        TasksStore.emitChange();
        console.log(AppConstants.LOAD_USERS_REQUEST);
        break;
    }

      case AppConstants.LOAD_USERS_SUCCESS: {
          _isLoading = false;
          _users = action.users.map( formatUser );
          _loadingError = null;

          TasksStore.emitChange();
          console.log(AppConstants.LOAD_USERS_REQUEST);
          break;
      }

      case AppConstants.LOAD_USERS_FAIL: {
          _loadingError = action.error;

          TasksStore.emitChange();
          console.log(AppConstants.LOAD_USERS_REQUEST);
          break;
      }

      default: {
          console.log('No such handler');
      }
  }
});


export default TasksStore;