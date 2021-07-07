import React, {Component} from "react";
import Heading from "../heading/heading";
import Example from "../table/table";

import './app.css'

export default class App extends Component {

    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div className='app'>
                <Heading/>
                <Example/>
            </div>

        )
    }

}
