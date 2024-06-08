let arr=['olma', 'banan', 'uzum', 'mango']

console.log(arr)
alert(arr)
alert(`Sizning arrayingiz uzunligi: ${arr.length}`)


if (confirm ('Arraydan 1 ta olib tashlaymiz')) { 
   arr.pop()
  alert(`Endi Arrayni uzunligi ${arr.length} ga teng`)
  console.log(arr)
} else  {
   console.log(arr)
}

// let arr=[212, 12, 7, 18, 4, -2]
// let arr2=[true, 12, 'Makaka salom', null, undefined]
// console.log(arr.length)----> uzunligini topib beradi
// console.log(arr[1])----> 1 indexni olib beradi
// console.log(arr2.indexOf('Makaka salom'))----> indexini topib beradi
// const leg=['bmw', 'mers', 'maklaren']
// console.log(leg)
// leg.push('samokat')----> oxiridan qoshib beradi
// arr.pop()----> oxiridan olib tashlaydi
// console.log(leg)
// leg.shift()----> boshidan olib tashlaydi
// leg.unshift('porche')----> boshidan qoshib beradi
// console.log 