import {applyMiddleware, createStore} from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '~reducers/rootReducer';

const middleware = [thunkMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export type RootState = ReturnType<typeof store.getState>;
persistStore(store);
export default store;
