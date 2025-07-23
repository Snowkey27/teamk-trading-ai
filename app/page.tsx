'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  Wallet, 
  Bell, 
  Smartphone,
  ArrowRight,
  Play,
  Star,
  CheckCircle
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import TradingChart from '@/components/TradingChart'
import StatsCounter from '@/components/StatsCounter'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const features = [
    {
      icon: Brain,
      title: "IA Avancée",
      description: "Algorithmes d'intelligence artificielle pour analyser les marchés crypto en temps réel"
    },
    {
      icon: TrendingUp,
      title: "Trading Automatisé",
      description: "Exécution automatique des trades basée sur des signaux IA ultra-précis"
    },
    {
      icon: Shield,
      title: "Sécurité Maximum",
      description: "Protection avancée de vos fonds avec authentification multi-facteurs"
    },
    {
      icon: Zap,
      title: "Ultra Rapide",
      description: "Exécution des ordres en millisecondes pour ne manquer aucune opportunité"
    },
    {
      icon: BarChart3,
      title: "Analytics Pro",
      description: "Tableaux de bord détaillés avec métriques de performance en temps réel"
    },
    {
      icon: Bell,
      title: "Alertes Intelligentes",
      description: "Notifications personnalisées basées sur vos stratégies de trading"
    }
  ]

  const stats = [
    { label: "Taux de Réussite", value: 94, suffix: "%" },
    { label: "Utilisateurs Actifs", value: 12500, suffix: "+" },
    { label: "Volume Traité", value: 2.4, suffix: "M€" },
    { label: "Gain Moyen", value: 247, suffix: "%" }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">TeamK Trading AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transformez <span className="text-accent-400 font-semibold">20€</span> en{' '}
              <span className="text-accent-400 font-semibold">27,000€</span> grâce à l'intelligence artificielle
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Notre IA analyse les marchés crypto 24/7 pour identifier les meilleures opportunités de trading et maximiser vos profits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group"
              >
                Commencer Maintenant
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary group"
              >
                <Play className="mr-2 w-5 h-5" />
                Voir la Démo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="card text-center"
                >
                  <StatsCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Trading Chart Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trading <span className="text-gradient">en Temps Réel</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Visualisez les performances de notre IA sur les marchés crypto avec des graphiques interactifs et des données en temps réel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <TradingChart />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fonctionnalités <span className="text-gradient">Avancées</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez les outils puissants qui font de TeamK Trading AI la plateforme de référence pour le trading crypto automatisé.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:glow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à <span className="text-gradient">Révolutionner</span> votre Trading ?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Rejoignez des milliers de traders qui font déjà confiance à notre IA pour maximiser leurs profits crypto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Démarrer Gratuitement
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Parler à un Expert
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span>Essai gratuit 14 jours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span>Aucune carte bancaire requise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span>Support 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient mb-4">TeamK Trading AI</h3>
            <p className="text-gray-400 mb-6">L'avenir du trading crypto intelligent</p>
            <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
              <span>© 2024 TeamK. Tous droits réservés.</span>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}