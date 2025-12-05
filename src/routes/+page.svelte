<script lang="ts">
    let hamburgerM: HTMLDivElement;
    let navContainer: HTMLDivElement;

    function toggle() {
        // hamburgerM.classList.toggle('active');
        hamburgerM.classList.toggle('active');
        navContainer.classList.toggle('open');
        // hamburgerM.style.display = navContainer.style.display == "none" ? "flex" : "none"
        // navContainer.style.display = navContainer.style.display == "none" ? "flex" : "none";
    };
</script>

<svelte:head>
    <title>Home Page</title>
</svelte:head>


<nav>
    <div class="hamburger-container">
        <img src="/Logo_ANANAS.png" alt="Ananas Spring Valley" class="site-logo">
        <div class="hamburger" id="hamburger" bind:this={hamburgerM} onclick={toggle}>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
        </div>
    </div>

    <div class="nav-container" id="navContainer" bind:this={navContainer}>
        <div class="nav-item"><a href="/">Accueil</a></div>
        <div class="nav-item"><a href="/goldberg">OpenSource ?</a></div>
        <div class="nav-item"><a href="/inconvenients">Inconvénients de la Big Tech</a></div>
        <div class="nav-item">À propos du groupe</div>
    </div>
</nav>

<div class="content1">
    <div>
        <h1 id="titre1">Accueil</h1>
    </div>

    <div class="content">
        <h2>NIRD c'est quoi ?</h2>
        <p>Le NIRD est une démarche qui vise à rendre le numérique plus accessible, responsable et durable en reconditionnant des ordinateurs vers des systèmes Linux et des logiciels libres. L’objectif est de réduire les coûts, limiter l’obsolescence programmée, protéger les données et permettre à chacun, même avec peu de moyens ou de connaissances, d’accéder à un numérique fiable et respectueux de l’environnement. </p>
        <p>Ce site vous propose quelques jeux interactifs pour vous montrer son fonnctionnement. </p>
    </div>

    <section class="jeux">
        <h2 class="titre">Jeu 1</h2>

        <div class="jeu">
            <div class="texte_jeu">
                <h1>OpenSource ?</h1>
                <p>La plupart des appareils électroniques produit par les grandes corporations sont conçus
                dans la vision d'une durée de vie courte et programmés de telle sorte à réduire leur
                durée de vie. C'est de l'obsolescence programmée ...</p>
            </div>
            <a href="/goldberg">
                <button class="button">Click Me</button>
            </a>
        </div>

        <h2 class="titre">Jeu 2</h2>

        <div class="jeu">
            <div class="texte_jeu">
                <h1>Inconvénients de la Big Tech</h1>
                <p>Imaginez l'action de "vous connecter à votre compte", quelle que soit la plateforme. Simple non ? ...</p>
            </div>
            <a href="/inconvenients">
                <button class="button">Click Me</button>
            </a>
                
        </div>

    
    </section>
</div>

<footer>
    <div class="footer-container">
        <div class="footer-section">
            <h3>Références du site</h3>
            <ul>
                <li><a href="/">Page d'accueil</a></li>
                <li><a href="/goldberg">OpenSource ?</a></li>
                <li><a href="/inconvenients">Les Inconvénients</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>Liens utiles</h3>
            <ul>
                <li><a href="https://www.nuitdelinfo.com/">Nuit de l'Informatique 2025</a></li>
                <li><a href="https://www.univ-tlse3.fr/">Université de Toulouse III - Paul Sabatier</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>Membres Ananas Spring Valley</h3>
            <ul>
                <li>@awaitctx.sendmiku</li>
                <li>@THE BOULE</li>
                <li>@camille</li>
                <li>@nostalum</li>
                <li>@ChikenB4lls</li>
                <li>@L'imbélice</li>
                <li>@Mini_Bouty#</li>
            </ul>
        </div>
    </div>
    <div class="copyright-item">© Ananas Spring Valley - Nuit de l'Informatique 2025 - Tous droits reservés</div>
</footer>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .site-logo{
        height: 60px;
        width: auto;
        max-width: 150px;
    }

    /* Navigation principale */
    nav {
        background-color: #0f3460;
        padding: 0;
        position: relative;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }

    /* Menu hamburger */
    .hamburger-container {
        padding: 20px 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
        margin: 0 auto;
    }

    .hamburger {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 10px;
        z-index: 1001;
    }

    .hamburger-line {
        width: 30px;
        height: 3px;
        background-color: #eee;
        transition: all 0.3s ease;
        border-radius: 2px;
    }


    :global(.hamburger.active .hamburger-line:nth-child(1)) {
        transform: rotate(45deg) translate(8px, 8px);
    }

    :global(.hamburger.active .hamburger-line:nth-child(2)) {
        opacity: 0;
    }

    :global(.hamburger.active .hamburger-line:nth-child(3)) {
        transform: rotate(-45deg) translate(8px, -8px);
    }

    .nav-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        max-width: 100%;
        margin: 0 auto;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.5s ease;
        flex-wrap: wrap;
    }

    :global(.nav-container.open) {
        max-height: 1000px;
        border-bottom: 3px solid #d5d504;
    }

    .nav-item {
        position: relative;
        padding: 20px 30px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        flex: 1;
        min-width: 200px;
        text-align: center;
        color: #d5d504;
        font-size: 18px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    :global(.arrow) {
        display: inline-block;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #eee;
        transition: transform 0.3s ease;
    }

    :global(.nav-item.active .arrow) {
        transform: rotate(180deg);
    }

    .nav-item:hover {
        background-color: #ceb732;
        color: #16213e;
        transition: 0.4s;
    }

    /* Menu déroulant */
    :global(.dropdown-menu) {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #16213e;
        max-height: 0;
        overflow: hidden;
        padding: 0 20px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.4);
        z-index: 1000;
        transition: max-height 0.4s ease, padding 0.4s ease;
    }

    :global(.dropdown-menu.open) {
        max-height: 500px;
        padding: 20px;
    }

    :global(.dropdown-content) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        max-width: 100%;
        margin: 0 auto;
    }

    :global(.dropdown-link) {
        color: #eee;
        text-decoration: none;
        padding: 12px 15px;
        display: block;
        border-radius: 5px;
        transition: all 0.3s ease;
        background-color: rgba(255,255,255,0.05);
    }

    :global(.dropdown-link:hover) {
        background-color: #0f3460;
        transform: translateX(5px);
    }

    .content p {
        line-height: 1.8;
        text-align: justify;
        margin-bottom: 20px;
    }

    /* Footer */
    footer {
        background-color: #0f3460;
        padding: 40px 5%;
        margin-top: 60px;
    }

    .footer-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 40px;
        max-width: 100%;
        margin: 0 auto;
    }

    .footer-section h3 {
        margin-bottom: 15px;
        color: #d8cd2f;
    }

    .footer-section a {
        color: #eee;
        text-decoration: none;
        display: block;
        margin: 8px 0;
        transition: color 0.3s ease;
    }

    .footer-section a:hover {
        color: #d8cd2f;
    }

    .footer-section ul {
        list-style: none;
    }

    .footer-section ul li {
        margin: 8px 0;
    }

    .copyright-item{
        padding: 20px 0 0 0;
        text-align: center;
        color: #9c9b87;
        width: 100%;
    }

    /*####*/

    #titre1 {
        color: #fff;
        font-size: xx-large;
        text-shadow: 2px 2px 4px black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: url(images/image-titre.webp);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 350px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
        padding: 0 5%;
    }

    .content {
        margin: 2rem 10%;
        text-align: justify;
        font-size: large;
    }

    .content h2 {
        font-size: x-large;
        margin-bottom: 1rem;
        text-transform: uppercase;
        color: #f5d509;
        
    }

    .titre {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
        font-size: x-large;
        color: #f5d509;
    }

    .jeux {
        display: flex;
        flex-direction: column;
        margin-left:25%;
        margin-right:25%;
        gap: 2rem;
    }

    .jeu {
        color: white;
        text-shadow: 2px 2px 4px black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid #ccc;
        padding: 2rem;
        border-radius: 24px;
        box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.2),
            0 4px 8px rgba(0, 0, 0, 0.2),
            0 0 8px rgba(255, 255, 255, 0.1),
            0 0 16px rgba(255, 255, 255, 0.08);
        background-image: url(images/image_info.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 250px;
    }

    .texte_jeu {
        margin-bottom: 1rem;
    }

    .texte_jeu h1 {
        margin-bottom: 1rem;
    }

    .button {
        width: 200px;
        height: 40px;
        align-self: flex-end;
        border: none;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background: #4f46e5;
        color: white;
        transition: 0.3s;
        box-shadow:
            inset 0px 3px 6px -4px rgba(255, 255, 255, 0.6),
            inset 0px -3px 6px -2px rgba(0, 0, 0, 0.8);
    }

    .button:hover {
        background: rgb(51, 0, 255);
        box-shadow:
            inset 0px 3px 6px rgba(59, 91, 234, 0.6),
            inset 0px -3px 6px rgba(0, 0, 0, 0.8),
            0px 0px 8px rgba(24, 27, 239, 0.05);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .nav-container{
            display: inline-block;
            margin-left: 30%;
        }
        .content {
            margin: 2rem 5%;
        }

        .jeux {
            margin: 2rem 5%;
        }

        .nav-item {
            min-width: 100%;
        }

        .button {
            width: 100%;
            align-self: stretch;
        }

        #titre1 {
            font-size: x-large;
            height: 250px;
        }
    }

    @media (min-width: 1400px) {
        .content {
            margin: 2rem 15%;
        }

        .jeux {
            margin: 2rem 15%;
        }
    }

</style>
