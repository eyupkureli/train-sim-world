import React from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const IndividualTrain = () => {
  const trains = useSelector((state) => state.allTrains.trains);
  const renderTrains = trains.map((train) => {
    const { id, title, subscriberCount } = train;
    return (
      <div className="card" key={id}>
        <Link to = {`/train/${id}`}>
        <div className="container">
          <h1>{title}</h1>
          <h3>Subscriber Count: {subscriberCount}</h3>
        </div>
        </Link>
      </div>
    );
  });
  return <>{renderTrains}</>;
};

export default IndividualTrain;
