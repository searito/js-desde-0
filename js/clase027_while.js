var i = 0;

while (i < 10) {
    i++;

    /*   if (i === 5) {
           break;
       }*/

    if (i === 5) {
        continue;
    }

    console.log("vuelta", i);
}

console.error("======================================");


var s = 0;
do {
    s++;
    console.log("Welta", s);
} while (s < 10);