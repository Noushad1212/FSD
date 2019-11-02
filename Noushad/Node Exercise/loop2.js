let myArray=[{"child":["one","two","three"]},
{"child":["four","five","six"]}];

for(let i=0;i<myArray.length;i++){
    let childArray=myArray[i].child;
    for(let j=0;j<childArray.length;j++){
        console.log(childArray[j]);
    }
}