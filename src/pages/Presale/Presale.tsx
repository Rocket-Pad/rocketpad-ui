import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

import { BiLogoDiscordAlt, BiLogoTwitch, BiLogoTwitter } from "react-icons/bi";
import presaleBanner from "../../assets/images/presaleBanner.png";
import presaleBannerSmall from "../../assets/images/presaleBannerMobile.png";
import { API_ENDPOINT } from "../../constants";
import { useParams } from "react-router-dom";
import Countdown from "react-countdown";
import { useWeb3React } from "@web3-react/core";
import { usePresaleContract } from "../../hooks/useContracts";
import { useWalletProvider } from "../../contexts/WalletContext/WalletContext";
import { parseEther } from "@ethersproject/units";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";

const initialValue = 0;

function Presale() {
  const [value, setValue] = useState(initialValue);
  const [isLoading, setLoading] = useState(true);
  const [amountInvested, setInvested] = useState<number>(0);
  const [userBalance, setBalance] = useState(0);
  const [presale, setPresale] = useState<any>();
  const [details, setDetails] = useState<any>();

  const [withdrawing, setWithdrawing] = useState(false);
  const [claiming, setClaiming] = useState(false);

  // const [contribution, setContribution] = useState<number>(0);

  const { address } = useParams();
  const { account, provider } = useWeb3React();
  const wallet = useWalletProvider();
  const presaleContract = usePresaleContract(address ?? "");
  const handleChangeValue = (e: any) => {
    setValue(e.target.value);
  };
  const handleBuy = async () => {
    const toastId = toast.info("Pending approval", { autoClose: false });
    try {
      const tx = await presaleContract!.buyTokens({
        value: parseEther(value.toString()),
      });
      toast.update(toastId, { type: "info", render: "Submitting Transaction" });
      const receipt = await tx.wait();
      if (receipt.status === 1) {
        toast.update(toastId, {
          type: "success",
          render: "Transaction Successful",
          autoClose: 5000,
        });
      } else {
        throw { message: "Transaction failed" };
      }
    } catch (err: any) {
      toast.update(toastId, {
        type: "error",
        render: err.code ?? err?.message,
        autoClose: 5000,
      });
    }
    setValue(initialValue);
  };

  const handleWithdraw = async () => {
    setWithdrawing(true);
    const toastId = toast.info("Pending approval", { autoClose: false });
    try {
      const tx = await presaleContract!.finalizePresale({
        value: parseEther(value.toString()),
      });
      toast.update(toastId, { type: "info", render: "Submitting Transaction" });
      const receipt = await tx.wait();
      if (receipt.status === 1) {
        toast.update(toastId, {
          type: "success",
          render: "Transaction Successful",
          autoClose: 5000,
        });
      } else {
        throw { message: "Transaction failed" };
      }
    } catch (err: any) {
      toast.update(toastId, {
        type: "error",
        render: err.code ?? err?.message,
        autoClose: 5000,
      });
    } finally {
      setWithdrawing(false);
    }
  };

  const handleClaiming = async () => {
    setClaiming(true);
    const toastId = toast.info("Pending approval", { autoClose: false });
    try {
      const tx = await presaleContract!.claimTokens({
        value: parseEther(value.toString()),
      });
      toast.update(toastId, {
        type: "info",
        render: "Submitting Transaction",
      });
      const receipt = await tx.wait();
      if (receipt.status === 1) {
        toast.update(toastId, {
          type: "success",
          render: "Transaction Successful",
          autoClose: 5000,
        });
      } else {
        throw { message: "Transaction failed" };
      }
    } catch (err: any) {
      toast.update(toastId, {
        type: "error",
        render: err.code ?? err?.message,
        autoClose: 5000,
      });
    } finally {
      setClaiming(false);
    }
  };

  const getTotalInvested = async (account: string) => {
    const amountInvested = await presaleContract!.getAmountInvested(account);
    setInvested(Number(amountInvested?.toString()));
  };
  const fetchSale = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_ENDPOINT}presales/${address}`);
      const tenetRaised = await presaleContract!.getTotalInvested();
      // const amountInvested = await presaleContract!.getAmountInvested(account);
      console.log("raised", tenetRaised);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setPresale({
          ...data,
          tenetRaised: tenetRaised,
          // amountInvested: Number(amountInvested?.toString()),
        });
        const metaRes = await fetch(data?.metadataURI);
        if (metaRes.ok) {
          let data = await metaRes.json();
          console.log(data);
          setDetails(data);
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleMax = () => {
    console.log(presale.maxBuy / 10 ** 18);
    const max =
      userBalance > 0
        ? userBalance < presale.maxBuy / 10 ** 18 - amountInvested / 10 ** 18
          ? userBalance - 0.01
          : presale.maxBuy / 10 ** 18 - amountInvested / 10 ** 18
        : 0;
    setValue(max);
  };
  const getBalance = async (address: string) => {
    try {
      const balance = await provider?.getBalance(address ?? "");
      // console.log((await provider?.getBlock())?.timestamp);
      setBalance(Number((Number(balance?.toString()) / 10 ** 18).toFixed(3)));
    } catch (err) {
      console.log(err);
    }
  };
  // const fetchDetails = async () => {
  //   try {
  //     const res = await fetch(presale?.metadataURI);
  //     if (res.ok) {
  //       let data = await res.json();
  //       console.log(data);
  //       setDetails(data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     // setLoading(false);
  //   }
  // };
  useEffect(() => {
    if (provider && account) {
      getBalance(account);
      getTotalInvested(account);
    }
  }, [provider, account]);
  useEffect(() => {
    fetchSale();
    // fetchDetails();
  }, []);

  if (isLoading) {
    return (
      <div className="px-4">
        <Navbar />
        <div className="flex mt-5 h-[70vh]">
          <TailSpin
            wrapperClass="mx-auto"
            color="#fff"
            height={"20px"}
            width={"20px"}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-tertiary px-4 font-Inter">
      <Navbar />
      <div className="flex flex-col sm:flex-row px-0 md:px-[43px]">
        <div className="flex flex-col w-full sm:w-2/5 max-w-[398px] mx-auto">
          <div className="pt-[27px] pb-[69px] px-5.5 mb-7.5 bg-primary rounded-[5px]">
            <div className="flex mb-[53px]">
              <div className="w-1/2">
                <img
                  src={details?.logo}
                  alt="Presale Banner"
                  className="flex w-[calc(100%_-_22px)]"
                />
              </div>
              <div className="w-1/2">
                <h1 className="text-[30px]">{details?.name}</h1>
                <h2 className="text-lg uppercase">{`${details?.symbol}/Tenet`}</h2>
              </div>
            </div>
            <div className="bg-secondary/30 h-[1px] mx-auto"></div>
            <div className="upper">
              <h3 className="text-base upper">{`1 Tenet = ${presale?.rate} ${details?.symbol}`}</h3>
              <h4 className="text-sm text-white-50 upper -mt-[11px]">
                {/* {`1 ${details?.symbol} = 0.0000 Tenet`} */}
              </h4>
            </div>
            <div className="bg-secondary/30 h-[1px] mx-auto"></div>

            {presale && (
              <div className="font-bold my-2 flex justify-between">
                {Date.now() / 1000 < presale?.startTime ? (
                  <>
                    <div>Sale starts in</div>
                    <Countdown
                      // zeroPadDays={2}
                      // zeroPadTime={2}
                      date={presale?.startTime * 1000}
                      renderer={({ days, hours, minutes, seconds }) => (
                        <div className="text-secondary block">
                          {days}D {hours}H {minutes}M {seconds}S
                        </div>
                      )}
                    />
                  </>
                ) : (
                  <>
                    <div>Sale Ends in</div>
                    <Countdown
                      zeroPadDays={2}
                      zeroPadTime={2}
                      date={presale?.endTime * 1000 ?? Date.now() + 10000}
                      renderer={({ days, hours, minutes, seconds }) => (
                        <div className="text-secondary">
                          {days}D {hours}H {minutes}M {seconds}S
                        </div>
                      )}
                    />
                  </>
                )}
              </div>
            )}
            <div className="font-bold mb-2 flex justify-between">
              <div>Hard Cap</div>
              <div>{presale?.hardCap / 10 ** details?.decimals} Tenet</div>
            </div>
            <div className="font-bold mb-2 flex justify-between">
              <div>Contributed</div>
              <div>{amountInvested / 10 ** details?.decimals} Tenet</div>
            </div>
            <div className="bg-secondary/30 h-[1px] mx-auto"></div>
            <div className="mt-5.5 mb-7.5">
              <div className="text-sm font-bold flex justify-between mb-4">
                <div className="uppercase">
                  <span className="text-secondary">
                    {Number(presale?.tenetRaised?.toString()) / 10 ** 18 ?? 0}
                  </span>
                  /{presale?.hardCap / 10 ** details?.decimals} Tenet
                </div>
              </div>
              <div className="w-full bg-white rounded-[3px] h-2.5">
                <div
                  className={`bg-secondary h-2.5 rounded-[3px]`}
                  style={{
                    width: `${
                      Number(
                        Number(presale?.tenetRaised?.toString()) /
                          presale?.hardCap
                      ) * 100 ?? 1
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="bg-secondary/30 h-[1px] mx-auto"></div>
            <div className="mt-5.5">
              {account ? (
                account === presale?.owner ? (
                  <div className="flex gap-2">
                    <button className="block w-1/2 bg-secondary cursor-pointer py-3 text-center text-tertiary font-Roboto border-none rounded-lg font-bold block">
                      Fund
                    </button>
                    <button
                      disabled={
                        presale.endTime > Date.now() / 1000 || withdrawing
                      }
                      onClick={handleWithdraw}
                      className={`block w-1/2 bg-secondary py-3 text-center text-tertiary font-Roboto border-none rounded-lg font-bold block ${
                        presale.endTime > Date.now() / 1000 || withdrawing
                          ? "cursor-not-allowed bg-secondary/60"
                          : "cursor-pointer "
                      }`}
                    >
                      Finalize
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="font-medium mb-2.5">
                      Balance:{" "}
                      <span className="uppercase text-[#C1C7CB]">
                        {userBalance} Tenet
                      </span>
                    </div>
                    {Date.now() / 1000 > presale?.startTime ? (
                      <form onSubmit={handleBuy} className="flex w-full">
                        <input
                          type="number"
                          value={value}
                          onChange={handleChangeValue}
                          className="bg-tertiary text-white py-[15px] px-7.5 outline-none border-none w-full"
                        />
                        <span
                          onClick={handleMax}
                          className="flex bg-tertiary items-center justify-center px-[13px] text-white/30"
                        >
                          Max
                        </span>
                        <button
                          type="submit"
                          className="bg-secondary text-tertiary font-Roboto border-none px-7.5 font-bold"
                        >
                          Buy
                        </button>
                      </form>
                    ) : Date.now() / 1000 > presale?.claimTime &&
                      amountInvested > 0 ? (
                      <button
                        disabled={claiming}
                        onClick={handleClaiming}
                        className="bg-secondary cursor-pointer p-5 text-center w-full text-tertiary font-Roboto border-none px-7.5 font-bold block"
                      >
                        Claim
                      </button>
                    ) : Date.now() / 1000 > presale?.endTime ? (
                      <div className="text-center">Presale ended</div>
                    ) : (
                      <div className="text-center">Presale starts soon</div>
                    )}
                  </>
                )
              ) : (
                <button
                  onClick={() => {
                    wallet.setModalOpen(true);
                  }}
                  className="bg-secondary cursor-pointer p-5 text-center w-full text-tertiary font-Roboto border-none px-7.5 font-bold block"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
          <div className="pt-[11px] pb-[41px] px-7 mb-[56px] bg-primary rounded-[5px]">
            <div className="text-2xl font-bold my-4">Social media</div>
            <div className="flex justify-evenly mb-7.5">
              <div className="flex items-center justify-center">
                <a
                  href="/"
                  className="bg-tertiary p-[13.5px] border-[1px] m-0 flex items-center border-solid rounded border-secondary/40 text-white"
                >
                  <BiLogoTwitter className="text-[24px]" />
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="/"
                  className="bg-tertiary p-[13.5px] border-[1px] m-0 flex items-center border-solid rounded border-secondary/40 text-white"
                >
                  <BiLogoDiscordAlt className="text-[24px]" />
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="/"
                  className="bg-tertiary p-[13.5px] border-[1px] m-0 flex items-center border-solid rounded border-secondary/40 text-white"
                >
                  <BiLogoTwitch className="text-[24px]" />
                </a>
              </div>
            </div>
            <div className="bg-secondary/30 h-[1px] mx-auto"></div>
            <div className="mt-5.5">
              <div className="text-lg font-bold mb-4">Website Link</div>
              <div className="bg-tertiary p-[13.5px] border-[1px] m-0 flex w-full max-w-[188px] items-center justify-between border-solid rounded border-secondary/40 text-white">
                <div>{details?.website}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M12.5314 3.36475C17.8439 3.36475 22.1668 7.68766 22.1668 13.0002C22.1668 18.3127 17.8439 22.6356 12.5314 22.6356C7.21891 22.6356 2.896 18.3127 2.896 13.0002C2.896 7.68766 7.21891 3.36475 12.5314 3.36475Z"
                    stroke="#28DBD1"
                    strokeMiterlimit="90"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.4169 5.23957C23.1565 2.16665 24.6669 3.05207 21.8023 7.21873C18.9377 11.3854 12.7398 17.375 8.00021 20.4479C3.26062 23.5208 1.75021 22.6354 4.61479 18.4687"
                    stroke="#28DBD1"
                    stroke-miterlimit="90"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 14.3022L4.5625 12.0627L6.75 11.5939L8.36458 12.5835L9.40625 14.146L9.875 15.6564L11.9583 16.2293M19.0417 12.1147H19.7708L20.7604 11.2293L21.5417 9.51058M15.2917 13.4689C14.5104 13.521 13.7813 12.9481 13.7292 12.1147C13.6771 11.3335 14.25 10.6043 15.0833 10.5522C15.8646 10.5002 16.5938 11.0731 16.6458 11.9064V12.1147M18.3646 20.6564L17.6875 18.9377L16.75 18.7814L16.8542 17.5835L19.3542 15.9168L21.8542 15.6564M10.8125 3.521V6.38558L11.9583 7.94808L13.9375 8.88558L15.4479 8.15641L16.9583 8.72933L17.5313 9.92725L17.6875 10.8127M13.6771 17.5314L13.9896 18.7814L13.1042 20.1356L11.0208 21.0731L8.05208 21.5418M6.80208 7.896C7.53125 7.896 8.10417 8.46891 8.10417 9.19808C8.10417 9.92725 7.53125 10.5002 6.80208 10.5002C6.07292 10.5002 5.5 9.92725 5.5 9.19808C5.5 8.46891 6.07292 7.896 6.80208 7.896Z"
                    stroke="#28DBD1"
                    stroke-miterlimit="90"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-7.5">
              <div className="text-lg font-bold mb-4">Download Whitepaper</div>
              <div className="bg-tertiary p-[13.5px] border-[1px] m-0 flex w-fit min-w-[188px] items-center justify-between border-solid rounded border-secondary/40 text-white">
                <div>Whitepaper</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_205_648)">
                    <path
                      d="M12.0001 11C12.2653 11 12.5196 11.1054 12.7072 11.2929C12.8947 11.4804 13.0001 11.7348 13.0001 12V18.584L14.2931 17.292C14.4808 17.1045 14.7354 16.9993 15.0008 16.9994C15.2661 16.9996 15.5205 17.1052 15.7081 17.293C15.8956 17.4808 16.0008 17.7353 16.0006 18.0007C16.0004 18.2661 15.8948 18.5205 15.7071 18.708L12.8831 21.527C12.6301 21.779 12.3831 22 12.0001 22C11.6641 22 11.4341 21.831 11.2121 21.62L8.29306 18.708C8.10528 18.5205 7.99969 18.2661 7.9995 18.0007C7.99931 17.7353 8.10455 17.4808 8.29206 17.293C8.47957 17.1052 8.73399 16.9996 8.99935 16.9994C9.26472 16.9993 9.51928 17.1045 9.70706 17.292L11.0001 18.584V12C11.0001 11.7348 11.1054 11.4804 11.293 11.2929C11.4805 11.1054 11.7348 11 12.0001 11ZM11.5001 2C14.2841 2 16.6601 3.75 17.5861 6.212C18.8196 6.55118 19.9126 7.27559 20.7055 8.2796C21.4985 9.2836 21.9499 10.5147 21.994 11.7933C22.0381 13.0719 21.6726 14.3311 20.9507 15.3874C20.2288 16.4436 19.1883 17.2416 17.9811 17.665C17.9064 16.9897 17.6037 16.3601 17.1231 15.88C16.612 15.3666 15.9318 15.0564 15.2091 15.007L15.0001 15V12C15.0008 11.2191 14.697 10.4687 14.1533 9.90818C13.6095 9.34769 12.8687 9.02132 12.0881 8.9984C11.3075 8.97548 10.5488 9.25784 9.97309 9.78546C9.39739 10.3131 9.05012 11.0444 9.00506 11.824L9.00006 12V15C8.60564 14.9994 8.21499 15.0769 7.85063 15.2279C7.48627 15.3789 7.1554 15.6005 6.87706 15.88C6.33912 16.4176 6.02622 17.1399 6.00206 17.9C4.96098 17.6873 4.0147 17.1485 3.30038 16.3619C2.58605 15.5752 2.1408 14.5815 2.02916 13.5248C1.91751 12.4681 2.14528 11.4033 2.67945 10.4847C3.21362 9.56618 4.02642 8.84159 5.00006 8.416C5.02215 6.70669 5.71671 5.07489 6.93331 3.87401C8.14991 2.67313 9.79061 1.99986 11.5001 2Z"
                      fill="#28DBD1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_205_648">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] sm:w-3/5 pt-[31px] pb-[41px] px-3 ml-0 sm:ml-[24px] mx-auto bg-primary rounded-[5px]">
          <div className="flex mb-[36px]">
            <img
              src={details?.banner}
              alt="Presale Banner"
              className="w-full"
            />
          </div>
          <div>
            <h3 className="font-bold text-2xl">Project Overview</h3>
            <p>{details?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presale;
