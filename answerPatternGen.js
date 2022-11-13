function answerPatternGen(num_qest, poss_answers = 4, equalDist = true, letterArr = true) {
    let arr = [], maxEach = Math.ceil(num_qest/poss_answers), minEach = Math.floor(num_qest/poss_answers);
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'M', 'O', 'P'];
    if (equalDist == false) {
        for (let i = 0; i < num_qest; i++) {
            arr.push(letterArr ? letters[Math.floor(Math.random()*poss_answers)] : Math.ceil(Math.random()*poss_answers) );
        }
    } else {
        // populate ordered array
        for (let i = 0; i < poss_answers; i++) {
            y = i % 2 == 0 ? maxEach : minEach;
            for (let j = 0; j < y; j++) {
                arr.push(letterArr ? letters[i] : i + 1);
            }
        }
        // shuffle array
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));  
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    return arr.join(', ');
}
