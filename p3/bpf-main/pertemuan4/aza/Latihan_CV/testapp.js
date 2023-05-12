const profile = {
    nama : 'Adzanul Qaldi',
    ttl: '13 Juni 2003',
    deskripsi: 'Halo saya adzanul qaldi, saya seorang mahasiswa di Politeknik Caltex Riau jurusan teknik informatika',
    img: '1.png',
    hobi: [
            "futsal", "billiard"
        ],
    skill: [
        "cuci mobil", "cuci karpet"
    ],
    kontak: [
        {
            'name': 'whatsapp',
            'link': 'wa.me/+6282172016757'
        },
        {
            'name': 'instagram',
            'link': 'https://instagram.com/azaanull'
        }
    ]
    
}


var app = new Vue({
    el: '#app',
    data: profile
})