
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    //  const tomb = await ethers.getContract("Tomb");

    await deploy("Treasury", {
        from: deployer,
        //  args: [tomb.address, 1637284903],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["Treasury"];
module.exports.dependencies = ["Tomb", "TShare", "TombRewardPool", "TShareRewardPool"];
