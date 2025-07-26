// Menangani pengiriman form
document.getElementById('faunaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Mengambil nilai dari input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const report = document.getElementById('report').value;

    // Menampilkan alert dengan informasi yang diisi
    alert(`Laporan Diterima!\nNama: ${name}\nEmail: ${email}\nDeskripsi: ${report}`);

    // Mengosongkan form setelah pengiriman
    this.reset();
});

// Fungsi untuk menampilkan deskripsi foto
function showDescription(description) {
    alert(description);
}
