import React, { useState } from "react";
import { connect } from "react-redux";

const ShowMessage = ({ active_chId }) => {
  const [showMsg, setShowMsg] = useState(false);
  const [msg, setMsg] = useState("");

  const displayMessage = () => {
    const el = document.getElementById(`MessageBox-${active_chId}`);
    if (showMsg) {
      if (msg.length === 0) {
        el.style.display = "none";
        return;
      }

      el.style.display = "block";
      el.style.position = "relative";
      el.innerHTML = msg;
    }
  };

  return (
    <div className="rounded text-center bg-purple-500 p-2 my-3">
      <div className="grid grid-cols-2 my-2">
        <div className="text-white">Message</div>
        <input
          style={{
            backgroundColor: "lightgray",
            color: "purple",
            borderRadius: 15,
            paddingLeft: "5px",
            height: "20px",
          }}
          type="text"
          value={msg}
          onChange={(e) => {
            setShowMsg(true);
            setMsg(e.target.value);
          }}
        />
      </div>
      <div>
        <button type="button" onClick={() => displayMessage()}>
          Display Message
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    active_chId: state.characters.active,
  };
};

export default connect(mapStateToProps)(ShowMessage);
