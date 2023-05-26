/* Nullish Coalescing Operator 
var idade = 0
console.log(idade ?? 'Não informado')
*/

/* Objetos 
var user = {
    name: 'Guilherme',
    idade: 19,
    cidade: 'Cambui-MG'
}

console.log(Object.values(user));
*/

var user = {
    name: 'Guilherme',
    idade: 19,
    cidade: 'Cambui-MG'
}

var { cidade: city } = user

console.log(city);
console.log(user);

/* map()
var array = [1, 2, 3, 4, 5, 6, 7]

var teste = array.map(item => {
    return item * 2
})

console.log(teste);
*/

/* filter()
var array = [1, 2, 3, 4, 5, 6, 7]

var teste = array.filter(item => item % 2 == 1
)

console.log(teste);
*/

/* every()
var array = [1, 2, 3, 4, 5, 6, 7]

var todosSaoNumeros = array.every(item => typeof item == 'number')

console.log(todosSaoNumeros);
*/

/* some()
var array = [1, 2, 3, 4, 5, 6, 7]

 var peloMenosUmNumero = array.some(item => typeof item == 'number')

console.log(peloMenosUmNumero);
*/

/* find() 
var array = [1, 2, 3, 4, 5, 6, 7]

var par = array.find(item => item % 2 == 1)

console.log(par);
*/

/* findIndex()
var array = [1, 2, 3, 4, 5, 6, 7]

var par = array.findIndex(item => item % 2 == 0)

console.log(par);
*/

/* reduce() 
var array = [1, 2, 3, 4, 5, 6, 7]

var teste = array.reduce((acc, item) => {
    console.log(acc)
    return acc + item
}, 0)
*/
