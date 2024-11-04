let cancelInterval;
function createCounterPromise(maxCount = 3, timeoutMs = 5000) {


    let count = 0
   
    const promise = new Promise((res,rej)=>{
        let timeOutCount = 0
        cancelInterval = setInterval(() => {
            count++
            timeOutCount + 1000
            console.log(`Counter + ${count}`)
            if (count == maxCount) {
                clearInterval(cancelInterval)
               
                res(`Done ! Counter reached ${count}`)
            }
        }, 1000); 
    })


    function cancel(name,time){
        clearInterval(name)
    }



    return {promise}



}




// setTimeout(cancel, 2000); //This should cancel the operation after 2 seconds with message "Operation canceled after 2 seconds"


const { promise,cancle } = createCounterPromise(5, 5000);
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
