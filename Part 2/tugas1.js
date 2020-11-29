// sort
console.log("\n 1. Sort")
let dataArray = ["Apel", "Mangga", "Jeruk", "Semangka"]
dataArray.sort()
console.log(dataArray);

//reserve
console.log("\n 2. Reverse")
let dataBuah = ["Apel", "Mangga", "Jeruk", "Semangka"]
dataBuah.reverse()
console.log(dataBuah);

//concat
console.log("\n 3. Concat")
let angka = [4,5,6,7]
let huruf = ["q","w","e","r","t"]
let angkahuruf = angka.concat(huruf)
console.log(angkahuruf)

// join
console.log("\n 4. Join")
let arrayAngka = [45,6,76,8,1,34]
let arrayAngkaBaru = arrayAngka.join (" + ")
console.log(arrayAngkaBaru)

//toString
console.log("\n 5. toString")
const nilai1 = 300
const nilai2 = 10

const nilai = nilai1.toString() + nilai2
console.log(nilai); 

//slice
console.log("\n 6. Slice")
let transport = ["motor", "kereta", "mobil", "pesawat", "sepeda"]
console.log(transport.slice(1,4));

//Includes
console.log("\n 7. Includes")
let murid = ["Randi", "Joko", "Ahmad", "Budi", "Nanda"];
let cek = murid.includes("Ahmad", 4);
console.log(cek);

//tolowercase
console.log("\n 8. toLowercase")
console.log("ABCDE".toLowerCase());

//push
console.log("\n 9. Push")
let country1 = ["Indonesia", "Malaysia", "Singapura", "Filipina"]
let country2 = country1.push("Laos", "Myanmar","Thailand")
console.log(country1)

//pop
console.log("\n 10. Pop")
let languages = ["javascript", "PHP", "Python", "Java"]
let lang2 = languages.pop()
console.log(languages);
