// ===== ATELIER DOM : CARTE DE PROFIL =====

// --- 1. SÉLECTION DES ÉLÉMENTS ---
const carteEl = document.querySelector('#carte');
const avatarEl = document.querySelector('.avatar');
const nomEl = document.querySelector('#nom');
const bioEl = document.querySelector('#bio');
const tagsEl = document.querySelector('#tags');
const compteurEl = document.querySelector('#compteur');
const btnSuivant = document.querySelector('#btn-suivant');
const btnPrecedent = document.querySelector('#btn-precedent');

// --- 2. DONNÉES ---
const profils = [
  {
    nom: 'Ada Lovelace',
    bio: 'Pionnière de la programmation informatique et mathématicienne britannique.',
    avatar: 'https://i.pravatar.cc/96?img=1',
    tags: ['JavaScript', 'Algorithme', 'Histoire'],
    couleur: '#4f46e5'
  },
  {
    nom: 'Alan Turing',
    bio: 'Cryptologue, mathématicien et père de l\'intelligence artificielle.',
    avatar: 'https://i.pravatar.cc/96?img=3',
    tags: ['IA', 'Code', 'Maths'],
    couleur: '#10b981'
  },
  {
    nom: 'Grace Hopper',
    bio: 'Contre-amirale américaine et inventrice du premier compilateur.',
    avatar: 'https://i.pravatar.cc/96?img=5',
    tags: ['COBOL', 'Compilateur', 'Pionnière'],
    couleur: '#f59e0b'
  }
];

let index = 0;

// --- 3. FONCTION DE RENDU ---
function afficherProfil(profil) {
  // Remplissage du texte (sécurisé)
  nomEl.textContent = profil.nom;
  bioEl.textContent = profil.bio;

  // Mise à jour de l'avatar
  avatarEl.setAttribute('src', profil.avatar);
  avatarEl.setAttribute('alt', 'Photo de ' + profil.nom);

  // Vider et recréer les tags
  tagsEl.textContent = '';
  profil.tags.forEach(tagText => {
    const li = document.createElement('li');
    li.classList.add('tag');
    li.textContent = tagText;
    tagsEl.appendChild(li);
  });

  // Application de la couleur dynamique et de la classe active
  carteEl.style.setProperty('--accent', profil.couleur);
  carteEl.classList.add('carte--active');

  // Mise à jour du compteur
  compteurEl.textContent = `Profil ${index + 1} / ${profils.length}`;
}

// --- 4. INITIALISATION ---
afficherProfil(profils[index]);

// --- 5. NAVIGATION (SUIVANT / PRÉCÉDENT) ---
btnSuivant.addEventListener('click', () => {
  index = (index + 1) % profils.length;
  changerProfilAvecTransition(index);
});

btnPrecedent.addEventListener('click', () => {
  index = (index - 1 + profils.length) % profils.length;
  changerProfilAvecTransition(index);
});

// --- BONUS 2 : TRANSITION VISUELLE ---
function changerProfilAvecTransition(nouvelIndex) {
  carteEl.classList.remove('carte--active');
  void carteEl.offsetWidth; // Force le navigateur à recalculer l'animation
  afficherProfil(profils[nouvelIndex]);
}

// --- BONUS 3 : MODE SOMBRE (Exemple d'activation) ---
// Vous pouvez tester le mode sombre en tapant: document.body.classList.toggle('dark') dans la console F12.