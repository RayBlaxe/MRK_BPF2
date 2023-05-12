// looping for
var nama = ["Andi", "Budi", "Caca", "Dedi", "Euis"];
for (var i = 0; i < nama.length; i++) {
    console.log(nama[i]);
}

// while looping
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var u = 0;
while (u < angka.length) {
    console.log(angka[u]);
    u++
}

// do while looping 
var mobil = [
    { merk: "Toyota", warna: "Merah", tahun: 2010 },
    { merk: "Honda", warna: "Biru", tahun: 2012 },
    { merk: "Suzuki", warna: "Hijau", tahun: 2014 },
    { merk: "Mitsubishi", warna: "Kuning", tahun: 2016 },
    { merk: "Daihatsu", warna: "Hitam", tahun: 2018 }
];
var i = 0;
do {
    console.log(mobil[i]["merk"]);
    console.log(mobil[i]["warna"]);
    console.log(mobil[i]["tahun"]);
    i++;
} while (i < mobil.length);
