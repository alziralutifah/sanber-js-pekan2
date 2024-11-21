const prompt = require('prompt-sync')({ sigint: true });

// Membaca input dari pengguna
const input = prompt('Enter number: ');

// Mengonversi input ke tipe angka
const x = Number(input);

  if (isNaN(x)) {
    console.log("Error: Input harus berupa angka.");
  } else if (x < 0) {
    console.log("Error: Tidak bisa input bilangan negatif.");
  } else if (x % 2 !== 0) {
    console.log("Error: Tidak bisa input bilangan ganjil.");
  } else {
    const result = Math.sqrt(x);
    console.log(`Success: Akar kuadrat dari ${x} adalah ${result}.`);
  }


