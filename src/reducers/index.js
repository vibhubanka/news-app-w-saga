import types from '../actionTypes'

const initialState = {
  loading: false,
  newsList: []
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.LOAD_TOP_HEADLINES_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case types.LOAD_TOP_HEADLINES_SUCCESS: {
      return {
        ...state,
        loading: false,
        newsList: payload.newsList
      }
    }

    case types.LOAD_TOP_HEADLINES_FAILURE: return state
    default: return state
  }
}

export default reducer
