import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }) => {
  const isPositive = trend === "up";

  return (
    <motion.div whileHover={{ y: -5 }} className="card p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
          <Icon className={color.replace("bg-", "text-")} size={24} />
        </div>
        <div
          className={`flex items-center gap-1 text-sm font-medium ${isPositive ? "text-emerald-600" : "text-rose-600"}`}
        >
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          {trendValue}
        </div>
      </div>

      <div>
        <p className="text-slate-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
      </div>
    </motion.div>
  );
};

export default StatCard;
