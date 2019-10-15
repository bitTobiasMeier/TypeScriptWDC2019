import { AdminActions } from '../actions/admin.actions';

// tslint:disable-next-line:no-empty-interface
export interface State {
}

export const initialState: State = {
};

export function reducer(state = initialState, action: AdminActions): State {
  switch (action.type) {
    default:
      return state;
  }
}
