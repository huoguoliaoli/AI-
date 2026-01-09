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
  // 渲染后调整布局
  setTimeout(adjustLayout, 0);
}

// Eagle风格布局：固定卡片宽度，根据缩放比例调整
// 基准卡片宽度（100%缩放时的宽度）
const BASE_CARD_WIDTH = 250;
const BASE_CARD_GAP = 16;
const BASE_CARD_RADIUS = 12;
const BASE_MASONRY_PADDING = 20;

// 获取浏览器缩放比例
function getZoomLevel() {
  // 方法1: 使用 visualViewport.scale (最准确，现代浏览器)
  if (window.visualViewport && window.visualViewport.scale) {
    return window.visualViewport.scale;
  }
  
  // 方法2: 创建一个测试元素，通过比较实际尺寸和CSS尺寸来计算缩放
  const testElement = document.createElement('div');
  testElement.style.width = '100px';
  testElement.style.height = '100px';
  testElement.style.position = 'absolute';
  testElement.style.top = '-9999px';
  testElement.style.visibility = 'hidden';
  document.body.appendChild(testElement);
  
  const cssWidth = 100;
  const actualWidth = testElement.offsetWidth;
  const zoom = cssWidth / actualWidth;
  
  document.body.removeChild(testElement);
  
  // 如果计算出的缩放值不合理，返回1
  if (isNaN(zoom) || zoom <= 0 || zoom > 5) {
    return 1;
  }
  
  return zoom;
}

// 动态调整布局以适应缩放
function adjustLayout() {
  const masonry = document.getElementById("list");
  if (!masonry) return;
  
  // 获取缩放比例
  const zoom = getZoomLevel();
  
  // 计算缩放后的卡片宽度（基准宽度 / 缩放比例）
  // 这样在缩放时，卡片视觉大小保持一致
  const cardWidth = BASE_CARD_WIDTH / zoom;
  const cardGap = BASE_CARD_GAP / zoom;
  const cardRadius = BASE_CARD_RADIUS / zoom;
  const masonryPadding = BASE_MASONRY_PADDING / zoom;
  
  // 设置CSS变量
  document.documentElement.style.setProperty('--card-width', `${cardWidth}px`);
  document.documentElement.style.setProperty('--card-gap', `${cardGap}px`);
  document.documentElement.style.setProperty('--card-radius', `${cardRadius}px`);
  document.documentElement.style.setProperty('--masonry-padding', `${masonryPadding}px`);
}

// 监听窗口大小变化和缩放
let resizeTimer;
let lastZoom = getZoomLevel();

function handleResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const currentZoom = getZoomLevel();
    // 如果缩放比例发生变化，重新调整布局
    if (Math.abs(currentZoom - lastZoom) > 0.01) {
      lastZoom = currentZoom;
      adjustLayout();
    } else {
      adjustLayout(); // 即使缩放没变，窗口大小变化也需要调整
    }
  }, 100);
}

window.addEventListener('resize', handleResize);

// 监听浏览器缩放（使用visualViewport更准确）
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', handleResize);
  window.visualViewport.addEventListener('scroll', handleResize);
}

// 监听缩放变化（某些浏览器）
window.addEventListener('wheel', (e) => {
  if (e.ctrlKey || e.metaKey) {
    // Ctrl/Cmd + 滚轮缩放
    setTimeout(handleResize, 100);
  }
}, { passive: true });

// 初始渲染和布局调整
renderCards();

// 在DOM加载完成后调整布局
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    adjustLayout();
  });
} else {
  adjustLayout();
}

// 监听图片加载完成，重新调整布局（可能需要重新计算）
window.addEventListener('load', () => {
  adjustLayout();
});

// 定期检查缩放变化（作为备用方案）
setInterval(() => {
  const currentZoom = getZoomLevel();
  if (Math.abs(currentZoom - lastZoom) > 0.01) {
    lastZoom = currentZoom;
    adjustLayout();
  }
}, 500);
