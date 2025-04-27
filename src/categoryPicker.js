import { select } from '@inquirer/prompts';
import { fetchData } from './fetchdata.js'; 
import { selectItemAndConfirm } from './orderHandler.js';

export async function chooseCategory() {
  const data = await fetchData();
  
  const categoryChoices = Object.keys(data).map((key, index) => ({ // kategori yang mau ditampilkan di terminal, bisa dijadikan variabel dulu jika ingin diotak-atik
    name: `${index + 1}. ${capitalize(key)}`,
    value: key
  }));
  
  const category = await select({
    message: "Silakan pilih kategori:",
    choices: categoryChoices
  });
  await selectItemAndConfirm(data[category]); 
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1); 
}


// Catatan:
// Object.keys: Mengambil semua key dari objek data -> ['food', 'drink', 'snack', 'dessert']: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// name, value, key adalah properti dari @inquirer/prompts: https://github.com/pgibler/inquirer-interactive-list-prompt
// Menambahkan pilihan untuk keluar (back) jika perlu: categoryChoices.push({ name: "Kembali ke menu utama", value: "back" });
// [] selain mengakses index array, juga dipakai untuk mengakses properti di objek
// bisa define isi langsung = choices: Object.keys(data).map((key, index) => ({
// name: `${index + 1}. ${capitalize(key)}`,
// value: key