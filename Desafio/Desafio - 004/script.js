function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0)
        {window.alert('Por favor digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var iten = document.createElement('option')
            iten.text = `${n} x ${c} = ${n*c}`
            iten.value = `tab${c}`
            tab.appendChild(iten)
            c++
        }
    }
    

}