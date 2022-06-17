# Server Side

## Cara Install Project Node JS

- npm init
  - Untuk membuat project Node JS
- npm install --save express (yarn add express)
  - Untuk menginstal express js
- yarn add nodemon
  - Untuk menginstall nodemon
- yarn add body-parser
  - Untuk menjalankan body parser serta memparsing supaya lebih mudah di baca nya
- yarn add express-validator
  - Untuk menginstall express validator
- yarn add mongoose
  - Untuk media mengkoneksikan Node JS kita ke Mongo DB Atlas, dan membuat model nya
- yarn add multer
  - Untuk mengakses upload image

## Standar API

- METHOD : {root.api}/{version}/{grouping}/{endpoint}

## Standar Status Response

- [1] - 200 - OK                        --> Call API Success.
- [2] - 201 - CREATED                   --> Post Success.
- [3] - 400 - BAD REQUEST               --> Error on Client Side (Bisa input yang salah dll)/
- [4] - 401 - UNATHORIZED               --> User not authorized to the request.
- [5] - 403 - FORBIDDEN                 --> User not allowed to access.
- [6] - 404 - NOT FOUND                 --> Request Endpoint Not Found.
- [7] - 500 - INTERNAL SERVER ERROR     --> Error on Server Side.
- [8] - 502 - BAD GATEWAY               --> Invalid Response From Another Request.

## GROUP: Blog

-[1] - Create Blog Post

- [POST] : {root.api}/{version}/blog/post

- req:

    ```js
    {
        "title": "Title Blog",
        "image": "imagefile.png",
        "body": "Lorem Ipsum is simply dummy text of the printing"
    }
    ```

- res:

    ```js

      {
        "message": "Create Blog Post Success",
        "data": {
            "post_id": 1,
            "title": "Title Blog",
            "image": "imagefile.png",
            "body": "Lorem Ipsum is simply dummy text of the printing",
            "created_at": "12/06/2020",
            "author": {
                "uid": 1,
                "name": "Testing"
            }
        }

    ```

- [2] - Get Blog Post
- [3] - Update Blog Post
- [4] - Delete Blog Post
