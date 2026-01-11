function fizzBuzz(fizz: number, buzz: number, n: number){
    for (let i=1; i<=n; i++){
        if (i % fizz === 0 && i % buzz === 0){
            console.log('fizzBuzz');
        } else if (i % buzz === 0){
            console.log('buzz')
        } else if (i % fizz === 0) {
            console.log('fizz');
        }else {
            console.log(i);
        }
    }
}

fizzBuzz(3, 5, 100);