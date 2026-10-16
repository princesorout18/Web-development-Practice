// const arr=[12, 34, true, "raj"]
// arr.unshift(false)
// arr.push(67)
// arr.join() // 
// arr.pop()

// //slice
// const arr1=arr.slice(1,3)

// //console.log(arr.length)
// console.log(arr1)
// console.log( "arr:", arr)
// const arr2=arr.splice(1,3)

// console.log(arr2)
// console.log("arr",arr)  




//task 1
let price=20;
let quantity=4;
let totalAmount=price*quantity;
console.log("total amount is: ", totalAmount)

//task 2
// if the quantity is 5 more ,apply a 15% discount 

if (quantity >= 5) {
    let discount = 0.15;
    let discountedAmount = totalAmount * (1 - discount);
    console.log("Discounted amount is: ", discountedAmount);
} else {
    console.log("No discount applied.");
}

// otherwise if the quantity is 3 or more apply a 10% discount
if (quantity >= 3) {
    let discount = 0.10;
    let discountedAmount = totalAmount * (1 - discount);
    console.log("Discounted amount is: ", discountedAmount);
} else {
    console.log("No discount applied.");
}
