import React, { useState } from "react";
import { motion } from "motion/react";
import { User, Rocket, MessageCircle, Wifi, ChevronRight } from "lucide-react";
import WebViewModal from "./WebViewModal";

export default function Home() {
  const [isCentralOpen, setIsCentralOpen] = useState(false);

  const handleSpeedTest = () => {
    window.open("https://play.google.com/store/apps/details?id=org.zwanoo.android.speedtest&hl=pt_BR", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5584987593174", "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white p-6 pt-12 rounded-b-3xl shadow-lg">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-3 mb-2"
        >
          <div className="bg-white/20 p-2 rounded-xl">
            <Wifi size={24} className="text-primary-light" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">MARANATA CONNECT</h1>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mt-4">Bem-vindo ao App Maranata Connect</h2>
          <p className="text-white/70 text-sm mt-1">Conectando você ao que importa.</p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 -mt-4">
        <div className="grid gap-4">
          {/* Central do Assinante */}
          <MenuCard
            icon={<User size={28} />}
            title="Central do Assinante"
            description="Acesse suas faturas, boletos e dados do contrato"
            onClick={() => setIsCentralOpen(true)}
            color="bg-blue-600"
            delay={0.3}
          />

          {/* Teste de Velocidade */}
          <MenuCard
            icon={<Rocket size={28} />}
            title="Teste de Velocidade"
            description="Teste a velocidade da sua internet"
            onClick={handleSpeedTest}
            color="bg-emerald-600"
            delay={0.4}
          />

          {/* Suporte WhatsApp */}
          <MenuCard
            icon={<MessageCircle size={28} />}
            title="Suporte WhatsApp"
            description="Fale com nosso suporte"
            onClick={handleWhatsApp}
            color="bg-green-500"
            delay={0.5}
          />
        </div>

        {/* Info Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm"
        >
          <h3 className="font-bold text-slate-800 mb-2">Dica de Conexão</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Para garantir a melhor velocidade, procure estar próximo ao seu roteador Wi-Fi ou utilize uma conexão via cabo.
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-slate-400 text-xs">
        <p>© 2026 Maranata Connect. Todos os direitos reservados.</p>
      </footer>

      {/* WebView Modal */}
      <WebViewModal
        isOpen={isCentralOpen}
        onClose={() => setIsCentralOpen(false)}
        url="https://maranata.sgp.net.br/accounts/central/login"
        title="Central do Assinante"
      />
    </div>
  );
}

interface MenuCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  color: string;
  delay: number;
}

function MenuCard({ icon, title, description, onClick, color, delay }: MenuCardProps) {
  return (
    <motion.button
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 text-left group hover:border-primary/20 transition-all"
    >
      <div className={`${color} p-3 rounded-xl text-white shadow-md group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
        <p className="text-slate-500 text-sm leading-tight">{description}</p>
      </div>
      <ChevronRight size={20} className="text-slate-300 group-hover:text-primary transition-colors" />
    </motion.button>
  );
}
