window.onload = function() {
    document.getElementById('product1').style.display = 'block';
    document.getElementById('product2').style.display = 'block';
    document.getElementById('banner').style.display = 'block';
    document.getElementById('product3').style.display = 'block';
    document.getElementById('product4').style.display = 'block';
    document.getElementById('product5').style.display = 'block';
}

document.querySelector('ul#menu li:nth-child(1) a').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('product1').style.display = 'block';
    document.getElementById('product2').style.display = 'block';
    document.getElementById('banner').style.display = 'block';
    document.getElementById('product3').style.display = 'block';
    document.getElementById('product4').style.display = 'block';
    document.getElementById('product5').style.display = 'block';
});

document.querySelector('ul#menu li:nth-child(2) a').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('product1').style.display = 'none';
    document.getElementById('product2').style.display = 'block';
    document.getElementById('banner').style.display = 'none';
    document.getElementById('product3').style.display = 'none';
    document.getElementById('product4').style.display = 'none';
    document.getElementById('product5').style.display = 'none';
});

document.querySelector('ul#menu li:nth-child(3) a').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('product1').style.display = 'none';
    document.getElementById('product2').style.display = 'none';
    document.getElementById('banner').style.display = 'none';
    document.getElementById('product3').style.display = 'block';
    document.getElementById('product4').style.display = 'none';
    document.getElementById('product5').style.display = 'none';
});

document.querySelector('ul#menu li:nth-child(4) a').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('product1').style.display = 'none';
    document.getElementById('product2').style.display = 'none';
    document.getElementById('banner').style.display = 'none';
    document.getElementById('product3').style.display = 'none';
    document.getElementById('product4').style.display = 'block';
    document.getElementById('product5').style.display = 'none';
});
