const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-search');
const cards = document.querySelectorAll('.product-card');
const noResults = document.getElementById('no-results');

function filterProducts() {
  const query = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  for (const card of cards) {
    const title = card
      .querySelector('.product-title')
      .textContent.toLowerCase();

    if (title.includes(query)) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  }

  noResults.hidden = visibleCount > 0;
}

searchInput.addEventListener('input', filterProducts);

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  filterProducts();
  searchInput.focus();
});
