
// ============================================================
// ATELIER 0 — ANNUAIRE EN CONSOLE
// ============================================================


// --- 1. VARIABLES ET CONTACTS ---

const contacts = [
    { nom: 'Ada Lovelace', email: 'ada@ex.fr', ville: 'Londres' },
    { nom: 'Alan Turing', email: 'alan@ex.fr', ville: 'Manchester' },
    { nom: 'Grace Hopper', email: 'grace@ex.fr', ville: 'New York' }
];

console.log(contacts);


// --- 2. AFFICHER TOUS LES CONTACTS ---

contacts.forEach(c => {
    console.log(`${c.nom} (${c.ville})`);
});


// --- 3. RECHERCHER PAR NOM ---

function chercherParNom(terme) {
    return contacts.find(c =>
        c.nom.toLowerCase().includes(terme.toLowerCase())
    );
}


// --- 4. FILTRER PAR VILLE ---

function filtrerParVille(ville) {
    return contacts.filter(c => c.ville === ville);
}


// --- 5. AJOUTER UN CONTACT ---

function ajouterContact(nom, email, ville) {
    contacts.push({ nom, email, ville });
    console.log(`Contact ajouté : ${nom}`);
}


// --- 6. STATISTIQUES ---

const total = contacts.reduce((acc) => acc + 1, 0);

const villes = [...new Set(contacts.map(c => c.ville))];

console.log(`Total : ${total} contacts`);
console.log(`Villes : ${villes.join(', ')}`);


// ============================================================
// TESTS
// ============================================================

// Test recherche par nom

console.log("Recherche Ada :");
console.log(chercherParNom('ada'));

console.log("Recherche xyz :");
console.log(chercherParNom('xyz'));


// Test filtrage par ville

console.log("Contacts de Londres :");
console.log(filtrerParVille('Londres'));

console.log("Contacts de Paris :");
console.log(filtrerParVille('Paris'));

console.log(`Nombre de contacts à Londres : ${filtrerParVille('Londres').length}`);


// Test ajout d'un contact

ajouterContact('Marie Curie', 'marie@ex.fr', 'Paris');

console.log(contacts);


// ============================================================
// BONUS 1 — SUPPRIMER UN CONTACT
// ============================================================

function supprimerContact(email) {
    const i = contacts.findIndex(c => c.email === email);

    if (i === -1) return false;

    contacts.splice(i, 1);

    return true;
}


// ============================================================
// BONUS 2 — TRIER PAR NOM
// ============================================================

const tries = [...contacts].sort((a, b) =>
    a.nom.localeCompare(b.nom)
);

console.log("Contacts triés :");
console.log(tries);


// ============================================================
// BONUS 3 — MISE À JOUR PARTIELLE
// ============================================================

function mettreAJour(email, changements) {
    const i = contacts.findIndex(c => c.email === email);

    if (i === -1) return false;

    contacts[i] = { ...contacts[i], ...changements };

    return true;
}


// ============================================================
// BONUS 4 — MINI-RAPPORT
// ============================================================

console.log("=== ANNUAIRE ===");

console.log(`Total : ${contacts.length} contacts`);

const villesRapport = [...new Set(contacts.map(c => c.ville))];

console.log(`Villes : ${villesRapport.join(', ')}`);

console.log("Contacts :");

contacts.forEach((c, index) => {
    console.log(
        `${index + 1}. ${c.nom} — ${c.email} (${c.ville})`
    );
});



