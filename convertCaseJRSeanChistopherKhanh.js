let string = "hello    sean rob";
let testCase = "camelcase";

function caseConvertor(string,testCase){
   var lowerString = string.toLowerCase()
   let newString = lowerString.replace(/\s+/g, " ");
   console.log(newString)
   if(testCase == "camelcase"){
       let upperCaseSearch = newString.match(/\s./g);
       let empty;
       let upperCasedString = upperCaseSearch.map((element)=>{
           empty = newString.replace(element, element.toUpperCase());
       });
       console.log(empty)
   } else if(testCase == "snakecase"){
     let snakeString = newString.replace(/\s/g, "_");
     console.log(snakeString)
   }

}
caseConvertor(string, testCase);