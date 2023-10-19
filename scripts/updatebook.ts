import { ethers } from "hardhat";
import { Perpustakaan } from "../typechain";


async function main() {
   const perpusta = await ethers.getContract<Perpustakaan>("Perpustakaan");
   const [admins] = await ethers.getSigners();
   const UpdateBook = await perpusta.connect(admins).updatebuku(647738848, "Ekonomi Mikro", "Adam", 2001);

   console.log("buku terlah terupdate");
}


main().catch((erorbooks) => {
 console.log ("Eror : ", erorbooks );
 process.exitCode = 1;
}); 