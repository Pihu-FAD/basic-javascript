function conveArray(arr){
    const obj = {}
    arr.forEach(num => {
        if(obj[num]){
            obj[num]++;
        }
        else{
            obj[num] = 1;
        }
    });
    return obj;

}
const numbers = [1,2,2,1,3,3,5,2,5,4]
const result = conveArray(numbers)
console.log(result);