const Helper = require('./Helper');

class MyClass {
  static exampleUsage() {
    const tambah = Helper.tambah(2, 3);
    const kurang = Helper.kurang(5, 2);
    const kali = Helper.kali(4, 6);

    console.log(`Hasil penambahan: ${tambah}`);
    console.log(`Hasil pengurangan: ${kurang}`);
    console.log(`Hasil perkalian: ${kali}`);
  }
}

MyClass.exampleUsage();
