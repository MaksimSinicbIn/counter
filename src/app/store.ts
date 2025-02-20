import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "app/counterReducer";
import { loadState, saveState } from "localStorage";
import { throttle } from "lodash";

const rootReducer = combineReducers({
    counter: counterReducer
})

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState)

store.subscribe(throttle(() => {
    saveState({
        ...store.getState(),
    })
}, 1000))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;