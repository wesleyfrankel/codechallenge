const findSum = function(array) {
    return array.reduce((acc, curr) =>{return acc + curr}, 0)
   
  };

  
  const findFrequency = function(array) {
  	let mostFrequent = array[0]
    let leastFrequent = array[0]
		let currentCount = 0
    let highestFrequencyCount = 1
    let leastFrequencyCount = 1
    for(let i = 0; i < array.length; i++){

    	for(let j = 0; j < array.length; j++){
      	
        	if(array[i] === array[j]){
          	currentCount += 1
          }
          if(currentCount > highestFrequencyCount){
          	highestFrequencyCount = currentCount
            mostFrequent = array[i]
          }
         if(currentCount <= leastFrequencyCount){
      	leastFrequencyCount = currentCount
        leastFrequent = array[i]
      }
        
      }
      currentCount = 0

    }
    return { most: mostFrequent, least: leastFrequent}
  };
  
  
  
  const isPalindrome = function(str) {
    for(let i = 0; i < str.length; i++){
    	if(str[i].toLowerCase() != str[str.length - (i + 1)].toLowerCase()){
      return false
      }
    }
    return true
  };

  
  
  const largestPair = function(array) {
  	let currentHighestProduct = array[0] * array[1]
    for(let i = 0; i < array.length - 1; i++){
    	const currentProduct = (array[i] * array[i + 1])
    	if(currentProduct > currentHighestProduct){
      	currentHighestProduct = currentProduct
      }
    }
    return currentHighestProduct
  };
  
 
  
  
  const removeParenth = function(str) {
    const str1 = str.split('(')[0]
    const str2 = str.split(')')[1]
    return str1 + str2
  };
  


  
  const scoreScrabble = function(str) {
  const score1 = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
  const score2 = ['d', 'g']
  const score3 = ['b', 'c', 'm', 'p']
  const score4 = ['f', 'h', 'v', 'w', 'y']
  const score5 = ['k']
  const score8 = ['j', 'x']
  const score10 = ['q', 'z']
  let totalScore = 0
  for(let i = 0; i < str.length; i++){
  	const curr = str[i].toLowerCase()
    if(score1.includes(curr)){
    	totalScore += 1
    }
    else if(score2.includes(curr)){
    	totalScore += 2
    }
        else if(score3.includes(curr)){
    	totalScore += 3
    }
        else if(score4.includes(curr)){
    	totalScore += 4
    }
        else if(score5.includes(curr)){
    	totalScore += 5
    }
        else if(score8.includes(curr)){
    	totalScore += 8
    }
        else if(score10.includes(curr)){
    	totalScore += 10
    }
  }
  return totalScore
  };
  
