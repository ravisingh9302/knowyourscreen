console.log("hello ravi singh");

let ori = document.getElementById('ori');
let vpr = document.getElementById('vpr');
let vpf = document.getElementById('vpf');
function viewport() {
    vpf.innerText = ` ${window.screen.width} x ${window.screen.height}`;
    vpr.innerText = ` ${window.innerWidth} x ${window.innerHeight}`;
    ori.innerText = screen.orientation.type;
};
window.addEventListener('resize', viewport);
window.addEventListener('load', viewport);

let dpr = document.getElementById('dpr');
let dp = window.devicePixelRatio;
dpr.innerText = dp.toFixed(4);

let scresol = document.getElementById('scresol');
scresol.innerText = `${Math.floor(window.screen.width * devicePixelRatio)} x ${Math.floor(window.screen.height * devicePixelRatio)}`;

let cd = document.getElementById('cd');
cd.innerText = `${screen.colorDepth}Bit`;



let srctyp = document.getElementById('srctyp');
let px = Math.floor(window.screen.width * devicePixelRatio) * Math.floor(window.screen.height * devicePixelRatio);
let sd = 640 * 480;
let hd = 1280 * 720;
let hdp = 1600 * 900;
let fhd = 1920 * 1080;
let wuxga = 1920 * 1200;
let UHd = 2048 * 1080;
let Qhd = 2560 * 1440;
if (px < sd) {
    srctyp.innerText = '<SD or <480p';
}
else if (px < hd && px >= sd) {
    srctyp.innerText = 'SD or 480p';
}
else if (px < hdp && px >= hd) {
    srctyp.innerText = 'HD or 720p';
}
else if (px < fhd && px >= hdp) {
    srctyp.innerText = 'HD+ or 900p';
}
else if (px < wuxga && px >= fhd) {
    srctyp.innerText = 'FHD or 1080p';
}
else if (px < UHd && px >= wuxga) {
    srctyp.innerText = 'WUXGA or 1200p';
}
else if (px < Qhd && px >= UHd) {
    srctyp.innerText = 'UHD';
}
else if (px >= Qhd) {
    srctyp.innerText = 'QHD or 1440p';
}

let ratio = document.getElementById('ratio');
let vr = Math.floor(window.screen.height * devicePixelRatio.toFixed(8));
let hr = Math.floor(window.screen.width * devicePixelRatio.toFixed(8));
function gcd(a, b) {
    while (a != b) {
        if (a > b) {
            a -= b;
        }
        else {
            b -= a;
        }
    }
    return a;
};
let divisr = gcd(vr, hr);
ratio.innerText = `${vr / divisr}:${hr / divisr}`;

let dpout = document.getElementById('dpi');
let diagonal = document.getElementById('diagonal');
let bb = document.getElementById('check');
bb.addEventListener('click', function () {
    let size = diagonal.value / 2.54;
    let hypo = Math.sqrt(Math.pow(vr, 2) + Math.pow(hr, 2));
    dpi.innerText = hypo / size;

});

let other = document.getElementById('other');
let otherpara = document.getElementById('otherparameter');
other.addEventListener('click', function () {
    otherpara.innerHTML = `<p>Enter these parameter to your <span style="color: rgb(99, 99, 255);">display</span> DPI </p>
<label for="width">width:</label>
<input type="number" id="width" placeholder="centimeter"> <br>
<label for="height">height:</label>
<input type="number" id="height" placeholder="centimeter">
<br>
<button id="btnother" onclick="calculte()"  >check</button>`;


});

function calculte() {
        let wid = document.getElementById('width');
        let hei = document.getElementById('height');
        let diago = (Math.sqrt(Math.pow(wid.value, 2) + Math.pow(hei.value, 2))) / 2.54;
        let hy = Math.sqrt(Math.pow(vr, 2) + Math.pow(hr, 2));
        dpi.innerText = hy / diago;
};

let plat =document.getElementById('plat');

plat.innerText=window.navigator.platform;


let text = "<p>Browser CodeName: " + navigator.appCodeName + "</p>" +
"<p>Browser Name: " + navigator.appName + "</p>" +
"<p>Browser Version: " + navigator.appVersion + "</p>" +
"<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>" +
"<p>Browser Language: " + navigator.language + "</p>" +
"<p>Browser Online: " + navigator.onLine + "</p>" +
"<p>Platform: " + navigator.platform + "</p>" +
"<p>User-agent header: " + navigator.userAgent + "</p>";
document.getElementById("demo").innerHTML = text;