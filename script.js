const list = document.getElementById("list");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");

let filteredSites = [...aiSites];

function renderCards(sites = filteredSites) {
  list.innerHTML = "";
  
  sites.forEach(site => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-category", site.category);
    card.innerHTML = `
      <img src="${site.cover}" alt="${site.name}" />
      <div class="card-overlay">
        <h3>${site.name}</h3>
        <p>${site.desc}</p>
      </div>
      <div class="card-body">
        <h3>${site.name}</h3>
        <p>${site.desc}</p>
      </div>
    `;
    card.onclick = () => {
      window.location.href = `detail.html?id=${site.id}`;
    };

    list.appendChild(card);
  });
}

let currentCategory = "all";
let currentKeyword = "";

// 搜索功能
searchInput.addEventListener("input", (e) => {
  currentKeyword = e.target.value.toLowerCase().trim();
  applyFilters();
});

// 筛选功能
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.filter;
    applyFilters();
  });
});

function applyFilters() {
  let sites = [...aiSites];
  
  // 先按关键词筛选
  if (currentKeyword !== "") {
    sites = sites.filter(site => 
      site.name.toLowerCase().includes(currentKeyword) || 
      site.desc.toLowerCase().includes(currentKeyword)
    );
  }
  
  // 再按分类筛选
  if (currentCategory !== "all") {
    sites = sites.filter(site => site.category === currentCategory);
  }
  
  filteredSites = sites;
  renderCards(filteredSites);
}

// 初始渲染
renderCards();
