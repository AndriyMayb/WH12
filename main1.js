function getUp(clock) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (clock){
                resolve(`Прокинувся з будильником ${clock}`)
            } else {
                reject(`Ще трішки по кемарю`)
            }
        },500)
    })
}
function goToShower(water,cold,hot) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (water){
                resolve(`Температура ${hot} `)
            } else {
                 reject(`Я не буду митися при температурі ${cold}`)
            }
        },1200)
    })
}
function breakfast(calories,oatmeal,lasagna) {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            if (calories < 800) {
                resolve(`ням ням зїм ${oatmeal}`)
            } else {
               reject (`Я не буду хавати жирного ${lasagna}`)
            }
        },300)
    })
}
function manyWife(many) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (many < 800){
               resolve (`сьогодні маю тільки ${many}`)
            } else {
               reject ('не хочеш то і не треба грошей')
            }
        },1200)
    })
}
function goWorkOnCar(car,speed,speedMini){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (car){
               resolve (`доїдемо швиденько зі швидкістю ${speed} км`)
            } else {
               reject (`походу сьогодні будемо на автоногах зі шкидкістю ${speedMini}км`)
            }
        },800)
    })
}
function buyLunch (time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (time === 5){
               resolve ('Є час заїхати купити обід в магазин ')
            } else {
                reject ('Немає часу заїхати купити обід(')
            }
        },1000)
    })
}
function borrowMoney(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (money === 450) {
                resolve ('залишок грошей вистачає, позичу співробітнику')
            } else {
                reject ('бабок немає позич у іншого тіпа')
            }
        },500)
    })
}
function workOff (power){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (power){
                resolve('енергія ще лешилася можна йти гуляти')
            } else {
                reject ('треба їхати відпочивати')
            }
        },2000)
    })
}
function twinFromHisWife (phone) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (phone){
               resolve ('піднімати трубку треба')
            } else {
               reject ('не піднімати трубку')
            }
        },800)
    })
}
function goHome (buss){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (buss){
                resolve ('їду автобусом додому')
            } else {
                reject ('Пішки доберуся')
            }
        },600)
    })
}
function goingToBag (cameLate){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (cameLate < 10){
                resolve (null,'ще легко перекусити')
            } else {
                reject ('чистити зуби і спати')
            }
        },300)
    })

}
getUp(true)
.then(value =>{
    console.log(value)
    return goToShower(true,15,35)
})
.then(value => {
    console.log(value)
    return breakfast(500,550,1200)
})
.then(value => {
    console.log(value);
    return manyWife(400)
})
.then(value => {
    console.log(value)
    return goWorkOnCar(true,240,3)
})
.then(value => {
    console.log(value)
    return buyLunch(5)
})
.then(value => {
    console.log(value)
    return borrowMoney(450)
})
.then(value => {
    console.log(value)
    return workOff(true)
})
.then(value => {
    console.log(value)
    return twinFromHisWife(true)
})
.then(value => {
    console.log(value)
    return goHome(true)
})
.then(value => {
    console.log(value)
    return goingToBag(11)
})
    .then(value => {
        console.log(value)
    })
.catch(reason => {
    console.warn(reason)
})