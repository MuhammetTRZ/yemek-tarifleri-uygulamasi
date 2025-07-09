const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("veri/tarifler.json")
  .then(res => res.json())
  .then(data => {
    const tarif = data.find(t => t.id === id);

    if (!tarif) {
      document.body.innerHTML = "<p>Tarif bulunamadı.</p>";
      console.log(tarif)

      return;
    }

    //* Başlık ve foto
    document.getElementById("tarifName").textContent = tarif.tarifName;
    document.getElementById("foto").src = tarif.foto;

    //* Ekstra alanlar (arasiIcin, uzeriIcin, haslamakIcin, sosIcin vs.)
    const ekstra = document.getElementById("ekstraAlanlar");

    for (let key in tarif) {
      if (!["id", "tarifName", "foto"].includes(key)) {
        const h3 = document.createElement("h3");
        h3.textContent=key.toUpperCase() +";";
        ekstra.appendChild(h3);

        const ul = document.createElement("ul");
        tarif[key].forEach(madde => {
          const li = document.createElement("li");
          li.textContent = madde;
          ul.appendChild(li);
        });
        ekstra.appendChild(ul);
      }
    }
  })
  .catch(err => {
    document.body.innerHTML = "<p>Hata: " + err + "</p>";
  });
