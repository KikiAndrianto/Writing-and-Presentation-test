# Writing and Presentation Test Week 2

## JavaScript Scope dan Function
- Scope adalah konsep dalam flow data variabel. Menentukan suatu variabel bisa diakses pada scope tertentu atau tidak.
- Blocks
    <div align="justify">Blocks adalah code yang berada didalam curly braces {}.Conditional, function, dan  looping menggunakan blocks.
- Global Scope
    <div align="justify">Global scope berarti variabel yang kita buat dapat diakses dimanapun dalam suatu file.Agar menjadi Global Scope, suatu variabel harus dideklarasikan diluar Blocks.
    <div align="justify">Contoh Global Scope :

    ```javascript
    let myName = "chaca" ; 
    function greeting()
        return myName;
    {
        console.log(myName);
    ```
- Local scope
    <div align="justify">Local scope berarti kita mendeklarasikan variabel didalam blocks seperti function, conditional, dan looping.Maka variabel hanya bisa diakses didalam blocks saja. Tidak bisa diakses diluar blocks.
    <div align="justify">Contoh Local Scope :

    ```
    function greetting(){
        let myName = "Kiki";
        return myName;
    }
    console.log(gretting())
    console.log(myName);
    ```

- Function
    <div align="justify">Function adalah sebuah code blok dalam sebuah grup untuk menyelesaikan 1 task.

- Cara membuat function ada 3
    1. function clasic
        ```javascript
        function myFunction(kondisi) { }
        ```
    2. fanction variable
        ```javascript
        let myFunction = function (kondisi) { }
        ```
    3. arrow function
        ```
        let myFunction = (kondisi) => { }
        ```

- Cara memanggil function
    ```javascript
    myFunction()
    console.log(myFunction());
    ```

- ### **Parameter Function**
    - Dengan parameter, function dapat menerima sebuah inputan data dan menggunakannya untuk melakukan task/tugas.
    - Saat membuat function/fitur, kita harus tahu data-data yang dibutuhkan. Misalnya saat membuat function penambahan 2 buah nilai. Data yang dibutuhkan adalah 2 buah nilai tersebut.

    ```javascript
    function penambahan (a,b){ // (a,b) merupakan parameter
        return a + b;
    }
    ```

- Argumen Function
    - Argumen adalah nilai yang digunakan saat memanggil function.
    - Jumlah argumen harus sama dengan jumlah parameternya
    ```javascript
    function penambahan (a,b){ // (a,b) merupakan parameter
        return a + b;
    }
    console.log(penambahan(5,5)) // (5,5) adalah argumen
    ```

- Default Parameters
    <div align="justify">Default paramaters digunakan untuk memberikan nilai awal/default pada parameter function.

- Function Helper
    <div align="justify">Kita bisa menggunakan function yang sudah dibuat pada function lain.

    <br>

## JavaScript Prototype and Method
- Properties adalah nilai yang berkaitan dengan objek pada JavaScript.Properties biasanya dapat diubah, ditambahkan, dan dihapus, tetapi beberapa hanya dapat dibaca.
- Method JavaScript adalah properti yang berisi definisi fungsi. Metohd adalah fungsi yang disimpan sebagai properti objek

- Data Type
    - javascript merupakan bahasa pemograman yang dinamis
    - JavaScript memiliki 2 jenis tipe data :
    1. Type Data Primitive
        <div align="justify">Primitive itu tipe data yang masih standar yang masih low level
    2. Type Data Non-Primitive
        <div align="justify">Non-primitive merupakan tipe data kembangan dari tipe data primitive.

        <br>

    **Type Data Primitive**
    - string - deretan karakter yang diapit oleh sepasang tanda kutip;
    - number - bilangan bulat, pecahan, dan lain-lain;
    - boolean - nilai benar dari sebuah pernyataan yang dituliskan sebagai true atau false;
    - null - sebuah nilai yang berarti kosong atau menunjuk pada nilai yang tidak ada;
    - undefined - berbeda dari null, undefined menandakan kondisi variabel yang belum diberi sebuah nilai. Jadi pernyataan "nilai variabel itu adalah undefined" sebenarnya kurang tepat, sebab variabelnya memang tidak mempunyai sebuah nilai;
    - symbol - sebuah nilai unik yang dihasilkan tiap kali kita memanggil fungsi Symbol(). Nilai unik ini memiliki beberapa kegunaan seperti memberi nomor identifikasi unik dan berperan sebagai nama properti unik sebuah objek;

    **Type Data Non-Primitive**
    - object - sebuah kumpulan pasangan properti dan nilai. Seperti objek dalam kehidupan sehari-hari saja. Misalnya objek Apel memiliki properti warna dengan nilai merah.

    <br>

- ### **String JavaScript**
    <div align="justify">Tipe data yang terdiri dari kumpulan karakter yang berurutan. Ditulis dalam tanda kutip tunggal atau ganda (' ')/(" ").

    - Beberapa operasi yang paling sering digunakan pada string adalah memeriksa panjangnya, membangun dan menggabungkannya menggunakan operator string and, memeriksa keberadaan atau lokasi substring dengan metode indexOf(), atau mengekstrak substring dengan metode substring().

<br>

-  Penggunaan Properties 
    - Mengecek jumlah karakter
        ```javascript
        console.log(hewan.length);
        ```
- Penggunaan Method
    - Mengecek tipe data yang di gunakan
        ```javascript
        let hewan = "kAnCIl"
        console.log(typeof hewan) // string
        ```
    - Merubah huruf menjadi huruf besar
        ```javascript
        console.log(hewan.toUpperCase())
        ```
    - Merubah huruf menjadi huruf kecil
        ```javascript
        console.log(hewan.toLowerCase())
        ```
    - Mengembalikan karakter sesuai index yang sudah di tentukan
        ```javascript
        console.log(hewan.charAt(1))
        ```
    - mencari sebuah kata atau karakter pada sebuah string
        ```javascript
        console.log(hewan.includes("s")) // true
        ```

    - Memisahkan sebuah string menjadi data array dengan split()
        ```javascript
        let kalimat = "dengan menggunakan split(), kita dapat memisahkan sebuah string menjadi data array"

        console.log("BEFORE", kalimat)
        console.log("AFTER", kalimat.split(" "));
        ```
- ### **Number JavaScript**
    <div align="justify">Number merupakan tipe data yang digunakan untuk menunjukan angka, baik positif maupun negatif. Number juga merupakan tipe data yang digunakan untuk menunjukan notasi matematika.
    
    <br>

    - Penggunaan Method dan properties pada Number
        - Mengecek not number (bukan angka)
            ```javascript
            console.log(isNaN(2131)) // false
            console.log(isNaN("dawdf")) // true
            console.log(isNaN(true)) // false karena true == 1
            ```
        - Merubah angka menjadi Number
            ```javascript
            let angka = 20
            cosnloe,log(angka.toString) // "20"
            ```
        - menentukan jumlah angka di belakang koma(,)
            ```javascript
            let angka = 3.12345
            console.log(angka.toFixed(1)) // 3.1
            console.log(angka.toFixed(2)) // 3.12
            ```

- ### Math JavaScript
    <div align="justify">Math adalah objek yang  telah di sediakan oleh javascript dengan math ini kita bisa bermain menolah data. 
    
    - Math memiliki berbagai macam properties .Contoh :
        ```javascript
        console.log(Math.PI) // 3.141592653589793
        console.log(Math.LOG2E) // 1.4426950408889634
        ```
    - Method pada math
        - mengembalikan nilai bulat
            ```javascript
            console.log(Math.abs(-5)) // 5
            ```
        - mencari nilai hasil perpangkatan
            ```javascript
            console.log(Math.pow(3,2)) // 9
            ```
        - Mencari akar dari sebuah nilai
            ```javascript
            console.log(Math.sqrt(9)) // 3
            ```
        - Membulatkan angka
            ```javascript
            console.log(Math.round(123.123)) // 123
            ```
        - Membulatkan angka kebawah
            ```javascript
            console.log(Math.floor(20.5)) // 20
            ```
        - Membulatkan angka ke atas
            ```javascript
            console.log(Math.ceil(20.5)) // 21
            ```

- ### Contoh kasus
    Membalikkan string
    <div align="justify">hallo -> ollah

    ```javascript
    // membuat method baru utk tipe data string
    String.prototype.reverse = function(){
    let s = ""
    for (let i = String(this).length-1; i >= 0 ; i--) {
        s = s + String(this)[i]
    }

    return s
    }

    // method yg dimiliki oleh string
    console.log("hallo".reverse())
    console.log("selamat datang".reverse())
    ```

    <br>

## **Javascript : DOM Manipulation**
- DOM singkatan dari Document Object Model. DOM adalah Programing interface pada document web. DOM ini mempresentasikan halaman dimana kita bisa merubah struktur style , konten.
- DOM merupakan bukan bagian dari JavaScript/Bahasa pemrograman melainkan ini adalah sebuah web API untuk membanggun Websit yang artinya bisa di gunakan untuk bahasa pemrograman yang lain.
- DOM merupakan jembaatan supaya bahasa pemrograman dapat berinteraksi dengan dokumen HTML.
- Dengan DOM, Javascript dapat memanipulasi HTML.

    <img src ="gambar/htmlld.png">

- Item yang kita dapatkan ketika mengakses DOM
    <img src="gambar/evsn.png">

    <br>

- ### **DOM - Traversing Elemets**
    <div align="justify">Menelusuri atau menjelajahi elemen - elemen menggunakan DOM. kali ini trafersing di kategorikan 3 bagian seperti berikut :

    <img src="gambar/traversing.png">

    <br>

    - Contoh file index.html
        ```javascript
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            <h1 id="title">Hallo</h1>

            <ul class="list">
            <li class="item">satu</li>
            <li class="item">dua</li>
            <li class="item">tiga</li>
            </ul>

            <!-- Latihan -->
            <div class="hewan">
            <ul class="mamalia">
                <li>kucing</li>
                <li>kelinci</li>
                <li>kambing</li>
            </ul>

            <ul class="reptil">
                <li>kadal</li>
                <li>ular</li>
                <li>buaya</li>
            </ul>

            <ul class="unggas">
                <li>ayam</li>
                <li>bebek</li>
                <li>burung</li>
            </ul>
            </div>


            <script src="./script.js"></script>
        </body>
        </html>
        ```
<br>

- Mengakses DOM dengan traversing
    - Traversing kategori Ke Bawah
        - getElementById
            <div align="justify">Mengembalikan data dalam bentuk kumpulan dari elemen berdasakan nama ID nya

            ```javascript
            let title = document.getElementById("title")
            console.log(title) // <h1 id="title">Hallo</h1>
            ```
            
        - getElementsByClassName
            <div align="justify">Mengembalikan data dalam bentuk kumpulan dari elemen berdasakan nama class nya

            ```javascript
            let items = document.getElementsByClassName("item")
            console.log(items[2]); // <li class="item">tiga</li>
            ```

        - getElementsByTagName
            <div align="justify">Mencari Element berdasarkan nama tag nya

            ```javascript
            let itemByTag = document.getElementsByTagName("li")
            console.log(itemByTag[1])
            console.log(itemByTag.item(1))
            console.log(itemByTag.length)
            ```
        - querySelector
            ```javascript
            let listQuery = document.querySelector(".list")
            console.log(listQuery);
            ```
        - querySelectorAll
            ```javascript
            let itemQueryAll = document.querySelectorAll(".item")
            console.log(itemQueryAll)

            let itemQueryAll = document.querySelectorAll(".item")
            console.log(itemQueryAll) // mendapatkan data dalam bentuk node list
            ```

        <br>

    - Traversing ke atas
        - parentElement
            <div align="justify">Akses Parentsnya 
            ```javascript
            console.log(itemQuery.parentElement); // <ul class="list">...</ul>
            ```
        - closest
            <div align="justify">akses parents terjauhnya
            ```javascript
            console.log(itemQuery.closest(".list"));
            ```
    
    - Traversing ke Samping
        <div align="justify">Akses sibling atau saudaranya (sebelum atau sesudah elementnya)
        
        - previousElementSiblingc

            ```javascript
            console.log(itemQuery.previousElementSiblingc);
            ```
        - nextElementSibling
            ```javascript
            console.log(itemQuery.nextElementSibling);
            ```


    

    




