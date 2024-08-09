/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IGatewayZEVMErrors,
  IGatewayZEVMErrorsInterface,
} from "../../IGatewayZEVM.sol/IGatewayZEVMErrors";

const _abi = [
  {
    type: "error",
    name: "CallerIsNotFungibleModule",
    inputs: [],
  },
  {
    type: "error",
    name: "FailedZetaSent",
    inputs: [],
  },
  {
    type: "error",
    name: "GasFeeTransferFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "InsufficientZRC20Amount",
    inputs: [],
  },
  {
    type: "error",
    name: "InsufficientZetaAmount",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidTarget",
    inputs: [],
  },
  {
    type: "error",
    name: "OnlyWZETAOrFungible",
    inputs: [],
  },
  {
    type: "error",
    name: "WithdrawalFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "ZRC20BurnFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "ZRC20DepositFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "ZRC20TransferFailed",
    inputs: [],
  },
] as const;

export class IGatewayZEVMErrors__factory {
  static readonly abi = _abi;
  static createInterface(): IGatewayZEVMErrorsInterface {
    return new Interface(_abi) as IGatewayZEVMErrorsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IGatewayZEVMErrors {
    return new Contract(address, _abi, runner) as unknown as IGatewayZEVMErrors;
  }
}
