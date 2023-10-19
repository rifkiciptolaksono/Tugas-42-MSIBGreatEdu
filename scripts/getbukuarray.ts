
import { ethers } from "hardhat";
import { Perpustakaan } from "../typechain";


async function main() {
   const perpusta = await ethers.getContract<Perpustakaan>("Perpustakaan");
   const getbuku = await perpusta.getBukuLength();
   console.log ("Buku saya = ", getbuku);
}


main().catch((erorbooks) => {
 console.log ("Eror : ", erorbooks );
 process.exitCode = 1;
}); 