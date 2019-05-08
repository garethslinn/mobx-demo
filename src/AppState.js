import {action, observable} from "mobx";

const appState = observable({
    count: 0,
    incCount: action("Increment Counter", () => {
        appState.count += 1;
    }),
    decCount: action("Decrement Counter", () => {
        appState.count -= 1;
    }),
    get countByThree() {
        return this.count * 3;
    },
    get countByFour() {
        return this.count * 4;
    }
});

export default appState;