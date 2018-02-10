import { combineReducers } from 'redux';
import articles from './articles_reducer';
import gallery from './galleries_reducer';
import music from './music_reducer';

const rootReducer = combineReducers({
    articles,gallery,music
   
});

export default rootReducer;