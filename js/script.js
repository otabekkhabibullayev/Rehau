var L;
window.onload = function() {
    L.mapquest.key = '5TB5t0zArYbHozfdlkxM2Az3bONaw56G';
    var map = L.mapquest.map('map', {
        center: [53.480759, -2.242631],
        layers: L.mapquest.tileLayer('dark'),
        zoom: 12
    });
    L.marker([53.480759, -2.242631], {
            icon: L.mapquest.icons.marker({
                primaryColor: '#22407F',
                secondaryColor: '#3B5998',
                shadow: true,
                size: 'md',
                symbol: ''
            })
        })
        .bindPopup('This is Manchester!')
        .addTo(map);
}


function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.querySelector('body').style.overflowY = 'hidden'
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.querySelector('body').style.overflowY = 'unset'
}

const call = document.querySelector('#call');
const modal = document.querySelector('.modal_wrapper');

const x = document.querySelector('#x');

call.addEventListener('click', () => {
    modal.style.display = 'block'
})

x.addEventListener('click', () => {
    modal.style.display = 'none'
})

const input = document.querySelector('#inp');
const label = document.querySelector('#lbl');
input.onfocus = labelCss
input.onblur = defaault

function labelCss() {
    label.style.fontSize = '14px'
    label.style.top = '44%'
        // console.log('hello');
}

function defaault() {
    label.style.fontSize = '18px'
    label.style.top = '48%'
        // console.log('hello');
}