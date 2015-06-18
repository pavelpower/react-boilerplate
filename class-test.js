import Immutable from 'immutable';
import assert from 'assert'

var one = Immutable.Map({a: 1});
var two = one.set('a', 2).set('a', 1);
console.log(one === two);
console.log(Immutable.is(one, two));





//
// var one = new Immutable.Record({});
// var two = new Immutable.Record({});
//
// console.log(one === two);
// var list = Immutable.List([one, two]);
// console.log(list.indexOf(one));
// console.log(list.indexOf(two));
//
// var Type = Immutable.Record({});
// var first = new Type({});
// var second = new Type({});
// console.log(first === second);
// var list = Immutable.List([first, second]);
// console.log(list.indexOf(first));
// console.log(list.ndexOf(second));
//
// console.log('2==============');
// console.log('2==============');
//
// var properties = {
//     amount: {
//         id: 'amount',
//         type: 'text',
//         name: 'Количество'
//     },
//     comment: {
//         id: 'comment',
//         type: 'textarea',
//         name: 'Комментарий',
//         placeholder: 'Комментарий к перевозке'
//     }
// };
//
// var cargos = {
//     table: {
//         id: 'table',
//         name: 'Стол',
//         properties: [
//             properties.amount,
//             properties.comment
//         ]
//     },
//     chair: {
//         id: 'chair',
//         name: 'Стул',
//         properties: [
//             properties.amount,
//             properties.comment
//         ]
//     }
// };
//
// var Cargo = Immutable.Record({
//     name: undefined,
//     properties: Immutable.List()
// });
//
// var Property = Immutable.Record({
//     id: undefined,
//     type: undefined,
//     name: undefined,
//     placeholder: undefined,
//     value: undefined
// });
//
//
// function parseCargo() {
//     return new Cargo({
//         name: 'data.name',
//         //properties: Immutable.List(
//         //    data.properties.map((property) => {
//         //        return new Property(property);
//         //    })
//         //)
//     });
// }
//
// var cargo = parseCargo(cargos.table);
// var tow = parseCargo(cargos.table);
//
// var list = new Immutable.List([cargo, tow]);
// console.log(cargo === tow);
// console.log(list.indexOf(tow));
//
//
// //console.log(cargo);
// console.log('======');
//
// //var cargo2 = cargo;
// //
// //var amount = cargo.properties.find((value) => {
// //    return value.id === 'amount';
// //});
// //var propIndex = cargo.properties.indexOf(amount);
// //var amount = amount.set('value', 1);
// //var cargo = cargo.setIn(['properties', propIndex], amount);
// //
