const hre = require("hardhat");

async function main() {
  const initialMessage = "Hello World!"
  const MyMessage = await hre.ethers.deployContract("MyMessage", [initialMessage]);

  await MyMessage.waitForDeployment();

  console.log(`GetMyMessage deployed to ${MyMessage.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});