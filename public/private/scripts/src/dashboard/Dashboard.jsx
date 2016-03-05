import React from 'react';
import MyComponent from '../../../../MyComponent/MyComponent';
import MyComponent2 from '../../../../MyComponent/MyComponent2';
import MyComponent3 from '../../../../MyComponent/MyComponent3';
import Gridster from './dependencies/gridster/Gridster';
import meta from '../../../../MyComponent/meta.json';

const COMPONENT_TO_SHOW = MyComponent;
const COMPONENT_TO_SHOW2 = MyComponent2;
const COMPONENT_TO_SHOW3 = MyComponent3;

/**
 * Trading and reporting dashboard
 */
 export default class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {components:[COMPONENT_TO_SHOW, COMPONENT_TO_SHOW2, COMPONENT_TO_SHOW3], gridster:null, definedLayout:null};
    }

    insertComponents(components) {
        var el = React.createElement(components[0], {meta:{
    "state":
    {
        "userName": ""
    },
    "type": "MyComponent",
    "title": "My component.",
    "blurb": "A component to show you the basics",
    "layouts":
    {
        "web":
            {
                "col": 1,
                "row": 2,
                "size_x": 6,
                "size_y": 5
            },
        "mobile": {},
        "print": {}
    }
}});
        var el2 = React.createElement(components[1], {meta:{
    "state":
    {
        "userName": ""
    },
    "type": "MyComponent",
    "title": "My component.",
    "blurb": "A component to show you the basics",
    "layouts":
    {
        "web":
            {
                "col": 12,
                "row": 1,
                "size_x": 6,
                "size_y": 10
            },
        "mobile": {},
        "print": {}
    }
}});
        var el3 = React.createElement(components[2], {meta:{
    "state":
    {
        "userName": ""
    },
    "type": "MyComponent",
    "title": "My component.",
    "blurb": "A component to show you the basics",
    "layouts":
    {
        "web":
            {
                "col": 1,
                "row": 1,
                "size_x": 6,
                "size_y": 5
            },
        "mobile": {},
        "print": {}
    }
}});
        var elements = [el, el2, el3];
        return elements;
    }

    gridsterSet(gridster) {
        this.state.gridster = gridster;
    }

    render() {
        return (
            <div className="dashboard">
                <Gridster definedLayout={this.state.definedLayout} onGridsterSet={this.gridsterSet.bind(this)}>
                    {this.insertComponents(this.state.components)}
                </Gridster>
            </div>
            )
    }
}