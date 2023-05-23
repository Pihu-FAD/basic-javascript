function result(){
    let clang = document.getElementById('clang').value;
    let clangua = document.getElementById('c++lang').value;
    let data = document.getElementById('data').value;
    let html = document.getElementById('html').value;
    let css = document.getElementById('css').value;
    let php = document.getElementById('php').value;
    let core = document.getElementById('core').value;
   
    let total = parseInt(clang) +parseInt(clangua) + parseInt(data) + parseInt(html) + parseInt(css) + parseInt(php) +parseInt(core);
    document.getElementById('num').innerHTML = total;

    let pers = total/350*100;
    document.getElementById('per').innerHTML = Math.floor(pers);
}