
// Define action types

export const ADD_TO_BOOKMARK_LIST = 'ADD_TO_BOOKMARK_LIST';
export const ADD_TO_QUANTITY_LIST = 'ADD_TO_QUANTITY_LIST';
export const REMOVE_FROM_BOOKMARK_LIST = 'REMOVE_FROM_BOOKMARK_LIST';
export const TOGGLEDRAWERBUTTONACTION = 'TOGGLEDRAWERBUTTON';
export const UPDATESEARCHARRAYACTION = 'UPDATESEARCHARRAY';
export const UPDATEARRAYLENGTHACTION = 'UPDATEARRAYLENGTH';
export const UPDATETOPSEARCHNAMEACTION = 'UPDATETOPSEARCHNAME';
export const UPDATEARRAYWISHLISTSCREENACTION = 'UPDATEARRAYWISHLISTSCREEN';
export const TOGGLEEDITBUTTONACTION = 'TOGGLEEDITBUTTON';
export const ISSINGINACTION = 'ISSINGIN';


export const addBookmark = book => dispatch => {
  dispatch ({
    type: ADD_TO_BOOKMARK_LIST,
    payload: book,
  });
};

export const AddQuantity = book => dispatch => {
  dispatch ({
    type: ADD_TO_QUANTITY_LIST,
    payload: book,
  });
};

export const removeBookmark = book => dispatch => {
  dispatch ({
    type: REMOVE_FROM_BOOKMARK_LIST,
    payload: book,
  });
};
export const TOGGLEDRAWERBUTTON = book => dispatch => {
  dispatch ({
    type: TOGGLEDRAWERBUTTONACTION,
    payload: book,
  });
};
export const UPDATESEARCHARRAY = book => dispatch => {
  dispatch ({
    type: UPDATESEARCHARRAYACTION,
    payload: book,
  });
};
export const UPDATEARRAYLENGTH = book => dispatch => {
  dispatch ({
    type: UPDATEARRAYLENGTHACTION,
    payload: book,
  });
};
export const UPDATETOPSEARCHNAME = book => dispatch => {
  dispatch ({
    type: UPDATETOPSEARCHNAMEACTION,
    payload: book,
  });
};
export const UPDATEARRAYWISHLISTSCREEN = book => dispatch => {
  dispatch ({
    type: UPDATEARRAYWISHLISTSCREENACTION,
    payload: book,
  });
};
export const TOGGLEEDITBUTTON = book => dispatch => {
  dispatch ({
    type: TOGGLEEDITBUTTONACTION,
    payload: book,
  });
};

export const ISSINGIN = book => dispatch => {
  dispatch ({
    type: ISSINGINACTION,
    payload: book,
  });
};
