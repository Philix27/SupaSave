import * as func from "../const/fn"
import { AppContractAbi } from "./abi"
import { TokenAddress } from "./cusdToken"

export * from "./abi"
export * from "./cusdToken"

export const ContractFn = {
  ...func,
}

export const AppContract = {
  address: "0xE827006E5337021c2fC125410da3d670c48d9a1d", // Testnet
  // address: "0x72D8025739315424725aCA52d83E7A59fB2d4A3e", // Mainnet
  abi: AppContractAbi,
  cusdTokenAddress: TokenAddress.CUSD_TESTNET,
}
