
// You should implement your task here.

module.exports = function towelSort(matrix){
    let result=[];
    if (typeof matrix ==="undefined"){
        return result;
    } else {
    for(let j = 1; j<matrix.length;j+=2){
        if (Array.isArray(matrix[j]))
            matrix[j]=matrix[j].reverse();
        console.log(matrix[j]);
        console.log(matrix);
    }
    for (var i=0; i < matrix.length; i++){
        if (!Array.isArray(matrix[i])){
            result.push(matrix[i]);}
        else{

            result = result.concat(towelSort(matrix[i]));
        }
    }
    return result;
}
}
