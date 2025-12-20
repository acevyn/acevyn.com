"use client";

import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Lock, Github } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge variant="outline" className="mb-6 bg-primary/5 text-primary border-primary/20">
          <MessageCircle className="mr-1 h-3 w-3" />
          Özel Sohbet
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
          Hadi{' '}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Konuşalım
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          GitHub Discussions üzerinden benimle bire bir özel bir görüşme yapın. 
          Başlamak için GitHub hesabınızla giriş yapın. Tüm görüşmeler özel ve güvenlidir.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center gap-6 mt-8"
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Lock className="h-4 w-4" />
          <span>Gizli ve Güvenli</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Github className="h-4 w-4" />
          <span>GitHub Kimlik Doğrulaması</span>
        </div>
      </motion.div>
    </div>
  );
}