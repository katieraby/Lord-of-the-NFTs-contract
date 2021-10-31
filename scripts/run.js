const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Gandalf", "Eowyn", "Tom Bombadil"], // Names
    [
      "QmWGxiHZnTqQXB5rqVeEs32SutTjMdDokR7DXCcnJNCJjH", // Images
      "Qmaf4E6k1hYJtFF3Kc9ebqCkHDhzfFdWJj3tpr116eNzdb",
      "Qmapaagg8h7gRdpKdE3kV8dyDpoy3TvauAsi4AAnh68RRG",
    ],
    [750, 475, 9001], // HP values
    [245, 220, 70], // Attack damage values
    [450, 0, 1000], // Magic power values
    "Witch-king of Angmar", // Boss name
    "QmZguSei4sHVU7YycjkK1MyavhZpemto4uQQT2pi3KKZZT", // Boss image
    10000, // Boss hp
    70, // Boss attack damage
    40 // Boss magic power
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
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
