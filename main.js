//          LESSON-10

const data = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa  Cruz de Tenerife',
        country: 'Spain',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    },
];

const dataNew = data.slice(0, 4)
//1 способ при помощи forEach
// let name = ''
// dataNew.forEach(function (hotel){
//
//     name += `<div class="hotel-foto foto-on col-xl-3 col-sm-6">
//                 <div class="hotel-img col-sm-12">
//                    <img src="${hotel.imageUrl}" alt="picture">
//                 </div>
//                 <p>${hotel.name}</p>
//                 <p><span>${hotel.city}, ${hotel.country}</span></p>
//             </div>`
// })
// const currentDiv = document.getElementById("homeGuests")
// currentDiv.innerHTML = name
//2 способ при помощи reduce
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
console.log(favoriteHotels)



//          LESSON-11






let lableValue = document.getElementById("lable_value")

let adultsValue = document.getElementById("adults_value");
let adultsVal = parseFloat(adultsValue.value);
let adultsColor = document.getElementById("counter-adults__minus");
let adultsInput = document.getElementById("filter-input__adults");
document.getElementById("counter-adults__plus").onclick = function() {
    if (adultsVal < 30) {
        adultsValue.value = ++adultsVal;
        adultsColor.style.color = "#3077C6";
        adultsColor.style.borderColor = "#3077C6";
    }
    adultsInput.value = `${adultsVal} Adults`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}
document.getElementById("counter-adults__minus").onclick = function() {
    if(adultsVal === 0){
        adultsColor.style.color = "#CECECE";
        adultsColor.style.borderColor = "#CECECE";
    }else{
        if (adultsVal > 0){
            adultsValue.value = --adultsVal;
        }
    }
    adultsInput.value = `${adultsVal} Rooms`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}



let childrenValue = document.getElementById("children_value");
let childrenVal = parseFloat(childrenValue.value);
let childrenColor = document.getElementById("counter-children__minus");
let childrenInput = document.getElementById("filter-input__children");
document.getElementById("counter-children__plus").onclick = function() {
    if (childrenVal < 10) {
        childrenValue.value = ++childrenVal;
        childrenColor.style.color = "#3077C6";
        childrenColor.style.borderColor = "#3077C6";
    }
    childrenInput.value = `${childrenVal} Children`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}
document.getElementById("counter-children__minus").onclick = function() {
    if(childrenVal === 0){
        childrenColor.style.color = "#CECECE";
        childrenColor.style.borderColor = "#CECECE";
    }else{
        if (childrenVal > 0){
            childrenValue.value = --childrenVal;
        }
    }
    childrenInput.value = `${childrenVal} Children`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}


let roomsValue = document.getElementById("rooms_value");
let roomsVal = parseFloat(roomsValue.value);
let roomsColor = document.getElementById("counter-rooms__minus");
let roomsInput = document.getElementById("filter-input__rooms");
document.getElementById("counter-rooms__plus").onclick = function() {
    if (roomsVal < 30) {
        roomsValue.value = ++roomsVal;
        roomsColor.style.color = "#3077C6";
        roomsColor.style.borderColor = "#3077C6";
    }
    roomsInput.value = `${roomsVal} Rooms`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}
document.getElementById("counter-rooms__minus").onclick = function() {
    if(roomsVal === 0){
        roomsColor.style.color = "#CECECE";
        roomsColor.style.borderColor = "#CECECE";
    }else{
        if (roomsVal > 0){
            roomsValue.value = --roomsVal;
        }
    }
    roomsInput.value = `${roomsVal} Rooms`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}



let selectAge = document.getElementById("children_select")
if(childrenVal === 1){
    selectAge.textContent  = "<p>What is the age of the child you’re travelling with?</p>";
}








