require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.1",
  networks: {
    rinkeby: {
      url: process.env.API_KEY_TESTNET,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
