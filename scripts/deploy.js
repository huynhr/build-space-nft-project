const main = async () => {
  // compile contract
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();

  // call the function
  let txn = await nftContract.makeAnEpicNFT();
  // wait for it to be mined
  await txn.wait();
  console.log("Minted NFT #1");

  // call another one for fun
  txn = await nftContract.makeAnEpicNFT();
  // wait for it to be mined
  await txn.wait();
  console.log("Minted NFT #2");
};

const runMain = async () => {
  try {
    main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

runMain();
