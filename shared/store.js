import { init } from '@rematch/core'
import createLoading from '@rematch/loading';
import { counter, github } from './models'

const exampleInitialState = {
  counter: 5,
}

export const initializeStore = (initialState = exampleInitialState) =>
  init({
    plugins: [
      createLoading({
        name: 'loading',
      }),
    ],  
    models: {
      counter,
      github,
    },
    redux: {
      initialState,
      // rootReducers: { RESET_APP: state => ({loading: {...state.loading}}) }
      rootReducers: { RESET_APP: () => undefined }
    },
  })

  