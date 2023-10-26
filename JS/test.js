// const name= "Prerit"

// console.log(name)

// const greet = (name) => `Hello, ${name}`
// let result = greet("Prerit")
// console.log(result);
// result = greet("Jain")
// console.log(result);

const ul = document.querySelector(`.people`)

const people = ['Prerit','Guddu','Anshu']

let html = ``;

people.forEach(person => {
    html += `<li style="color : purple">${person}</li>` 
})

// console.log(html)
ul.innerHTML = html

// const loc = [
//     {place : 'Balangir', span : 16},{place : 'Kota',span : 2},{place : 'Burla',span : 2}
// ]

// console.log(loc)

// let user = {
//     name : 'Prerit',
//     age : 20,
//     location :  [{place : 'Balangir', span : 16},{place : 'Kota',span : 2},{place : 'Burla',span : 2}],
//     email : 'preritbgr3010@gmail.com',
//     login : function() {
//         console.log('The user logged in')
//     },
//     logout : function() {
//         console.log('The user logged out')
//     },
//     loglocation : function() {
//         // console.log(this.location);
//         this.location.forEach(locations=>{
//             console.log(locations.place,locations.span)
//         })
//     }
// }

// // console.log(user.logblogs);
// user.loglocation()

// console.log(Math)
// console.log(Math.PI)
// console.log(Math.E)

// const a = 7.3

// console.log(Math.round(a))
// console.log(Math.floor(a))
// console.log(Math.ceil(a))
// console.log(Math.trunc(a))

// const rand = Math.random()

// console.log(rand)

// const para = document.querySelector('.content > p')

// console.log(para)

// // console.log(document.querySelector('p'))

// // const paras = document.querySelectorAll('p')

// // console.log(paras)

// console.log(para.innerHTML)
// para.innerHTML = 'Hii everyone'

// const title = document.querySelector('h1')

// // title.setAttribute('style','margin : 50px')

// title.style.margin = '50px';
// title.style.color = 'grey';
// title.style.fontSize = '60px';
// title.style.margin = '';