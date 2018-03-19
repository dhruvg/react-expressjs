import { LIST_ACTIONS } from '../constants/action_types';
import { LISTS } from '../constants/default_state';

export default (state = LISTS, action) => {
  switch (action.type) {
    case LIST_ACTIONS.ITEM_PREVIEW:
      return { ...state, itemPreview: state.items[action.name.toUpperCase()] };
    case LIST_ACTIONS.ITEM_VIEW:
      return { ...state, itemView: state.items[action.name.toUpperCase()] };
    case LIST_ACTIONS.ITEM_CLEAR:
      return { ...state, itemView: null };
    case LIST_ACTIONS.ITEM_ADD: {
      const nextItems = { ...state.items };
      const itemToAdd = action.item;
      nextItems[itemToAdd.name.toUpperCase()] = itemToAdd;
      return { ...state, items: nextItems };
    }
    default:
      return state;
  }
};
