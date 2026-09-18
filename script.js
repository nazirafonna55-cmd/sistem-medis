let pasien = [
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

function tampilkanPasien() {

    let keyword =
        document.getElementById("search").value.toLowerCase();

    let tabel =
        document.getElementById("tabelPasien");

    let hasil = pasien.filter(function(p) {
        return p.nama.toLowerCase().includes(keyword);
    });

    tabel.innerHTML = "";

    hasil.forEach(function(p, index) {

        tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${p.nama}</strong></td>
                <td>${p.umur} tahun</td>
                <td>${p.jk}</td>
                <td>${p.keluhan}</td>
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

    document.getElementById("totalPasien").innerText =
        pasien.length;

    document.getElementById("totalRekam").innerText =
        pasien.length;
}


function bukaForm() {
    document.getElementById("modal").classList.add("show");
}


function tutupForm() {
    document.getElementById("modal").classList.remove("show");
}


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

    pasien.push({
        nama: nama,
        umur: umur,
        jk: jk,
        keluhan: keluhan
    });

    event.target.reset();

    tutupForm();

    tampilkanPasien();

    tampilkanRekam();
}


function hapusPasien(index) {

    if (confirm("Apakah kamu yakin ingin menghapus data ini?")) {

        pasien.splice(index, 1);

        tampilkanPasien();

        tampilkanRekam();
    }
}


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


tampilkanPasien();
tampilkanRekam();