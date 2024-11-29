import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface MaritimeFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export default function MaritimeFeature({ icon: Icon, title, description, delay }: MaritimeFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group p-8 rounded-2xl bg-gradient-to-br from-navy-800/80 to-navy-700/80 backdrop-blur-sm hover:from-cyan-900/80 hover:to-navy-800/80 transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-cyan-400">{title}</h3>
      <p className="text-cyan-100">{description}</p>
    </motion.div>
  );
}