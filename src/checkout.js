import { cart } from './orderHandler.js';
import { confirm } from '@inquirer/prompts';

export async function checkout() {
  if (cart.length === 0) {
    console.log("Keranjangmu kosong, pesan makanan dulu ya.");
    return;
  }

  console.log("Isi keranjangmu:");
  cart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.nama} - Rp${item.harga}`);
  });

  const total = cart.reduce((sum, item) => sum + item.harga, 0);
  console.log(`Total yang harus dibayar: Rp${total}`);
  const yakin = await confirm({
    message: `Bayar sekarang?`
  });
  
  if (yakin) {
    console.log("Yeay. Pembayaran berhasil! Terima kasih telah berbelanja.");
    cart.length = 0; 
  } else {
    console.log("Pembayaran dibatalkan.");
  }
}


