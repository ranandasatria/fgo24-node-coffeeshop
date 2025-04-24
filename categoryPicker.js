import { select } from '@inquirer/prompts';
import { fetchData } from './fetchdata.js'; 
// import { selectItemAndConfirm } from './orderHandler.js';

export async function chooseCategory() {
  const data = await fetchData();
  const categoryChoices = Object.keys(data).map((key, index) => ({
    name: `${index + 1}. ${capitalize(key)}`,
    value: key
  }));
  const kategori = await select({
    message: "PILIH KATEGORI",
    choices: categoryChoices
  });
  await tampilkanMenu(kategori, data); 
}

async function tampilkanMenu(kategori, data) {
  const daftarMenu = data[kategori];
  console.log(`MENU ${kategori.toUpperCase()}`);
  daftarMenu.forEach((item, index) => {
    console.log(`${index + 1}. ${item.nama} - Rp${item.harga}`);
  });
  await selectItemAndConfirm(daftarMenu);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1); 
}


// Catatan:
// Object.keys: Mengambil semua key dari objek data -> ['food', 'drink', 'snack', 'dessert']: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// name, value, key adalah properti dari @inquirer/prompts: https://github.com/pgibler/inquirer-interactive-list-prompt
// Menambahkan pilihan untuk keluar (back) jika perlu: categoryChoices.push({ name: "Kembali ke menu utama", value: "back" });

//Belum ganti nama key jadi bahasa Indonesia