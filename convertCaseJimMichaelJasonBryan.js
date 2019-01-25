function caseConvert(str, conversionType){
   let convertedStr = ``;
   if (conversionType === 'camelCase'){
       console.log(str.match(/./g));
       convertedStr = str.replace(/./, (firstLetter)=>(firstLetter.toLowerCase()));
       convertedStr = convertedStr.replace(/ [a-z]/g, (firstLetter)=>(firstLetter.toUpperCase()));
       convertedStr = convertedStr.replace(/ /g, ``);
       return convertedStr;

   }
   if (conversionType ==='snake_case'){
       convertedStr = str.replace(/ /g, `_`);
       return convertedStr;
   }
}

const string = "The Rain in SPAIN stays mainly in the plain";
let camelCase = caseConvert(string, 'camelCase');
console.log(camelCase);
let snake_case = caseConvert(string, 'snake_case');
console.log(snake_case);