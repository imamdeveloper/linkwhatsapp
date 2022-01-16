function getQR(str) {
    var nomor = document.getElementById("nomor").value;
    var nomorWA = nomor.split(/[^0-9]/).join("").replace(/^[0]/, "62");
    var pesan = document.getElementById("pesan").value;
    var teksPesan = encodeURIComponent(pesan);
    var result = "https://api.whatsapp.com/send?phone="+nomorWA+"&text="+teksPesan;
    var str = result;
    document.getElementById("result").value = result;
    QRCode.toCanvas(document.getElementById("canvas"), str, function(error) {
    });
  }
  function copyLink(){
    document.getElementById("result").select();
    document.execCommand('copy');
    document.getElementById("keterangan-tercopy").innerHTML = "Link berhasil disalin";
    document.getElementById("keterangan-tercopy").style.margin = "10px 0";
  }
  function testLink(){
    var teksLink = document.getElementById("result").value;
    window.open(teksLink,'_blank');
  }
  function downloadQR(){
    var link = document.getElementById("link");
    var nama = document.getElementById("nama").value;
    var titlePng = nama + ".png";
    link.setAttribute('download', titlePng);
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
  }
  function resetQR(){
    window.location.href = window.location.href;
  }
  window.onload = function() {
    document.getElementById("generate-wa").onclick = getQR, document.getElementById("copy-link").onclick = copyLink, document.getElementById("download-qr").onclick = downloadQR, document.getElementById("test-link").onclick = testLink, document.getElementById("reset-qr").onclick = resetQR;
  };
