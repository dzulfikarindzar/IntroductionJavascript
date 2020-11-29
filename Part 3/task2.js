const getmonth = (callback) => {
    setTimeout(()=>{
        let error = false
        let month = ["January", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        if(!error){
            callback(null, month)
        }else{
            callback(new Error("Sorry data not Found"), [])
        }
    },4000)
}

function getBulan (cek, months){
    if(cek!=null){
        console.log(cek.message);
    }else{
        let month = months.map((data) => {return data})
        for (const bulan of month) {
            console.log(bulan);
            
        }
    }
}
getmonth(getBulan)