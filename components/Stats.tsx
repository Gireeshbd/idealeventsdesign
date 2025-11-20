import React from 'react';
import { STATS } from '../constants';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const chartData = [
  { name: '2020', events: 120 },
  { name: '2021', events: 180 },
  { name: '2022', events: 250 },
  { name: '2023', events: 380 },
  { name: '2024', events: 520 },
  { name: '2025', events: 650 },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-yellow-500">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-white font-bold mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Chart Visualization */}
        <div className="mt-12 bg-slate-950 p-8 border border-white/5 shadow-2xl max-w-4xl mx-auto">
           <div className="text-center mb-8">
              <h3 className="text-2xl font-serif text-white mb-2">Our Growth Story</h3>
              <p className="text-gray-400 text-sm">Consistency in delivering excellence year after year.</p>
           </div>
           <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis 
                  dataKey="name" 
                  stroke="#64748b" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}
                  itemStyle={{ color: '#fbbf24' }}
                />
                <Bar dataKey="events" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? '#d4af37' : '#475569'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
           </div>
        </div>

      </div>
    </section>
  );
};
