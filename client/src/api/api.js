async function Name() {
    fetch('/api/name',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
        .then((res) => {            
            return res.json()
        })
        .then((resJson) =>{
            console.log(resJson)
            return resJson
        })
        .catch(error => {
            console.log(error)
        })
}

export {
    Name,
}