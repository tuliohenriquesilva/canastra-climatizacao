// 1. Efeito do Header (Fundo ativo ao rolar a página)
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

// 2. Registra o plugin do ScrollTrigger no GSAP
gsap.registerPlugin(ScrollTrigger);

// 3. Linha do tempo do Ar-Condicionado e Gelos (Efeito Fanta)
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".services", // Dispara quando o topo da seção de serviços entra na tela
        start: "top bottom",  // Começa assim que a seção aparece embaixo
        end: "top top",       // Termina quando o topo da seção chega no topo da tela
        scrub: 1,             // Sincroniza o movimento milimetricamente com o mouse do usuário
    }
});

// Movimento do Ar-Condicionado Principal descendo
tl.to("#ar-principal", {
    top: "140%",
    left: "10%",
    scale: 0.6,
    rotation: 15
}, 'mesmo-tempo');

// Pedras de gelo se espalhando
tl.to("#gelo-1", {
    top: "120%",
    left: "70%",
    rotation: 120
}, 'mesmo-tempo');

tl.to("#gelo-2", {
    top: "160%",
    left: "5%",
    rotation: -80
}, 'mesmo-tempo');


// 4. BÔNUS: Fazendo os cards aparecerem de baixo para cima de forma "Premium" com GSAP
// Isso substitui o IntersectionObserver e deixa a animação muito mais leve!
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%", // Dispara quando a seção preencher 80% da tela
        toggleActions: "play none none none" // Roda a animação apenas uma vez ao descer
    },
    opacity: 0,
    y: 50,          // Move 50px para baixo antes de subir
    duration: 0.8,
    stagger: 0.2    // Efeito "Cascata": um card aparece logo atrás do outro!
});
