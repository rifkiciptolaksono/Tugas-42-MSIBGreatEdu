// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

contract Perpustakaan{
    address public admin;

// mendefinisikan variabel identitas buku

    struct identitas_buku{
        uint256 isbn;
        string Judul;
        string penulis;
        uint16 tahun_terbit;
        bool benar;
    }

    mapping (uint256 => identitas_buku) public  buku;
   
    identitas_buku[] private  book; 


    // membuat event untuk melakukan perubahan buku, penambahan buku serta penghapusan buku

    event addBuku(uint256 indexed isbn, string _Judul, string Nama_penulis, uint16 tahun_terbit);
    event updateBuku(uint256 indexed isbn, string Judul_baru, string Nama_penulis_baru, uint16 tahun_terbit_baru);
    event deleteBuku(uint256 indexed isbn);
    event addadmin(address indexed id, string name);

     modifier hanyaAdmin() {
        require(msg.sender == admin, "Hanya admin yang dapat mengedit");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function addbuku(uint256 _isbn, string calldata _judul, string calldata Nama_penulis, uint16  tahun_terbit ) public hanyaAdmin{
    require(!buku[_isbn].benar, "Maaf Buku dengan ISDN ini telah terdaftar");
        buku[_isbn] = identitas_buku(_isbn, _judul, Nama_penulis, tahun_terbit, true );
        emit addBuku(_isbn, _judul, Nama_penulis, tahun_terbit);
        book.push(identitas_buku(_isbn, _judul, Nama_penulis, tahun_terbit, true));
        
}

    function updatebuku(uint256 _isbn, string memory Judul_baru, string memory Nama_penulis_baru, uint16  tahun_terbit_baru ) public hanyaAdmin{
        require(buku[_isbn].benar, "Maaf Buku dengan ISDN ini sudah diupdate");
        buku[_isbn].Judul = Judul_baru;
        buku[_isbn].penulis = Nama_penulis_baru;
        buku [_isbn].tahun_terbit= tahun_terbit_baru;
        emit updateBuku(_isbn, Judul_baru, Nama_penulis_baru, tahun_terbit_baru);
        for(uint256 i=0; i < book.length; i++)
        if(book[i].isbn == _isbn){
            book[i] = identitas_buku (_isbn, Judul_baru, Nama_penulis_baru, tahun_terbit_baru, true);
        }
        
       
}

    function delatebuku(uint256 _isbn) public hanyaAdmin{
        require(buku[_isbn].benar, "Maaf Buku dengan ISDN ini telah dihapus");
        delete buku[_isbn];
        emit deleteBuku(_isbn);
         for(uint256 i=0; i < book.length; i++)
        if(book[i].isbn == _isbn){
             if (i < book.length - 1) {
                    book[i] = book[book.length - 1];
                }
                book.pop();
        }
}

    function getbuku(uint256 _isbn) public view returns(uint256 isbn, string memory Judul , string memory penulis , uint16 tahun_terbit){
      for (uint256 i = 0; i < book.length; i++) {
            if (book[i].isbn == _isbn) {
                identitas_buku memory Buku = book[i];
            return(Buku.isbn, Buku.Judul, Buku.penulis, Buku.tahun_terbit);           
            
        }
}
    }

function getBukuLength() public view returns (uint256){
        return book.length;
}



}