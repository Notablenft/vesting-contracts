const { time } = require('@openzeppelin/test-helpers');
const hre = require("hardhat");
const tokenContract = '0xFAA0fC7B803919B091dBe5FF709b2dAbb61b93d9';
const tge = require('../data/tge');
const allocations = require('../data/allocations');

async function deployAdvisors() {
  const start = tge.timestamp + time.duration.days(120).toNumber();
  const beneficiary = allocations.advisors.address;
  const amount = allocations.advisors.amount;
  const AdvisorsVesting = await hre.ethers.getContractFactory("AdvisorsVesting");
  const advisorsVesting = await AdvisorsVesting.deploy(tokenContract, beneficiary, start, amount);
  await advisorsVesting.deployed();
  console.log("AdvisorsVesting deployed to:", advisorsVesting.address);
  console.log("Addr: ", tokenContract, "Start: ", start, "Benef:", beneficiary, "Amount:", amount);
}

async function deployTeam() {
  const start = tge.timestamp + time.duration.days(90).toNumber();
  const beneficiary = allocations.team.address;
  const amount = allocations.team.amount;
  const TeamVesting = await hre.ethers.getContractFactory("TeamVesting");
  const teamVesting = await TeamVesting.deploy(tokenContract, beneficiary, start, amount);
  await teamVesting.deployed();
  console.log("TeamVesting deployed to:", teamVesting.address);
  console.log("Addr: ", tokenContract, "Start: ", start, "Benef:", beneficiary, "Amount:", amount);
}

async function deployFoundation() {
  const start = tge.timestamp + time.duration.days(180).toNumber();
  const beneficiary = allocations.foundation.address;
  const amount = allocations.foundation.amount;
  const FoundationVesting = await hre.ethers.getContractFactory("FoundationVesting");
  const foundationVesting = await FoundationVesting.deploy(tokenContract, beneficiary, start, amount);
  await foundationVesting.deployed();
  console.log("FoundationVesting deployed to:", foundationVesting.address);
  console.log("Addr: ", tokenContract, "Start: ", start, "Benef:", beneficiary, "Amount:", amount);
}

async function deployMarketing() {
  const start = tge.timestamp;
  const beneficiary = allocations.marketing.address;
  const amount = allocations.marketing.amount;
  const MarketingVesting = await hre.ethers.getContractFactory("MarketingVesting");
  const marketingVesting = await MarketingVesting.deploy(tokenContract, beneficiary, start, amount);
  await marketingVesting.deployed();
  console.log("MarketingVesting deployed to:", marketingVesting.address);
  console.log("Addr: ", tokenContract, "Start: ", start, "Benef:", beneficiary, "Amount:", amount);
}

async function deployStaking() {
  const start = tge.timestamp + time.duration.days(30).toNumber();
  const beneficiary = allocations.staking.address;
  const amount = allocations.staking.amount;
  const StakingVesting = await hre.ethers.getContractFactory("StakingVesting");
  const stakingVesting = await StakingVesting.deploy(tokenContract, beneficiary, start, amount);
  await stakingVesting.deployed();
  console.log("StakingVesting deployed to:", stakingVesting.address);
  console.log("Addr: ", tokenContract, "Start: ", start, "Benef:", beneficiary, "Amount:", amount);
}

async function deployCex() {
  const start = tge.timestamp + time.duration.days(30).toNumber();
  const beneficiary = allocations.cex.address;
  const amount = allocations.cex.amount;
  const CexVesting = await hre.ethers.getContractFactory("CexVesting");
  const cexVesting = await CexVesting.deploy(tokenContract, beneficiary, start, amount);
  await cexVesting.deployed();
  console.log("CexVesting deployed to:", cexVesting.address);
  console.log("Addr: ", tokenContract, "Start: ", start, "Benef:", beneficiary, "Amount:", amount);
}

async function main() {
  await deployAdvisors();
  await deployTeam();
  await deployFoundation();
  await deployMarketing();
  await deployStaking();
  await deployCex();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
