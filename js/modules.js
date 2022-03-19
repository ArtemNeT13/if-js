export const createSectionAvailableHotels = () => {
    const urlGet = 'https://fe-student-api.herokuapp.com/api/hotels';

    const btnSearchHeader = document.getElementById('btnSearchHeader')
    btnSearchHeader.addEventListener('click', (event) => {
        event.preventDefault()
        let search = document.getElementById('searchHeader').value
        let adults = document.getElementById('adults-value').value
        let children = document.getElementById('children-value').value
        let rooms = document.getElementById('rooms-value').value
        let selectAge = document.getElementById("children-select");

        if (Number(children) > 0 && Number(adults) === 0) {
            return alert('ВНИМАНИЕ! Дети не могут путешествовать без взрослых!')
        } else {
            if (Number(children) === 1) {
                children = selectAge.querySelector("select").value
            } else {
                children = ''
                for (let value of selectAge.querySelectorAll("select")) {
                    children += `${value.value},`
                }
            }
        }


        fetch(`${urlGet}?search=${search}&adults=${adults}&children=${children}&rooms=${rooms}`)
            .then((response) => response.json())
            .then((dataGet) => {
                const availableHotels = document.getElementById("availableHotels")
                availableHotels.style.display = "flex";
                console.log(dataGet);
                const dataGetNew = dataGet.slice(0, 4).sort();
                let searchHotels = dataGetNew.reduce((prev, hotel) => {
                    return prev += `<div class="hotel-foto foto-on col-xl-3 col-sm-6">
                    <div class="hotel-img col-sm-12">
                       <img src="${hotel.imageUrl}" alt="picture">
                    </div>
                    <p>${hotel.name}</p>
                    <p><span>${hotel.city}, ${hotel.country}</span></p>
                    </div>`
                }, '');
                const searchDiv = document.getElementById("searchResult")
                searchDiv.innerHTML = searchHotels
            });
    });
};

export const requestAjax = () => {
const url = 'https://fe-student-api.herokuapp.com/api/hotels/popular'
const requestToStorage = sessionStorage.getItem("ajaxRequest");

function requestDataHotels (data) {
    let favoriteHotels = data.map(hotel => {
        return `<div class="hotel-foto foto-on col-xl-3 col-sm-6">
                <div class="hotel-img col-sm-12">
                   <img src="${hotel.imageUrl}" alt="picture">
                </div>
                <p>${hotel.name}</p>
                <p><span>${hotel.city}, ${hotel.country}</span></p>
            </div>`
    });
    const currentDiv = document.getElementById("homeGuests");
    currentDiv.innerHTML = favoriteHotels.join('');
}

if (requestToStorage) {
    const requestToStorageParse = JSON.parse(requestToStorage);
    requestDataHotels(requestToStorageParse);
}else{
    fetch(url)
        .then((response) => response.json())
        .then((dataGet) => {
            requestDataHotels(dataGet.slice(0, 4));
            const hotelData = JSON.stringify(dataGet.slice(0, 4));
            sessionStorage.setItem('ajaxRequest', hotelData);
        });
};
};