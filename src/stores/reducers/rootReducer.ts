/// Imports: Dependencies
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './authReducer';
/// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: persistReducer(
    {key: 'authReducer', storage: AsyncStorage},
    authReducer,
  ),
});
export default rootReducer;
