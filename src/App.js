
import React from "react";
import { observable, configure, action } from "mobx";
import { observer } from "mobx-react";

import appState from './AppState';
import SomeComp from "./SomeComp";

configure({ enforceActions: true });


const Counter = observer(props => (
    <section>
      {appState.count}
      <div>
        <button onClick={appState.incCount}>Add</button>
        <button onClick={appState.decCount}>Dec</button>

      </div>
      <div>Count by Three {appState.countByThree}</div>
      <div>Count by Four {appState.countByFour}</div>

        <SomeComp/>
    </section>
));

export default Counter;
