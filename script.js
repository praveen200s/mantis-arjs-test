document.querySelector('#apartment').addEventListener('click', moveRight());

let flag = true;

function moveRight() {
    debugger;
    if (flag) {
        flag = !flag;
        this.setAttribute('position', '5 0 0');;
    } else {
        flag = !flag;
        this.setAttribute('position', '-5 0 0');
    }
}