import rootReducers from "../rootReducers"


export const myLogger = (store) => (next) => (action) => {
    console.log(`action: ${JSON.stringify(action)}`)
    console.log(`before: ${JSON.stringify(store.getState())}`)

    const upcomingState = [action].reduce(rootReducers, store.getState())
    console.log(JSON.stringify(upcomingState))

    //pass action
    return next(action);
}