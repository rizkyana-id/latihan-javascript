var button = document.getElementById("kirim");
var inputNamaDepan = document.getElementById("namaDepan");
var inputNamaBelakang = document.getElementById("namaBelakang");
button.addEventListener("click", function() {
    var namaDepan = inputNamaDepan.value;
    var namaBelakang = inputNamaBelakang.value;
    alert("Nama Lengkap: " + namaDepan + " " + namaBelakang);
});