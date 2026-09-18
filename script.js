// ===============================
// DATA PASIEN
// ===============================

// Ambil data pasien yang tersimpan di browser.
// Kalau belum ada data tersimpan, gunakan data awal.
let pasien = JSON.parse(localStorage.getItem("dataPasien")) || [
    {
        nama: "Ani",
        umur: 20,
        jk: "Perempuan",
        keluhan: "Demam dan sakit kepala"
    },
    {
        nama: "Budi",
        umur: 22,
        jk: "Laki-laki",
        keluhan: "Batuk dan pilek"
    },
    {
        nama: "Siti",
        umur: 19,
        jk: "Perempuan",
        keluhan: "Nyeri perut"
    }
];

// Simpan data pasien ke localStorage
function simpanData() {
    localStorage.setItem("dataPasien", JSON.stringify(pasien));
}


// ===============================
// MENAMPILKAN DATA PASIEN
// ===============================

function tampilkanPasien() {

    let keyword =
        document.getElementById("search").value.toLowerCase();

    let tabel =
        document.getElementById("tabelPasien");

    let hasil = pasien.filter(function(p) {
        return p.nama.toLowerCase().includes(keyword);
    });

    tabel.innerHTML = "";

    hasil.forEach(function(p) {

        tabel.innerHTML += `
            <tr>
                <td>${pasien.indexOf(p) + 1}</td>

                <td>
                    <strong>${p.nama}</strong>
                </td>

                <td>
                    ${p.umur} tahun
                </td>

                <td>
                    ${p.jk}
                </td>

                <td>
                    ${p.keluhan}
                </td>

                <td>
                    <button
                        class="hapus"
                        onclick="hapusPasien(${pasien.indexOf(p)})">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
    });

    // Total pasien
    document.getElementById("totalPasien").innerText =
        pasien.length;

    // Total rekam medis
    document.getElementById("totalRekam").innerText =
        pasien.length;
}


// ===============================
// BUKA FORM
// ===============================

function bukaForm() {

    document
        .getElementById("modal")
        .classList.add("show");
}


// ===============================
// TUTUP FORM
// ===============================

function tutupForm() {

    document
        .getElementById("modal")
        .classList.remove("show");
}


// ===============================
// TAMBAH PASIEN
// ===============================

function tambahPasien(event) {

    event.preventDefault();

    let nama =
        document.getElementById("nama").value;

    let umur =
        document.getElementById("umur").value;

    let jk =
        document.getElementById("jk").value;

    let keluhan =
        document.getElementById("keluhan").value;


    // Masukkan pasien baru
    pasien.push({
        nama: nama,
        umur: umur,
        jk: jk,
        keluhan: keluhan
    });


    // ===============================
    // SIMPAN KE BROWSER
    // ===============================

    simpanData();


    // Kosongkan form
    event.target.reset();


    // Tutup form
    tutupForm();


    // Tampilkan data terbaru
    tampilkanPasien();

    tampilkanRekam();
}


// ===============================
// HAPUS PASIEN
// ===============================

function hapusPasien(index) {

    if (
        confirm(
            "Apakah kamu yakin ingin menghapus data ini?"
        )
    ) {

        // Hapus dari array
        pasien.splice(index, 1);


        // ===============================
        // SIMPAN PERUBAHAN
        // ===============================

        simpanData();


        // Tampilkan data terbaru
        tampilkanPasien();

        tampilkanRekam();
    }
}


// ===============================
// REKAM MEDIS
// ===============================

function tampilkanRekam() {

    let rekam =
        document.getElementById("rekamMedis");

    rekam.innerHTML = "";


    pasien.forEach(function(p) {

        rekam.innerHTML += `
            <div class="rekam">

                <strong>
                    ${p.nama} — ${p.keluhan}
                </strong>

                <span>
                    ${p.umur} tahun •
                    ${p.jk} •
                    Pemeriksaan Umum
                </span>

            </div>
        `;
    });
}


// ===============================
// JALANKAN SAAT HALAMAN DIBUKA
// ===============================

tampilkanPasien();
tampilkanRekam();
