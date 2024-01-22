import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./House.module.css";
import Loader from "../Loader/Loader";
import HouseCard from "./components/HouseCard/HouseCard";

const Houses = () => {
  const [loading, setLoading] = useState(false);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetchHouse();
  }, []);

  const fetchHouse = async () => {
    try {
      setLoading(true);
      const res = await axios.get(process.env.REACT_APP_API_BASE_URL);
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
