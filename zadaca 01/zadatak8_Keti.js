k = {a:5, b:10, c:15}
h = {a:20, b:25, c:30}

function objekti(k,h){
    for (const key of Object.keys(k)){
        
        const sadrzi = Object.hasOwn(h, key);

        if(!sadrzi){
            return false;
        }

    }
    return true;
}

console.log(objekti(k, h));