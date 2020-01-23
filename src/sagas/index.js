import { all, takeLatest, call, put } from 'redux-saga/effects'
import types from '../actionTypes'

function* handler1(action) { return yield }

const apiCall = (url) => new Promise((resolve, reject) => {
  fetch(url)
  .then(res => res.json())
  .then(data => resolve(data))
  .catch(err => reject(err))
})

function* loadTopHeadlines(action) {
  // make the API call
  // fetch
  const response = yield call(apiCall, 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ece8700c8bcf44cd87072d791d18dd8e')

  console.log('$$$$ response', response)

  yield put({
    type: types.LOAD_TOP_HEADLINES_SUCCESS,
    payload: {
      newsList: response.articles
    }
  })
}

function* rootSaga() {
  yield all([
    takeLatest(types.LOAD_TOP_HEADLINES_REQUEST, loadTopHeadlines)
  ])
}

export default rootSaga