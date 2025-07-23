'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react'

export default function TradingChart() {
  const [activeTab, setActiveTab] = useState('BTC')
  const [timeframe, setTimeframe] = useState('1D')

  // Mock data for different cryptocurrencies
  const cryptoData = {
    BTC: {
      name: 'Bitcoin',
      price: 42850.67,
      change: 2.45,
      volume: '1.2B',
      data: Array.from({ length: 24 }, (_, i) => ({
        time: `${i}:00`,
        price: 42000 + Math.random() * 2000 + Math.sin(i * 0.5) * 500,
        volume: Math.random() * 100 + 50,
      }))
    },
    ETH: {
      name: 'Ethereum',
      price: 2845.32,
      change: -1.23,
      volume: '800M',
      data: Array.from({ length: 24 }, (_, i) => ({
        time: `${i}:00`,
        price: 2800 + Math.random() * 200 + Math.sin(i * 0.3) * 100,
        volume: Math.random() * 80 + 40,
      }))
    },
    ADA: {
      name: 'Cardano',
      price: 0.4567,
      change: 5.67,
      volume: '120M',
      data: Array.from({ length: 24 }, (_, i) => ({
        time: `${i}:00`,
        price: 0.45 + Math.random() * 0.1 + Math.sin(i * 0.7) * 0.02,
        volume: Math.random() * 60 + 20,
      }))
    }
  }

  const currentData = cryptoData[activeTab as keyof typeof cryptoData]
  const isPositive = currentData.change > 0

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass rounded-lg p-4 border border-white/20">
          <p className="text-gray-300 text-sm">{`Heure: ${label}`}</p>
          <p className="text-white font-semibold">
            {`Prix: $${payload[0].value.toFixed(2)}`}
          </p>
          {payload[1] && (
            <p className="text-gray-300 text-sm">
              {`Volume: ${payload[1].value.toFixed(1)}M`}
            </p>
          )}
        </div>
      )
    }
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="card max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Trading Live</h3>
          <p className="text-gray-400">Analyse en temps réel powered by IA</p>
        </div>

        {/* Crypto Tabs */}
        <div className="flex space-x-2">
          {Object.keys(cryptoData).map((crypto) => (
            <motion.button
              key={crypto}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(crypto)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === crypto
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {crypto}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 rounded-lg p-4 border border-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Prix Actuel</p>
              <p className="text-xl font-bold text-white">
                ${currentData.price.toLocaleString()}
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-purple-400" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 rounded-lg p-4 border border-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Variation 24h</p>
              <p className={`text-xl font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? '+' : ''}{currentData.change}%
              </p>
            </div>
            {isPositive ? (
              <TrendingUp className="w-8 h-8 text-green-400" />
            ) : (
              <TrendingDown className="w-8 h-8 text-red-400" />
            )}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 rounded-lg p-4 border border-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Volume 24h</p>
              <p className="text-xl font-bold text-white">{currentData.volume}</p>
            </div>
            <Activity className="w-8 h-8 text-cyan-400" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 rounded-lg p-4 border border-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Signal IA</p>
              <p className="text-xl font-bold text-green-400">ACHAT</p>
            </div>
            <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Chart */}
      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-lg font-semibold text-white">
            {currentData.name} - {timeframe}
          </h4>
          <div className="flex space-x-2">
            {['1H', '1D', '1W', '1M'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 rounded text-sm transition-all ${
                  timeframe === tf
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={currentData.data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="time" 
              stroke="#9CA3AF" 
              fontSize={12}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              stroke="#9CA3AF" 
              fontSize={12}
              axisLine={false}
              tickLine={false}
              domain={['dataMin - 50', 'dataMax + 50']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#a855f7"
              strokeWidth={2}
              fill="url(#colorPrice)"
              dot={false}
              activeDot={{ r: 6, fill: '#a855f7', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-lg p-6 border border-purple-500/20"
      >
        <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3" />
          Analyse IA en Temps Réel
        </h5>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-300">
              <span className="text-green-400 font-semibold">Signal d'achat détecté:</span> L'IA recommande une position longue sur {currentData.name} avec un potentiel de gain de +15% sur 7 jours.
            </p>
          </div>
          <div>
            <p className="text-gray-300">
              <span className="text-purple-400 font-semibold">Confiance:</span> 87% - Basé sur l'analyse de 50+ indicateurs techniques et sentiments du marché.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}