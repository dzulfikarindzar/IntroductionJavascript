function reverseKal (word){
    if (typeof(word) !== "string"){
        return console.log("Harus Masukkan Kalimat!");
    }
    let kal = word.toString().split(" ")
    let kal2 = kal. reverse().join(" ")
    console.log(kal2);
}
reverseKal("Saya Belajar Javascript")
reverseKal(3423423)