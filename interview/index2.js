let num = 0
async function sequentialDelayedCounting(limit = 5) {
    try {

        
        let lastLmit = 1
        
        
let randomNumber = generateRandomNumber()
        setTimeout(() => {
            num++
            console.log(`time in ms ${randomNumber}mss`)
            console.log(`generate number ${num}`)

            if(lastLmit === limit){
                return
            }else{
                sequentialDelayedCounting(limit-1)
            }
        }, randomNumber)

    } catch (error) {

    }
}


function generateRandomNumber(){
    return Math.floor(Math.random() * 4000)
}

sequentialDelayedCounting(6);



