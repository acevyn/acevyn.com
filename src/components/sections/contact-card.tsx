"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/sections/contact-form';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function ContactCard() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* kartın arkasındaki hareketli hafif arka plan efekti */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl"
        transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
        aria-hidden
      />

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Bana Ulaşın</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">Projenizden bahsedin veya merak ettiğiniz bir soruyu sorun</p>
          </CardHeader>

          <CardContent>
            <div className="mb-6">
              <ContactForm />
            </div>

            <h3 className="mt-6 mb-3 text-lg sm:text-xl font-medium">Sıkça Sorulan Sorular</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger>Sizden ne kadar sürede yanıt alabilirim?</AccordionTrigger>
                <AccordionContent>Genellikle 1-3 iş günü içerisinde yanıt veriyorum. Sabrınız için teşekkür ederim.</AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger>Henüz bir geri dönüş almadım — ne yapmalıyım?</AccordionTrigger>
                <AccordionContent>
                  Henüz bir yanıt almadıysanız özür dilerim. Mesajınız gözden kaçmış olabilir veya yoğun bir dönemde olabilirim — lütfen durumu bildirmek için tekrar bir e-posta gönderin, mesajınıza öncelik vereceğim.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}