(
    function() {


        function newton_method(callback_expression, callback_expression_derivative, x_value = 3, array = []) {
            let x = x_value, x1, p0, p1, error;

            p0 = callback_expression(x);
            p1 = callback_expression_derivative(x);

            x1 = x - (p0 / p1);
            error = Math.abs((x1 - x) / x1);
            array.push(`x=${x}, y=${p0}`);
            if (error < 0.00000001) {
                return { x: x, y: p0, values: array }
            }
            else {
                return newton_method(callback_expression, callback_expression_derivative, x1, array)
            }
        }

        return approximation_methods={
            newton_method

        }
    }
)();
/*
let result=newton_method((x)=>{return 12 - 21*x + 18*x**2 - 2.75*x**3}, (x)=>{return -21 + 36*x - 8.25*x**2});
console.log(`x=${result.x}, y=${result.y}`);*/