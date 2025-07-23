'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Activity, 
  Zap,
  Target,
  Shield,
  AlertTriangle,
  Settings
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import TradingChart from '@/components/TradingChart'

export default function Trading() {
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market')
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')

  const marketData = [
    { symbol: 'BTC/USD', price: 42850.67, change: 2.45, volume: '1.2B' },
    { symbol: 'ETH/USD', price: 2845.32, change: -1.23, volume: '800M' },
    { symbol: 'ADA/USD', price: 0.4567, change: 5.67, volume: '120M' },
    { symbol: 'SOL/USD', price: 76.50, change: -2.1, volume: '95M' },
    { symbol: 'DOT/USD', price: 6.78, change: 3.4, volume: '45M' },
  ]

  const aiSignals = [
    { symbol: 'BTC', signal: 'STRONG BUY', confidence: 94, target: '+15%', timeframe: '7d' },
    { symbol: 'ETH', signal: 'BUY', confidence: 78, target: '+8%', timeframe: '5d' },
    { symbol: 'ADA', signal: 'HOLD', confidence: 65, target: '+3%', timeframe: '3d' },
    { symbol: 'SOL', signal: 'SELL', confidence: 82, target: '-5%', timeframe: '2d' },
  ]

  const getSignalColor = (signal: string) => {
    switch (signal) {
      case 'STRONG BUY': return 'text-green-400 bg-green-400/10'
      case 'BUY': return 'text-green-300 bg-green-300/10'
      case 'HOLD': return 'text-yellow-400 bg-yellow-400/10'
      case 'SELL': return 'text-red-400 bg-red-400/10'
      default: return 'text-gray-400 bg-gray-400/10'
    }
  }

  const handleTrade = () => {
    console.log('Executing trade:', { orderType, tradeType, amount, price })
    // Here you would integrate with your trading API
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-cyan-900/10">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-gradient mb-2">Centre de Trading</h1>
            <p className="text-gray-400">Trading crypto intelligent avec analyse IA en temps réel</p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Main Chart */}
            <div className="xl:col-span-3 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <TradingChart />
              </motion.div>

              {/* Market Data */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Marchés Crypto</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-gray-400 font-medium py-3">Paire</th>
                        <th className="text-right text-gray-400 font-medium py-3">Prix</th>
                        <th className="text-right text-gray-400 font-medium py-3">24h</th>
                        <th className="text-right text-gray-400 font-medium py-3">Volume</th>
                        <th className="text-center text-gray-400 font-medium py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketData.map((market, index) => (
                        <motion.tr
                          key={market.symbol}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-4">
                            <span className="font-semibold text-white">{market.symbol}</span>
                          </td>
                          <td className="text-right py-4 text-white font-semibold">
                            ${market.price.toLocaleString()}
                          </td>
                          <td className="text-right py-4">
                            <span className={`flex items-center justify-end ${market.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {market.change > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                              {market.change > 0 ? '+' : ''}{market.change}%
                            </span>
                          </td>
                          <td className="text-right py-4 text-gray-300">{market.volume}</td>
                          <td className="text-center py-4">
                            <button className="btn-primary text-sm px-4 py-2">
                              Trade
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            {/* Trading Panel */}
            <div className="space-y-6">
              {/* Order Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Nouvel Ordre</h3>
                
                {/* Trade Type */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <button
                    onClick={() => setTradeType('buy')}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                      tradeType === 'buy'
                        ? 'bg-green-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    Acheter
                  </button>
                  <button
                    onClick={() => setTradeType('sell')}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                      tradeType === 'sell'
                        ? 'bg-red-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    Vendre
                  </button>
                </div>

                {/* Order Type */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <button
                    onClick={() => setOrderType('market')}
                    className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      orderType === 'market'
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    Marché
                  </button>
                  <button
                    onClick={() => setOrderType('limit')}
                    className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      orderType === 'limit'
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    Limite
                  </button>
                </div>

                {/* Amount Input */}
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-2">Montant</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                    <span className="absolute right-3 top-3 text-gray-400 text-sm">USD</span>
                  </div>
                </div>

                {/* Price Input (for limit orders) */}
                {orderType === 'limit' && (
                  <div className="mb-4">
                    <label className="block text-gray-400 text-sm mb-2">Prix Limite</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="0.00"
                        className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                      <span className="absolute right-3 top-3 text-gray-400 text-sm">USD</span>
                    </div>
                  </div>
                )}

                {/* Execute Button */}
                <button
                  onClick={handleTrade}
                  disabled={!amount || (orderType === 'limit' && !price)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                    tradeType === 'buy'
                      ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white'
                      : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <Zap className="w-5 h-5 inline mr-2" />
                  {tradeType === 'buy' ? 'Acheter' : 'Vendre'} {orderType === 'market' ? 'au Marché' : 'Limite'}
                </button>

                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-400 text-sm flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Trade simulé activé
                  </p>
                </div>
              </motion.div>

              {/* AI Signals */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3" />
                  Signaux IA
                </h3>
                <div className="space-y-4">
                  {aiSignals.map((signal, index) => (
                    <motion.div
                      key={signal.symbol}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-white">{signal.symbol}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getSignalColor(signal.signal)}`}>
                          {signal.signal}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Confiance: {signal.confidence}%</span>
                        <span>Cible: {signal.target}</span>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Horizon: {signal.timeframe}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Trading Rapide</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Solde Disponible</span>
                    <span className="text-white font-semibold">$12,456.78</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">P&L Aujourd'hui</span>
                    <span className="text-green-400 font-semibold">+$345.67</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Ordres Actifs</span>
                    <span className="text-white font-semibold">3</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 btn-secondary flex items-center justify-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Paramètres IA
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}