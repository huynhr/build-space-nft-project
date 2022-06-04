const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // Call the function.
  let txn = await nftContract.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();

  // Mint another NFT for fun.
  txn = await nftContract.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();

  let totalMinted = await nftContract.getTotalNFTsMintedSoFar();

  console.log(`Total minted so far: ${totalMinted}/50`);

  for (let i = 0; i < 50; i++) {
    txn = await nftContract.makeAnEpicNFT();

    await txn.wait();
  }

  totalMinted = await nftContract.getTotalNFTsMintedSoFar();

  console.log(`Total minted so far: ${totalMinted}/50`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
