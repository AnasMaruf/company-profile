# Color Pallets :

1. Black : #0b0909
2. Ebony : #44444C
3. Gray : #8C8C8C
4. Pewter : #D6D6D6

# TODO

1. Fix page counter kabawa pas make search. Palaur bisa wae pas user di page 4 terus nga search, parameterna jadi ?page=4&title=""
2. Sudah ditambahkan token ke localstorage agar nanti user tidak perlu login kembali, saat membuat function log-out pastikan untuk menghapus tokennya dengan localstorage.removeItem("token") atau localstorage.clear()

## Backed

${
errorHandler.nickname ? "border-red-500" : "border-gray-500"
}
