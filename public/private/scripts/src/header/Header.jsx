import React from 'react';
import {Button} from 'react-bootstrap';

export default class Header extends React.Component {
	constructor() {
        super();
        window.publish = function() {
        	//console.log("hello");
        	$("body").trigger('cityChange1', arguments);
        	$("body").trigger('cityChange2', arguments);
        	$("body").trigger('cityChange3', arguments);
        };

    }

    handleChange(event) {
    	window.publish(event.target.value);
    	//console.log(event.target.value);
    	//this.setState({value: event.target.value.substr(0, 140)});
    }

	/**
	 * Create component HTML
	 * @return {[type]} [description]
	 */
  	render() {
	    return (

	    	<div className="header">

				<p>CodeGS-Team 12</p>
				<p className = "title">EXPLORE THE WORLD WITH US</p>
	    		<span> Local Information: </span>
	    		<select class = "source" onChange={this.handleChange}>
	    			<option value="New York">New York</option>
	    			<option value="New Jersey">New Jersey</option>
	    			<option value="California">California</option>
	    			<option value="Texas">Texas</option>
	    			<option value="Illinois">Illinois</option>
	    		</select>    				
	    	</div>
	    );
  	}
}