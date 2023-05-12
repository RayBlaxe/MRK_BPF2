const dataUser = [
    {
        biodata:{
            nama: "Josep Ronaldo Francis Siregar",
            panggilan: "Josep"
        },
        ttl:{
            tempat: "Kota Batak",
            tanggal: "22 Juni 2002"
        },
        jurusan: "Teknik Informatika",
        lokasi:{
            kota : "Kampar",
            alamat: "Kota Batak"
        },
        kontak:{
            nohp: "087893504595",
            email: "josep21ti@mahasiswa.pcr.ac.id"
        },
        foto: "afk.jpeg"
    }
]

const trNama = document.getElementById('nama')
const trPanggilan = document.getElementById('panggilan')
const trTtl = document.getElementById('ttl')
const trJurusan = document.getElementById('jurusan')
const trAsalKota = document.getElementById('kota')
const trAlamat = document.getElementById('alamat')
const trNoHp = document.getElementById('hp')
const trEmail = document.getElementById('email')
const trFoto = document.getElementById('foto')

dataUser.forEach(function(user){
    let tdNama = document.createElement('td')
    tdNama.textContent = user.biodata['nama']
    trNama.appendChild(tdNama)

    const tdPanggilan = document.createElement('td')
    tdPanggilan.textContent = user.biodata['panggilan']
    trPanggilan.appendChild(tdPanggilan)

    const tdTtl = document.createElement('td')
    tdTtl.textContent = `${user.ttl['tempat']}, ${user.ttl['tanggal']}`
    trTtl.appendChild(tdTtl)

    const tdJurusan = document.createElement('td')
    tdJurusan.textContent = user.jurusan
    trJurusan.appendChild(tdJurusan)

    const tdAsalKota = document.createElement('td')
    tdAsalKota.textContent = user.lokasi['kota']
    trAsalKota.appendChild(tdAsalKota)

    const tdAlamat = document.createElement('td')
    tdAlamat.textContent = user.lokasi['alamat']
    trAlamat.appendChild(tdAlamat)

    const tdNoHp = document.createElement('td')
    tdNoHp.textContent = user.kontak['nohp']
    trNoHp.appendChild(tdNoHp)

    const tdEmail = document.createElement('td')
    tdEmail.textContent = user.kontak['email']
    trEmail.appendChild(tdEmail)

    const tdFoto = document.createElement('td')
    const img = document.createElement('img')
    img.src = `img/${user.foto}`
    img.alt = user.biodata['nama']
    tdFoto.appendChild(img)
    trFoto.appendChild(img)
})