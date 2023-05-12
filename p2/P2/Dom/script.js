const datapengguna =[
    {
        nama:'John Doe',
        email:'johndoe@example.com',
        alamat:'Jalan Raya No. 123,  Kota Jakarta',
    },
    {
        nama:'Jane Doe',
        email:'janedoe@example.com',
        alamat:'Jalan Raya No. 456,  Kota Bandung',
    }
];

const tabelPengguna = document.getElementById('tabelPengguna');
const tbody = tabelPengguna.querySelector('tbody');

datapengguna.forEach(function(pengguna){
    const tr = document.createElement('tr');
    
    const tdNama = document.createElement('td')
    tdNama.textContent = pengguna.nama;
    tr.appendChild(tdNama);

    const tdEmail = document.createElement('td')
    tdEmail.textContent = pengguna.email;
    tr.appendChild(tdEmail);

    const tdAlamat = document.createElement('td')
    tdAlamat.textContent = pengguna.alamat;
    tr.appendChild(tdAlamat);

    tbody.appendChild(tr);
});
