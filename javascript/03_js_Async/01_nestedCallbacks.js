function placeOrder(callback){
    setTimeout(()=>{
        console.log("1. Order is placed")
        return callback()
    },1000)
}

function makePayment(callback){
    setTimeout(()=>{
    return  callback()

        console.log("2. payment is done")
    },1000)
}

function orderConfirmed(callback){
    setTimeout(()=>{
        console.log("3. Order is confirmed")
        return callback()
    },1000)
}

function assignDeliveryPartner(callback){
    setTimeout(()=>{
        console.log("4. Delivery partner is Assigned")
        return callback()
    },1000)
}

placeOrder(function(){
    makePayment(function(){
        orderConfirmed(function(){
            assignDeliveryPartner(
                console.log(("5. Order is Delivered"))

            )
        })
    })
})
