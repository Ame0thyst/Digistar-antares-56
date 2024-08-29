// Pastikan skrip ini ditempatkan setelah elemen canvas dalam HTML atau di dalam event window.onload.
window.onload = function() {
    // Ambil elemen canvas dan konteks 2D-nya
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // Buat objek gambar
    var img = new Image();
    
    // Atur sumber gambar (path gambar)
    img.src = './assets/img/hero.png';

    // Gambar gambar pada canvas setelah gambar selesai dimuat
    img.onload = function() {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
};
