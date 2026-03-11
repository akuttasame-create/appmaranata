import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface WebViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export default function WebViewModal({ isOpen, onClose, url, title }: WebViewModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col bg-white"
        >
          <div className="flex items-center justify-between p-4 border-bottom bg-primary text-white">
            <h2 className="font-semibold">{title}</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 relative">
            <iframe 
              src={url} 
              className="absolute inset-0 w-full h-full border-none"
              title={title}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
