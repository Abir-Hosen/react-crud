import {createStore, applyMiddleware} from 'redux'
import bookReducer from './reducer'
import middleware_file from './middleware_file'

const createStoreWithMiddleware = applyMiddleware(
        middleware_file,
    )(createStore);
const store = createStoreWithMiddleware(bookReducer);
// const store = createStore(bookReducer)

export default store