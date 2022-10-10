var brojevi =  [1,2,3,4,5,6,7,8,9,10];
var djeljiv = [];

function tri (){
    for (var k of brojevi){
        if( k % 3 == 0){
            djeljiv.push(k);
        }
    }
}

tri();
console.log(djeljiv)