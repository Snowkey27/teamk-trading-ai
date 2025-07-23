# 🚀 TeamK Trading AI

Application de trading crypto intelligente avec analyse IA en temps réel.

## 🎯 Objectif
Transformer un dépôt initial de 20€ en 27,000€ grâce à l'intelligence artificielle.

## ✨ Aperçu du Site

Le site web a été entièrement refondu avec une interface moderne, dynamique et fluide comprenant :

### 🏠 Page d'Accueil
- **Hero Section** avec animations fluides et effets de parallaxe
- **Statistiques en temps réel** avec compteurs animés
- **Graphiques interactifs** de trading crypto
- **Fonctionnalités avancées** présentées avec des animations
- **Design responsive** optimisé mobile et desktop

### 📊 Dashboard 
- **Portfolio overview** avec graphiques de performance
- **Holdings détaillés** avec allocation dynamique
- **Trades récents** avec historique complet
- **Métriques en temps réel** avec mise à jour automatique

### 💹 Interface de Trading
- **Graphiques avancés** avec données crypto en temps réel
- **Formulaires d'ordres** pour achats/ventes
- **Signaux IA** avec niveaux de confiance
- **Données de marché** mises à jour en direct

## 🛠️ Technologies
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Animations**: Framer Motion pour des transitions fluides
- **Charts**: Recharts pour les graphiques interactifs
- **Icons**: Lucide React pour les icônes modernes
- **Styling**: Glass morphism et gradients modernes
- **Backend**: Supabase (PostgreSQL + Auth + Real-time)
- **Hosting**: Vercel

## 📊 Fonctionnalités
- ✅ **Interface moderne** avec animations fluides
- ✅ **Dashboard temps réel** avec métriques live
- ✅ **Trading interface** professionnel
- ✅ **Analyse technique IA** avec signaux
- ✅ **Gestion de portfolio** complète
- ✅ **Alertes intelligentes** personnalisées
- ✅ **Trading simulé/réel** sécurisé
- ✅ **Design responsive** mobile-first
- ✅ **Thème sombre** optimisé
- ✅ **Glass morphism** moderne

## 🚀 Installation Locale

### Prérequis
- Node.js 18.17+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone <repository-url>
cd teamk-trading-ai

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

### Structure du Projet
```
teamk-trading-ai/
├── app/                    # Pages Next.js 14 (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── dashboard/         # Page dashboard
│   ├── trading/           # Interface de trading
│   └── globals.css        # Styles globaux
├── components/            # Composants réutilisables
│   ├── Navbar.tsx        # Navigation responsive
│   ├── TradingChart.tsx  # Graphiques trading
│   ├── StatsCounter.tsx  # Compteurs animés
│   └── LoadingScreen.tsx # Écran de chargement
├── lib/                   # Utilitaires
│   └── utils.ts          # Fonctions helpers
└── public/               # Assets statiques
```

## 🎨 Design Features

### Animations & Interactions
- **Hover effects** sur tous les éléments interactifs
- **Page transitions** fluides avec Framer Motion
- **Scroll animations** avec intersection observer
- **Loading states** avec spinners personnalisés
- **Micro-interactions** pour l'engagement utilisateur

### Thème Visuel
- **Palette de couleurs** : Purple/Cyan avec accents verts
- **Typography** : Inter font pour la lisibilité
- **Glass morphism** pour les cartes et modales
- **Gradients dynamiques** en arrière-plan
- **Shadows** et glows pour la profondeur

### Responsive Design
- **Mobile-first** approach
- **Breakpoints** optimisés pour tous les écrans
- **Navigation adaptative** avec menu hamburger
- **Grids flexibles** qui s'adaptent au contenu

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel

# Production
vercel --prod
```

### Build Manuel
```bash
# Build de production
npm run build

# Démarrage du serveur
npm start
```

## 🔧 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.js` :
```javascript
colors: {
  primary: { /* Purple palette */ },
  secondary: { /* Cyan palette */ },
  accent: { /* Green palette */ }
}
```

### Animations
Ajustez les animations dans `tailwind.config.js` :
```javascript
animation: {
  'float': 'float 6s ease-in-out infinite',
  'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
}
```

## 📱 Pages Disponibles

- **/** - Page d'accueil avec hero et features
- **/dashboard** - Dashboard portfolio et métriques
- **/trading** - Interface de trading avancée

## 🛡️ Sécurité

- **Simulation mode** activé par défaut
- **Input validation** sur tous les formulaires
- **Rate limiting** pour les API calls
- **HTTPS** enforced en production

## 📈 Performance

- **Core Web Vitals** optimisés
- **Image optimization** avec Next.js
- **Code splitting** automatique
- **Lazy loading** des composants
- **Caching** intelligent

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 License

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

## 📞 Support

- 📧 Email: support@teamk-ai.com
- 💬 Discord: [TeamK Community](discord-link)
- 📱 Twitter: [@TeamKAI](twitter-link)

---

**TeamK Trading AI** - L'avenir du trading crypto intelligent 🚀
