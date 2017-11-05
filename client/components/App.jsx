import React from "react";

import api from "../api"
import Store from '../stores/store';
import Actions from '../actions/actions';

function getStateFromFlux() {
    return {
        isLoading: Store.isLoading(),
        users: Store.getUsers()//[{login: "den50", password: "admin", name: "Daniil", email: "vip.shenyagin@mail.ru"}]//Store.getUsers()
    };
}


const App = React.createClass({
	getInitialState() {
    //return getStateFromFlux();
    return api.loadUsers()[0];
  },
 //  componentWillMount() {
 //    UsersActions.loadUsers();
 //  },

 //  componentDidMount() {
 //    UsersStore.addChangeListener(this._onChange);
 //  },

 //  componentWillUnmount() {
 //    UsersStore.removeChangeListener(this._onChange);
 //  },
	render (){
		return (
		  <div className="container">
		  	<h1>{typeof this.state.data}</h1>
		  </div>
		);
	}
});

export default App;