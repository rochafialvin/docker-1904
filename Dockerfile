# Include image node. Karena untuk menjalankan api kita membutuhkan node js
# Akan mencari image node pada laptop kita. Jika tidak ada akan mendownload dari docker hub
FROM node:16

# Menentukan direactory kerja (tempat dimana kita meng-copy seluruh file project)
WORKDIR /app

# Mengcopy semua file yang ada di project ke folder app yang ada di image nantinya.
COPY . /app

# Menginstall seluruh dependecies pada saat pembuatan image
RUN npm install

# Akan menjalankan node index.js pada working directory
CMD ["node", "index.js"]