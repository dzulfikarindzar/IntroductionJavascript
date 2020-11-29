const hariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject (new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}
hariKerja("senin")
    .then((cek)=>{
        console.log("Hari Ini Masuk Kerja");
    })
    .catch((err)=>{
        console.log(err.message);
    })
// Then Catch untuk menentukan output apakah promise tersebut resolve atau reject. Apabila resolve maka yang diproses then 
// dan apabila reject yang akan diproses catch

async function getHariKerja(day) {
    try {
        const dataDay = await hariKerja(day)
        console.log('Hari ini Masuk Kerja');
        
    } catch (err) {
        console.log(err.message);
    }
}
getHariKerja('nov')

// Then Catch untuk menentukan output apakah promise tersebut resolve atau reject. Apabila resolve maka yang diproses then 
// dan apabila reject yang akan diproses catch bedanya disini menggunakan async function

// function reverseKal (word){
//     let arr = word.toString().split(" ")
//    let arr2 = arr. reverse().join(" ")
//    console.log(arr2);
//    }
// reverseKal("Saya Belajar Java")
