import { cart } from './orderHandler.js';

export function showCart() {
  if (cart.length === 0) {
    console.log("Keranjangmu kosong.");
    return;
  }
  console.log("Isi keranjangmu:");
  cart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.nama} - Rp${item.harga}`);
  });
  const total = cart.reduce((sum, item) => sum + item.harga, 0);
  console.log(`Total harga: Rp${total}`);
}
