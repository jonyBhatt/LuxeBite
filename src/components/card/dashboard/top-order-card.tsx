import React from "react";

const TopOrderCard = () => {
  return (
    <div className="admin-side_bar p-4 rounded-lg">
      <div className="flex flex-col items-start gap-4">
        <p className="text-lg font-normal">Top Order</p>
        <h3 className="font-bold text-3xl">$7,000</h3>
      </div>
    </div>
  );
};

export default TopOrderCard;
