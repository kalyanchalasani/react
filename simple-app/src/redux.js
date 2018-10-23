import {
    combineReducers
    , createStore
} from 'redux';

// actions.js
export const activateAction = customAction => ({
  type: 'ACTIVATE_ACTION',
  customAction,
});


export const closeAction = () => ({
  type: 'CLOSE_ACTION',
});

export const resetAction = customAction => ({
  type: 'RESET_ACTION',
  title: 'reset state',
  customAction,
});

// reducers.js
export const customAction = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_ACTION':
      return action.customAction;
    case 'RESET_ACTION':
      return state;
    case 'CLOSE_ACTION':
      return {};
    default:
      return state;
  }
};


export const reducers = combineReducers({
  customAction,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();

