require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.1",
  networks: {
    goerli: {
      url: process.env.STAGING_ALCHEMY_GOERLI_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: process.env.STAGING_ALCHEMY_MUMBAI_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};