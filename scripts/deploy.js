const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const MyAvatar = await ethers.getContractFactory("MyAvatar");
  const deployed = await MyAvatar.deploy();

  console.log("Deployed in", deployed.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
