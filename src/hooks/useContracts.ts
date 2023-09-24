import { useWeb3React } from "@web3-react/core";
import { Contract } from "ethers";
import { getContract } from "../utils/getContract";
import { staticProvider } from "../constants/provider";
import { useEffect, useMemo, useState } from "react";
import { factoryABI } from "../utils/abi/presalefactory";
import { defaultChainId, factoryAddresses } from "../constants";
import { erc20ABI } from "../utils/abi/erc20";
import { formatUnits } from "@ethersproject/units";
import { toLower } from "lodash";
import { presaleABI } from "../utils/abi/presale";

export function useContract<T extends Contract = Contract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any,
  withSignerIfPossible = true
): T | null {
  const {
    provider = staticProvider,
    account,
    chainId = defaultChainId,
  } = useWeb3React();

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !provider || !chainId) return null;
    let address: string | undefined;
    if (typeof addressOrAddressMap === "string") address = addressOrAddressMap;
    else address = addressOrAddressMap[chainId];
    if (!address) return null;
    try {
      return getContract(
        address,
        ABI,
        provider,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [
    staticProvider,
    addressOrAddressMap,
    ABI,
    provider,
    chainId,
    withSignerIfPossible,
    account,
  ]) as unknown as T;
}

export const useFactoryContract = (withSignerIfPossible?: boolean) => {
  return useContract(factoryAddresses, factoryABI.abi, withSignerIfPossible);
};

export const useTokenContract = (
  address: string,
  withSignerIfPossible?: boolean
) => {
  return useContract(address, erc20ABI, withSignerIfPossible);
};

export const useTokenDetails = (address: string) => {
  const erc20Contract = useTokenContract(address);
  const [erc20Details, setERC20Details] = useState<
    | {
        name: string;
        symbol: string;
        totalSupply: string;
        decimals: number;
        address: string;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    if (erc20Contract) {
      (async () => {
        try {
          const name = await erc20Contract.name();
          const symbol = await erc20Contract.symbol();
          const decimals = await erc20Contract.decimals();
          const totalSupply = formatUnits(
            await erc20Contract.totalSupply(),
            decimals
          );
          setERC20Details({
            name,
            symbol,
            decimals,
            totalSupply,
            address: toLower(erc20Contract.address as any),
          });
        } catch (error: any) {
          setERC20Details(undefined);
          console.debug(error);
        }
      })();
    }
  }, [erc20Contract]);

  return erc20Details;
};

export const usePresaleContract = (
  address: string,
  withSignerIfPossible?: boolean
) => {
  return useContract(address, presaleABI.abi, withSignerIfPossible);
};
