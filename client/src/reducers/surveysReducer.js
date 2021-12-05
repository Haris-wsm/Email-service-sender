import { FETCH_SUERVEYS, DELETE_SUERVEYS } from '../actions/types';

export default function (state = [], actions) {
  switch (actions.type) {
    case FETCH_SUERVEYS:
      return actions.payload;
    case DELETE_SUERVEYS:
      return state.filter((s) => {
        return s._id !== actions.payload.id;
      });
    default:
      return state;
  }
}
