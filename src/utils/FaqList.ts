interface faqList {
  q: string;
  a: string;
}

const faqList = [
  {
    q: 'Apa sebenarnya yang bisa saya lakukan dengan Pass?',
    a:
      'Bakalo Pass memungkinkan Anda untuk melewati pengetikan verifikasi CAPTCHA saat memposting dan melaporkan postingan di gambar bakalo dan papan diskusi. Pengguna bakalo Pass telah mengurangi timer cooldown pasca. bakalo Passes juga melewati jangkauan IP dan blok negara.'
  },
  {
    q: 'Apa yang tidak diizinkan oleh Pass untuk saya lakukan?',
    a:
      'A Pass tidak memberikan hak tambahan apa pun selain melewati verifikasi CAPTCHA. Anda masih akan dikenakan berbagai pengatur waktu posting dan harus mematuhi Aturan bakalo.'
  },
  {
    q: 'Akankah orang lain tahu saya menggunakan Pass?',
    a:
      'Tidak. Tidak akan ada indikasi bahwa Anda menggunakan Pass untuk pengguna lain, dan posting Anda akan ditampilkan persis sama dengan yang lain.'
  },
  {
    q: 'Bagaimana cara saya menerima dan menggunakan Pass saya?',
    a:
      'Passes dapat digunakan di beberapa perangkat (komputer, tablet, ponsel, dll), tetapi hanya dapat dikaitkan dengan satu alamat IP dalam satu waktu. Untuk pelanggan dengan alamat IP dinamis atau yang ingin menggunakan Pass mereka saat dalam perjalanan, Anda dapat memperbarui alamat IP ini dengan mengautentikasi ulang dari IP baru (saat ini dibatasi setiap 30 menit sekali, dapat berubah). Perhatikan bahwa ini dilakukan secara otomatis pada perangkat yang telah diotorisasi dan sudah dimasak.'
  },
  {
    q: 'Bisakah saya menggunakan Pass saya di beberapa perangkat?',
    a:
      'Passes dapat digunakan di beberapa perangkat (komputer, tablet, ponsel, dll), tetapi hanya dapat dikaitkan dengan satu alamat IP dalam satu waktu. Untuk pelanggan dengan alamat IP dinamis atau yang ingin menggunakan Pass mereka saat dalam perjalanan, Anda dapat memperbarui alamat IP ini dengan mengautentikasi ulang dari IP baru (saat ini dibatasi setiap 30 menit sekali, dapat berubah). Perhatikan bahwa ini dilakukan secara otomatis pada perangkat yang telah diotorisasi dan sudah cookied'
  },
  {
    q:
      'Saya tidak dapat memposting karena ISP, jangkauan IP, atau negara saya diblokir — dapatkah saya menggunakan Bakalo Pass?',
    a:
      'Iya. Pengguna bakalo Pass dapat melewati ISP, jangkauan IP, dan blok negara, tetapi masih tunduk pada aturan dan batasan yang sama seperti pengguna lainnya. Pengguna pass tidak dapat melewati larangan IP individu (reguler). Tidak tahu bedanya? ISP, rentang IP, dan blok negara menampilkan pesan "Kesalahan" berwarna merah saat mencoba mengirim (ini dapat dilewati dengan bakalo Pass)'
  },
  {
    q: 'Apakah Anda menyimpan informasi pembayaran di server Anda?',
    a: 'Tidak. Semua informasi pembayaran disimpan dengan aman.'
  }
];

export default faqList;
