function descendingOrder(n){

  // Long Solution  


//   let convertN = n.toString()

//   let newArray = convertN.split('')

//   let sortArray = newArray.sort()

//   let reverseArray = sortArray.reverse()

//   let joinArray = sortArray.join('')

//   let backNumber = Number(joinArray)


  // Short Solution

    let convertN = n.toString().split('').sort().reverse().join('')

    let backNumber = Number(convertN)
    

  return backNumber
}

console.log(descendingOrder(123544444698));