const siswaKelas = (stud) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataSiswa = ['Dzul', 'Zayyan', 'Inyil', 'Abi', 'Rizki', 'Tommy', 'Yoan', 'Atia', 'Dhani', 'Zaki']
            let hasil = dataSiswa.find((item)=>{
                return item === stud
            })
            if(hasil){
                resolve(hasil)
            }else{
                reject ('Bukan Siswa Kelas DevOps')
            }
        }, 3000)
    })
}
// siswaKelas("")
//     .then((hasil)=>{
//         console.log("Siswa DevOps 2 Arkademy");
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
    

async function getSiswaKelas(stud) {
    try {
        const dataSiswa = await siswaKelas(stud)
        console.log('Siswa DevOps 2 Arkademy');
        
    } catch (error) {
        console.log(error);
    }
}
getSiswaKelas("andi")



const kotaIndo = (kota) =>{
    return new Promise((resolve, reject)=>{
            const dataKota = ['Solo', 'Semarang', 'Jogja', 'Jakarta', 'Bandung', 'Surabaya', 'Denpasar', 'Lampung', 'Aceh', 'Makassar']
            let cek = dataKota.find((item)=>{
                return item === kota
            })
            if(cek){
                resolve(cek)
            }else{
                reject ('Bukan Kota di Indonesia')
            }
    })
}
kotaIndo("Jakarta")
    .then((cek)=>{
        console.log(cek + " "+ "Kota besar di Indonesia");
    })
    .catch((err)=>{
        console.log(err);
    })
    

// async function getKotaIndo() {
//     try {
//         const dataKota = await kotaIndo("Texas")
//         console.log('Kota Besar di Indonesia');
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// getKotaIndo()

