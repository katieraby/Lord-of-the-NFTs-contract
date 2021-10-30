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
    "https://static.wikia.nocookie.net/lotr/images/6/6e/Witch_King.png", // Boss image
    10000, // Boss hp
    70, // Boss attack damage
    40 // Boss magic power
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
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
