import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: 'Eat Wings', complete: false }]
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any } ) {
  
  switch(action.type) {
    case fromActions.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data // data: data
      };
    }
    case fromActions.REMOVE_TODO: {
      const todoX = action.payload.label;
      const data = state.data.filter(todo => todo.label !== todoX);
      return {
        ...state,
        data
      };
    }
  }
  return state;
};
