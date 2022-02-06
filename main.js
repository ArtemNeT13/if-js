//          LESSON-10

// const data = [
//     {
//         name: 'Hotel Leopold',
//         city: 'Saint Petersburg',
//         country: 'Russia',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
//     },
//     {
//         name: 'Apartment Sunshine',
//         city: 'Santa  Cruz de Tenerife',
//         country: 'Spain',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
//     },
//     {
//         name: 'Villa Kunerad',
//         city: 'Vysokie Tatry',
//         country: 'Slowakia',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
//     },
//     {
//         name: 'Hostel Friendship',
//         city: 'Berlin',
//         country: 'Germany',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
//     },
//     {
//         name: 'Radisson Blu Hotel',
//         city: 'Kyiv',
//         country: 'Ukraine',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
//     },
//     {
//         name: 'Paradise Hotel',
//         city: 'Guadalupe',
//         country: 'Mexico',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
//     },
//     {
//         name: 'Hotel Grindewald',
//         city: 'Interlaken',
//         country: 'Switzerland',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
//     },
// ];
//
// //const dataNew = data.slice(0, 4)
// //1 способ при помощи forEach
// // let name = ''
// // dataNew.forEach(function (hotel){
// //
// //     name += `<div class="hotel-foto foto-on col-xl-3 col-sm-6">
// //                 <div class="hotel-img col-sm-12">
// //                    <img src="${hotel.imageUrl}" alt="picture">
// //                 </div>
// //                 <p>${hotel.name}</p>
// //                 <p><span>${hotel.city}, ${hotel.country}</span></p>
// //             </div>`
// // })
// // const currentDiv = document.getElementById("homeGuests")
// // currentDiv.innerHTML = name
// //2 способ при помощи reduce
// let hotelOffer = ''
// let favoriteHotels = dataNew.reduce((prev, hotel) => {
//     return hotelOffer += `<div class="hotel-foto foto-on col-xl-3 col-sm-6">
//                 <div class="hotel-img col-sm-12">
//                    <img src="${hotel.imageUrl}" alt="picture">
//                 </div>
//                 <p>${hotel.name}</p>
//                 <p><span>${hotel.city}, ${hotel.country}</span></p>
//             </div>`
// },'')
// const currentDiv = document.getElementById("homeGuests")
// currentDiv.innerHTML = favoriteHotels


//          LESSON-11
const maxAdults = 30;
let lableValue = document.getElementById("lable_value")
let adultsValue = document.getElementById("adults_value");
let adultsVal = parseFloat(adultsValue.value);
let adultsColorMinus = document.getElementById("counter-adults__minus");
let adultsColorPlus = document.getElementById("counter-adults__plus");
let adultsInput = document.getElementById("filter-input__adults");
document.getElementById("counter-adults__plus").onclick = function() {
    if (adultsVal < maxAdults) {
        adultsValue.value = ++adultsVal;
        adultsColorMinus.style.color = "#3077C6";
        adultsColorMinus.style.borderColor = "#3077C6";
    }
    if (adultsVal === maxAdults){
        adultsColorPlus.style.color = "#CECECE";
        adultsColorPlus.style.borderColor = "#CECECE";
    }
    adultsInput.value = `${adultsVal} Adults`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}
document.getElementById("counter-adults__minus").onclick = function() {
        adultsColorPlus.style.color = "#3077C6";
        adultsColorPlus.style.borderColor = "#3077C6";
    if (adultsVal > 0){
        adultsValue.value = --adultsVal;
    }
    if(adultsVal === 0){
        adultsColorMinus.style.color = "#CECECE";
        adultsColorMinus.style.borderColor = "#CECECE";
    }
    adultsInput.value = `${adultsVal} Rooms`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}

let childrenValue = document.getElementById("children_value");
let childrenVal = parseFloat(childrenValue.value);
let childrenColorMinus = document.getElementById("counter-children__minus");
let childrenColorPlus = document.getElementById("counter-children__plus");
let childrenInput = document.getElementById("filter-input__children");
let selectAge = document.getElementById("children_select");
const maxAge = 18;
const maxChildrens = 10;
document.getElementById("counter-children__plus").onclick = function () {
    selectAge.style.display = "flex";
    const selectAgeChild = document.createElement('select')
    for (let year = 0; year < maxAge; year++){
        selectAgeChild.innerHTML += `<option>${year} years old</option>`
    }
    if (childrenVal < maxChildrens) {
        childrenValue.value = ++childrenVal;
        childrenColorMinus.style.color = "#3077C6";
        childrenColorMinus.style.borderColor = "#3077C6";
        selectAge.appendChild(selectAgeChild).innerHTML
    }
    if (childrenVal === maxChildrens){
        childrenColorPlus.style.color = "#CECECE";
        childrenColorPlus.style.borderColor = "#CECECE";
    }
    childrenInput.value = `${childrenVal} Children`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}

document.getElementById("counter-children__minus").onclick = function() {
    childrenColorPlus.style.color = "#3077C6";
    childrenColorPlus.style.borderColor = "#3077C6";
    if (childrenVal > 0){
        childrenValue.value = --childrenVal;
        let removeChildSelector = selectAge.lastChild;
        selectAge.removeChild(removeChildSelector);
    }
    if(childrenVal === 0){
        selectAge.style.display = "none";
        childrenColorMinus.style.color = "#CECECE";
        childrenColorMinus.style.borderColor = "#CECECE";
    }
    childrenInput.value = `${childrenVal} Children`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}

let roomsValue = document.getElementById("rooms_value");
let roomsVal = parseFloat(roomsValue.value);
let roomsColorMinus = document.getElementById("counter-rooms__minus");
let roomsColorPlus = document.getElementById("counter-rooms__plus");
let roomsInput = document.getElementById("filter-input__rooms");
const maxRooms = 30;
document.getElementById("counter-rooms__plus").onclick = function() {
    if (roomsVal < maxRooms) {
        roomsValue.value = ++roomsVal;
        roomsColorMinus.style.color = "#3077C6";
        roomsColorMinus.style.borderColor = "#3077C6";
    }
    if (roomsVal === maxRooms){
        roomsColorPlus.style.color = "#CECECE";
        roomsColorPlus.style.borderColor = "#CECECE";
    }
    roomsInput.value = `${roomsVal} Rooms`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}
document.getElementById("counter-rooms__minus").onclick = function() {
    roomsColorPlus.style.color = "#3077C6";
    roomsColorPlus.style.borderColor = "#3077C6";
    if (roomsVal > 0){
        roomsValue.value = --roomsVal;
    }
    if(roomsVal === 0){
        roomsColorMinus.style.color = "#CECECE";
        roomsColorMinus.style.borderColor = "#CECECE";
    }
    roomsInput.value = `${roomsVal} Rooms`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}

//                  LESSON-12
let url = 'https://fe-student-api.herokuapp.com/api/hotels/popular'
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const dataNew = data.slice(0, 4)
        let hotelOffer = ''
        let favoriteHotels = dataNew.reduce((prev, hotel) => {
            return hotelOffer += `<div class="hotel-foto foto-on col-xl-3 col-sm-6">
                <div class="hotel-img col-sm-12">
                   <img src="${hotel.imageUrl}" alt="picture">
                </div>
                <p>${hotel.name}</p>
                <p><span>${hotel.city}, ${hotel.country}</span></p>
            </div>`
        },'')
        const currentDiv = document.getElementById("homeGuests")
        currentDiv.innerHTML = favoriteHotels
    });
