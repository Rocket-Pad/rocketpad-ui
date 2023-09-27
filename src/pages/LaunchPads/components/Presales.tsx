import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "../../../constants";
import PresaleCard from "./PresaleCard";
import { TailSpin } from "react-loader-spinner";

const Presales = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [presales, setPresales] = useState<any>();
  const fetchSales = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_ENDPOINT}presales`);
      if (res.ok) {
        const data = await res.json();
        setPresales(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSales();
  }, []);
  if (isLoading) {
    return (
      <div className="flex">
        <TailSpin
          wrapperClass="mx-auto"
          color="#fff"
          height={"50px"}
          width={"50px"}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 justify-start mt-5 md:flex-row">
      {presales?.map((presale: any) => (
        <PresaleCard presale={presale} />
      ))}
    </div>
  );
};

export default Presales;
