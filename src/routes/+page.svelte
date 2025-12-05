<svelte:head>
    <title>Home Page</title>
</svelte:head>
<section class="page">
<audio id="player" src="appli2.mp3" autoplay loop></audio>

    <div>
        <h1 id="titre1">Welcome to the Home Page</h1>
    </div>

    <div class="content">
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt laborum itaque suscipit autem at eligendi libero recusandae, minus tenetur veritatis voluptate pariatur. Delectus maiores veniam pariatur quam ipsa sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem voluptatibus at eligendi aut dolor sit excepturi totam autem, officiis ut voluptatem distinctio, accusamus voluptas odio quam. Fuga, vel iure.</p>
    </div>

    <section class="jeux">
        <h2 class="titre" >Jeu 1</h2>

        <div class="jeu" >
            <div class="texte_jeu" >
                <h1>Welcome to the Home Page</h1>
                <p>Explication de jeu Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique mollitia accusamus autem, facilis vero doloremque, veritatis, sed amet et quia at. Quas quod consequuntur porro assumenda officiis error numquam.</p>
            </div>
            <button class="button" >Click Me</button>
        </div>

        <h2 class="titre" >Jeu 2</h2>

        <div class="jeu" >
            <div class="texte_jeu" >
                <h1>Welcome to the Home Page</h1>
                <p>Explication de jeu Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique mollitia accusamus autem, facilis vero doloremque, veritatis, sed amet et quia at. Quas quod consequuntur porro assumenda officiis error numquam.</p>
            </div>
            <button class="button" >Click Me</button>
        </div>

        <h2 class="titre" >Jeu 3</h2>

        <div class="jeu" >
            <div class="texte_jeu" >
                <h1>Welcome to the Home Page</h1>
                <p>Explication de jeu Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique mollitia accusamus autem, facilis vero doloremque, veritatis, sed amet et quia at. Quas quod consequuntur porro assumenda officiis error numquam.</p>
            </div>
            <button class="button" >Click Me</button>
        </div>
    </section>
    </section>

<style>

    * {
        box-sizing: border-box;
      
        /*border: 1px solid red;*/
    }

    #titre1 {
        color: #fff;
        font-size:xx-large ;
        text-shadow: 2px 2px 4px black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: url('/img/image-titre.webp');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 350px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
    }

    .content {
        margin: 0% 20%;
        margin-top: 2rem;
        text-align: justify;
        font-size: large ;
    }

    .content h2 {
        font-size: x-large ;
        margin-bottom: 1rem;
        text-transform: uppercase;
        color: #f5d509;
    }

    .titre {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
        font-size: x-large ;
        color: #f5d509;
    }

    .jeux {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        margin: 0% 25%;
    }

    .jeu {
        color: white;
        text-shadow: 2px 2px 4px black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #ccc;
        padding: 1rem;
        margin-bottom: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-image: url('/img/image_info.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 24px;
        box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.2),
            0 4px 8px rgba(0, 0, 0, 0.2),
            0 0 8px rgba(255, 255, 255, 0.1),
            0 0 16px rgba(255, 255, 255, 0.08);
        
    }

    .texte_jeu {
        margin-right:40% ;
    }

    .button {
        width: 20%;
        height: 40px;
        margin-left: 80%;
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
        background: rgba(51, 0, 255, 0.75);
        box-shadow:
            inset 0px 3px 6px rgba(59, 91, 234, 0.6),
            inset 0px -3px 6px rgba(0, 0, 0, 0.8),
            0px 0px 8px rgba(24, 27, 239, 0.05);
}
</style>
