import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useFactoryContract, useTokenDetails } from "../../hooks/useContracts";
import DateTimePicker from "react-datetime-picker";
import { storeJSON, uploadFile } from "../../utils/web3storage";
import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import { parseEther } from "@ethersproject/units";
import { presaleABI } from "../../utils/abi/presale";
import ImageUploader, { FileObjectType } from "react-image-upload";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
interface TokenDetails {
  name: string;
  symbol: string;
  totalSupply: string;
  decimals: number;
  address: string;
}

const Create = () => {
  const [formDetails, setFormDetails] = useState<Record<any, any>>({});
  const [formSection, setFormSection] = useState<number>(1);
  const [tokenAddress, setAddress] = useState<string>("");
  const [logoFile, setLogo] = useState<File | undefined>();
  const [bannerFile, setBanner] = useState<File | undefined>();
  const [loading, setLoading] = useState(false);
  const { account } = useWeb3React();

  const factory = useFactoryContract();
  //   const [tokenDetails, setTokenDetails] = useState<TokenDetails | undefined>();
  const setSection = (num: number) => {
    if (num != formSection) {
      setFormSection(num);
    }
  };

  const FormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (name === "address") {
      setAddress(value);
    }
    if (type === "checkbox") {
      setFormDetails((form) => ({ ...form, [name]: checked }));
      return;
    }
    setFormDetails((form) => ({ ...form, [name]: value }));
  };
  const next = () => {
    setFormSection((value) => value + 1);
  };
  const previous = () => {
    setFormSection((value) => value - 1);
  };
  const tokenDetails = useTokenDetails(tokenAddress);
  const createSale = async () => {
    if (!logoFile || !bannerFile) {
      return;
    }

    const {
      twitter,
      description,
      // logo,
      reddit,
      github,
      website,
      maxBuy,
      minBuy,
      telegram,
      presalePrice,
      endTime,
      startTime,
      hardCap,
      softCap,
      withdrawalDelay,
      autoListing,
      liquidity,
    } = formDetails;
    setLoading(true);
    const toastId = toast.info("Creating Presale ...", { autoClose: false });
    try {
      console.log("uploading");
      toast.update(toastId, { type: "info", render: "Uploading Metadata ..." });
      const logo = await uploadFile(logoFile);
      const banner = await uploadFile(bannerFile);
      const metadataURI = await storeJSON({
        ...formDetails,
        ...tokenDetails,
        logo,
        banner,
      });
      toast.update(toastId, {
        type: "success",
        render: "Metadata uloaded successfully",
      });
      console.log("creating");
      console.log("gas limit");

      toast.update(toastId, {
        type: "info",
        render: "Pending approval",
      });

      const transaction = await factory!.createPresale(
        metadataURI,
        tokenAddress,
        2,
        new Date(startTime).getTime() / 1000,
        new Date(endTime).getTime() / 1000,
        parseEther(minBuy),
        parseEther(maxBuy),
        parseEther(hardCap),
        parseEther(softCap),
        new Date(withdrawalDelay).getTime() / 1000,
        autoListing,
        autoListing ? liquidity ?? 0 : 0,
        { value: parseEther("0.01") }
      );
      toast.update(toastId, {
        type: "info",
        render: "Submitting Transaction",
      });

      const receipt = await transaction.wait();

      if (receipt.status == 1) {
        toast.update(toastId, {
          type: "success",
          autoClose: 5000,
          render: "Presale created successfully",
        });
      } else {
        throw { message: "Tracnsaction Failed" };
      }
    } catch (err: any) {
      console.log(err);
      toast.update(toastId, {
        type: "error",
        autoClose: 5000,
        render: err.code ?? err?.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const buttonDisabled =
    loading ||
    !formDetails.maxBuy ||
    !formDetails.minBuy ||
    !formDetails.hardCap ||
    !formDetails.softCap ||
    !formDetails.withdrawalDelay ||
    !formDetails.startTime ||
    !formDetails.endTime ||
    !tokenDetails ||
    !logoFile ||
    !bannerFile;
  return (
    <div className="bg-tertiary px-5 md:px-16 font-Inter">
      <Navbar />
      <h1 className="mt-10 text-center">Create Sale</h1>
      <div className="bg-[#d00] p-5 rounded-lg">
        <h2 className="mb-2">Disclaimer!</h2>
        This process is entirely decentralized, we cannot be held responsible
        for incorrect entry of information or be held liable for anything
        related to your use of our platform. Please ensure you enter all your
        details to the best accuracy possible and that you are in compliance
        with your local laws and regulations. If your local laws require KYC and
        AML please ensure you complete this on your own behalf!
      </div>

      <section>
        <h2
          onClick={() => {
            setSection(1);
          }}
          className="text-secondary"
        >
          1. Token Address
        </h2>
        <div className={`${formSection != 1 ? "hidden" : "block"}`}>
          <div>Enter Your Token Address</div>
          <input
            name="address"
            onChange={FormChange}
            className="block w-full h-6 rounded-lg bg-primary p-2 outline-1 outline-secondary border-0 text-white"
          ></input>
          {!tokenDetails && tokenAddress && <div>Invalid Token Address</div>}
          <div>
            <div className="flex gap-5 items-center mt-5">
              <p className="m-0">Token Name</p>
              <input
                value={tokenDetails?.name}
                className="input h-6 p-2"
                readOnly
              ></input>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <p className="m-0">Token Symbol</p>
              <input
                value={tokenDetails?.symbol}
                className="input h-6 p-2"
                readOnly
              ></input>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <p className="m-0">Token Decimal</p>
              <input
                value={tokenDetails?.decimals}
                className="input h-6 p-2"
                readOnly
              ></input>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button className="bg-secondary/60 block border-0 cursor-disabled py-2 px-6 rounded-lg font-bold text-lg">
              Back
            </button>
            <button
              onClick={next}
              className="bg-secondary cursor-pointer block border-0 py-2 px-6 rounded-lg font-bold text-lg"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2
          onClick={() => {
            setSection(2);
          }}
          className="text-secondary"
        >
          2. Presale Rate
        </h2>
        <div className={`${formSection != 2 ? "hidden" : "block"}`}>
          <div>
            <p className="m-0">Presale Price</p>
            <input
              name="presalePrice"
              onChange={FormChange}
              className="input p-2 h-5 rounded-lg"
            ></input>
          </div>
          <div className="mt-4">
            <p className="m-0">Listing Price</p>
            <input
              name="listingPrice"
              onChange={FormChange}
              className="input p-2 h-5 rounded-lg"
            ></input>
          </div>
          <div className="flex gap-3 mt-4">
            <button
              onClick={previous}
              className="bg-secondary cursor-pointer block border-0 py-2 px-6 rounded-lg font-bold text-lg"
            >
              Back
            </button>
            <button
              onClick={next}
              className="bg-secondary cursor-pointer block border-0 py-2 px-6 rounded-lg font-bold text-lg"
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2
          onClick={() => {
            setSection(3);
          }}
          className="text-secondary"
        >
          3. Contribution Limit
        </h2>
        <div className={`${formSection != 3 ? "hidden" : "block"}`}>
          <div>
            <p>Min. Buy</p>
            <input
              className="input h-5 p-2 rounded-lg"
              onChange={FormChange}
              name="minBuy"
            ></input>
          </div>
          <div>
            <p>Max. Buy</p>
            <input
              className="input h-5 p-2 rounded-lg"
              onChange={FormChange}
              name="maxBuy"
            ></input>
          </div>
          <div>
            <p>Hard Cap</p>
            <input
              className="input h-5 p-2 rounded-lg"
              onChange={FormChange}
              name="hardCap"
            ></input>
          </div>
          <div>
            <p>Soft Cap</p>
            <input
              className="input h-5 p-2 rounded-lg"
              onChange={FormChange}
              name="softCap"
            ></input>
          </div>
          <div className="flex gap-3 mt-4">
            <button
              onClick={previous}
              className="bg-secondary cursor-pointer block border-0 py-2 px-6 rounded-lg font-bold text-lg"
            >
              Back
            </button>
            <button
              onClick={next}
              className="bg-secondary cursor-pointer block border-0 py-2 px-6 rounded-lg font-bold text-lg"
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2
          onClick={() => {
            setSection(4);
          }}
          className="text-secondary"
        >
          4. Timing
        </h2>
        <div className={`${formSection != 4 ? "hidden" : "block"}`}>
          <div>
            <p>Presale Start Time</p>
            <input
              type="datetime-local"
              className="input h-5 p-2 rounded-lg"
              name="startTime"
              onChange={FormChange}
            ></input>
          </div>
          <div>
            <p>Presale End Time</p>
            <input
              type="datetime-local"
              className="input h-5 p-2 rounded-lg"
              name="endTime"
              onChange={FormChange}
            ></input>
          </div>
          <div>
            <p>Claiming Delay</p>
            <input
              type="datetime-local"
              className="input h-5 p-2 rounded-lg"
              name="withdrawalDelay"
              onChange={FormChange}
            ></input>
          </div>
          <div className="flex gap-3 mt-4">
            <button
              onClick={previous}
              className="bg-secondary cursor-pointer block border-0 py-2 px-6 rounded-lg font-bold text-lg"
            >
              Back
            </button>
            <button
              onClick={next}
              className="bg-secondary cursor-pointer block border-0 py-2 px-6 rounded-lg font-bold text-lg"
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2
          onClick={() => {
            setSection(5);
          }}
          className="text-secondary"
        >
          5. Additional information
        </h2>
        <div className={`${formSection != 5 ? "hidden" : "block"}`}>
          <div>
            <div>Logo</div>
            <ImageUploader
              onFileAdded={function ({ file, dataUrl }: FileObjectType) {
                setLogo(file);
              }}
              style={{ height: 150, width: 150, background: "rgb(0 182 255)" }}
              uploadIcon="Upload Logo"
            />
          </div>
          <div className="my-5">
            <div>Banner</div>
            <ImageUploader
              onFileAdded={function ({ file, dataUrl }: FileObjectType) {
                setBanner(file);
              }}
              style={{ height: 200, width: 300, background: "rgb(0 182 255)" }}
              uploadIcon="Upload Banner"
            />
          </div>
          <div>
            <p>Website Link</p>
            <input
              className="input h-5 p-2 rounded-lg"
              onChange={FormChange}
              name="website"
            ></input>
          </div>
          <div>
            <p>Github Link</p>
            <input
              className="input h-5 p-2 rounded-lg"
              onChange={FormChange}
              name="github"
            ></input>
          </div>
          <div>
            <p>Twitter Link</p>
            <input
              className="input h-5 p-2 rounded-lg"
              onChange={FormChange}
              name="twitter"
            ></input>
          </div>
          <div>
            <p>Reddit Link</p>
            <input
              className="input h-5 p-2 rounded-lg"
              onChange={FormChange}
              name="reddit"
            ></input>
          </div>
          <div>
            <p>Telegram Link</p>
            <input
              className="input h-5 p-2 rounded-lg"
              onChange={FormChange}
              name="telegram"
            ></input>
          </div>
          <div>
            <p>Project Description</p>
            <input
              className="input h-5 p-2 rounded-lg"
              name="description"
              onChange={FormChange}
            ></input>
          </div>
          <div className="flex gap-3 mt-4">
            <button
              onClick={previous}
              className="bg-secondary cursor-pointer block border-0 py-2 px-6 rounded-lg font-bold text-lg"
            >
              Back
            </button>
            <button
              onClick={next}
              className="bg-secondary cursor-pointer block border-0 py-2 px-6 rounded-lg font-bold text-lg"
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2
          onClick={() => {
            setSection(6);
          }}
          className="text-secondary"
        >
          6. Listing
        </h2>
        <div className={`${formSection != 6 ? "hidden" : "block"}`}>
          <div className="flex gap-3">
            <input type="checkbox" onChange={FormChange} name="autoListing" />
            <div>Auto Listing</div>
          </div>
          {formDetails.autoListing && (
            <div className="mt-3">
              <p>Liquidity Percentage</p>
              <input
                className="input h-5 p-2 min-w-[200px] mt-1 rounded-lg"
                onChange={FormChange}
                name="liquidity"
                type="number"
                max={100}
                min={0}
              ></input>
            </div>
          )}
          <div className="flex gap-3 mt-4">
            <button
              onClick={previous}
              className="bg-secondary cursor-pointer block border-0 py-2 px-6 rounded-lg font-bold text-lg"
            >
              Back
            </button>
            <button
              onClick={next}
              className="bg-secondary cursor-pointer block border-0 py-2 px-6 rounded-lg font-bold text-lg"
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2
          onClick={() => {
            setSection(7);
          }}
          className="text-secondary"
        >
          7. Finalize
        </h2>
        <div className={`${formSection != 7 ? "hidden" : "block"}`}>
          <div></div>
          <div>
            {/* <p>Presale End Time</p>
            <input className="input h-6 p-2" readOnly></input> */}
          </div>
          <div>
            {/* <p>Claiming Delay</p>
            <input readOnly></input> */}
          </div>
          <div className="flex gap-3 mt-4">
            <button
              onClick={createSale}
              className={`${
                buttonDisabled
                  ? "bg-secondary/60 cursor-not-allowed text-white"
                  : "bg-secondary cursor-pointer"
              } block border-0 py-2 px-6 flex gap-3 items-center rounded-lg font-bold text-lg`}
              disabled={buttonDisabled}
            >
              {!loading ? (
                "Create"
              ) : (
                <>
                  Creating
                  <TailSpin
                    wrapperClass="ml-auto"
                    color="#fff"
                    height={"20px"}
                    width={"20px"}
                  />
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;
