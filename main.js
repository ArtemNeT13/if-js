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


// 1. выбрать первые 4 элемента +
// 2. повторить HTML как в index.html
// 3. переписать логику используя reduce, место forEach

const dataNew = data.slice(0, 4)
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

