const BebRegistryBetaController = require("./abi/beb-controller-abi.json"), BebRegistrar = require("./abi/beb-registrar-abi.json"), BebFactoryContract = require("./abi/beb-account-factory-0.json"), OPBebRegistryBetaController = require("./abi/op-controller-abi.json"), dev = () => ({
  NODE_URL: process.env.GOERLI_NODE_URL,
  NODE_NETWORK: "goerli",
  OPTIMISM_CONTROLLER_ADDRESS: "0x8db531fe6bea7b474c7735879e9a1000e819bd1d",
  BETA_CONTROLLER_ADDRESS: "0x78c3a1380842b82Da7b60e83C50b2e4cFA2D98Ee",
  REGISTRAR_ADDRESS: "0xC8d8c87E05E0Fd4C62b50D31bfA9f826AAb5c001",
  PRICE_ORACLE_ADDRESS: "0xAc20A90F71EFcB606232d640476E6aB30b426251",
  BETA_CONTROLLER_ABI: BebRegistryBetaController.abi,
  OPTIMISM_CONTROLLER_ABI: OPBebRegistryBetaController.abi,
  REGISTRAR_ABI: BebRegistrar.abi,
  FACTORY_CONTRACT_ADDRESS: "0xf6DdB44376Cc2f3Ed90625357991e10200eb3701",
  ENTRYPOINT_ADDRESS: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
  FACTORY_ABI: BebFactoryContract.abi,
  OPTIMISM_NODE_URL: process.env.OPTIMISM_NODE_URL,
  OPTIMISM_REGISTRAR_ADDRESS: "0xd14005cb9b40a1b7104eacdeae36f7fe112fae5f",
  OPTIMISM_NODE_NETWORK: "opt-mainnet",
  FARCAST_FID: 18548,
  FARCAST_KEY: process.env.FARCAST_KEY
}), prod = () => ({
  NODE_URL: process.env.HOMESTEAD_NODE_URL,
  NODE_NETWORK: "homestead",
  OPTIMISM_CONTROLLER_ADDRESS: "0x8db531fe6bea7b474c7735879e9a1000e819bd1d",
  BETA_CONTROLLER_ADDRESS: "0x0F08FC2A63F4BfcDDfDa5c38e9896220d5468a64",
  REGISTRAR_ADDRESS: "0x427b8efEe2d6453Bb1c59849F164C867e4b2B376",
  OPTIMISM_REGISTRAR_ADDRESS: "0xd14005cb9b40a1b7104eacdeae36f7fe112fae5f",
  OPTIMISM_NODE_URL: process.env.OPTIMISM_NODE_URL,
  OPTIMISM_NODE_NETWORK: "opt-mainnet",
  PRICE_ORACLE_ADDRESS: "0x8d881B939cEb6070a9368Aa6D91bc42e30697Da9",
  BETA_CONTROLLER_ABI: BebRegistryBetaController.abi,
  OPTIMISM_CONTROLLER_ABI: OPBebRegistryBetaController.abi,
  REGISTRAR_ABI: BebRegistrar.abi,
  FARCAST_FID: 18548,
  FARCAST_KEY: process.env.FARCAST_KEY
}), config = "production" === process.env.NODE_ENV ? prod : dev;

module.exports = {
  config: config,
  prod: prod,
  dev: dev
};