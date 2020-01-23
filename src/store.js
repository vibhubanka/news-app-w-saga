import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const customMiddleware = store => next => action => {
  console.log('from customMiddleware')

  // store.dispatch({ type: 'action', payload: '' })
  // store.getState()

  return next(action)
}

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger, customMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
/*
- user has entered credentials
- we dispatch a "login_request"
- login_request -> being listened in reducer and saga
  - reducer will update the loading: true
    -> completed
    -> state value has changed
    -> it will call the react component (using this state) to rerender with new values
    -> component will re-render
  - saga will call the backend with provided credentials
    -> completes
    -> dispatched another action "login_success"
- login_success -> being listened in reducer
  - reducer will update the state with `loading: false, loggedIn: true, userId: 111, ...`
    -> completed
    -> state value has changed
    -> it will call the react component (using this state) to rerender with new values
    -> component will re-render
*/