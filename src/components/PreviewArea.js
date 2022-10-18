import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { connect } from "react-redux";
import CatSprite from "./CatSprite";
import {
  addCharacter,
  setActiveCharachterId,
} from "../redux/character/actions";
import { Button } from "@mui/material";

const PreviewArea = ({
  characters,
  add_character,
  active_chId,
  set_active_charId,
}) => {
  const [active, setActive] = useState(active_chId);

  const handleActiveSprite = (e) => {
    setActive(e.target.value);
    set_active_charId(e.target.value);
  };

  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  let elmnt = null;
  let elmntMsg = null;

  function dragMouseDown(e, id) {
    elmnt = document.getElementById(id);

    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => add_character()}
          disabled
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: 15,
            height: "30px",
            margin: "10px",
          }}
        >
          Active
        </Button>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={active}
          onChange={(e) => handleActiveSprite(e)}
          displayEmpty
          style={{ margin: "10px" }}
        >
          {characters?.map((x, i) => {
            const first = x.id.charAt(0).toUpperCase();
            const name = first + x.id.substr(1);

            return (
              <MenuItem key={i} value={x.id}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
        <div>
          <Button
            variant="outlined"
            onClick={() => add_character()}
            style={{
              backgroundColor: "red",
              color: "white",
              borderRadius: 15,
              height: "30px",
              margin: "10px",
            }}
          >
            Create
          </Button>
        </div>
      </div>
      {characters?.map((character, index) => {
        return (
          <div
            key={character.id}
            onMouseDown={(e) => dragMouseDown(e, `${character.id}`)}
          >
            <div
              className="hidden border-2 p-2 ml-3 mb-2 w-auto whitespace-nowrap"
              id={`MessageBox-${character.id}`}
            ></div>
            <div className="flex-none h-full p-2">
              <CatSprite ch_id={character.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters,
    active_chId: state.characters.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_character: () => dispatch(addCharacter()),
    set_active_charId: (id) => dispatch(setActiveCharachterId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewArea);
