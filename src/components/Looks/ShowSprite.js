import React from "react";
import { connect } from "react-redux";

const ShowSprite = ({ characters, active_chId }) => {
  const handleClick = () => {
    const id = characters?.find((item) => item.id === active_chId);
    const el = document.getElementById(id.id);
    const elMsg = document.getElementById(`MessageBox-${active_chId}`);

    if (el) {
      el.style.display = "block";
    }
    if (elMsg && elMsg.innerHTML) {
      elMsg.style.display = "block";
    }
  };

  return (
    <div elevation={3}>
      <div
        className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
        onClick={() => handleClick()}
      >
        Show Sprite
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

export default connect(mapStateToProps)(ShowSprite);
