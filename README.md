# Portfolio Professionnel

Un portfolio moderne et responsive créé avec React, TypeScript et Tailwind CSS.

## Fonctionnalités

- ✨ Design moderne et responsive
- 📱 Compatible mobile et desktop
- 🎨 Animations fluides avec Framer Motion
- 📧 Formulaire de contact fonctionnel
- 🚀 Optimisé pour les performances
- 🔧 TypeScript pour une meilleure maintenabilité

## Configuration du formulaire de contact

Le formulaire de contact utilise Supabase Edge Functions pour envoyer les emails de manière sécurisée.

### Étapes de configuration :

1. **Créer un compte Supabase** (si pas déjà fait)
2. **Créer un compte Resend** pour l'envoi d'emails : https://resend.com
3. **Configurer les variables d'environnement** :
   - Copier `.env.example` vers `.env`
   - Remplir les variables Supabase
   - Ajouter votre clé API Resend

### Variables d'environnement requises :

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_cle_anon_supabase
RESEND_API_KEY=votre_cle_api_resend
```

### Configuration Resend :

1. Créez un compte sur [Resend](https://resend.com)
2. Vérifiez votre domaine (ou utilisez le domaine de test)
3. Générez une clé API
4. Ajoutez la clé dans les variables d'environnement Supabase

## Installation et développement

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build pour la production
npm run build
```

## Déploiement

Le site peut être déployé sur Netlify, Vercel, ou tout autre service d'hébergement statique.

Pour Netlify :
1. Connectez votre repository
2. Configurez les variables d'environnement
3. Le site se déploiera automatiquement

## Structure du projet

```
src/
├── components/          # Composants React
│   ├── Header.tsx      # Navigation
│   ├── Hero.tsx        # Section héro
│   ├── About.tsx       # À propos
│   ├── Skills.tsx      # Compétences
│   ├── Projects.tsx    # Projets
│   ├── Contact.tsx     # Contact
│   └── Footer.tsx      # Pied de page
├── App.tsx             # Composant principal
└── main.tsx           # Point d'entrée

supabase/
└── functions/
    └── send-contact-email/  # Function d'envoi d'email
        └── index.ts
```

## Personnalisation

1. **Informations personnelles** : Modifiez les composants pour ajouter vos informations
2. **Projets** : Ajoutez vos projets dans `Projects.tsx`
3. **Compétences** : Personnalisez vos compétences dans `Skills.tsx`
4. **Couleurs** : Modifiez les couleurs dans `tailwind.config.js`

## Support

Pour toute question ou problème, contactez : charlesyao1602@gmail.com