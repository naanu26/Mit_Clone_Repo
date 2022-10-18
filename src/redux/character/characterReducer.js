import {
  ADD_CHARACTER,
  SET_ACTIVE_CHAR_ID,
  SET_SPRITE_ANGLE,
} from "./actionTypes";

const initialState = {
  characters: [{ id: "Sprite0" }],
  active: "Sprite0",
  angle: 0,
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [
          ...state.characters,
          { id: `Sprite${state.characters.length}` },
        ],
      };

    case SET_ACTIVE_CHAR_ID:
      return {
        ...state,
        active: action.id,
      };

    case SET_SPRITE_ANGLE:
      return {
        ...state,
        angle: action.angle,
      };

    default:
      return state;
  }
};
