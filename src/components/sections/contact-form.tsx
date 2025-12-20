"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

function Toast({ message, open }: { message: string; open: boolean }) {
  if (!open) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 rounded-md bg-slate-900 text-white px-4 py-2 shadow-md">
      {message}
    </div>
  );
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, message: '' });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(form.action || 'https://formspree.io/f/myzynpbr', {
        method: form.method || 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setToast({ open: true, message: 'Mesaj gönderildi — teşekkürler! 1–3 gün içinde yanıt vereceğim.' });
        form.reset();
      } else {
        setToast({ open: true, message: 'Bir şeyler ters gitti. Lütfen daha sonra tekrar deneyin.' });
      }
    } catch {
      setToast({ open: true, message: 'Ağ hatası oluştu. Lütfen tekrar deneyin.' });
    } finally {
      setLoading(false);
      window.setTimeout(() => setToast({ open: false, message: '' }), 5000);
    }
  }

  return (
    <>
      <form action="https://formspree.io/f/myzynpbr" method="POST" className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Ad Soyad</Label>
          <Input id="name" name="name" type="text" placeholder="Tam adınız" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-posta</Label>
          <Input id="email" name="email" type="email" placeholder="e-posta@ornek.com" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Mesaj</Label>
          <Textarea id="message" name="message" rows={6} placeholder="Projenizden bahsedin veya bir soru sorun" required />
        </div>

        {/* Önerilen Formspree alanları */}
        <input type="hidden" name="_subject" value="Web sitesinden yeni iletişim formu mesajı" />
        <div className="flex items-center gap-3">
          <Button type="submit" disabled={loading}>{loading ? 'Gönderiliyor...' : 'Mesaj gönder'}</Button>
          <p className="text-sm text-muted-foreground">Genellikle 2 iş günü içinde yanıt veririm.</p>
        </div>
      </form>

      <Toast open={toast.open} message={toast.message} />
    </>
  );
}