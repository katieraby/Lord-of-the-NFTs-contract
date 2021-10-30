const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Gandalf", "Eowyn", "Tom Bombadil"], // Names
    [
      "https://i1.sndcdn.com/avatars-2AI10Rs3s1EneWOl-317StQ-t500x500.jpg", // Images
      "https://static.wikia.nocookie.net/lotr/images/0/02/%C3%89owyn_of_Rohan_%2860%29.jpg",
      "https://static.wikia.nocookie.net/lotr/images/1/19/1-TomBombadil.jpg",
    ],
    [750, 475, 9001], // HP values
    [245, 220, 70], // Attack damage values
    [450, 0, 1000], // Magic power values
    "Witch-king of Angmar", // Boss name
    "data:image/jpeg;base64,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", // Boss image
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
