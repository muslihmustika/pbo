class Mahasiswa {
  constructor(nama, nim, nilai) {
    this.nama = nama;  // Atribut publik
    this.nim = nim;    // Atribut publik

    let _nilai = nilai;  // Atribut private menggunakan closure

    // Getter untuk mengakses nilai
    this.getNilai = function() {
      return _nilai;
    };

    // Setter untuk mengubah nilai dengan validasi
    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log('Nilai harus antara 0 dan 100');
      }
    };
  }
}

// --------------------
// Contoh penggunaan
// --------------------

// Membuat objek Mahasiswa
let mhs1 = new Mahasiswa("Muslih", "202401110019", 85);

// Menampilkan data awal
console.log("Nama:", mhs1.nama);
console.log("NIM:", mhs1.nim);
console.log("Nilai awal:", mhs1.getNilai());

// Mengubah nilai dengan setter
mhs1.setNilai(95);
console.log("Nilai setelah diubah:", mhs1.getNilai());

// Coba masukkan nilai tidak valid
mhs1.setNilai(120); // Akan muncul pesan error
console.log("Nilai setelah input tidak valid:", mhs1.getNilai());
