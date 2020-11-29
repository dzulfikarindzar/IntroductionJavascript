function dividedAndSort(num){
    if (typeof(num) !== "number"){
    return console.log("Harus Masukan Number!");
}
 let num2 = num.toString().split(0)
 let num3 = num2.map(a => Array.from(a).sort((a,b) => a-b).join(""))
 let numAkhir = num3.join("")
 console.log(numAkhir);
}

dividedAndSort(5956560159466056)
dividedAndSort("5956560159466056")