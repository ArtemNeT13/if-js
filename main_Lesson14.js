//                              LESSON-14
const formPostRequest = document.getElementById('formPostRequest');
const formUrl = 'https://fe-student-api.herokuapp.com/api/file';
formPostRequest.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', event.target.file.files[0]);
    const response = await fetch(formUrl, {
        method: 'POST',
        body: formData,
    })
    const responseJson = await response.json();
    console.log(responseJson);
})

//                              LESSON-15

const url = 'https://fe-student-api.herokuapp.com/api/hotels/popular'
fetch(url)
    .then((response) => response.json())
    .then((dataGet) => {
        console.log(`Initial array:`);
        console.log(dataGet);

        let dataGetNew = [...dataGet];
        let dataGetNew2 = [...dataGet];
        dataGetNew2.sort((prev, next) => {
            if ( prev.name < next.name ) return -1;
            if ( prev.name < next.name ) return 1;
        });
        console.log(`Sort by method "sort()":`)
        console.log(dataGetNew2)

            for(let index = 0; index < dataGetNew.length - 1; index++){
                for(let j = 0; j < dataGetNew.length - 1 - index; j++){
                    if(dataGetNew[j].name > dataGetNew[j + 1].name){
                        let tmp = dataGetNew[j];
                        dataGetNew[j] = dataGetNew[j + 1];
                        dataGetNew[j + 1] = tmp;
                    }
                }
            }
        console.log(`Sort by "Bubble sort":`);
        console.log(dataGetNew);
    })

let strValue = '{user: {name: "John", age: 21}}';
console.log(strValue);
function stack (str) {
    let count = 0;
    str.split('').forEach(element => {
            if(element === '{'){
                count++;
            }
            if(element === '}'){
                count--;
            }
    });
    if(count === 0){
        return str = 'Valid input data.';
    } else{
        return str = 'Invalid input data.';
    }
}
console.log(stack(strValue));
