import React, { useState } from "react";
import { connect } from "react-redux";
import { setSpriteAngle } from "../../../redux/character/actions";
import Icon from "../../Icon";
import { Button } from "@material-ui/core";
import { Stack } from "@mui/system";
import "./style.css";

const TurnAntiClockwise = ({
  characters,
  active_chId,
  spriteAngle,
  setSpriteAngle,
}) => {
  const [degree, setDegree] = useState(0);

  const roateSprite = () => {
    const charID = characters?.find((item) => item.id === active_chId);
    if (charID) {
      const el = document.getElementById(charID.id);

      if (el) {
        const angle = -1 * (parseInt(spriteAngle) + parseInt(degree));
        el.style.transform = `rotate(${angle}deg)`;
        setSpriteAngle(angle);
      }
    }
  };

  const resetSprite = () => {
    const charID = characters?.find((item) => item.id === active_chId);
    if (charID) {
      const el = document.getElementById(charID.id);

      if (el) {
        el.style.transform = "rotate(0deg)";
        setSpriteAngle(parseInt(0));
        setDegree(0);
      }
    }
  };

  return (
    <div className="flex flex-row flex-wrap bg-blue-500 text-white cursor-pointer">
      <div className="title">
        <h3>Turn</h3>
        <Icon name="undo" size={15} className="text-white mx-2 icon" />
      </div>
      <input
        style={{
          backgroundColor: "lightgray",
          color: "black",
          outline: "none",
          borderRadius: 15,
          padding: "10px",
          height: "30px",
        }}
        type="text"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />

      <Stack spacing={2} direction="row" style={{ margin: "10px 0px" }}>
        <Button
          variant="outlined"
          onClick={roateSprite}
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: 15,
            height: "30px",
          }}
        >
          Rotate
        </Button>
        <Button
          variant="outlined"
          onClick={resetSprite}
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: 15,
            height: "30px",
          }}
        >
          Reset
        </Button>
      </Stack>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters,
    active_chId: state.characters.active,
    spriteAngle: state.characters.angle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSpriteAngle: (angle) => dispatch(setSpriteAngle(angle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnAntiClockwise);
