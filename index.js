import { select } from '@inquirer/prompts';
import { chooseCategory } from './src/categoryPicker.js';
import { showCart } from './src/cart.js';
import { checkout } from './src/checkout.js';

async function showHome() {
  const inputan = await select({
    message: "Home",
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

// @inquirer/prompts select documentation: https://github.com/SBoudrias/Inquirer.js/tree/main/packages/select 
// @inquirer/prompts confirm documentation:https://github.com/SBoudrias/Inquirer.js/tree/main/packages/confirm