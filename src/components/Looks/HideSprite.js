import React from "react";
import { connect } from "react-redux";

const HideSprite = ({ characters, active_chId }) => {
  const handleClick = () => {
    const id = characters?.find((item) => item.id === active_chId);
    const el = document.getElementById(id.id);
    const elMsg = document.getElementById(`MessageBox-${active_chId}`);

    if (el) {
      el.style.display = "none";
    }
    if (elMsg) elMsg.style.display = "none";
  };

  return (
    <div elevation={3}>
      <div
        className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
        onClick={() => handleClick()}
      >
        Hide Sprite
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters,
    active_chId: state.characters.active,
  };
};

export default connect(mapStateToProps)(HideSprite);
