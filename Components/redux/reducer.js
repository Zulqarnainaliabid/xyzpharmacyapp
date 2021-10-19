import {
  ADD_TO_BOOKMARK_LIST,
  ADD_TO_QUANTITY_LIST,
  REMOVE_FROM_BOOKMARK_LIST,
  TOGGLEDRAWERBUTTONACTION,
  UPDATESEARCHARRAYACTION,
  UPDATEARRAYLENGTHACTION,
  UPDATETOPSEARCHNAMEACTION,
  UPDATEARRAYWISHLISTSCREENACTION,
  TOGGLEEDITBUTTONACTION,
  ISSINGINACTION,
} from './actions';

const initialState = {
  bookmarks: [],
  Get_quantity: [],
  UpdateTopSearchName: false,
  ToggleDrawer: false,
  IsSignInToggle: false,
  ToggleEditButton: false,
  UpdateSearchArray: false,
  UpdateArrayLength: false,
  UpdateArrayWishListScreen: null,
};

export function quantityReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_QUANTITY_LIST:
        return {...state, Get_quantity: [...state.Get_quantity, action.payload]}
    default:
      return state;
  }
}

export default function booksReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BOOKMARK_LIST:
      return {...state, bookmarks: [...state.bookmarks, action.payload]};
    case REMOVE_FROM_BOOKMARK_LIST:
      let temp = state.bookmarks;
      while (temp.length) {
        temp.pop ();
      }
      const index = temp.findIndex (fruit => fruit === action.payload);
      temp.splice (index, 1);
      return {
        ...state,
        bookmarks: temp,
      };
    case TOGGLEDRAWERBUTTONACTION:
      return {...state, ToggleDrawer: action.payload};
    case UPDATESEARCHARRAYACTION:
      return {...state, UpdateSearchArray: action.payload};
    case UPDATEARRAYLENGTHACTION:
      return {...state, UpdateArrayLength: action.payload};
    case UPDATETOPSEARCHNAMEACTION:
      return {...state, UpdateTopSearchName: action.payload};
    case UPDATEARRAYWISHLISTSCREENACTION:
      return {...state, UpdateArrayWishListScreen: action.payload};
    case TOGGLEEDITBUTTONACTION:
      return {...state, ToggleEditButton: action.payload};
    case ISSINGINACTION:
      return {...state, IsSignInToggle: action.payload};
    default:
      return state;
  }
}




