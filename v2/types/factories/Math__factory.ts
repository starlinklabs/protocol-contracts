/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Math, MathInterface } from "../Math";

const _abi = [
  {
    type: "error",
    name: "MathOverflowedMulDiv",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220aab48f05ffe1f801bd8422b15d0b18ea64f746ac67b68fe9d2c20abfef24ade464736f6c634300081a0033";

type MathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Math__factory extends ContractFactory {
  constructor(...args: MathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Math & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Math__factory {
    return super.connect(runner) as Math__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MathInterface {
    return new Interface(_abi) as MathInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Math {
    return new Contract(address, _abi, runner) as unknown as Math;
  }
}
