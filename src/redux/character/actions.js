import {
  ADD_CHARACTER,
  SET_ACTIVE_CHAR_ID,
  SET_SPRITE_ANGLE,
} from "./actionTypes";

export const addCharacter = () => {
  return {
    type: ADD_CHARACTER,
  };
};

export const setActiveCharachterId = (ch_id) => {
  return {
    type: SET_ACTIVE_CHAR_ID,
    id: ch_id,
  };
};

export const setSpriteAngle = (angle) => {
  return {
    type: SET_SPRITE_ANGLE,
    angle: angle,
  };
};
