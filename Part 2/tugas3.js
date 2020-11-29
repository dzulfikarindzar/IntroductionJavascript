function seleksiNilai (nilaiAwal, nilaiAkhir, isiArray = []){
    if (nilaiAwal > nilaiAkhir){
    console.log("Nilai Akhir harus lebih besar dari nilai Awal !")
    }
    else if (isiArray.length < 5){
    console.log("Jumlah angka dalam array harus lebih dari 5")
    } else if (isNaN(isiArray.join(""))){
        console.log("Data Array harus Number !");
    }
    else  {
        angka = isiArray.filter(function (i) {
            return i > nilaiAwal && i < nilaiAkhir
        })
            angka.sort(function(a, b){
                return a - b;
        })
        console.log(angka);
    }
}

seleksiNilai(4, 20, [7,1,9,11,14,16,8,5])