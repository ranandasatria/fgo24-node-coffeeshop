const url = "https://raw.githubusercontent.com/ranandasatria/fgo24-node-datasource/e6cfa8f1c36d763172359f4d798a47faa147f9a1/menuCategory.json";

export async function fetchData() {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.log("Gagal mengambil data:", err);
    return {};
  }
}

// fetchData().then(data => console.log(data)); untuk melihat data dari json