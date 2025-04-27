import { select, confirm } from '@inquirer/prompts';

const cart = [];

export async function selectItemAndConfirm(menu) {
  const pilihan = await select({
    message: "Mau pesan apa?",
    choices: menu.map((item, index) => ({
      name: `${index + 1}. ${item.nama} - Rp${(item.harga)}`,
      value: item
    }))
  });

  const yakin = await confirm({
    message: `Masukkan "${pilihan.nama}" seharga Rp${(pilihan.harga)} ke keranjang?`
  });

  if (yakin) {
    cart.push(pilihan);
    console.log(`${pilihan.nama} masuk ke keranjang.`);
  } else {
    console.log("Pesanan dibatalkan.");
  }
}

export {cart};
