import React from "react";
import Icon from "./Icon";
import ShowMessage from "./Looks/ShowMessage";
import HideSprite from "./Looks/HideSprite";
import BroadcastMessage from "./Events/BroadCastMessage";
import TurnClockwise from "./Motion/TurnClockwise";
import TurnAntiClockWise from "./Motion/TurnAntiClockWise";
import ShowMessageTimer from "./Looks/ShowMessageTimer";
import Size from "./Looks/Size";
import ShowSprite from "./Looks/ShowSprite";


export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        <TurnAntiClockWise />
        <TurnClockwise />
      </div>
      <div className="font-bold"> {"Looks"} </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        <HideSprite />
        <ShowSprite />
        <ShowMessage />
        <ShowMessageTimer />
        <Size />
      </div>
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        <BroadcastMessage />
      </div>
    </div>
  );
}
