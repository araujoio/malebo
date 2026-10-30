const PRODUCTS = [
  { n: "Obsidian Shades", t: "Sunglasses", f: "Square", p: 299, d: 5, v: 1000, r: 4.9, c: "#1a1a1a" },
  { n: "Aviator Gold", t: "Sunglasses", f: "Aviator", p: 249, d: 10, v: 500, r: 4.7, c: "#c9a227" },
  { n: "Tortoise Classic", t: "Eyeglasses", f: "Round", p: 329, d: 15, v: 2000, r: 5.0, c: "#7a4b21" },
  { n: "Clear Frame Modern", t: "Eyeglasses", f: "Square", p: 279, d: 5, v: 800, r: 4.8, c: "#9fb7c9" },
  { n: "Amsterdam Round", t: "Eyeglasses", f: "Round", p: 219, d: 0, v: 350, r: 4.6, c: "#2f4858" },
  { n: "Cat Eye Noir", t: "Sunglasses", f: "Cat-Eye", p: 259, d: 10, v: 420, r: 4.7, c: "#5b1f2e" },
  { n: "Titanium Air", t: "Eyeglasses", f: "Aviator", p: 389, d: 0, v: 260, r: 4.8, c: "#8d99a6" },
  { n: "Sunset Square", t: "Sunglasses", f: "Square", p: 189, d: 15, v: 610, r: 4.5, c: "#d1702f" }
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
let cart = 0;

function svg(c, f) {
  const r = f === "Round" ? 24 : f === "Cat-Eye" ? 14 : f === "Aviator" ? 20 : 10;
  const l = x => `<rect x="${x}" y="22" width="52" height="40" rx="${r}" fill="rgba(120,160,190,.25)" stroke="${c}" stroke-width="5"/>`;
  return `<svg viewBox="0 0 150 80" width="180" aria-hidden="true">${l(12)}${l(86)}<path d="M64 38q11-8 22 0" fill="none" stroke="${c}" stroke-width="5"/><path d="M12 34L2 28M138 34l10-6" stroke="${c}" stroke-width="5" stroke-linecap="round"/></svg>`;
}

const money = v => "$" + v.toFixed(2);

function render() {
  const q = $("#q").value.toLowerCase().trim();
  const max = +$("#preco").value;
  const tp = $$("[name=tipo]:checked").map(e => e.value);
  const fm = $$("[name=forma]:checked").map(e => e.value);

  $("#pv").textContent = "$" + max;
  const pf = x => x.p * (1 - x.d / 100);

  let L = PRODUCTS.filter(x => 
    pf(x) <= max &&
    (!tp.length || tp.includes(x.t)) &&
    (!fm.length || fm.includes(x.f)) &&
    (!q || (x.n + x.t + x.f).toLowerCase().includes(q))
  );

  const o = $("#ord").value;
  L.sort((a, b) => o === "pop" ? b.v - a.v : o === "asc" ? pf(a) - pf(b) : pf(b) - pf(a));

  $("#total").textContent = L.length + " products";
  $("#grid").innerHTML = L.length ? L.map(x => `
    <div class="card">
      <div class="new"><span>NEW</span><span>MALEBO EXCLUSIVE</span></div>
      <div class="img">${svg(x.c, x.f)}</div>
      <h4>${x.n}</h4>
      <div class="rate">★ ${x.r.toFixed(1)} | +${x.v} sold</div>
      <div class="price">${money(pf(x))}${x.d ? `<s>${money(x.p)}</s><span class="off">${x.d}% OFF</span>` : ""}</div>
      <div class="parc">or 4x of ${money(pf(x) / 4)}</div>
      <div class="acts"><button class="btn" data-add>Buy Now</button><a class="l" href="#">Learn more ›</a></div>
    </div>`).join("") : `<div class="empty">No products found.</div>`;
}

document.addEventListener("input", render);
document.addEventListener("change", render);
document.addEventListener("click", e => {
  if (e.target.matches("[data-add]")) {
    cart++;
    $("#count").textContent = cart;
  }
});

render();
