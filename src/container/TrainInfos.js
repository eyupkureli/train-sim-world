import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedTrain } from "../redux/actions/trainActions.js";

const TrainInfos = () => {
  const train = useSelector((state) => state.train);
  const { id, title, subscriberCount, shortDescription } = train;
  const { trainId } = useParams();
  const dispatch = useDispatch();
  console.log(train);
  const getTrainInfo = async () => {
    const response = await axios
      .get(`https://ugc-api.dovetailgames.com/mods/${trainId}`)
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(selectedTrain(response.data.data));
  };
  useEffect(() => {
    if (trainId && trainId !== "") getTrainInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trainId]);
  return (
    <div>
      {Object.keys(train).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="card" key={id}>
          <div className="container">
            <h1>{title}</h1>
            <h3>Subscriber Count: {subscriberCount}</h3>
            <p>{shortDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainInfos;
