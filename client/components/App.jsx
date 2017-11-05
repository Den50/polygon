import React from "react";

import action from "../actions/actionPosts";
import store from "../stores/store";
import dispatcher from "../dispatcher/dispatcher";

var _posts = [];

function getStateFromFlux() {
	return{
		isLoading: store.getLoading(),
		posts: store.getPosts()	
	};
}


const Item = React.createClass({
	render(){
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.text}</p>
			</div>
		)
	}
});


const App = React.createClass({
	getInitialState(){
		return getStateForFlux();
	},
	componentWillMount(){
		action.loadPosts();
		console.log("Loading...");
	},
	// componentDidMount(){
	// 	store.addChangeListener(() => {});
	// },
	// componentWillUnmount(){
	// 	store.removeChangeListener(() => {});
	// },
	render (){
		return (
		  <div className="container">
		  	<h1>Its App</h1>
		  	{console.log(typeof this.state)})}
		  </div>
		);
	}
});
export default App;