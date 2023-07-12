export default function Checker(inputString){
      const array=inputString.split('')
      let bool
      let newArray=[]
      for(let i=0;i<array.length;i++){
        if(array[i]===' '){
            continue;
            bool=false
        }
        else{
            newArray.push(array[i])
            bool=true
        }
      }

      return {val:newArray.join(''),bool}
}