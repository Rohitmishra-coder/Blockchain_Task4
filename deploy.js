async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with account:", deployer.address);

  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy();  // deploys it

  await hello.waitForDeployment(); // ✅ this replaces .deployed()

  console.log("✅ Contract deployed to:", hello.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
