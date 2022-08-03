export default function mmc(n1, n2) {

    var resto, x, y

    x = n1
    y = n2

    while(resto!=0){

      resto = x % y
      x = y;
      y = resto

    }

    return (n1*n2)/x
}