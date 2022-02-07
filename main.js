//          LESSON-11

let lableValue = document.getElementById("lable-value")
let adultsValue = document.getElementById("adults-value");
let adultsVal = parseFloat(adultsValue.value);
let adultsColorMinus = document.getElementById("counter-adults-minus");
let adultsColorPlus = document.getElementById("counter-adults-plus");
let adultsInput = document.getElementById("filter-input-adults");
document.getElementById("counter-adults-plus").onclick = () => {
const maxAdults = 30;
    if (adultsVal < maxAdults) {
        adultsValue.value = ++adultsVal;
        adultsColorMinus.classList.remove("color-value-inactive");
        adultsColorMinus.classList.add("color-value-active");
    }
    if (adultsVal === maxAdults){
        adultsColorPlus.classList.add("color-value-inactive");
    }
    adultsInput.value = `${adultsVal} Adults`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}
document.getElementById("counter-adults-minus").onclick = () => {

    if (adultsVal > 0){
        adultsValue.value = --adultsVal;
        adultsColorPlus.classList.remove("color-value-inactive");
        adultsColorPlus.classList.add("color-value-active");
    }
    if(adultsVal === 0){
        adultsColorMinus.classList.add("color-value-inactive");
    }
    adultsInput.value = `${adultsVal} Adults`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}

let childrenValue = document.getElementById("children-value");
let childrenVal = parseFloat(childrenValue.value);
let childrenColorMinus = document.getElementById("counter-children-minus");
let childrenColorPlus = document.getElementById("counter-children-plus");
let childrenInput = document.getElementById("filter-input-children");
let selectAge = document.getElementById("children-select");
const maxAge = 18;
const maxChildrens = 10;
document.getElementById("counter-children-plus").onclick = () => {
    selectAge.style.display = "flex";
    const selectAgeChild = document.createElement('select')
    for (let year = 0; year < maxAge; year++){
        selectAgeChild.innerHTML += `<option>${year} years old</option>`
    }
    if (childrenVal < maxChildrens) {
        childrenValue.value = ++childrenVal;
        childrenColorMinus.classList.remove("color-value-inactive");
        childrenColorMinus.classList.add("color-value-active");
        selectAge.appendChild(selectAgeChild).innerHTML
    }
    if (childrenVal === maxChildrens){
        childrenColorPlus.classList.add("color-value-inactive");
    }
    childrenInput.value = `${childrenVal} Children`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}
document.getElementById("counter-children-minus").onclick = () => {
    if (childrenVal > 0){
        childrenColorPlus.classList.remove("color-value-inactive");
        childrenColorPlus.classList.add("color-value-active");
        childrenValue.value = --childrenVal;
        let removeChildSelector = selectAge.lastChild;
        selectAge.removeChild(removeChildSelector);
    }
    if(childrenVal === 0){
        selectAge.style.display = "none";
        childrenColorMinus.classList.add("color-value-inactive");
    }
    childrenInput.value = `${childrenVal} Children`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}

let roomsValue = document.getElementById("rooms-value");
let roomsVal = parseFloat(roomsValue.value);
let roomsColorMinus = document.getElementById("counter-rooms-minus");
let roomsColorPlus = document.getElementById("counter-rooms-plus");
let roomsInput = document.getElementById("filter-input-rooms");
const maxRooms = 30;
document.getElementById("counter-rooms-plus").onclick = () => {
    if (roomsVal < maxRooms) {
        roomsValue.value = ++roomsVal;
        roomsColorMinus.classList.remove("color-value-inactive");
        roomsColorMinus.classList.add("color-value-active");
    }
    if (roomsVal === maxRooms){
        roomsColorPlus.classList.add("color-value-inactive");
    }
    roomsInput.value = `${roomsVal} Rooms`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}
document.getElementById("counter-rooms-minus").onclick = () => {
    if (roomsVal > 0){
        roomsValue.value = --roomsVal;
        roomsColorPlus.classList.remove("color-value-inactive");
        roomsColorPlus.classList.add("color-value-active");
    }
    if(roomsVal === 0){
        roomsColorMinus.classList.add("color-value-inactive");
    }
    roomsInput.value = `${roomsVal} Rooms`;
    lableValue.innerHTML  = `${adultsVal} Adults — ${childrenVal} Children — ${roomsVal} Room`;
}

//                  LESSON-12
let url = 'https://fe-student-api.herokuapp.com/api/hotels/popular'
// fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         const dataNew = data.slice(0, 4)
//         let favoriteHotels = dataNew.reduce((prev, hotel) => {
//             return  prev += `<div class="hotel-foto foto-on col-xl-3 col-sm-6">
//                 <div class="hotel-img col-sm-12">
//                    <img src="${hotel.imageUrl}" alt="picture">
//                 </div>
//                 <p>${hotel.name}</p>
//                 <p><span>${hotel.city}, ${hotel.country}</span></p>
//             </div>`
//         },'')
//         const currentDiv = document.getElementById("homeGuests")
//         currentDiv.innerHTML = favoriteHotels
//     });

//способ 2
const hotelsDataRequest = async () => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        const dataNew = data.slice(0, 4);
        let favoriteHotels = dataNew.reduce((prev, hotel) => {
            return  prev += `<div class="hotel-foto foto-on col-xl-3 col-sm-6">
                <div class="hotel-img col-sm-12">
                   <img src="${hotel.imageUrl}" alt="picture">
                </div>
                <p>${hotel.name}</p>
                <p><span>${hotel.city}, ${hotel.country}</span></p>
            </div>`
        },'')
        const currentDiv = document.getElementById("homeGuests")
        currentDiv.innerHTML = favoriteHotels
    } catch (err){
        console.error(err)
    } finally {

    }
}
hotelsDataRequest();