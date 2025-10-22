// =======================================================
// 🧩 CONTOH KONSEP KELAS ABSTRAK DAN INTERFACE DI JAVASCRIPT
// =======================================================

// =======================
// 🧱 KELAS ABSTRAK (VERSI 1)
// =======================
class Kendaraan {
  constructor(merk) {
    this.merk = merk;
  }

  // Method abstrak → wajib diimplementasikan di subclass
  maju() {
    throw new Error("Method 'maju()' harus diimplementasikan!");
  }
}

// =======================
// 🧱 KELAS ABSTRAK (VERSI 2) — yang tidak bisa diinstansiasi langsung
// =======================
class KendaraanAbstrak {
  constructor(merk) {
    this.merk = merk;

    // Cegah instansiasi langsung
    if (this.constructor === KendaraanAbstrak) {
      throw new Error("Kelas abstrak 'KendaraanAbstrak' tidak bisa diinstansiasi langsung.");
    }
  }

  maju() {
    throw new Error("Method 'maju()' harus diimplementasikan!");
  }
}

// =======================
// 🚗 SUBCLASS KONKRIT (mengimplementasikan kelas abstrak)
// =======================
class Mobil extends KendaraanAbstrak {
  maju() {
    return `${this.merk} melaju dengan kecepatan tinggi!`;
  }
}

// Contoh penggunaan
const avanza = new Mobil("Toyota Avanza");
console.log(avanza.maju()); // Toyota Avanza melaju dengan kecepatan tinggi!

// const kendaraanBaru = new KendaraanAbstrak("Generic"); // ❌ Error: tidak bisa instansiasi kelas abstrak



// =======================
// 🧭 INTERFACE SEBAGAI BLUEPRINT
// =======================

// Interface dalam bentuk objek (simulasi)
const kendaraanInterface = {
  maju: function () {
    throw new Error("Method 'maju()' harus diimplementasikan!");
  }
};

// =======================
// 🚴‍♂️ CLASS YANG MEMATUHI INTERFACE
// =======================
class Sepeda {
  constructor(merk) {
    this.merk = merk;
  }

  maju() {
    return `${this.merk} melaju dengan tenaga manusia!`;
  }
}

// Uji implementasi interface
const polygon = new Sepeda("Polygon");
console.log(polygon.maju()); // Polygon melaju dengan tenaga manusia!

// Validasi apakah class mematuhi interface
if (typeof polygon.maju !== "function") {
  throw new Error("Class Sepeda harus mengimplementasikan 'maju()'!");
}



// =======================
// 💳 KELAS ABSTRAK: PEMBAYARAN
// =======================
class Pembayaran {
  constructor(jumlah) {
    this.jumlah = jumlah;

    // Cegah instansiasi langsung
    if (this.constructor === Pembayaran) {
      throw new Error("Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung.");
    }
  }

  prosesPembayaran() {
    throw new Error("Method 'prosesPembayaran()' harus diimplementasikan!");
  }
}

// =======================
// 💰 SUBCLASS: KARTU KREDIT & PAYPAL
// =======================
class KartuKredit extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran ${this.jumlah} melalui Kartu Kredit berhasil!`;
  }
}

class PayPal extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran ${this.jumlah} melalui PayPal berhasil!`;
  }
}

// Implementasi subclass konkret
const bayar1 = new KartuKredit(500000);
console.log(bayar1.prosesPembayaran()); // Pembayaran 500000 melalui Kartu Kredit berhasil!

const bayar2 = new PayPal(250000);
console.log(bayar2.prosesPembayaran()); // Pembayaran 250000 melalui PayPal berhasil!
