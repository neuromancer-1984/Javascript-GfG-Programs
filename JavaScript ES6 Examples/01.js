const checkApprox = (num1, num2, epsilon=0.004) => {
    return Math.abs(num2 - num1) < epsilon
}

//console.log(checkApprox(10.003, 10.001, 0.005));
//console.log(checkApprox(Math.PI / 2.0, 1.5708)); 

console.log(checkApprox(0.003, 0.03));
 