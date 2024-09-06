function evensize(string){
    const size = string.length;
    console.log(string, size)
    if(size % 2 === 0){
        console.log("even number")
        return true
    }
    else{
        console.log("odd number")
        return false
    }
}
evensize("this is foisal ")