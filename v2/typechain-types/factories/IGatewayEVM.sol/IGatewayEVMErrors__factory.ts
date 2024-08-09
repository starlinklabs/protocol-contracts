/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IGatewayEVMErrors,
  IGatewayEVMErrorsInterface,
} from "../../IGatewayEVM.sol/IGatewayEVMErrors";

const _abi = [
  {
    type: "error",
    name: "ApprovalFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "ConnectorInitialized",
    inputs: [],
  },
  {
    type: "error",
    name: "CustodyInitialized",
    inputs: [],
  },
  {
    type: "error",
    name: "DepositFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "ExecutionFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "InsufficientERC20Amount",
    inputs: [],
  },
  {
    type: "error",
    name: "InsufficientETHAmount",
    inputs: [],
  },
  {
    type: "error",
    name: "ZeroAddress",
    inputs: [],
  },
] as const;

export class IGatewayEVMErrors__factory {
  static readonly abi = _abi;
  static createInterface(): IGatewayEVMErrorsInterface {
    return new Interface(_abi) as IGatewayEVMErrorsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IGatewayEVMErrors {
    return new Contract(address, _abi, runner) as unknown as IGatewayEVMErrors;
  }
}
