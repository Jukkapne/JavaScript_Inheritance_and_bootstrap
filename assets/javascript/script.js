async function getProgramList() {
    const apiKey = '2ef300b1-2794-424c-880d-e136f9d73280';
    const url = 'https://api.jwstapi.com/all/type/jpg?page=1&perPage=10';

    const response = await fetch(url, {
        headers: {
            'X-API-KEY': apiKey
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("HALOO ID: "+data.body[0].id);
    return data;
}


function generateList(data) {
    console.log(data.body);
    if (!data || !Array.isArray(data.body)) {
        console.error('Expected data.body to be an array');
        return;
    }

    let listHTML='';
    
        
        
    listHTML += data.body[0].id;
    
    console.log("DYNAAMINEN HTML KOODI: "+listHTML);
    return listHTML;
}



async function displayData() {  
    try {
        const data = await getProgramList();
        const list = generateList(data);
        document.getElementById('programList').innerHTML = list;
    } catch (error) {
        console.error(error);
    }
}





