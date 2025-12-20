import Link from 'next/link';

export function FooterSection() {
  return (
    <footer className="pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-12 text-muted-foreground px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <nav aria-label="Alt bilgi navigasyonu">
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <Link href="/sitemap.xml" className="text-primary hover:underline">Site Haritası</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-primary hover:underline">Gizlilik Politikası</Link>
            </li>
            <li>
              <Link href="/refund-policy" className="text-primary hover:underline">İade Politikası</Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-primary hover:underline">Hizmet Şartları</Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary hover:underline">İletişim</Link>
            </li>
          </ul>
        </nav>

        <p className="text-sm">
          <a href="https://nextjs.org" className="text-primary hover:underline">Next.js</a> &amp;{' '}
          <a href="https://tailwindcss.com" className="text-primary hover:underline">Tailwind CSS</a> ile geliştirildi
        </p>

        <p className="text-xs text-center">&copy; 2025 Arda Demir. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}