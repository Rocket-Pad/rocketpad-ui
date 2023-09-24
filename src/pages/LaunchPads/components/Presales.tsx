import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "../../../constants";
import PresaleCard from "./PresaleCard";

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
    return <div>Loading...</div>;
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
