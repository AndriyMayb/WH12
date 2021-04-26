//
// function goWork(isJobDone, cb) {
//     if (isJobDone) {
//         console.log('Job is done');
//         cb(null, 500);
//     } else {
//         cb('Job is not done');
//     }
// }
// goWork(true, (err, money) => {
//     if (!err) {
//         console.log(money);
//     } else {
//         console.error(err)
//     }
// });
// function getUp(clock,cb) {
// setTimeout(()=>{
//     if (clock){
//         cb(null,`Прокинувся з будильником ${clock}`)
//     } else {
//         cb (`Ще трішки по кемарю`)
//     }
// },500)
// }
// function goToShower(water,cold,hot,cb) {
// setTimeout(()=>{
//     if (water){
//         cb(null,`Температура ${hot} `)
//     } else {
//         cb (`Я не буду митися при температурі ${cold}`)
//     }
// },1200)
// }
// function breakfast(calories,oatmeal,lasagna,cb) {
//  setTimeout(()=>{
//      if (calories < 800) {
//          cb (null,`ням ням зїм ${oatmeal}`)
//      } else {
//          cb (`Я не буду хавати жирного ${lasagna}`)
//      }
//  },300)
// }
// function manyWife(many,cb) {
// setTimeout(() =>{
//     if (many < 800){
//         cb(null,`сьогодні маю тільки ${many}`)
//     } else {
//         cb ('не хочеш то і не треба грошей')
//     }
// },1200)
// }
// function goWorkOnCar(car,speed,speedMini,cb){
//  setTimeout(()=>{
//      if (car){
//          cb(null,`доїдемо швиденько зі швидкістю ${speed} км`)
//      } else {
//          cb(`походу сьогодні будемо на автоногах зі шкидкістю ${speedMini}км`)
//      }
//  },800)
// }
// function buyLunch (time,cb) {
//     setTimeout(()=>{
//         if (time === 5){
//             cb (null,'Є час заїхати купити обід в магазин ')
//         } else {
//             cb ('Немає часу заїхати купити обід(')
//         }
//     },1000)
// }
// function borrowMoney(money,cb) {
//     setTimeout(() =>{
//         if (money === 450) {
//             cb (null,'залишок грошей вистачає, позичу співробітнику')
//         } else {
//             cb ('бабок немає позич у іншого тіпа')
//         }
//     },500)
// }
// function workOff (power,cb){
//     setTimeout(()=>{
//         if (power){
//             cb(null,'енергія ще лешилася можна йти гуляти')
//         } else {
//             cb ('треба їхати відпочивати')
//         }
//     },2000)
// }
// function twinFromHisWife (phone,cb) {
//     setTimeout(()=>{
//         if (phone){
//             cb(null,'піднімати трубку треба')
//         } else {
//             cb('не піднімати трубку')
//         }
//     },800)
// }
// function goHome (buss,cb){
//     setTimeout(()=>{
//         if (buss){
//             cb(null,'їду автобусом додому')
//         } else {
//             cb('Пішки доберуся')
//         }
//     },600)
// }
// function goingToBag (cameLate,cb){
//     setTimeout(()=>{
//         if (cameLate < 10){
//             cb(null,'ще легко перекусити')
//         } else {
//             cb('чистити зуби і спати')
//         }
//     },300)
// }
// getUp(true,(err,data) => {
//     if (!err) {
//         console.log(data)
//         goToShower(true,15,35,(err,date) =>{
//             if (!err){
//                 console.log(date)
//                 breakfast(500,550,1200,(err,date) =>{
//                     if (!err){
//                         console.log(date)
//                         manyWife(400,(err,date) => {
//                             if (!err){
//                                 console.log(date)
//                                 goWorkOnCar(true,240,3,(err,date) => {
//                                     if (!err){
//                                         console.log(date)
//                                         buyLunch(5,(err,date) => {
//                                             if (!err){
//                                                 console.log(date)
//                                                 borrowMoney(450,(err,date) =>{
//                                                     if (!err){
//                                                         console.log(date)
//                                                         workOff(true,(err,date) =>{
//                                                             if (!err){
//                                                                 console.log(date)
//                                                                 twinFromHisWife(true,(err,date)=>{
//                                                                     if (!err){
//                                                                         console.log(date)
//                                                                         goHome(true,(err,date)=>{
//                                                                             if (!err){
//                                                                                 console.log(date)
//                                                                                 goingToBag(10,(err,date)=>{
//                                                                                     if (!err){
//                                                                                         console.log(date)
//                                                                                     } else {
//                                                                                         console.log(err)
//                                                                                     }
//                                                                                 })
//                                                                             } else {
//                                                                                 console.log(err)
//                                                                             }
//                                                                         })
//                                                                     } else {
//                                                                         console.log(err)
//                                                                     }
//                                                                 })
//                                                             }else {
//                                                                 console.log(err)
//                                                             }
//                                                         })
//                                                     } else {
//                                                         console.log(err)
//                                                     }
//                                                 })
//                                             }else {
//                                                 console.log(err)
//                                             }
//                                         })
//
//                                     } else {
//                                         console.log(err)
//                                     }
//                                 })
//                             } else {
//                                 console.log(err)
//                             }
//                         })
//                     } else {
//                         console.log(err)
//                     }
//                 })
//             }else {
//                 console.log(err)
//             }
//         })
//     } else {
//         console.log(err)
//     }
// });

















