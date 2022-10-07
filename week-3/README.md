# Writing and Presentation Test Week 2

## Array dan Multidimensional Array
- Array adalah tipe data list order yang dapat menyimpan tipe data apapun di dalamnya.
- Array dapat menyimpan tipe data String, Number, Boolean, dan lainnya.
- Contoh Array
    ```javascript
    let random = ["A", 1 , true] // array dapat menyimpan berbagai macam tipe data 
    console.log(hewan) 
    ```
- Membuat array
    - Array didefinisikan menggunakan square brackets []
- Memanggil Array
    - Array pada javascript dihitung dari index data ke-0.
    - Data pertama adalah index ke-0.
    ```javascript
    let random = ["A", 1 , true] // array dapat menyimpan berbagai macam tipe data 

    console.log(hewan)
    // hasil
     0 : "A" // index 0
     1 : 1  // index 1
     2 : true  // index 2
     length : 3 // panjang array

     console.log(hewan[0]) // Output : "A"
     console.log(hewan[2]) // Output : true
    ```
- Update Array
    - Seperti tipe data dan variabel pada umumnya, kita dapat mengupdate data pada Array
    ```javascript
    let random = ["A", 1 , true]
    random[0] = "ABC";

    console.log(random)
    // output : ["ABC", 1 , true]
    ```

- ### Const in Array
    - Jika menggunakan let, kita dapat mengubah array  dengan array baru dan konten nilai yang ada di dalam array dengan nilai lain
    - Const tidak bisa melakukan update data. Namun pada Array kita dapat melakukan update konten nilai di dalam array (mutable).
    - Yang tidak bisa adalah mengubah array dengan array yang baru jika menggunakan const
        ```javascript
        let mobil = ['tesla', 'honda', 'toyota'];
        mobil = ['nissan']
        console.log(mobil) // error

        mobil[2] = ['nissan']
        console.log(mobil) 
        // Output : ['tesla', 'honda', 'nissan'];
        ```
- Array Properties
    - Array memiliki 5 properti yang sering digunakan yaitu constructor, length, index, input, dan prototype.
    - Properties adalah fitur yang sudah disediakan oleh Javascript untuk memudahkan developer.
    - Properties .length
        - length akan mengembalikan nilai dari jumlah panjang data suatu array.
        ```javascript
        let mobil = ['tesla', 'honda', 'toyota'];
        console.log(mobil.lengrh) // Output : 3 
        ```
- Array Method
    - Array memiliki method atau biasa disebut built-in methods.
    - Artinya Javascript sudah memudahkan kita dengan menyediakan function/method umum yang bisa kita gunakan.
    - Kita tidak perlu membuat function lagi jika method yang kita butuhkan sudah tersedia.
    - Contoh Array Built-in Methods
        - .push
            <div align="justify">method untuk menambahkan item  array pada urutan yang paling akhir.

            ```javascript
            let mobil = ['tesla', 'honda', 'toyota'];
            mobil.push('nissan');
            console.log(mobil)
            // Output : ['tesla', 'honda', 'toyota', 'nissan'];
            ```
        - .pop()
            <div align="justify">method yang menghapus item array index terakhir.

            ```javascript
            let mobil = ['tesla', 'honda', 'toyota', 'nissan'];
            mobil.pop()
            console.log(mobil)
            // Output : ['tesla', 'honda', 'toyota'];
            ```
        - .shift()
            <div align="justify"> method untuk menghapus item Array pada index pertama
            
            ```javascript
            let mobil = ['tesla', 'honda', 'toyota', 'nissan'];
            mobil.shift()
            console.log(mobil)
            // Output : ['honda', 'toyota', 'nissan'];
            ```
        - .unshift() 
            <div align="justify">method untuk menambahkan item Array pada index pertama.

            ```javascript
            let mobil = ['honda', 'toyota', 'nissan'];
            mobil.unshift('tesla')
            console.log(mobil)
            // Output : ['tesla', 'honda', 'toyota', 'nissan']
            ```
        - .sort()
            <div align="justify">method untuk mengurutkan secara Ascending atau Descending Alphanumeric
            
            ```javascript
            let angka = [1, 3, 4, 2]
            angka.sort()
            console.log(angka)
            // Output : [1, 2, 3, 4]
            ```
- Looping pada Array
    - Array memiliki built in methods untuk melakukan looping yaitu .map() dan .forEach()
        - .forEach()
            <div align="justify">method untuk melakukan looping pada setiap elemen array.

            ```javascript
            let mobil = ['honda', 'toyota', 'nissan'];
            mobil.forEach(elemnt => {
            console.log(element); 
            // Output : 'honda', 'toyota', 'nissan'
            })
            ```
        - map() 
             <div align="justify">melakukan perulangan/looping dengan membuat array baru.

             ```javascript
             let angka = [1, 3, 4, 2]
             let double = angka.map(num =>{
                return num * 2
             })

             console.log(double)
             // Output : [2, 6, 8, 4]
             ```
    - forEach vs Map
        <img src="gambar/forvsmap1.png">
        
        - Kita bisa lihat bahwa .map() dan forEach() sama-sama melakukan looping dan mengembalikan nilai baru dari operasi yang dilakukan
        - Perbedaannya adalah .forEach tidak dapat membuat Array baru dari hasil operasi yang ada dalam looping
        - Lalu dari segi performance juga sangat jauh.
        - Jadi, gunakan .forEach() jika hanya memerlukan looping untuk menampilkan saja atau menyimpan ke database.
        - Gunakan .map() jika akan melakukan operasi pada array seperti yang dapat mengubah nilai array sebelumnya.
        














