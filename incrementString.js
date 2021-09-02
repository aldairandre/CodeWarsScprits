function incrementStrng(strng){
    let strngSplit = strng.split('');
    let numeroStrng;
    let increStrng;
    let newStrng='';
    let pausa = 1;

    function compara (element){
        if(!isNaN(element)){
            if(numeroStrng === undefined){
                numeroStrng = String(element)
            }else{
                numeroStrng += String(element)
                numeroStrng = Number(numeroStrng)
            }
        }else if(isNaN(element)){
            newStrng += element
        }
        if(pausa === strng.length){
           numeroStrng++;
        }else{
            ++pausa
        }

    }
    (strngSplit).forEach(compara);
    increStrng = newStrng + numeroStrng
    console.log(increStrng);
}
incrementStrng('Aldair0233')
