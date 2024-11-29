console.clear();
const people = [
    { name: "Ang Lee", link: "https://fr.wikipedia.org/wiki/Ang_Lee" },
    { name: "Christopher Nolan", link: "https://fr.wikipedia.org/wiki/Christopher_Nolan" },
    { name: "Leonardo DiCaprio", link: "https://fr.wikipedia.org/wiki/Leonardo_DiCaprio" },
    { name: "Heath Ledger", link: "https://fr.wikipedia.org/wiki/Heath_Ledger" },
    { name: "Jake Gyllenhaal", link: "https://fr.wikipedia.org/wiki/Jake_Gyllenhaal" },
    { name: "Michelle Williams", link: "https://fr.wikipedia.org/wiki/Michelle_Williams_(actrice)" },
    { name: "Matthew McConaughey", link: "https://fr.wikipedia.org/wiki/Matthew_McConaughey" },
    { name: "Anne Hathaway", link: "https://fr.wikipedia.org/wiki/Anne_Hathaway" },
    { name: "Michael Caine", link: "https://fr.wikipedia.org/wiki/Michael_Caine" },
    { name: "Fionn Whitehead", link: "https://fr.wikipedia.org/wiki/Fionn_Whitehead" },
    { name: "Mark Rylance", link: "https://fr.wikipedia.org/wiki/Mark_Rylance" },
    { name: "Tom Hardy", link: "https://fr.wikipedia.org/wiki/Tom_Hardy" },
    { name: "Claire Castel", link: "https://www.iafd.com/person.rme/id=b1d21715-8fb4-448b-8a98-25345367d57d" },
    { name: "Clara Mia", link: "https://www.iafd.com/person.rme/id=de9f48f1-0c93-4578-adf5-164e9713f726" },
    { name: "Cléa Gaultier", link: "https://www.iafd.com/person.rme/id=c74c4350-da4f-43e0-87c7-d48ed6fdf1d9" },
    { name: "Anna Polina", link: "https://www.iafd.com/person.rme/id=26641561-5add-4f44-ad62-1140befee8a6" },
    { name: "Adrianna Chechik", link: "https://www.iafd.com/person.rme/id=f0a9a21a-0203-4bfb-abe2-30a2c5d5ad8f" },
    { name: "Lauren Walker", link: "https://www.iafd.com/person.rme/id=2ddb3ecb-828f-4e89-ade2-09eb7b875e18" },
    { name: "Alice Martin", link: "https://www.iafd.com/person.rme/id=0a6c1c3f-8961-4eb7-ad51-57ba3146d222" },
    { name: "Carollina Cherry", link: "https://www.iafd.com/person.rme/id=d2373deb-31fe-489f-b391-d80097aaef9c" },
    { name: "Tiffany Leiddi", link: "https://www.iafd.com/person.rme/id=d1e831fe-f932-4ee6-a191-1984c75f2622" },
    { name: "Cherry Kiss", link: "https://www.iafd.com/person.rme/id=4de5b967-8039-4012-8bd6-6d73be25b3a3" },
    { name: "Anny Aurora", link: "https://www.iafd.com/person.rme/id=b85c0948-d1f7-437a-9d96-eb3e56f38264" },
    { name: "Tiffany Tatum", link: "https://www.iafd.com/person.rme/id=70c84d79-e32d-4361-ada8-9b83ad4c91ae" },
    { name: "Angelika Grays", link: "https://www.iafd.com/person.rme/id=10393752-e650-4304-ae29-41defc60b955" },
    { name: "Amirah Adara", link: "https://www.iafd.com/person.rme/id=ed55038a-a357-4ebb-aad6-c9a02d4d1c13" },
    { name: "Elisa Calvi", link: "https://www.iafd.com/person.rme/id=abc83c95-f5e8-4fb5-a158-6e0a434de4e3" },
    { name: "Eve Sweet", link: "https://www.iafd.com/person.rme/id=07296254-5377-4711-960a-cf4d3fed5d34" },
    { name: "Marcello Bravo", link: "https://www.iafd.com/person.rme/id=9f44c621-d068-4e79-89b6-93f1ce2d9673" },
    { name: "Kristof Cale", link: "https://www.iafd.com/person.rme/id=8fe7d706-53aa-4810-992e-cfb207f15ec5" },
    { name: "James Duval", link: "https://www.iafd.com/person.rme/id=87f59170-716e-4ad3-873a-959f62f1dbc5" },
    { name: "Ricky Mancini", link: "https://www.iafd.com/person.rme/id=6c5884d5-28b0-4922-903a-6875ad794061" },
    { name: "Luke Hardy", link: "https://www.iafd.com/person.rme/id=3d3bf53c-5c82-4356-9ba6-3cf7cb7084c2" },
    { name: "Alex Romero", link: "https://www.iafd.com/person.rme/id=a3d6fe37-c93d-43c0-9a6a-9a491ba9a353" },
    { name: "Rico Simmons", link: "https://www.allocine.fr/personne/fichepersonne_gen_cpersonne=254584.html" },
    { name: "Jose Lescaf", link: "https://boo.world/fr/database/profile/183325/joss-lescaf-personality-type" },
    { name: "Math", link: "https://www.iafd.com/person.rme/id=9d462a6a-59bf-4132-b778-a53dc7f0d37f" },
    { name: "Hervé Bodilis", link: "https://fr.wikipedia.org/wiki/Herv%C3%A9_Bodilis" },
    { name: "Cillian Murphy", link: "https://fr.wikipedia.org/wiki/Cillian_Murphy" },
    { name: "Emily Blunt", link: "https://fr.wikipedia.org/wiki/Emily_Blunt" },
    { name: "Matt Damon", link: "https://fr.wikipedia.org/wiki/Matt_Damon" },
    { name: "Christian Bale", link: "https://fr.wikipedia.org/wiki/Christian_Bale" },
    { name: "Hugh Jackman", link: "https://fr.wikipedia.org/wiki/Hugh_Jackman" },
    { name: "Charlize Theron", link: "https://fr.wikipedia.org/wiki/Charlize_Theron" },
    { name: "Zoë Kravitz", link: "https://fr.wikipedia.org/wiki/Zo%C3%AB_Kravitz" },
    { name: "Brendan McCarthy", link: "https://fr.wikipedia.org/wiki/Brendan_McCarthy" },
    { name: "Bryan Cranston", link: "https://fr.wikipedia.org/wiki/Bryan_Cranston" },
    { name: "Carey Mulligan", link: "https://fr.wikipedia.org/wiki/Carey_Mulligan" },
    { name: "Ryan Gosling", link: "https://fr.wikipedia.org/wiki/Ryan_Gosling" },
    { name: "George Miller", link: "https://fr.wikipedia.org/wiki/George_Miller_(r%C3%A9alisateur_australien)" },
    { name: "Elliot Page", link: "https://fr.wikipedia.org/wiki/Elliot_Page" },
    { name: "Marion Cotillard", link: "https://fr.wikipedia.org/wiki/Marion_Cotillard" },
    { name: "Hossein Amini", link: "https://fr.wikipedia.org/wiki/Hossein_Amini" },
    { name: "Tim Story", link: "" },
    { name: "Chris Evans", link: "https://fr.wikipedia.org/wiki/Chris_Evans_(acteur)" },
    { name: "Doug Jones", link: "https://fr.wikipedia.org/wiki/Doug_Jones_(acteur)" },
    { name: "Ioan Gruffudd", link: "https://fr.wikipedia.org/wiki/Ioan_Gruffudd" },
    { name: "Jessica Alba", link: "https://fr.wikipedia.org/wiki/Jessica_Alba" },
    { name: "Julian McMahon", link: "https://fr.wikipedia.org/wiki/Julian_McMahon" },
    { name: "Michael Chiklis", link: "https://fr.wikipedia.org/wiki/Michael_Chiklis" },
    { name: "Benedict Cumberbatch", link: "https://fr.wikipedia.org/wiki/Benedict_Cumberbatch" },
    { name: "Elizabeth Olsen", link: "https://fr.wikipedia.org/wiki/Elizabeth_Olsen" },
    { name: "Hayley Atwell", link: "https://fr.wikipedia.org/wiki/Hayley_Atwell" },
    { name: "John Krasinski", link: "https://fr.wikipedia.org/wiki/John_Krasinski" },
    { name: "Rachel McAdams", link: "https://fr.wikipedia.org/wiki/Rachel_McAdams" },
    { name: "Xochitl Gomez", link: "https://fr.wikipedia.org/wiki/Xochitl_Gomez" },
    { name: "Christopher McDonald", link: "https://fr.wikipedia.org/wiki/Christopher_McDonald" },
    { name: "Drake Bell", link: "https://fr.wikipedia.org/wiki/Drake_Bell" },
    { name: "Kevin Hart", link: "https://fr.wikipedia.org/wiki/Kevin_Hart" },
    { name: "Leslie Nielsen", link: "https://fr.wikipedia.org/wiki/Leslie_Nielsen" },
    { name: "Pamela Anderson", link: "https://fr.wikipedia.org/wiki/Pamela_Anderson" },
    { name: "Sara Paxton", link: "https://fr.wikipedia.org/wiki/Sara_Paxton" },
    { name: "Sam Raimi", link: "https://fr.wikipedia.org/wiki/Sam_Raimi" },
    { name: "Craig Mazin", link: "https://fr.wikipedia.org/wiki/Craig_Mazin" },
];
const table = [
    {
        title: "Le Secret de Brokeback Mountain",
        author: findName("Ang Lee"),
        genre: ["Drame", "Romance"],
        date: 2006,
        duration: "2h14",
        cover: "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/35/87/12/18463378.jpg",
        description: "Été 1963, Wyoming.<br><br>Deux jeunes cow-boys, Jack et Ennis, sont engagés pour garder ensembleun troupeau de moutons à Brokeback Mountain.<br><br>Isolés au milieu d'une nature sauvage, leur complicité se transforme lentementen une attirance aussi irrésistible qu'inattendue.<br><br>A la fin de la saison de transhumance, les deux hommes doivent se séparer.<br><br>Ennis se marie avec sa fiancée, Alma, tandis que Jack épouse Lureen.<br><br>Quand ils se revoient quatre ans plus tard,un seul regard suffit pour raviver l'amour né à Brokeback Mountain.",
        actors: [findName("Heath Ledger"), findName("Jake Gyllenhaal"), findName("Michelle Williams")],
        rating: 4.4,
        color: "#747261",
    },
    {
        title: "Interstellar",
        author: findName("Christopher Nolan"),
        genre: ["Drame", "Science-fiction"],
        date: 2014,
        duration: "2h49",
        cover: "https://fr.web.img5.acsta.net/c_310_420/pictures/14/09/24/12/08/158828.jpg",
        description: "Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire.",
        actors: [findName("Matthew McConaughey"), findName("Anne Hathaway"), findName("Michael Caine")],
        rating: 3.8,
    },
    {
        title: "Oppenheimer",
        author: findName("Christopher Nolan"),
        genre: ["Biopic", "Historique", "Thriller"],
        date: 2023,
        duration: "3h01",
        cover: "https://fr.web.img3.acsta.net/c_310_420/pictures/23/05/26/16/52/2793170.jpg",
        description: `En 1942, convaincus que l’Allemagne nazie est en train de développer une arme nucléaire, les États-Unis initient, dans le plus grand secret, le "Projet Manhattan" destiné à mettre au point la première bombe atomique de l’histoire. Pour piloter ce dispositif, le gouvernement engage J. Robert Oppenheimer, brillant physicien, qui sera bientôt surnommé "le père de la bombe atomique". C’est dans le laboratoire ultra-secret de Los Alamos, au cœur du désert du Nouveau-Mexique, que le scientifique et son équipe mettent au point une arme révolutionnaire dont les conséquences, vertigineuses, continuent de peser sur le monde actuel…`,
        actors: [findName("Cillian Murphy"), findName("Emily Blunt"), findName("Matt Damon")],
        rating: 3.8,
    },
    {
        title: "Tenet",
        author: findName("Christopher Nolan"),
        genre: ["Action", "Science-fiction"],
        date: 2020,
        duration: "2h30",
        cover: "https://fr.web.img6.acsta.net/c_310_420/pictures/20/08/03/12/15/2118693.jpg",
        description: "Muni d'un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l'univers crépusculaire de l'espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s'agit pas d'un voyage dans le temps, mais d'un renversement temporel…",
        actors: ["John David Washington", "Kenneth Branagh", "Robert Pattinson"],
        rating: 3.6,
    },
    { title: "Dunkerque", author: findName("Christopher Nolan"), genre: ["Drame", "Historique", "Guerre"], date: 2017, duration: "1h47", cover: "https://fr.web.img5.acsta.net/c_310_420/pictures/17/06/15/14/31/266314.jpg", description: "Le récit de la fameuse évacuation des troupes alliées de Dunkerque en mai 1940.", actors: [findName("Fionn Whitehead"), findName("Mark Rylance"), findName("Tom Hardy")], rating: 4.1 },
    {
        title: "Inception",
        author: findName("Christopher Nolan"),
        genre: ["Science-fiction", "Thriller"],
        date: 2010,
        duration: "2h28",
        cover: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/72/34/14/19476654.jpg",
        description:
            "Dom Cobb est un voleur expérimenté – le meilleur qui soit dans l’art périlleux de l’extraction : sa spécialité consiste à s’approprier les secrets les plus précieux d’un individu, enfouis au plus profond de son subconscient, pendant qu’il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l’univers trouble de l’espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier qui a perdu tout ce qui lui est cher. Mais une ultime mission pourrait lui permettre de retrouver sa vie d’avant – à condition qu’il puisse accomplir l’impossible : l’inception. Au lieu de subtiliser un rêve, Cobb et son équipe doivent faire l’inverse : implanter une idée dans l’esprit d’un individu. S’ils y parviennent, il pourrait s’agir du crime parfait. Et pourtant, aussi méthodiques et doués soient-ils, rien n’aurait pu préparer Cobb et ses partenaires à un ennemi redoutable qui semble avoir systématiquement un coup d’avance sur eux. Un ennemi dont seul Cobb aurait pu soupçonner l’existence.",
        actors: [findName("Leonardo DiCaprio"), findName("Marion Cotillard"), findName("Elliot Page")],
        rating: 4.1,
    },
    {
        title: "Le Prestige",
        author: findName("Christopher Nolan"),
        genre: ["Drame", "Thriller"],
        date: 2006,
        duration: "2h08",
        cover: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/62/84/94/18680369.jpg",
        description: "Londres, au début du siècle dernier...<br><br>Robert Angier et Alfred Borden sont deux magiciens surdoués, promis dès leur plus jeune âge à un glorieux avenir. Une compétition amicale les oppose d'abord l'un à l'autre, mais l'émulation tourne vite à la jalousie, puis à la haine. Devenus de farouches ennemis, les deux rivaux vont s'efforcer de se détruire l'un l'autre en usant des plus noirs secrets de leur art. Cette obsession aura pour leur entourage des conséquences dramatiques...",
        actors: [findName("Hugh Jackman"), findName("Christian Bale"), findName("Michael Caine")],
        rating: 3.2,
    },
    {
        title: "45 années de plaisir",
        author: findName("Hervé Bodilis"),
        genre: ["Pornographique"],
        date: 2024,
        duration: "3h03",
        cover: "https://i.ibb.co/6XzDvKj/1342168.jpg",
        description: "For over 3 hours, discover or re-discover some of the Dorcel scenes shot in Paris with some of the most exciting actresses of their generation.",
        actors: [
            findName("Claire Castel"),
            findName("Clara Mia"),
            findName("Cléa Gaultier"),
            findName("Anna Polina"),
            findName("Adrianna Chechik"),
            findName("Lauren Walker"),
            findName("Alice Martin"),
            findName("Carollina Cherry"),
            findName("Tiffany Leiddi"),
            findName("Cherry Kiss"),
            findName("Anny Aurora"),
            findName("Tiffany Tatum"),
            findName("Angelika Grays"),
            findName("Amirah Adara"),
            findName("Elisa Calvi"),
            findName("Eve Sweet"),
            findName("Marcello Bravo"),
            findName("Kristof Cale"),
            findName("James Duval"),
            findName("Ricky Mancini"),
            findName("Luke Hardy"),
            findName("Alex Romero"),
            findName("Rico Simmons"),
            findName("Jose Lescaf"),
            findName("Math"),
        ],
        rating: 5,
    },
    {
        title: "Drive",
        author: findName("Hossein Amini"),
        genre: ["Action", "Thriller"],
        date: 2011,
        duration: "1h40",
        cover: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/83/93/95/19803697.jpg",
        description: `Un jeune homme solitaire, "The Driver", conduit le jour à Hollywood pour le cinéma en tant que cascadeur et la nuit pour des truands. Ultra professionnel et peu bavard, il a son propre code de conduite. Jamais il n’a pris part aux crimes de ses employeurs autrement qu’en conduisant - et au volant, il est le meilleur !<br><br>Shannon, le manager qui lui décroche tous ses contrats, propose à Bernie Rose, un malfrat notoire, d’investir dans un véhicule pour que son poulain puisse affronter les circuits de stock-car professionnels. Celui-ci accepte mais impose son associé, Nino, dans le projet.<br><br>C’est alors que la route du pilote croise celle d’Irene et de son jeune fils. Pour la première fois de sa vie, il n’est plus seul.<br><br>Lorsque le mari d’Irene sort de prison et se retrouve enrôlé de force dans un braquage pour s’acquitter d’une dette, il décide pourtant de lui venir en aide. L’expédition tourne mal…<br><br>Doublé par ses commanditaires, et obsédé par les risques qui pèsent sur Irene, il n’a dès lors pas d’autre alternative que de les traquer un à un…`,
        actors: [findName("Ryan Gosling"), findName("Carey Mulligan"), findName("Bryan Cranston")],
        rating: 4.4,
    },
    {
        title: "Mad Max: Fury Road",
        author: findName("George Miller"),
        genre: ["Action", "Science-fiction"],
        date: 2015,
        duration: "2h",
        cover: "https://fr.web.img6.acsta.net/c_310_420/pictures/15/04/14/18/30/215297.jpg",
        description: "Hanté par un lourd passé, Mad Max estime que le meilleur moyen de survivre est de rester seul. Cependant, il se retrouve embarqué par une bande qui parcourt la Désolation à bord d'un véhicule militaire piloté par l'Imperator Furiosa. Ils fuient la Citadelle où sévit le terrible Immortan Joe qui s'est fait voler un objet irremplaçable. Enragé, ce Seigneur de guerre envoie ses hommes pour traquer les rebelles impitoyablement…",
        actors: [findName("Tom Hardy"), findName("Charlize Theron"), findName("Zoë Kravitz")],
        rating: 4.4,
    },
    {
        title: "Les 4 Fantastiques et le Surfer d'argent",
        author: findName("Tim Story"),
        genre: ["Action"],
        date: 2007,
        duration: "1h32",
        cover: "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/63/76/91/18787286.jpg",
        description: `Alors que le mariage de Mr Fantastic et de la Femme Invisible s'annonce comme l'événement de l'année, un mystérieux Surfer d'Argent surgit de l'espace et provoque d'étranges phénomènes sur la Terre. Rapidement les 4 Fantastiques vont découvrir le dessein secret de cet être aux pouvoirs surprenants et la menace qu'il fait peser sur notre planète, mais ils vont aussi voir ressurgir leur ennemi juré...`,
        actors: [findName("Chris Evans"), findName("Doug Jones"), findName("Ioan Gruffudd"), findName("Jessica Alba"), findName("Julian McMahon"), findName("Michael Chiklis")],
        rating: 2.3,
    },
    {
        title: "Doctor Strange in the Multiverse of Madness",
        author: findName("Sam Raimi"),
        genre: ["Fantasy", "Horreur"],
        date: 2022,
        duration: "2h28",
        cover: "https://fr.web.img3.acsta.net/c_310_420/pictures/22/04/08/10/30/1779137.jpg",
        description: `Le Docteur Stephen Strange continue ses recherches sur la Pierre du Temps. Cependant, un vieil ami devenu ennemi tente de détruire tous les sorciers de la Terre, ce qui perturbe le plan de Strange.`,
        actors: [findName("Benedict Cumberbatch"), findName("Elizabeth Olsen"), findName("Hayley Atwell"), findName("John Krasinski"), findName("Rachel McAdams"), findName("Xochitl Gomez")],
        rating: 3.6,
    },
    {
        title: "Super Heros Movie",
        author: findName("Craig Mazin"),
        genre: ["Comédie", "Action"],
        duration: "1h15",
        rating: 1.8,
        cover: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/66/09/25/18931132.jpg",
        description: `Lycéen timide et mal dans sa peau, Rick Ricker vit avec son oncle et sa tante depuis que ses parents ont été tués. Pendant la visite scolaire d'un laboratoire de recherche, Rick est piqué par une libellule génétiquement modifiée. Peu à peu, alors qu'il voit ses forces se décupler, il comprend qu'il est désormais pourvu de super-pouvoirs. Après s'être fabriqué un costume, il adopte sa nouvelle identité : La Libellule. Mais il lui faudra affronter un redoutable ennemi, le Sablier.`,
        actors: [findName("Christopher McDonald"), findName("Drake Bell"), findName("Kevin Hart"), findName("Leslie Nielsen"), findName("Pamela Anderson"), findName("Sara Paxton")],
    },
];

function findName(person) {
    return people.find((object) => object.name === person);
}
function actors(actorList) {
    let string = [];
    for (actor of actorList) {
        string.push(`<a href="${actor.link}">${actor.name}</a>`);
    }
    return string.join(", ");
}
const blog = document.getElementById("blog");
const blogDescription = document.getElementById("blog-description");

for (let index = 0; index < table.length; index++) {
    console.log(actors(table[index].actors));
    blog.innerHTML += `
    <div class="container">
    <div class="img-card">
    <img src="${table[index].cover}" alt=""/>
    </div>
    <div class="blog-entry">
    <h2>${table[index].title}</h2>
    <p">${table[index].date} | ${table[index].duration} | ${table[index].genre.join(", ")}</p>
    <p>De <a href="${table[index].author.link}">${table[index].author.name}</a></p>
    <p>Avec ${actors(table[index].actors)}</p>
    <p style="font-weight:bold">Note : ${table[index].rating}</p>
    <button type="button"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Plus de détails</a></button>
    </div>
    </div>
    <div class="blog-description">
    <h2>Synopsis</h2>
    <p">${table[index].description}</p>
    </div>`;
}
