# Webster

## Dokumantasi

## Loading Screen with slide

Loading screen with slide hanya dilakukan pada halaman home untuk mengurangi waktu tunggu berlebihan.

Cara Kerjanya:

1.

```
const { data, error, loading } = useFetch("/api/name");
```

akan mengambil data dari api, selama proses akan diberikan nilai loading true sehingga section loading bisa tampil.

2. Pada section Loading diberikan parameter getdata. getdata Mewakilkan apakah data sudah load dari api, jika sudah nilai true. Nilai diambil dari state porto yang mewakili pemisalan (bukan data asli, cmn ngasih tau udh ada blm) data portfolio bisnis yang diambil.

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

Jika animasi slide selesai akan ngasih nilai yang digunakan untuk ksh tau klo semua animasi telah selesai dijalankan.

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

5.  onLoadingAnimationDone true --> mengganti loading section ke konten utama dengan setIsLoading(false).

nanti dibaca mengganti konten ke error atau data.

Maka ada 2 seksi yang akan tampil error atau render datanya. Keduanya memilki mekanisme sama, yaitu slide pada Home Page.
pada seksi keduanya memiliki :

```
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

## useIntersectngObserve

useIntersectngObserve adalah sebuah custom hooks yang mengamati suatu elemen HTML dan menentukan apakah elemen tersebut terlihat di dalam viewport / layar atau belum. Hook useIntersectionObserver menerima dua argumen, yaitu 'ref' dan 'options'.

- 'ref': digunakan untuk menentukan elemen yang akan diamati
- 'options': digunakan untuk menentukan opsi pengamatan.

Dalam implementasinya, hook tersebut menggunakan state isIntersecting yang diinisialisasi dengan false. State isIntersecting digunakan untuk menyimpan data apakah element sudah bisa terlihat atau belum. (true = sudah terlihat).

```
   const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      console.log("aa");
    }, option);
```

- 'IntersectionObserver': API yang memungkinkan kita untuk mengamati apakah suatu elemen HTML terlihat dalam viewport
- 'entry': Merupakan objek yang berisi informasi mengenai elemen yang diamati.
- 'entry.isIntersecting': informasi elemen yang diamati, apakah elemen tersebut terlihat dalam viewport atau tidak??

* 'option': Optional yang bisa digunakan untuk penggunaan 'IntersectionObserver' (root, rootMargin, threshold) [Learn More Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer)

* 'options.once': Option yang diberikan, jika nilai 'true' maka akan dijalankan 1x. Setelah element dilayar dan options.once = 'true' akan langsung disconect (elemen tidak diamati lagi)

```
  if (ref.current) {
      observer.observe(ref.current);
    }
```

Untuk memastikan bahwa observe hanya dijalankan jika elemen ada

```
 return () => {
      observer.disconnect();
    };
```

Untuk memastikan bahwa IntersectionObserver tidak lagi mengamati interseksi elemen

<br/>

## Form settings

Pada form ini dibuat dengan menggunakan google spreedsheet sebagai database, langkah pembuatannya sebagai berikut:

1. Buat google spreedsheet dengan nama file bebas
2. Tentukan nama sheet dengan 'Contact'
3. Tuliskan 'timestamp' 'email' 'name' 'message' pada kolom pertama
4. Ikuti langkah pembuatan pada [Learn More about form submit to google sheet](https://github.com/jamiewilson/form-to-google-sheets) dengan menggunakan script dibawah ini

note: setelah proses pembuatan form contact di spreedsheet, copy link web_app ke .env dengan format `REACT_APP_CONTACT_FORM_URL='link_web_app_spreed_sheet'`

```
var sheetName = 'Contact'
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```
