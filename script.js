let flag = true;

let apartment = document.querySelector('#apartment');

apartment.addEventListener('click', function () {

    if (flag) {
        flag = !flag;
        //this.setAttribute('position', '5 0 0');
        this.setAttribute('animation__pos', {
            property: 'position',
            dur: 2000,
            easing: 'easeInOutSine',
            to: '5 0 0'
        });
    } else {
        flag = !flag;
        //this.setAttribute('position', '-5 0 0');
        this.setAttribute('animation__pos', {
            property: 'position',
            dur: 2000,
            easing: 'easeInOutSine',
            to: '-5 0 0'
        });
    }
});