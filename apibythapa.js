window.addEventListener("DOMContentLoaded", ()=> {
        let button = document.getElementById('btn');
        button.onclick = function() {
            const name = document.getElementById('nameid').value;
            document.getElementById('imgch').src = `https://joeschmoe.io/api/v1/${name}`;
        }
});