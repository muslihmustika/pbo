// ==========================
// 🧬 PEWARISAN (INHERITANCE)
// ==========================
// Kelas induk (superclass)
class Hewan {
  constructor(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis;
  }

  suara() {
    return `${this.nama} bersuara...`;
  }

  info() {
    return `Nama: ${this.nama}, Jenis: ${this.jenis}`;
  }
}

// --------------------------
// Kelas turunan 1 (Kucing)
// Pewarisan dari Hewan
// --------------------------
class Kucing extends Hewan {
  constructor(nama, warna) {
    super(nama, "Kucing"); // memanggil constructor superclass
    this.warna = warna;
  }

  // ==========================
  // 🌀 POLIMORFISME (POLYMORPHISM)
  // ==========================
  suara() {
    return `${this.nama} mengeong: "Meong~"`;
  }
}

// --------------------------
// Kelas turunan 2 (Anjing)
// --------------------------
class Anjing extends Hewan {
  constructor(nama, ras) {
    super(nama, "Anjing");
    this.ras = ras;
  }

  // Polimorfisme: override metode suara()
  suara() {
    return `${this.nama} menggonggong: "Guk guk!"`;
  }
}

// --------------------------
// Kelas turunan 3 (Burung)
// --------------------------
class Burung extends Hewan {
  constructor(nama, warnaBulu) {
    super(nama, "Burung");
    this.warnaBulu = warnaBulu;
  }

  // Polimorfisme: override metode suara()
  suara() {
    return `${this.nama} berkicau: "Cuit cuit~"`;
  }
}

// =====================================
// 💡 CONTOH PENGGUNAAN PEWARISAN & POLIMORFISME
// =====================================
const hewan1 = new Hewan("Gajah", "Mamalia");
const kucing1 = new Kucing("Mimi", "Putih");
const anjing1 = new Anjing("Buddy", "Bulldog");
const burung1 = new Burung("Rio", "Biru");

// Pewarisan: semua objek punya metode 'info()' dari kelas Hewan
console.log(hewan1.info());
console.log(hewan1.suara());
console.log("--------------");

console.log(kucing1.info());
console.log(kucing1.suara());
console.log("--------------");

console.log(anjing1.info());
console.log(anjing1.suara());
console.log("--------------");

console.log(burung1.info());
console.log(burung1.suara());
console.log("--------------");

// ==============================
// 🔁 CONTOH POLIMORFISME LANGSUNG
// ==============================
// Semua objek dimasukkan ke dalam satu array
const daftarHewan = [hewan1, kucing1, anjing1, burung1];

// Meskipun semua dipanggil dengan metode yang sama (`suara()`),
// hasilnya berbeda-beda tergantung kelasnya
for (const h of daftarHewan) {
  console.log(h.suara());
}
