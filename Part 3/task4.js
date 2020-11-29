
      fetch ('https://jsonplaceholder.typicode.com/users')
      .then (Response => Response.json())
      .then ((name) =>{
        for (const dataName of name){
          console.log(dataName.name)
        }
      })
      .catch ((error) => console.log("Data tidak ditemukan"))