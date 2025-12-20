"use client";
import Image from 'next/image';

import { BetterAuthSignIn } from './better-auth-signin';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useSession } from '@/lib/auth-client';

export type Message = {
  sender: 'user' | 'me';
  name: string;
  avatar: string;
  content: string;
  time: string;
};

export function ChatInterface() {
  const { data } = useSession();
  const user = data?.user?.name || null;
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    fetch(`/api/chat?user=${user}`)
      .then(res => res.json())
      .then(data => setMessages(data.messages || []));
  }, [user]);

  const handleSend = async () => {
    if (!input.trim() || !user) return;
    setLoading(true);
    const newMsg: Message = {
      sender: 'user',
      name: 'Siz', // "You" yerine "Siz"
      avatar: '/avatar-user.png',
      content: input,
      time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }), // Türkçe saat formatı
    };
    await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, message: newMsg }),
    });
    setMessages(prev => [...prev, newMsg]);
    setInput('');
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-primary/5 via-background/50 to-background/20 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              Sohbet Geçmişi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!user && (
              <BetterAuthSignIn />
            )}
            <div className="flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={
                    msg.sender === 'me'
                      ? 'flex justify-end'
                      : 'flex justify-start'
                  }
                >
                  <div className="flex items-end gap-2 max-w-[70%]">
                    {msg.sender === 'user' && (
                      <Image src={msg.avatar} alt={msg.name} width={32} height={32} className="h-8 w-8 rounded-full border border-border object-cover" />
                    )}
                    <div
                      className={
                        msg.sender === 'me'
                          ? 'bg-primary text-primary-foreground rounded-lg px-4 py-2 shadow-md'
                          : 'bg-muted text-foreground rounded-lg px-4 py-2 shadow-md'
                      }
                    >
                      <div className="text-xs font-semibold mb-1">
                        {msg.name} <span className="text-muted-foreground ml-1">{msg.time}</span>
                      </div>
                      <div className="text-sm leading-relaxed">{msg.content}</div>
                    </div>
                    {msg.sender === 'me' && (
                      <Image src={msg.avatar} alt={msg.name} width={32} height={32} className="h-8 w-8 rounded-full border border-border object-cover" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            {user && (
              <div className="flex gap-2 mt-4">
                <input
                  type="text"
                  className="flex-1 rounded-lg border border-border px-3 py-2 text-sm bg-background focus:ring-1 focus:ring-primary outline-none"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Mesajınızı yazın..."
                  disabled={loading}
                />
                <Button size="sm" onClick={handleSend} disabled={loading || !input.trim()}>
                  {loading ? 'Gönderiliyor...' : 'Gönder'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Ek Bilgi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <Card className="inline-block bg-gradient-to-r from-secondary/5 to-primary/5 border-border/50 p-6">
          <CardContent className="p-0 space-y-3">
            <h3 className="font-semibold">E-posta ile mi ulaşmak istersiniz?</h3>
            <p className="text-sm text-muted-foreground">
              Daha resmi görüşmeler için bana doğrudan e-posta yoluyla da ulaşabilirsiniz.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="mailto:acevyns@haycraft.com.tr">
                E-posta Gönder
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}