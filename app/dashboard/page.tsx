'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  Activity, 
  Eye,
  EyeOff,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Zap
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function Dashboard() {
  const [balanceVisible, setBalanceVisible] = useState(true)

  // Mock portfolio data
  const portfolioData = {
    totalBalance: 45682.34,
    totalPnL: 18234.56,
    pnlPercentage: 67.8,
    dayChange: 1234.56,
    dayChangePercentage: 2.84
  }

  const cryptoHoldings = [
    { symbol: 'BTC', name: 'Bitcoin', amount: 0.8456, value: 35482.67, change: 3.2, allocation: 40 },
    { symbol: 'ETH', name: 'Ethereum', amount: 5.2341, value: 15823.45, change: -1.8, allocation: 35 },
    { symbol: 'ADA', name: 'Cardano', amount: 12850.5, value: 5876.22, change: 5.4, allocation: 15 },
    { symbol: 'SOL', name: 'Solana', amount: 45.8, value: 3500.0, change: -2.1, allocation: 10 }
  ]

  const chartData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    value: 27000 + Math.random() * 20000 + Math.sin(i * 0.2) * 5000,
  }))

  const recentTrades = [
    { id: 1, type: 'buy', crypto: 'BTC', amount: '0.05', price: '$42,850', time: '2 min ago', profit: '+$234.56' },
    { id: 2, type: 'sell', crypto: 'ETH', amount: '2.5', price: '$2,845', time: '15 min ago', profit: '+$187.23' },
    { id: 3, type: 'buy', crypto: 'ADA', amount: '1000', price: '$0.456', time: '1h ago', profit: '+$45.78' },
    { id: 4, type: 'sell', crypto: 'SOL', amount: '10', price: '$76.50', time: '2h ago', profit: '+$89.12' },
  ]

  const COLORS = ['#a855f7', '#06b6d4', '#10b981', '#f59e0b']

  const pieData = cryptoHoldings.map((holding, index) => ({
    name: holding.symbol,
    value: holding.allocation,
    color: COLORS[index]
  }))

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
            <h1 className="text-4xl font-bold text-gradient mb-2">Dashboard</h1>
            <p className="text-gray-400">Gérez votre portfolio et suivez vos performances</p>
          </motion.div>

          {/* Portfolio Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="card">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Portfolio Total</h3>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <span className="text-3xl font-bold text-white mr-3">
                          {balanceVisible ? `$${portfolioData.totalBalance.toLocaleString()}` : '••••••'}
                        </span>
                        <button
                          onClick={() => setBalanceVisible(!balanceVisible)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {balanceVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className={`flex items-center text-sm ${portfolioData.dayChangePercentage > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {portfolioData.dayChangePercentage > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {portfolioData.dayChangePercentage > 0 ? '+' : ''}{portfolioData.dayChangePercentage}% 
                        ({portfolioData.dayChangePercentage > 0 ? '+' : ''}${portfolioData.dayChange.toLocaleString()}) aujourd'hui
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Nouveau Trade
                  </motion.button>
                </div>

                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                      <XAxis 
                        dataKey="day" 
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
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(0, 0, 0, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px'
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#a855f7"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 6, fill: '#a855f7' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>

            {/* Portfolio Allocation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Allocation</h3>
              <div className="flex justify-center mb-6">
                <PieChart width={200} height={200}>
                  <Pie
                    data={pieData}
                    cx={100}
                    cy={100}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
              <div className="space-y-3">
                {cryptoHoldings.map((holding, index) => (
                  <div key={holding.symbol} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[index] }} />
                      <span className="text-gray-300">{holding.symbol}</span>
                    </div>
                    <span className="text-white font-semibold">{holding.allocation}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Holdings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card mb-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Mes Holdings</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-gray-400 font-medium py-3">Actif</th>
                    <th className="text-right text-gray-400 font-medium py-3">Quantité</th>
                    <th className="text-right text-gray-400 font-medium py-3">Valeur</th>
                    <th className="text-right text-gray-400 font-medium py-3">24h</th>
                    <th className="text-right text-gray-400 font-medium py-3">Allocation</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoHoldings.map((holding, index) => (
                    <motion.tr
                      key={holding.symbol}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4">
                        <div>
                          <div className="font-semibold text-white">{holding.symbol}</div>
                          <div className="text-sm text-gray-400">{holding.name}</div>
                        </div>
                      </td>
                      <td className="text-right py-4 text-white">{holding.amount}</td>
                      <td className="text-right py-4 text-white font-semibold">${holding.value.toLocaleString()}</td>
                      <td className="text-right py-4">
                        <span className={`flex items-center justify-end ${holding.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {holding.change > 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                          {holding.change > 0 ? '+' : ''}{holding.change}%
                        </span>
                      </td>
                      <td className="text-right py-4 text-white">{holding.allocation}%</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Recent Trades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Trades Récents</h3>
              <button className="text-purple-400 hover:text-purple-300 transition-colors">
                Voir tout
              </button>
            </div>
            <div className="space-y-4">
              {recentTrades.map((trade, index) => (
                <motion.div
                  key={trade.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      trade.type === 'buy' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {trade.type === 'buy' ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {trade.type === 'buy' ? 'Achat' : 'Vente'} {trade.crypto}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {trade.amount} {trade.crypto} à {trade.price}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-semibold">{trade.profit}</div>
                    <div className="text-gray-400 text-sm">{trade.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}