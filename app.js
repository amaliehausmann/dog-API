fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => {
        return response.json();
    })
    .then(data =>{
        console.log('Fetched data:', data);
    })

    // Giver en liste med alle breeds, og alle Evt subbreeds


    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        return response.json();
    })
    .then(data =>{
        console.log('Fetched data:', data);
    })

    // Giver et tilfældigt billede url af en tilfældig breed

    fetch('https://dog.ceo/api/breed/hound/images')
    .then(response => {
        return response.json();
    })
    .then(data =>{
        console.log('Fetched data:', data);
    })

    // Giver alle billed url af en specifik breed

    fetch('https://dog.ceo/api/breed/hound/list')
    .then(response => {
        return response.json();
    })
    .then(data =>{
        console.log('Fetched data:', data);
    })

    // Giver en liste med alle subbreeds for en specifik breed

    




