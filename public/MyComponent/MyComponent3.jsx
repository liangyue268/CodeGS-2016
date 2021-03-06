import React from 'react';
import SubComponentA from './subcomponents/SubComponentA';

/**
 * Component seed to demonstrate how to build a component.
 * For Component Lifecycle API go to:
 * https://facebook.github.io/react/docs/component-specs.html
 *
 * For component Documentation go to:
 * <INSERT DOC URL>
 */
export default class MyComponent3 extends React.Component {

    // ---------------------------------------------------
    // VIEW LIFECYCLE. THESE ARE CALLED BY REACT AUTOMATICALLY
    // ALL METHODS ARE OPTIONAL
    // ----------------------------------------------------
	constructor() {
		super();
		this.bindMethods();
        this.state = {cityName: "New York"};
        var self = this;
        $('body').on('cityChange3', function(event, argument){
            //$('div.my-component').text(arguments[1]);
            self.setState({cityName:arguments[1]});
            console.log(this.state);
            self.forceUpdate();

        });
	}

    componentDidMount() {
        var state = this.props.meta.state;
        this.setState(state);
    }

    // ---------------------------------------------------
    // MOVEMENT LIFECYCLE.
    // THESE ARE ALL CALLED BY THE LAYOUT MANAGER.
    // ----------------------------------------------------

	//Resize callbacks
	resizeStart() {
		console.log('resize started');
	}

	resize() {
		console.log('resize happening');
	}

	resizeStop() {
		console.log('resize stopped');
	}

	//drag callbacks
	dragStart() {
		console.log('drag started');
	}

	drag() {
		console.log('drag happening');
	}

	dragStop() {
		console.log('drag stopped');
	}

    // ---------------------------------------------------
    // ACTUAL CODE FOR COMPONENT THAT DOES ANYTHING
    // ----------------------------------------------------

    /**
     * Make the following methods accessible outside component
     * @return {[type]} [description]
     */
    bindMethods() {
        this.resizeStart = this.resizeStart.bind(this);
        this.resize = this.resize.bind(this);
        this.resizeStop = this.resizeStop.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.drag = this.drag.bind(this);
        this.dragStop = this.dragStop.bind(this);
    }

    assetFieldChanged(event) {
        var text = event.target.value;
        this.setState({userName:text}, function() {
            this.props.meta.state =  this.state;
        });
    }

	/**
	 * Create component HTML
	 * @return {[type]} [description]
	 */
  	render() {
		var name = this.state.cityName;
		var imgUrl = "MyComponent/img/have_fun3.jpg";
		//var divStyle = {
		//	backgroundImage: 'url(' + imgUrl + ')',
		//	///backgroundColor: "black",
		//	height: "90%",
		//	width: "100%",
		//	textAlign:"center",
		//	fontSize: "200%"
		//};
		var urlLink1 = "http://www.meetup.com/find/events/?allMeetups=false&keywords=Snowboard&radius=1&userFreeform="+name.replace(" ","+");
		var urlLink2 = "http://www.meetup.com/find/events/?allMeetups=false&keywords=Snowboard&radius=10&userFreeform="+name.replace(" ","+");
		var urlLink3 = "http://www.meetup.com/find/events/?allMeetups=false&keywords=Snowboard&radius=20&userFreeform="+name.replace(" ","+");

		return (
		<div className='my-component'>
			<div className='webLink'  className = "backImg">
				<a className ="linkMeet" href={urlLink1}>Find Activeties Within 1 miles</a><p/><p/><p/><p/><br/>
				<a className ="linkMeet" href={urlLink2}>Find Activeties Within 10 miles</a><p/><p/><p/><p/><br/>
				<a className ="linkMeet" href={urlLink3}>Find Activeties Within 20 miles</a><p/><p/><p/><p/><br/>
			</div>
			<div className ="linkText">Meetup Location:{name}</div>
			</div>
        );
  	}
}