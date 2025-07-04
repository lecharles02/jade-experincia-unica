// Menu mobile toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Fecha todos os outros itens
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            otherAnswer.style.maxHeight = '0';
        });
        
        // Abre/fecha o item clicado
        if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// Galeria Carousel
const galleryCarousel = document.querySelector('.gallery-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

if (prevBtn && nextBtn && galleryCarousel) {
    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateGallery();
    });
    
    nextBtn.addEventListener('click', () => {
        const maxIndex = galleryCarousel.children.length - 3;
        currentIndex = Math.min(currentIndex + 1, maxIndex);
        updateGallery();
    });
}

function updateGallery() {
    const itemWidth = 320; // 300px + 20px gap
    galleryCarousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Animações de scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animações aos elementos
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .space-card, .faq-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Botões CTA com redirecionamento para WhatsApp
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        const phoneNumber = '5519988169976';
        const message = 'Olá, gostaria de mais informações.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
});

// Animações de entrada para o hero
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateX(30px)';
        heroImage.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
        }, 600);
    }
});

// Efeito de scroll suave para o navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Hover effects para cards
document.querySelectorAll('.service-card, .testimonial-card, .space-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Animações para ícones
document.querySelectorAll('.service-icon, .testimonial-avatar').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Efeito de loading para imagens (quando forem adicionadas)
function preloadImages() {
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    
    imagePlaceholders.forEach(placeholder => {
        // Verificar se já tem uma imagem dentro
        const img = placeholder.querySelector('img');
        if (!img) {
            // Só aplicar o fundo se não tiver imagem
            placeholder.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
            placeholder.innerHTML = '<i class="fas fa-image"></i><br><small>Imagem</small>';
        }
    });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    
    // Adicionar classe para animações CSS
    document.body.classList.add('loaded');
});

// Função para detectar se o elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animações baseadas em scroll
window.addEventListener('scroll', () => {
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .space-card');
    
    animatedElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

// Efeito de pulse para o botão CTA final
const finalCtaButton = document.querySelector('.final-cta .cta-button');
if (finalCtaButton) {
    setInterval(() => {
        finalCtaButton.classList.add('pulse');
        setTimeout(() => {
            finalCtaButton.classList.remove('pulse');
        }, 1000);
    }, 8000);
}

// Melhorar acessibilidade
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

// Adicionar focus visible para melhor acessibilidade
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('focus', () => {
        element.style.outline = '2px solid #667eea';
        element.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', () => {
        element.style.outline = 'none';
    });
});

// Animação de contador na hero
function animateCounter(id, end, duration) {
    const el = document.getElementById(id);
    let start = 0;
    const step = Math.ceil(end / (duration / 20));
    function update() {
        start += step;
        if (start >= end) {
            el.textContent = end;
        } else {
            el.textContent = start;
            setTimeout(update, 20);
        }
    }
    update();
}

document.addEventListener('DOMContentLoaded', function() {
    animateCounter('counter-atendidos', 300, 1200);
    animateCounter('counter-aprovacao', 99, 1200);
});

// Função para adicionar o "+" antes do número
function updateCounterDisplay() {
    const atendidosElement = document.getElementById('counter-atendidos');
    if (atendidosElement) {
        atendidosElement.textContent = '+' + atendidosElement.textContent.replace('+', '');
    }
}

// Chamar a função após a animação
setTimeout(updateCounterDisplay, 1200);

// Efeito de contagem para métricas da hero
function animateHeroMetric(id, end, duration) {
    const el = document.getElementById(id);
    let start = 0;
    const step = Math.ceil(end / (duration / 20));
    function update() {
        start += step;
        if (start >= end) {
            el.textContent = end;
        } else {
            el.textContent = start;
            setTimeout(update, 20);
        }
    }
    update();
}

document.addEventListener('DOMContentLoaded', function() {
    animateHeroMetric('counter-clientes', 300, 1200);
    animateHeroMetric('counter-satisfacao', 99, 1200);
});

console.log('Landing page carregada com sucesso! 🎉'); 