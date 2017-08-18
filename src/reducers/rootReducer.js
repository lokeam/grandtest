import { combineReducers } from 'redux';
import { initTitle, initDetails} from './reducer_details';
import gitReducer from './reducer_gitReducer';

const rootReducer = combineReducers({
	title: initTitle,
	projectdetails: initDetails,
	repos: gitReducer
});

export default rootReducer;