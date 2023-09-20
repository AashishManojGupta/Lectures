// class Counter{              //counter = {count:2, increment, decrement}
//     constructor(){          //counter1 = {count:0,increment, decrement}
//     }
//     count = 0
//     increment() {
//         this.count++;
//     }
//     decrement(){
//         this.count--;
//     }
// }

// const counter = new Counter()


// counter.increment()
// counter.increment()
// counter.increment()
// console.log(counter.count)

// const counter2 = new Counter();
// console.log(counter2.count)


function counter() {
    let count = 0;
    function increment(){
        count++;
        console.log(count)
    }
    function decrement(){
        count--;
        console.log(count)
    }
    return { increment , decrement}
}

let counter1 = counter()

counter1.increment()
counter1.increment()
counter1.decrement()


console.log(counter1)

let counter2 = counter()


let name = 'avez'

function any(){
    name='ashish'
}
any()


// console.log(name)

// Private

function game(){
    let credits = 5
    return function play(){
        if(credits<=0){
            console.log('You Cannot Play')
        }else{
            console.log('You Can Play')
            credits--
        }
    }
}
let ashish = game()

ashish()
ashish()
ashish()
ashish()
ashish()
ashish()


// let recharge = true;

// if(recharge){
//     ashish = game()
// }

// ashish()

// let avez = game()
// avez()


let address = {
    location:'Kurla'
}

let user = {
    name: 'Avez',
    address,
}
user.me = user
// let student = JSON.parse(JSON.stringify(user))  // Or {...user}
let student = structuredClone(user)  // Or {...user}
student.address.location = 'Mumbra'

console.log(user, student)







