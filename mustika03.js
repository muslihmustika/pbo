class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  belajar() {
    console.log(`${this.nama} sedang belajar.`);
  }
}

let mhs1 = new Mahasiswa("Muslih", 202401110019, "informatika");
mhs1.belajar();

let mhs2 = new Mahasiswa("Mustika", 202501110020, "kebidanan");
mhs2.belajar();
