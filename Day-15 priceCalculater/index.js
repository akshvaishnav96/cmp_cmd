import { awards } from "./data.js"


function calculatePrizes(array) {
 
    const resultArr = [];

    array.forEach((elem)=>{
            const alreadyExistData = resultArr.find((item)=> item.category == elem.category && item.year == elem.year)
            if(alreadyExistData){
                alreadyExistData.winner.push({name:elem.name,score:0,team:elem.team,})
                
            }else{
                resultArr.push(
                    {
                        category : elem.category,
                        year:elem.year,
                      
                        winner:[
                            {name:elem.name,score:0,team:elem.team,}
                        ]
                    }
                )
            }
    })

   
   
    

  const winnersObj = {}
  resultArr.forEach((item)=>{
    item.winner.forEach((elem)=>{
        if(winnersObj[`${elem.team}${item.year}`]){
            winnersObj[`${elem.team}${item.year}`].count = winnersObj[`${elem.team}${item.year}`].count+1
        }else{
            winnersObj[`${elem.team}${item.year}`] = {team:elem.team,count:1,index:resultArr.indexOf(item),countOfTeams :resultArr[resultArr.indexOf(item)].winner.length}
        }
    })
  })

 

  resultArr.map((item)=>{
    
        item.winner.forEach((winner)=>{
          let objIndex = winnersObj[(winner.team)+(item.year)].index;
          let playerCount = winnersObj[(winner.team)+(item.year)].count;
          let winnerIndex = item.winner.indexOf(winner);
          let teamPrecentScore = 1/playerCount;       
          resultArr[objIndex].winner[winnerIndex].score = teamPrecentScore

        })
  })
console.log(winnersObj);
console.log(resultArr);
 
  
  


  
    


   




}

calculatePrizes(awards)