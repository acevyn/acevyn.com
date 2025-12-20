"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config'

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <Card className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-0 overflow-hidden">

        <CardHeader className="relative z-10 flex flex-col items-center justify-center gap-4 pt-8 pb-2">
          <div className="relative w-48 h-48 overflow-hidden border-4 border-primary shadow-xl bg-background">
            <Image
              src={siteConfig.author_img}
              alt={`${siteConfig.author} profile`}
              width={192}
              height={192}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
            {/* SaaS tarzı arka plan efekti */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-gradient-radial from-primary/30 to-transparent rounded-lg blur-2xl opacity-40 dark:opacity-60" />
              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-secondary/30 to-transparent rounded-lg blur-xl opacity-30 dark:opacity-50" />
            </div>
          </div>
          <div className="text-center text-3xl font-extrabold text-primary mt-4">Arda Demir</div>
        </CardHeader>

        <CardContent className="space-y-4 relative z-10">
          <p className="text-muted-foreground leading-relaxed">
            Merhaba, ben Arda Demir. Modern ve ölçeklenebilir web uygulamaları geliştirmeye odaklanmış, tutkulu bir tam donanımlı (full-stack) yazılımcı ve SaaS meraklısıyım. TypeScript, React ve Next.js konusundaki sağlam temellerimle, fikirleri kullanıcıları mutlu eden ve iş büyümesini sağlayan estetik, yüksek performanslı ürünlere dönüştürmeyi seviyorum.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Teknoloji yolculuğum, sistemlerin nasıl çalıştığına dair duyduğum merak ve gerçek dünyadaki sorunları çözme tutkumla başladı. Yıllar içinde start-up&apos;lar ve global ekiplerle iş birliği yaparak e-ticaret, verimlilik ve geliştirici araçları alanlarında sağlam çözümler sundum. Temiz kod yazımına, düşünceli tasarıma ve sürekli öğrenmeye yürekten inanıyorum.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Kod yazmadığım zamanlarda yeni framework&apos;leri keşfediyor, açık kaynak projelere katkıda bulunuyor veya yazılım topluluğuyla deneyimlerimi paylaşıyorum. Hadi bağlantı kuralım ve birlikte harika bir şeyler inşa edelim!
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}