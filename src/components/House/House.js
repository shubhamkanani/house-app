import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./House.module.css";
import Loader from "../Loader/Loader";
import HouseCard from "./components/HouseCard/HouseCard";

const endPoint = process.env.REACT_APP_API_BASE_URL;

const Houses = () => {
  const [loading, setLoading] = useState(false);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetchHouse();
  }, []);

  const fetchHouse = async () => {
    try {
      setLoading(true);
      const url = endPoint.includes("houses")
        ? endPoint
        : `${process.env.REACT_APP_API_BASE_URL}/houses`;
      const res = await axios.get(url);
      setLoading(false);
      setHouses(res?.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {!!houses?.length &&
            houses.map((house) => <HouseCard key={house?.id} house={house} />)}
        </>
      )}
    </div>
  );
};

export default Houses;
