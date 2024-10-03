let currentPage = 1;

function goToPage(page) {
    const content = document.getElementById('content');
    const overlay = document.getElementById('overlay');

    // Menambahkan garis warna
    for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.className = 'line';
        line.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Warna acak
        overlay.appendChild(line);
        line.style.transform = `translateX(-100%)`; // Posisi awal

        // Menggunakan setTimeout untuk menambahkan efek
        setTimeout(() => {
            line.style.transform = `translateX(100%)`; // Gerakan ke kanan
            line.style.opacity = 1; // Munculkan garis
        }, i * 100); // Menjeda setiap garis muncul
    }

    // Mengganti konten setelah durasi garis
    setTimeout(() => {
        if (page === 'page2') {
            content.innerHTML = `
                <h1>Halaman 2</h1>
                <p>Ini adalah konten halaman kedua.</p>
                <button onclick="goToPage('page1')">Kembali ke Halaman 1</button>
            `;
        } else {
            content.innerHTML = `
                <h1>Halaman 1</h1>
                <p>Ini adalah konten halaman pertama.</p>
                <button onclick="goToPage('page2')">Ke Halaman 2</button>
            `;
        }
    }, 500); // Sesuaikan dengan durasi animasi garis
}
