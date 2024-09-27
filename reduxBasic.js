const redux = require('redux');

const initialState = {
    count: 0
}

const reducer = (store = initialState, action) => {
    const newStore = store;
    if(action.type === "INCREMENT"){
        newStore.count = store.count + 1;
    }
    else if(action.type === "DECREMENT"){
        newStore.count = store.count - 1;
    }
    else if(action.type === "ADDITION"){
        newStore.count = store.count + action.payload.num;
    }
    return newStore;
}
const store = redux.createStore(reducer);

const subscriber = () => {
    const state = store.getState();
    console.log("state",state);
}

store.subscribe(subscriber);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "ADDITION", payload: {num: 11}})