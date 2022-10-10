function funk(h){
    let k= 1
    if(h>0 & h<1000){
        while(h>0){ 
            k*= h
            h-=7

        }
        console.log(k)
    }
    else{
        console.log("invalid number")
    }

}

funk(48)