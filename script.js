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

  card.onclick = () => {
    window.location.href = `detail.html?id=${site.id}`;
  };

  list.appendChild(card);
});
