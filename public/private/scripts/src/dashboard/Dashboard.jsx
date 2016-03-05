import React from 'react';
import MyComponent from '../../../../MyComponent/MyComponent';
import MyComponent2 from '../../../../MyComponent/MyComponent2';
import MyComponent3 from '../../../../MyComponent/MyComponent3';
import Gridster from './dependencies/gridster/Gridster';
import meta from '../../../../MyComponent/meta.json';
import meta2 from '../../../../MyComponent/meta2.json';
import meta3 from '../../../../MyComponent/meta3.json';

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
        var el = React.createElement(components[0], {meta:meta});
        var el2 = React.createElement(components[1], {meta:meta2});
        var el3 = React.createElement(components[2], {meta:meta3});
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