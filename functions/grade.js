//student score


let gradeIt = function(studentScore, totalScore){
    let finalScore = (studentScore / totalScore) *100;
    let letterGrade = '';
    if(finalScore >= 90){
        letterGrade = 'A';
    } else if (finalScore >= 80){
        letterGrade = 'B';
    } else if (finalScore >=70){
        letterGrade = 'C';
    } else if (finalScore >= 60){
        letterGrade = 'D';
    }else {
        letterGrade = 'F';
    }

    return `${studentScore} / ${totalScore} You got a ${letterGrade} ${finalScore}%!`
    };

let test = gradeIt(16, 20);
console.log(test);