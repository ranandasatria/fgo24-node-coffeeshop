const url = "https://raw.githubusercontent.com/ranandasatria/fgo24-node-datasource/refs/heads/main/menuCategory.json";

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