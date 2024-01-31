require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const URL = process.env.URL;
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
