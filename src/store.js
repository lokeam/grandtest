import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger';

//import appReducer from './containers/App/reducer'
import allReducers from './reducers/rootReducer';


const logger = createLogger();

export default createStore( allReducers, applyMiddleware(logger) );

// export default function configureStore(initialState = {}) {
//   // Create the store with two middlewares
//   // 2. routerMiddleware: Syncs the location/URL path to the state
//   const middlewares = [
//   ];

//   const enhancers = [
//     applyMiddleware(...middlewares)
//   ];

//   // If Redux DevTools Extension is installed use it, otherwise use Redux compose
//   /* eslint-disable no-underscore-dangle */
//   const composeEnhancers =
//     process.env.NODE_ENV !== 'production' &&
//     typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
//   /* eslint-enable */

//   const store = createStore(
//     createReducer(),
//     fromJS(initialState),
//     composeEnhancers(...enhancers)
//   );

//   /* istanbul ignore next */
//   if (module.hot) {
//     module.hot.accept('./reducers/rootReducer', () => {
//       import('./reducers/rootReducer').then((reducerModule) => {
//         const createReducers = reducerModule.default;
//         const nextReducers = createReducers();

//         store.replaceReducer(nextReducers);
//       });
//     });
//   }

//   return store;
// }
