# Webster

## Dokumantasi

### Loading Screen with slide

Loading screen with slide hanya dilakukan pada halaman home untuk mengurangi waktu tunggu berlebihan.

Cara Kerjanya:

1.

```
const { data, error, loading } = useFetch("/api/name"); 
```

akan mengambil data dari api, selama proses akan diberikan nilai loading true sehingga section loading bisa tampil.

2. Pada section Loading diberikan parameter getdata. getdata Mewakilkan apakah data sudah load dari api, jika sudah nilai true.  Nilai diambil dari state porto yang mewakili pemisalan (bukan data asli, cmn ngasih tau udh ada blm) data portfolio bisnis yang diambil.

```
  useEffect(()=>{
      setTimeout(() => {  
        if(data) {
            setPorto(true)
        } 
      }, 1600);
  },[data])

```

Pada kode berikut kita menunggu data sampai ada datanya, sambil nunggu ksh delai 1,6 detik untuk animasi pembuka (yg tulisan loading). Jika sudah delay 1.6 detik maka animasi telah selesai, baru dicek apakah data telah ada? klo sudah ksh nilai STATE porto true

3.

parameter pada LoadingScreen GetData sudah true, maka akan menjalankan animasi slide pada LoadingScreen section. Loading ini berupa slide berwarna hijau yang menutupi konten.

```
animate={getdata && "slide"}
```

Jika animasi slide selesai akan ngasih nilai  yang digunakan untuk ksh tau klo semua animasi telah selesai dijalankan.

```
onAnimationComplete={() => setLoadingAnim(true)}
```

4.

Pemberitahuan animasi telah selesai bisa dilakukan dengan fungsi
fungsi pada home.js --> meminta konfirmasi apakah semua animasi telah dijalankan

```
 function onLoadingAnimationDone(loadingStatus) {
    if(loadingStatus) {
        setIsLoading(false)
    }
  }
```

FUNGSI dipanggil untuk mengirimkan bahwa animasi telah selesai semua
(fungsi di loading section)
```
useEffect(() => {
        console.log(loadingAnim)
        if(loadingAnim) { // dari setLoadingAnim(true)
            onLoadingAnimationDone(true)
        }
   }, [loadingAnim])
```

5. 
onLoadingAnimationDone true --> mengganti loading section ke konten utama dengan setIsLoading(false).

nanti dibaca mengganti konten ke error atau data.

Maka ada 2 seksi yang akan tampil error atau render datanya. Keduanya memilki mekanisme sama, yaitu slide pada Home Page.
pada seksi keduanya memiliki : 

```bash
<motion.div
  initial={{ width: "100vw"}}
  animate={{
    width:["100vw","0vw"],
    transition:{duration:0.8, delay:0.5}
  }}
  onAnimationComplete={() => {
    setAnimationDone(true)
  }}
  className="absolute top-0 left-0 z-10 bg-custome-green-400 w-h-screen">
  </motion.div>
```
Pada fungsi ini akan slide (awalnya pada loading hanya menutupi dengan slide green), disini kita buat untuk membukanya. Dengan triger jika animasi pada loading telah selesai.