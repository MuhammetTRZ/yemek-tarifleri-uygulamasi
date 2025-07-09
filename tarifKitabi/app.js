 //? sayfa yüklenme animasyonu
 let sayac=0
 const loader=document.querySelector('.loader')
 const loaingText=document.querySelector('.loadingText')
 const mainContent=document.querySelector('.mainContent')
 const p=document.getElementById('yazı')


 loaingText.style.fontSize='24px'

 p.style.fontSize='24px'
 p.style.transform='uppercase'

 const interval = setInterval(()=>{
    sayac++
    loaingText.textContent=sayac+'%'
    loader.style.opacity= 1-(sayac/100)//* 1- 0,01 den başlar
    mainContent.style.opacity=sayac/100

    if(sayac===100){
        clearInterval(interval)
        loader.style.display='none'
    }
 },50)


//? arama işlemi komutları
const input = document.getElementById("searchInput");
const cards = document.querySelectorAll(".mealCard");

input.addEventListener("input", () => {
  const searchTerm = input.value.toLowerCase().trim();
  let dizi = [];

  cards.forEach(card => {
    const title = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      card.style.display = "block";
      dizi.push(title);
    } else
    {
      card.style.display = "none";
    }
  });

  console.log("Eşleşen tarifler:", dizi);
});

//?tarif sayfasına yönlendire komutları
// document.querySelectorAll('.mealCard').forEach(card =>{
//   card.addEventListener('click',()=>{
//     const link =card.getAttribute('data-link');
//     if(link){
//       window.location.href=link
//     }
//   })
// })

document.querySelectorAll(".mealCard").forEach(card => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link) {
      window.location.href = `tarif.html?id=${link}`;
    }
  });
});
