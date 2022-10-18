import React, { useState } from "react";
import { connect } from "react-redux";

const Size = ({ characters, active_chId }) => {
  const [size, setSize] = useState(1);

  const changeSize = () => {
    const charID = characters?.find((item) => item.id === active_chId);
    if (charID) {
      const el = document.getElementById(charID.id);
      el.style.transform = `scale(${size})`;
    }
  };

  return (
    <div elevation={3}>
      <div className="text-center rounded bg-purple-500 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Size:</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
            style={{
              borderRadius: 15,
              paddingLeft: "5px",
              height: "20px",
              backgroundColor: "lightgray",
            }}
          />
        </div>
        <div
          className="text-center bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => changeSize()}
        >
          Size {size}
        </div>
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

export default connect(mapStateToProps)(Size);
