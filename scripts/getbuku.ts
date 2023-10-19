import { ethers } from "hardhat";
import { Perpustakaan } from "../typechain";


async function main() {
   const perpusta = await ethers.getContract<Perpustakaan>("Perpustakaan");
   const [admins] = await ethers.getSigners();
   const getBukuIsbn = await perpusta.connect(admins).getbuku(53564774);

   console.log("buku saya : ", getBukuIsbn);
}


main().catch((erorbooks) => {
 console.log ("Eror : ", erorbooks );
 process.exitCode = 1;
}); 