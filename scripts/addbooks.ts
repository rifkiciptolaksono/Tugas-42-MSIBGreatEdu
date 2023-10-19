import { ethers } from "hardhat";
import { Perpustakaan } from "../typechain";


async function main() {
   const perpusta = await ethers.getContract<Perpustakaan>("Perpustakaan");
   const [admins] = await ethers.getSigners();
   const addBuku = await perpusta.connect(admins).addbuku(53564774, "Matahari Bersinar", "rifki", 2023 );
   const addBuku1 = await perpusta.connect(admins).addbuku(647738848, "Ekonomi Makro", "Adam", 2000 );
   
   console.log("buku berhasil ditambahkan");
}


main().catch((erorbooks) => {
 console.log ("Eror : ", erorbooks );
 process.exitCode = 1;
}); 