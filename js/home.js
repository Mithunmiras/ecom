// ===== HERO SLIDER =====
let currentSlide = 0;
const slides = $$('.hero-slide');
const heroPrev = $('#heroPrev');
const heroNext = $('#heroNext');
const heroDots = $('#heroDots');

function initHeroSlider() {
    if (!slides || slides.length === 0) return;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `hero-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        heroDots?.appendChild(dot);
    });

    // Navigation
    heroPrev?.addEventListener('click', () => changeSlide(-1));
    heroNext?.addEventListener('click', () => changeSlide(1));

    // Auto slide
    setInterval(() => changeSlide(1), 5000);
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    goToSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    $$('.hero-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Initialize hero slider
if (slides && slides.length > 0) {
    initHeroSlider();
}

// ===== LOAD FEATURED PRODUCTS =====
async function loadFeaturedProducts() {
    const container = $('#featuredProducts');
    if (!container) return;

    try {
        const result = await fetchProducts({ limit: 8, page: 1 });
        
        if (result.data && result.data.length > 0) {
            // Filter featured products or use first 8
            const featuredProducts = result.data.filter(p => p.featured).slice(0, 8);
            const productsToShow = featuredProducts.length > 0 ? featuredProducts : result.data.slice(0, 8);
            
            container.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
        } else {
            container.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                    <i class="fas fa-gem" style="font-size: 4rem; color: var(--primary-gold); margin-bottom: 1rem;"></i>
                    <h3>No products available yet</h3>
                    <p style="color: var(--text-light);">Check back soon for our amazing collection!</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error loading featured products:', error);
        container.innerHTML = `
            <div class="error-message" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #e74c3c;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>Failed to load products. Please try again later.</p>
            </div>
        `;
    }
}

// Load featured products on page load
if ($('#featuredProducts')) {
    loadFeaturedProducts();
}
