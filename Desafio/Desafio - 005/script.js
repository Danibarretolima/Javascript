let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(){
    if (Number(n) >= 1 && Number(n) <= 100){
        return  true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
        
    }
        
    
    
    



function adicionar(){
    if(isNumero(num.value) && !inLista(num.value)){
        window.alert('Tudo ok')
    } else{
        window.alert('Valor invalido ou ja encontrado na lista')
    }
}