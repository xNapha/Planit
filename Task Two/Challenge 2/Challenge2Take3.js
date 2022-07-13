function returnLetter(string){
    let table = new Array(4)
    let arr = string.toLowerCase().split(/\s|/);
    
    let potLength = arr.length;
    let loadFactor = potLength / table.length

    while(loadFactor > 0.8){
        table  = new Array(table.length * 5);
        loadFactor = potLength / table.length
    };

    for(let i = 0; i< arr.length; i++){
        const index = (arr[i].codePointAt())%table.length;
        if(table[index]){
            table[index].Frequency++
        }else {
            table[index] = {"Character" : arr[i], "Frequency" : 1};
        };            
    };

    let highestFrequency = table.reduce((max,prev) => (max.Frequency > prev.Frequency) ? max:prev).Frequency;
    let filteredTable = table.filter((x) => x.Frequency >= highestFrequency)
    let charIn = arr.length;

    for(let i = 0; i < filteredTable.length; i++){
        if(arr.indexOf(filteredTable[i].Character) < charIn){
            charIn = arr.indexOf(filteredTable[i].Character);
        }; 
    } return arr[charIn];
};

let test = "The quick brown fox jumps over the lazy dog"
console.log(returnLetter(test))
console.log(returnLetter("Character"))



