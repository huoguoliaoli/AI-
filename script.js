const list = document.getElementById("list");

aiSites.forEach(site => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${site.cover}" />
    <div class="content">
      <h3>${site.name}</h3>
      <p>${site.desc}</p>
    </div>
  `;
  card.addEventListener("click", () => {
    window.open(site.url, "_blank");
  });
  .card img {
    aspect-ratio: 3 / 4;
  }
  .card {
    animation: fadeIn 0.4s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  card.onclick = () => {
    window.location.href = `detail.html?id=${site.id}`;
  };

  list.appendChild(card);
});
