function time(t){
    var h = 0
    var m = 0

    while(t > 60){
        h += 1;
        t -= 60

            if(t < 60){
                m += t;
            }
    }

    console.log("sati:", h, " min:", m)

}

time(123)