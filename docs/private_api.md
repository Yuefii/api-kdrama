# Api Documentation

### Base Url

The base URL for all API requests is:

Local :

```bash
http://localhost:8080
```

### Endpoints

**POST** /v1/k-drama

Example :

**Headers**

`api-key` = `value`

**Request**

```bash
http://localhost:8080/v1/k-drama
```

```bash
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
    ]
},
```

**Response**

```bash
{
    "method": "successfull"
    "data": [
        {
            "title": "Doctor Slump",
            "type": "K-Drama",
            "synopsis": "Selama masa sekolahnya, Yeo Jeong Woo selalu mendapat peringkat pertama di bidang akademik dan dia belajar di sekolah kedokteran terbaik di negaranya. Jeong Woo sekarang menjadi seorang ahli bedah plastik yang populer. Hidupnya berjalan lancar, namun karena kecelakaan medis misterius, hidupnya terdesak ke ujung tanduk. Saat ini, dia bertemu Nam Ha Neul. Dia adalah saingan di masa lalunya dan dia bertemu dengannya di titik terendah dalam hidupnya.",
            "seasons": 2024,
            "imageUrl": "",
            "genres": [
                {
                    "genre": "Comedy"
                },
            ]
        },
    ]
}
```


**POST** /v1/k-drama/{:k_id}/images

Example :

**Headers**

`api-key` = `value`

**Body Request**

```bash
http://localhost:8080/v1/k-drama/0010/images
```

- `method` = `form-data`
- `key-value` = `imageUrl`

**Response**

```bash
{
    "method": "successfull"
    "imageUrl": "http://localhost:8080/v1/k-drama/0010/images/0f9d0d9a-f4c8-46cb-b946-d75591d0b207.jpg"
}
```

**DELETE** /v1/k-drama/{:k_id}

Example :

**Headers**

`api-key` = `value`

**Body Request**

```bash
http://localhost:8080/v1/k-drama/0010
```

**Response**

```bash
{
    "method": "successfull"
    "message": "K-drama resource deleted successfully."
}
```
