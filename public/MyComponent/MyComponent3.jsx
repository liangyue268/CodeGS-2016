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
        var self = this;
        $('body').on('cityChange3', function(event, argument){
            //$('div.my-component').text(arguments[1]);
            self.setState({cityName:arguments[1]});
            console.log(this.state);
            self.forceUpdate();

        });
        this.state = {cityName: "New York"};
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
		var imgUrl = "MyComponent/img/have_fun.png";
		var divStyle = {
			backgroundImage: 'url(' + imgUrl + ')',
			///backgroundColor: "black",
			height: "100%",
			width: "100%",
			textAlign:"left"
		};
		var urlLink1 = "http://www.meetup.com/find/events/?allMeetups=false&keywords=Snowboard&radius=1&userFreeform=New+York";
		var urlLink2 = "http://www.meetup.com/find/events/?allMeetups=false&keywords=Snowboard&radius=10&userFreeform=New+York";
		var urlLink3 = "http://www.meetup.com/find/events/?allMeetups=false&keywords=Snowboard&radius=20&userFreeform=New+York";

		return (
		<div className='my-component'>
			<div style = {divStyle}>
				<a className="webLink" href={urlLink1}>Find Activety Within 1 miles</a><p/>
				<a className="webLink" href={urlLink2}>Find Activety Within 10 miles</a><p/>
				<a className="webLink" href={urlLink3}>Find Activety Within 20 miles</a><p/>

			</div>
			</div>

        );
  	}
}