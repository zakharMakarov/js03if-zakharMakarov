// Написать функциюf(k, b, R), которая дает количество общих точек у пря-
// мой y = kx + b и окружности x2 + y2 = R2.

function f(k, b, R){
    if ((r*r*(1+k*k)-b*b) == 0) {
        count = 1;
        } else if ((r*r*(1+k*k)-b*b) > 0) {
        count = 2;
        } else {
        count = 0;
    }
}    

module.exports = f;