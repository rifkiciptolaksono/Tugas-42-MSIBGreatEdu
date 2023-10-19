import { ethers } from "hardhat";
import { Perpustakaan } from "../typechain";


async function main() {
   const perpusta = await ethers.getContract<Perpustakaan>("Perpustakaan");
   const [admins] = await ethers.getSigners();
   const DeleteBook = await perpusta.connect(admins).delatebuku(53564774);
   await DeleteBook.wait();
   console.log("Buku telah dihapus");
}


main().catch((erorbooks) => {
 console.log ("Eror : ", erorbooks );
 process.exitCode = 1;
}); 