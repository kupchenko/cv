import {combineReducers} from 'redux';
import {cvDataReducer} from '@/js/reducers/data-fetch-reducer';

export default combineReducers({
    cvData: cvDataReducer
});