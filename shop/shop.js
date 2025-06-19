document.addEventListener('DOMContentLoaded', function() {

    const categoryFilters = document.querySelectorAll('.category-filter');
    const productCards = document.querySelectorAll('.product-card');
    
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', (event) => {
            event.preventDefault();
            categoryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const category = filter.getAttribute('data-category');

            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.toggle('active');
            const icon = btn.querySelector('i');
            
            if (btn.classList.contains('active')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
            }
        });
    });

    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    
    if (addToCartBtns && cartCount) {
        let count = parseInt(cartCount.textContent) || 0;
        
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                count++;
                cartCount.textContent = count;
                
                // Animation effect
                cartCount.style.transform = 'scale(1.5)';
                setTimeout(() => {
                    cartCount.style.transform = 'scale(1)';
                }, 300);
                
                // Show added notification
                const productTitle = btn.closest('.product-card').querySelector('.product-title').textContent;
                alert(`Added to cart: ${productTitle}`);
            });
        });
    }

    // Cart Button
    const cartBtn = document.querySelector('.cart-btn');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Maaf ya sayang... bagian ini lagi maintenance');
        });
    }


    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
        });
    });
});