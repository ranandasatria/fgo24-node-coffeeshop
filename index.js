import { select } from '@inquirer/prompts';
import { chooseCategory } from './categoryPicker.js';
// import { showCart } from './cart.js';
// import { checkout } from './checkout.js';

async function showHome() {
  const inputan = await select({
    message: "HOME",
    choices: [
      { name: "1. Order", value: "order" },
      { name: "2. Keranjang", value: "keranjang"},
      { name: "3. Bayar", value: "bayar"}
    ]
  });

  if (inputan === 'order') {
    await chooseCategory();
  } else if (inputan === 'keranjang') {
    await showCart();
  } else if (inputan === 'bayar') {
    await checkout();
  }

  showHome();
}

showHome();

// Belum selesai menu konfirmasi makanan, keranjang, dan bayar