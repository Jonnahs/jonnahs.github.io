function entrandoComDados(value) {
    var $dados = value.replace(/\D/g, "");
    var $phone = document.getElementById("phone").value;


    var $wrapper = document.querySelector('.wrapper'),
        // Pega a string do conteúdo atual
        HTMLTemporario = $wrapper.innerHTML,
        // Novo HTML que será inserido
        // HTMLNovo = concat('<a href="https://wa.me/55', '?text=Olá,%20tudo%20bem?">Entrar em contato</a> <br>');
        HTMLNovo = '<a class="btn btn-outline-success btn-lg btn-block btnAjuste" href="https://wa.me/55' + $dados + '?text=Olá,%20tudo%20bem?">Entrar em contato</a> <br>';


    // Concatena as strings colocando o novoHTML antes do HTMLTemporario
    HTMLTemporario = HTMLNovo
        // + HTMLTemporario;


    // Coloca a nova string(que é o HTML) no DOM
    if ($phone.length == 15) {
        $wrapper.innerHTML = HTMLTemporario;
    } else {
        $wrapper.innerHTML = ''
    }



}

function mask(o, f) {
    setTimeout(function() {
        var v = mphone(o.value);
        if (v != o.value) {
            o.value = v;
        }
    }, 1);
}

function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}