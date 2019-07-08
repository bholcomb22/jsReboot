//student score


let gradeIt = function(studentScore, totalScore){
    if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
        throw Error ('student score AND totalScore must be a number')
    }
        let finalScore = (studentScore / totalScore) *100
        let letterGrade = ''
        if(finalScore >= 90){
            letterGrade = 'A'
        } else if (finalScore >= 80){
            letterGrade = 'B'
        } else if (finalScore >= 70){
            letterGrade = 'C'
        } else if (finalScore >= 60){
            letterGrade = 'D'
        }else {
            letterGrade = 'F'
        }

         return `${studentScore} / ${totalScore} You got a ${letterGrade} ${finalScore}%!`       
    }
    

try {
    let test = gradeIt(16, 50)    
    console.log(test)
} catch (e) {
     console.log(e.message)
}

