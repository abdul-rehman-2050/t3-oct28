import React from "react";
import PanelLayout from "../../../layouts/panel";

function AddInventory() {
  return (
    <PanelLayout>
      <div className="grid-row-1">
      <h1 className="text-lg">Add Inventory</h1>
      </div>
      <div className="grid-col bg-white-400 flex min-h-fit w-full justify-center shadow-lg">
        <form className="grid grid-rows-4 grid-flow-col gap-4">
          <div className="">
            <input type="text" className="" placeholder="select type"></input>
          </div>
          <div className="">
            <input type="text" className="" placeholder="select type"></input>
          </div>

        </form>
      </div>
    </PanelLayout>
  );
}

export default AddInventory;
