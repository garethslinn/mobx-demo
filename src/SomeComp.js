import React from 'react';
import { observable, autorun, action } from 'mobx';

import appState from "./AppState";

class SomeComp extends React.Component {

    render() {

        return (<h2>some comp
            <div>Count by Four {appState.countByFour}</div>
        </h2>)

    }
}



export default SomeComp;