import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const fungsi : DeployFunction = async ({
  ethers,    
  deployments,
       } : HardhatRuntimeEnvironment)=> {
    const {deploy} = deployments;
    // const {deployer} = await getNamedAccounts();

    const accounts = await ethers.getSigners();

    const deployer = accounts[0]; 


    
    // console.log('deployer=', deployer.address);
    
    // the following will only deploy "GenericMetaTxProcessor" if the contract was never deployed or if the code changed since last deployment
    const perpus = await deploy ('Perpustakaan', {
      // contract: "Perpustakaan", 
      from: deployer.address,
      // args: [],
      // gasLimit: 1000000,
    }); 
    console.log("perpustakkan berhasil terdeploy", perpus.address);

  
  };

  fungsi.tags = ['Perpustakaan1'];

  export default fungsi