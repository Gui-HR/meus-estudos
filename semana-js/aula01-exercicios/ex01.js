/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo. 
  - Exiba o novo array no console.

  Dica: pesquise por remainder operator (%).
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const oddNumbers = randomNumbers.filter(number => number % 2 == 1)