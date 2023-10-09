async function getProgramList() {
    const apiKey = '2ef300b1-2794-424c-880d-e136f9d73280';
    const url = 'https://api.jwstapi.com/program/list';

    const response = await fetch(url, {
        headers: {
            'X-API-KEY': apiKey
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}
console.log(getProgramList().then(data => console.log(data)));
//create innerhtml for program list
function createProgramList(data) {
    const programList = document.querySelector('#program-list');
    const programListHtml = data.map(program => {
        return `
        <li class="program-list-item">
            <a href="program.html?id=${program.id}">
                <img src="${program.image}" alt="${program.title}" class="program-list-item__image">
                <h2 class="program-list-item__title">${program.title}</h2>
            </a>
        </li>
        `;
    }).join('');
    programList.innerHTML = programListHtml;
}
createProgramList(getProgramList().then(data => console.log(data)));