

let body = document.body //сюда я аппендю блоки

let btn_new = document.querySelector('.new-btn')
let btn_old = document.querySelector('.old-btn')
let btn_sale = document.querySelector('.sale-btn') // интуитивно понятно, что это кнопки  :)

// это пример на основе твоего бэка---->

// axios.get('https://backend.ikromdecor.uz/catalog')
// .then(function (catalog) {
//     for (let item of catalog.data) {
//         console.log(item);
//         let newElement = document.createElement('div')
//         body.appendChild(newElement)
//         newElement.classList.add('new-el')
//         newElement.textContent = `${item.status}`

//         btn_new.addEventListener("click", () => {
//             if(item.status !== 'new'){
//                 newElement.classList.add('none')
//             }
//             if(item.status == 'new'){
//                 newElement.classList.remove('none')
//             }
//         })

//         btn_old.addEventListener("click", () => {
//             if(item.status !== 'old'){
//                 newElement.classList.add('none')
//             }
//             if(item.status == 'old'){
//                 newElement.classList.remove('none')
//             }
//         })

//         btn_sale.addEventListener("click", () => {
//             if(item.status !== 'sale'){
//                 newElement.classList.add('none')
//             }
//             if(item.status == 'sale'){
//                 newElement.classList.remove('none')
//             }
//         })

//     }

    // то есть при нажатии на кнопку с определенным условием подставляется или удаляется класс с display nonе
// })







// а тут объясняю как он будет работать с разными статусами ------>

let arr = [
    {
        status: 'new'
    },
    {
        status: 'old'
    },
    {
        status: 'sale'
    },
    {
        status: 'sale'
    },
    {
        status: 'new'
    },
    {
        status: 'sale'
    }
]

for(let item of arr){
    console.log(item);
    let newElement = document.createElement('div')
    body.appendChild(newElement)
    newElement.classList.add('new-el')
    newElement.textContent = `${item.status}`

    btn_new.addEventListener("click", () => {
        if(item.status !== 'new'){
            newElement.classList.add('none')
        }
        if(item.status == 'new'){
            newElement.classList.remove('none')
        }
    })

    btn_old.addEventListener("click", () => {
        if(item.status !== 'old'){
            newElement.classList.add('none')
        }
        if(item.status == 'old'){
            newElement.classList.remove('none')
        }
    })

    btn_sale.addEventListener("click", () => {
        if(item.status !== 'sale'){
            newElement.classList.add('none')
        }
        if(item.status == 'sale'){
            newElement.classList.remove('none')
        }
    })

}






