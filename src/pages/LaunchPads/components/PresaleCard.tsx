import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePresaleContract } from "../../../hooks/useContracts";
import { TailSpin } from "react-loader-spinner";

const PresaleCard = ({ presale }: any) => {
  const [isLoading, setLoading] = useState(false);
  const [details, setDetails] = useState<any>();
  // console.log(presale);
  const presaleContract = usePresaleContract(presale?.presaleId ?? "");
  const fetchDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch(presale.metadataURI);
      const tenetRaised = await presaleContract!.getTotalInvested();
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        setDetails({ ...data, tenetRaised: tenetRaised?.toString() });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    // <div className="flex flex-col gap-5 justify-start mt-5 md:flex-row">
    <div className="md:w-[30%] bg-primary font-raj">
      <div className="bg-primary">
        {isLoading ? (
          <div className="flex mt-5">
            <TailSpin
              wrapperClass="mx-auto"
              color="#fff"
              height={"20px"}
              width={"20px"}
            />
          </div>
        ) : (
          <div className="relative">
            <div className="overflow-y-hidden max-h-[177px]">
              <img className="block w-full" src={details?.banner} />
            </div>
            <div className="-mt-[70px] bg-primary justify-center flex items-center border-3 border-[#28DBD1] bg-[#02121d] p-7 pb-0">
              <img
                className="block w-20 w-[76px] h-[76px]"
                src={details?.logo}
              />
              <div className="bg-[#02121d] p-2 py-1 border-[1px] border-l-0 border-solid border-[#28DBD1] flex-1">
                {details?.name}
              </div>
            </div>
          </div>
        )}
        <div className=" p-4">
          <div className="flex justify-between">
            <div>
              <div>Token Name</div>
              {/* <div>Hard Cap</div> */}
              <div>Presale Starts</div>
              <div>Presale Ends</div>
            </div>
            <div className="text-secondary">
              <div>{details?.name}</div>
              {/* <div>{presale?.hardCap / 10 ** details?.decimals}</div> */}
              <div>{new Date(details?.startTime).toLocaleDateString()}</div>
              <div>{new Date(details?.endTime).toLocaleDateString()}</div>
            </div>
          </div>
          <div>
            <div>Raised Amount</div>
            <div className="font-bold">
              <span className="text-secondary">
                {Number(details?.tenetRaised) / 10 ** 18}
              </span>
              /{presale?.hardCap / 10 ** details?.decimals}
            </div>
            <div className="bg-[#02121D] w-full h-2">
              <div
                className="bg-secondary h-full"
                style={{
                  width: `${
                    Number(Number(details?.tenetRaised) / presale?.hardCap) *
                      100 ?? 1
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <Link
            to={`/presale/${presale?.presaleId}`}
            className="bg-btn inline-block px-3 py-3 font-bold mt-3 text-white border-0"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default PresaleCard;
