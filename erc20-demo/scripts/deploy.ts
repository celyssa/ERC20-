import { ethers } from "hardhat";

async function main() {
  const token = await ethers.deployContract("Tways", [
    "0xEB22275205422C8518DD146B02c9D32097156f7a"
  ]);

  await token.waitForDeployment();

  console.log(
    `Token deployed to ${token.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});