/* =====================================================================
   CONTENU DE L'APPLICATION PASCALTCOACHING
   C'est le seul fichier à modifier pour changer les textes, les liens
   et les prix. Ne touchez qu'au texte entre guillemets.
   Un lien laissé vide ("") masque le bouton correspondant.
   Après modification : commit sur GitHub, Netlify met en ligne.
   ===================================================================== */

window.CONTENU = {

  /* ---------- Contenu de la semaine ---------- */
  semaine: {
    // Texte pour les parents. Laisser titre vide ("") pour masquer la carte.
    parent_titre: "",
    parent_texte: "",

    // Question pour les jeunes (la réponse reste sur leur téléphone).
    jeune_question: "Qu'est-ce que tu fais sans voir le temps passer ?"
  },

  /* ---------- Liens ---------- */
  liens: {
    mon_ado: "https://monado.pascaltamin.com",
    test_orientation: "https://profilorientation.pascaltamin.com",
    rendez_vous: "https://rdv.pascaltamin.com",
    bilan_4d: "https://bilan4d-presentation.pascaltamin.com",
    apprendre_a_apprendre: "https://pascal-tamin.systeme.io/apprendre-a-apprendre",
    sante_mentale: "https://pascal-tamin.systeme.io/formation-sante-mentale-en-ligne",
    audit_methodes: "https://testmemoire.pascaltamin.com",
    appel_decouverte: "https://rdv.pascaltamin.com/#formulaire",
    livre: "https://livre.pascaltamin.com",

    commande_bilan_ecrit: "https://pascal-tamin.systeme.io/bilan-ecrit",
    // Pas de lien commun : chaque formation a son propre accès, envoyé
    // par email après l'achat. Laisser vide (bouton masqué).
    espace_formation: "",
    // Page Systeme.io « Cap Parcoursup 2027 : être prévenu »
    prevenir_parcoursup: "https://pascal-tamin.systeme.io/me-prevenir"
  },

  /* ---------- Motivation et confiance : tests proposés aux jeunes ----------
     Pour ajouter un test : copier un bloc { ... }, puis changer le titre,
     le texte et le lien. Pour en retirer un : supprimer son bloc. */
  motivation_tests: [
    {
      titre: "Profil motivationnel",
      texte: "Comprendre ce qui te fait vraiment avancer.",
      lien: "https://profilmotivationnel.pascaltamin.com"
    },
    {
      titre: "Test émotions / besoins",
      texte: "Identifier ce qui te bloque vraiment.",
      lien: "https://test.emotionsbesoins.pascaltamin.com"
    },
    {
      titre: "Mini Bilan 4D",
      texte: "Un aperçu de ton profil en 5 minutes.",
      lien: "https://bilan4d.pascaltamin.com"
    }
  ],

  email_contact: "contact@pascaltamin.com",

  /* ---------- Parcoursup 2027 ---------- */
  parcoursup: {
    verifie_le: "27 octobre 2026",
    confirme: [
      "La campagne 2027 se fera encore sur Parcoursup.",
      "Les critères d'examen des formations seront rendus publics.",
      "Chaque refus sera expliqué."
    ],
    pas_encore_connu: [
      "Le calendrier 2027 n'est pas publié.",
      "Un nouveau système remplacera Parcoursup en 2028 ; son contenu n'est pas arrêté."
    ]
  },

  /* ---------- Prix ---------- */
  prix: {
    bilan_ecrit: "29 €",
    entretien_orientation: "90 €",
    bilan_4d: "149 €",
    seance: "55 €",
    pack_5: "250 €",
    suivi_annuel: "360 €",
    apprendre_a_apprendre: "67 €",
    sante_mentale: "67 €",
    mon_ado: "29 €",
    livre: "dès 10,99 €"
  }
};
