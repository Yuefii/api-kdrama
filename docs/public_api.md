# Api Documentation

### Base Url

The base URL for all API requests is:

Local :

```bash
http://localhost:8080
```

### Endpoints

**GET** /v1/k-drama

get all to get all data from k-drama

Example :

**Request**

```bash
http://localhost:8080/v1/k-drama
```

**Response**

```bash
{
    "data": [
        {
            "title": "Doctor Slump",
            "type": "K-Drama",
            "synopsis": "Selama masa sekolahnya, Yeo Jeong Woo selalu mendapat peringkat pertama di bidang akademik dan dia belajar di sekolah kedokteran terbaik di negaranya. Jeong Woo sekarang menjadi seorang ahli bedah plastik yang populer. Hidupnya berjalan lancar, namun karena kecelakaan medis misterius, hidupnya terdesak ke ujung tanduk. Saat ini, dia bertemu Nam Ha Neul. Dia adalah saingan di masa lalunya dan dia bertemu dengannya di titik terendah dalam hidupnya.",
            "seasons": 2024,
            "imageUrl": "http://localhost:8080/images/412dd8ef-d932-4ec5-a013-f0ae942cc000.jpg",
            "genres": [
                {
                    "genre": "Comedy"
                },
                .....
            ]
        },
        ......
    ]
}
```

**GET** /v1/k-drama/search

to search for data by title

Example :

**Request**

```bash
http://localhost:8080/v1/k-drama/search?keyword=doctor
```

**Response**

```bash
{
    {
        "k_id": "0001",
        "title": "Doctor Slump",
        "synopsis": "Selama masa sekolahnya, Yeo Jeong Woo selalu mendapat peringkat pertama di bidang akademik dan dia belajar di sekolah kedokteran terbaik di negaranya. Jeong Woo sekarang menjadi seorang ahli bedah plastik yang populer. Hidupnya berjalan lancar, namun karena kecelakaan medis misterius, hidupnya terdesak ke ujung tanduk. Saat ini, dia bertemu Nam Ha Neul. Dia adalah saingan di masa lalunya dan dia bertemu dengannya di titik terendah dalam hidupnya.",
        "type": "K-Drama",
        "seasons": 2024,
        "imageUrl": "412dd8ef-d932-4ec5-a013-f0ae942cc000.jpg"
    },
}
```

