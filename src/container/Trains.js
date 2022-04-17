import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setTrains} from '../redux/actions/trainActions.js';
import IndividualTrains from "./IndividualTrain";

const Trains = () => {
  const trains = useSelector((state) => state);
  const dispatch = useDispatch();
  const getTrains = async () => {
    const response = await axios
      .get(
        "https://ugc-api.dovetailgames.com/mods?page=1&pageSize=12&sortBy=mostPopular"
      )
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setTrains(response.data.data));
  };
  useEffect(() => {
    getTrains();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("Trains: ", trains);

  return (
    <div>
      <IndividualTrains />
    </div>
  );
};

export default Trains;
