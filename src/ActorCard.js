import React from "react";

function ActorCard({ name }) {
  return (
    <div className="actor-card">
      <img
        src={`https://picsum.photos/200/300?random=${name}`}
        alt={`${name}'s profile`}
      />
      <h3>{name}</h3>
    </div>
  );
}

export default ActorCard;
