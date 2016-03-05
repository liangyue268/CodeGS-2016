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
export default class MyComponent extends React.Component {
    // ---------------------------------------------------
    // VIEW LIFECYCLE. THESE ARE CALLED BY REACT AUTOMATICALLY
    // ALL METHODS ARE OPTIONAL
    // ----------------------------------------------------
	constructor() {
		super();
        this.state = {cityName: "New York"};
        this.bindMethods();
        var self = this;
        $('body').on('cityChange1', function(event, argument){
            //$('div.my-component').text(arguments[1]);
            //console.log(arguments);
            //console.log(event);
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

    assetFieldChanged(text) {
        this.setState({cityName:text}, function() {
            this.props.meta.state =  this.state;
        });
    }

	/**
	 * Create component HTML
	 * @return {[type]} [description]
	 */
	//var urlLink = "http://www.pace.edu";

  	render() {

  	    var param=this.state.cityName;
  	    var url="http://query.nytimes.com/search/sitesearch/?action=click&contentCollection&region=TopBar&WT.nav=searchWidget&module=SearchSubmit&pgtype=Homepage#/";
        url+=param;
	    return (
		<div className='my-component'>
           <iframe className = 'website-link' src={url}></iframe>
            <div><a className ="linkText" href={url}>Goto The New York Times</a></div>
        </div>
	    );
  	}
}