let flag = true;

function moveRight() {
    debugger;
    if (flag) {
        flag = !flag;
        return '5 0 0';
    } else {
        flag = !flag;
        return '-5 0 0'
    }
}