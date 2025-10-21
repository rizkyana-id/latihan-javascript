var button = document.getElementById("kirim");
var inputNamaDepan = document.getElementById("namaDepan");
var inputNamaBelakang = document.getElementById("namaBelakang");
var inputNilaiAngka = document.getElementById("nilaiAngka");

button.addEventListener("click", function() {
    var namaDepan = inputNamaDepan.value;
    var namaBelakang = inputNamaBelakang.value;
    var nilaiAngka = inputNilaiAngka.value;
    var stringNilai;
    
    switch (true) {
        case (nilaiAngka >= 85):
            stringNilai = "A";
            break;
        case (nilaiAngka >= 80):
            stringNilai = "A-";
            break;
        case (nilaiAngka >= 75):
            stringNilai = "B+";
            break;
        case (nilaiAngka >= 70):
            stringNilai = "B";
            break;
        case (nilaiAngka >= 65):
            stringNilai = "B-";
            break;
        case (nilaiAngka >= 60):
            stringNilai = "C+";
            break;
        case (stringNilai >= 55):
            stringNilai = "C";
            break;
        case (stringNilai >= 40):
            stringNilai = "D";
            break;
        default:
            stringNilai = "E";
            break;
    }

    console.log("Nama Lengkap: " + namaDepan + " " + namaBelakang);
    console.log("Nilai Angka: " + stringNilai);

});