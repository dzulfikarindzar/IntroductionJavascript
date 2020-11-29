const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope" 
];

    function searchName (kata, batas, cbFn) {

    let filtered = names.filter(name => name.includes(kata))
    
    filtered = filtered.slice(0,batas)
   
    cbFn(filtered)
    }
    function showFiltered (nama){
        console.log(nama)
    }
    
    searchName("ol", 3, showFiltered)



