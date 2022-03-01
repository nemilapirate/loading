window.addEventListener('load', loader);

function loader(){

    const TLLOAD = gsap.timeline();

    TLLOAD
    // On séléctionne notre image, l'animation d'agrandissent (de 0 à 400) durera 1.3 et prendra 0.4sec pour apparaitre en puissance 2 via gsap.
    .to('.images-container', {height: 400, duration: 1.3, delay: 0.4, ease: 'power2.out'})
    // Ensuite appartition du bloc-txt qui apparaitera avant la fin de l'animation de l'image 1 (paramêtre de position -=0.8 sec)
    .to('.bloc-txt', {height: 'auto', duration: 0.6, ease: 'power2.out'},'-=0.8')
    // animation du texte dans le bloc txt
    .to('.bloc-txt h2', {y : 0, ease: 'power2.out'},'-=0.6')
    // Animation du bloc rouge pour faire la transition
    .to('.f2', {y: 0, duration: 0.4, ease: 'power2.out'})
    // Changement de l'image du background
    .add(() => {
        document.querySelector('.flip-img1').style.backgroundImage = "url('ressources/image1.jpg')";
    })
    // Et on retire le rideau rouge pour faire apparaitre l'image
    .to('.f2', {y: '-100%'})
    // Une fois la dernier animation jouer, on retire les images puis le container afin de ne pas "perturbé" les lecteurs d'écrans
    .to('load-container', {opacity: 0 , duration: 0.8, delay : 0.7})
    .add(() => {
        document.querySelector('.load-container').style.display = "none";
    })
    // On lance la vidéo un peu plus tôt pour avoir un rendu plus fuide sans impression de pause dès le début.
    .add(() => {
        document.querySelector('video').play()
    }, '-=0.8')
}