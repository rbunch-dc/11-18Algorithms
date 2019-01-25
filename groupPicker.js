let students = ['JR','Jim','Brandon','Khanh','Connor','Cody','Christopher','Sean','Katie','Jason','Michael','Gbinga','Greg','Bryan','Matt','Zac','Rob','Ron','Noelle'];
let groupSize = 3;
let newStudents = [];
for(let i = 0; i < 4; i++){
    newStudents[i] = [];
}

// keep looping, as long as there is still a student
// in original students array
while(students.length > 0){
    // get random index - bounds between 
    // 0 and students.length
    for(let i = 0; i < 4; i++){
        const rand = Math.floor(Math.random()*students.length);
        const student = students.splice(rand,1);
        newStudents[i].push(student[0]);
    }
}
console.log(newStudents)