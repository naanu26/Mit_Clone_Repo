import React, { useState } from "react";
import { connect } from "react-redux";

const ShowMessageTimer = ({ active_chId }) => {
  const [showMsg, setShowMsg] = useState(false);
  const [msg, setMsg] = useState("");
  const [timer, setTimer] = useState(0);

  const displayMessage = () => {
    const el = document.getElementById(`MessageBox-${active_chId}`);
    console.log(el, "el");
    if (showMsg) {
      setShowMsg(false);
      el.style.display = "none";
      return;
    }
    setShowMsg(true);

    el.style.display = "block";
    el.style.position = "relative";
    el.innerHTML = msg;

    setTimeout(() => {
      setShowMsg(false);
      el.style.display = "none";
    }, timer * 1000);
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
            setMsg(e.target.value);
          }}
        />
        <div className="text-white" style={{ marginTop: "10px" }}>
          Set Time
        </div>
        <input
          style={{
            backgroundColor: "lightgray",
            color: "purple",
            marginTop: "10px",
            borderRadius: 15,
            paddingLeft: "5px",
            height: "20px",
          }}
          type="number"
          value={timer}
          onChange={(e) => {
            e.target.value >= 0 && setTimer(e.target.value);
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

export default connect(mapStateToProps)(ShowMessageTimer);
