//CRIAR DB
let request = window.indexedDB.open('teste', 1)
console.log(request)

request.onerror = (event) =>{
    console.log(`Error: ${event.onerror}`)
}

let db;

request.onsuccess = (event) => {
 db = event.target.result
    console.log(db)
}

//CRIAR OU ATUALIZAR TABELA
request.onupgradeneeded = (event) => {
    db = event.target.result

    const objectStore = db.createObjectStore("name", {autoIncrement: true})
    const objectStore2 = db.createObjectStore("age", {autoIncrement: true})
    console.log(objectStore)
    console.log(objectStore2)
}
