const link = document.querySelector('a');
console.log(link);
console.dir(link);
link.textContent = '*Mozilla Developer Network*';
link.href = 'https://developer.mozilla.org';

const sect = document.querySelector('section');

for (let i = 0; i < 4; i++) {
    const para = document.createElement('p');
    para.textContent = i + 1 + ': We hope you enjoyed the ride.';
    sect.appendChild(para);
    if (i % 2 === 0) {
        para.classList.add('highlight');
    }
}

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
sect.appendChild(linkPara);
//sect.removeChild(linkPara);

linkPara.parentNode.removeChild(linkPara);

// Google Maps
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        const options = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            disableDefaultUI: true
        }
        const map = new google.maps.Map(document.getElementById("map_canvas"), options);
    });
} else {
    const para = document.createElement('p');
    para.textContent = 'Argh, no geolocation!';
    document.body.appendChild(para);
}

// window.addEventListener('resize', resizeMap);
// window.addEventListener('load', resizeMap);

// function resizeMap() {
//   const WIDTH = window.innerWidth;
//   const HEIGHT = window.innerHeight;
//   const div = document.getElementById('map_canvas');
//   div.style.width = WIDTH + 'px';
//   div.style.height = HEIGHT + 'px';
//   console.log('resizeMap');
// }

setInterval( updateClock, 1000);
function updateClock() {
    const clock = document.getElementById('clock');
    clock.innerText = (new Date()).toLocaleTimeString();
}    

$('button').click( () => {
    $('img').toggle(100*1000);
});