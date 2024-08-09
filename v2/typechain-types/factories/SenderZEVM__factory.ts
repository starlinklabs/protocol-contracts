/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { SenderZEVM, SenderZEVMInterface } from "../SenderZEVM";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_gateway",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "callReceiver",
    inputs: [
      {
        name: "receiver",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "str",
        type: "string",
        internalType: "string",
      },
      {
        name: "num",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "flag",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "gateway",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withdrawAndCallReceiver",
    inputs: [
      {
        name: "receiver",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "zrc20",
        type: "address",
        internalType: "address",
      },
      {
        name: "str",
        type: "string",
        internalType: "string",
      },
      {
        name: "num",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "flag",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "ApprovalFailed",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060405161080c38038061080c833981016040819052602c916050565b600080546001600160a01b0319166001600160a01b0392909216919091179055607e565b600060208284031215606157600080fd5b81516001600160a01b0381168114607757600080fd5b9392505050565b61077f8061008d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630abd890514610046578063116191b61461005b578063865b36f6146100a4575b600080fd5b6100596100543660046104c4565b6100b7565b005b60005461007b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100596100b236600461057f565b6102af565b60008383836040516024016100ce93929190610674565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fe04d4f970000000000000000000000000000000000000000000000000000000017905260005490517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201526024810189905291925086169063095ea7b3906044016020604051808303816000875af11580156101be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e2919061069e565b610218576040517f8164f84200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000546040517f7993c1e000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690637993c1e090610274908a908a908a9087906004016106c2565b600060405180830381600087803b15801561028e57600080fd5b505af11580156102a2573d6000803e3d6000fd5b5050505050505050505050565b60008383836040516024016102c693929190610674565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fe04d4f970000000000000000000000000000000000000000000000000000000017905260005490517f5d40e17800000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff1690635d40e1789061039690899089908690600401610714565b600060405180830381600087803b1580156103b057600080fd5b505af11580156103c4573d6000803e3d6000fd5b50505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261041057600080fd5b81356020830160008067ffffffffffffffff841115610431576104316103d0565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff8211171561047e5761047e6103d0565b60405283815290508082840187101561049657600080fd5b838360208301376000602085830101528094505050505092915050565b80151581146104c157600080fd5b50565b60008060008060008060c087890312156104dd57600080fd5b863567ffffffffffffffff8111156104f457600080fd5b61050089828a016103ff565b96505060208701359450604087013573ffffffffffffffffffffffffffffffffffffffff8116811461053157600080fd5b9350606087013567ffffffffffffffff81111561054d57600080fd5b61055989828a016103ff565b9350506080870135915060a0870135610571816104b3565b809150509295509295509295565b600080600080600060a0868803121561059757600080fd5b853567ffffffffffffffff8111156105ae57600080fd5b6105ba888289016103ff565b95505060208601359350604086013567ffffffffffffffff8111156105de57600080fd5b6105ea888289016103ff565b935050606086013591506080860135610602816104b3565b809150509295509295909350565b6000815180845260005b818110156106365760208185018101518683018201520161061a565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6060815260006106876060830186610610565b602083019490945250901515604090910152919050565b6000602082840312156106b057600080fd5b81516106bb816104b3565b9392505050565b6080815260006106d56080830187610610565b85602084015273ffffffffffffffffffffffffffffffffffffffff8516604084015282810360608401526107098185610610565b979650505050505050565b6060815260006107276060830186610610565b846020840152828103604084015261073f8185610610565b969550505050505056fea2646970667358221220ddcbd562c5a31178b5329fda1f132a86de22f76634e8db0c9e673fb209cafcc164736f6c634300081a0033";

type SenderZEVMConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SenderZEVMConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SenderZEVM__factory extends ContractFactory {
  constructor(...args: SenderZEVMConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _gateway: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_gateway, overrides || {});
  }
  override deploy(
    _gateway: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_gateway, overrides || {}) as Promise<
      SenderZEVM & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SenderZEVM__factory {
    return super.connect(runner) as SenderZEVM__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SenderZEVMInterface {
    return new Interface(_abi) as SenderZEVMInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SenderZEVM {
    return new Contract(address, _abi, runner) as unknown as SenderZEVM;
  }
}
