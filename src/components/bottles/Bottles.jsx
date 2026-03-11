import React, { use } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css"; // CSS ইম্পোর্ট করতে ভুলবেন না

function Bottles({ bottlesPromise }) {
  const bottlesData = use(bottlesPromise);

  return (
    <div className="bottles-container">
      {bottlesData.map((bottle) => (
        <Bottle key={bottle.id} bottle={bottle}></Bottle>
      ))}
    </div>
  );
}

export default Bottles;
