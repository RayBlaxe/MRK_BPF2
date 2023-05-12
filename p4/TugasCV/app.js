const profile = {
    nama : 'Muhammad Raihan',
    ttl: '22 November 2003',
    img: '1.jpg',
    hobi: [
            "futsal", "game"
        ],
    skill: [
        "Design grafis", "Futsal"
    ],
    kontak: [
        {
            'name': 'github',
            'link': 'https://github.com/rayblaxe'
        },
        {
            'name': 'instagram',
            'link': 'https://instagram.com/raihankhairullah'
        }
    ]
}


var app = new Vue({
    el: '#app',
    data: profile
})