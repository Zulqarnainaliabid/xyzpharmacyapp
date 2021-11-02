// import {
//   ADD_TO_BOOKMARK_LIST,
//   REMOVE_FROM_BOOKMARK_LIST,
//   UPDATESEARCHARRAYACTION,
//   UPDATEARRAYLENGTHACTION,
//   UPDATETOPSEARCHNAMEACTION,
//   UPDATEARRAYWISHLISTSCREENACTION,
//   TOGGLEEDITBUTTONACTION,
// } from './actions';

// const initialState = {
//   bookmarks: [],
//   Get_quantity: [],
//   UpdateTopSearchName: false,
//   ToggleEditButton: false,
//   UpdateSearchArray: false,
//   UpdateArrayLength: false,
//   UpdateArrayWishListScreen: null,
// };

// export default function booksReducer (state = initialState, action) {
//   switch (action.type) {
//     case ADD_TO_BOOKMARK_LIST:
//       return {...state, bookmarks: [...state.bookmarks, action.payload]};
//     case REMOVE_FROM_BOOKMARK_LIST:
//       let temp = state.bookmarks;
//       while (temp.length) {
//         temp.pop ();
//       }
//       const index = temp.findIndex (fruit => fruit === action.payload);
//       temp.splice (index, 1);
//       return {
//         ...state,
//         bookmarks: temp,
//       };
//     case UPDATESEARCHARRAYACTION:
//       return {...state, UpdateSearchArray: action.payload};
//     case UPDATEARRAYLENGTHACTION:
//       return {...state, UpdateArrayLength: action.payload};
//     case UPDATETOPSEARCHNAMEACTION:
//       return {...state, UpdateTopSearchName: action.payload};
//     case UPDATEARRAYWISHLISTSCREENACTION:
//       return {...state, UpdateArrayWishListScreen: action.payload};
//     case TOGGLEEDITBUTTONACTION:
//       return {...state, ToggleEditButton: action.payload};
//     default:
//       return state;
//   }
// }




