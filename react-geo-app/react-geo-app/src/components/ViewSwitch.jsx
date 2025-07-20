// src/components/ViewSwitch.jsx
import React from "react";

function ViewSwitch({ view, onToggle }) {
  return (
    <div className="mb-3">
      <button className="btn btn-primary" onClick={onToggle}>
        {view === "map" ? "Voir la liste" : "Voir la carte"}
      </button>
    </div>
  );
}

export default ViewSwitch;
