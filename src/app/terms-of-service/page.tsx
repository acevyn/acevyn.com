import React from "react";
import Link from "next/link";
import { siteConfig, buildMetadata } from "@/config/site.config";

export const metadata = buildMetadata({
  title: `Hizmet Şartları | ${siteConfig.siteName}`,
  description: 'Hizmet Şartları — yasal koşullar, ödemeler ve uyuşmazlıkların çözümü.',
});

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <main className="max-w-5xl mx-auto pt-20 sm:pt-24 pb-12 px-4">
      <div className="transition-all duration-300 ease-out">
        <Card>
          <CardHeader>
            <CardTitle>Hizmet Şartları</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-base lg:text-lg space-y-4">
              <p className="text-sm text-muted-foreground mb-4">Son güncelleme: 20 Ağustos 2025.</p>

              <p className="mb-4">
                Bu Hizmet Şartları (&quot;Şartlar&quot;), HayCraft Inc. (&quot;biz&quot;, &quot;bize&quot;) tarafından sahip olunan ve işletilen acevyn.com ve hayccraft.com.tr (&quot;Siteler&quot;) adreslerine erişiminizi ve kullanımınızı düzenler. Sitelere erişerek, kullanarak veya hizmet satın alarak, bu Şartlara ve bizimle imzaladığınız her türlü ayrı sözleşmeye bağlı kalmayı kabul etmiş olursunuz.
              </p>
              <p className="mb-4 text-sm">
                Bu Şartlar ayrıca Arda Demir (şahsen) veya HayCraft Inc. tarafından sahip olunan, işletilen veya sunulan diğer tüm web siteleri, alan adları, uygulamalar, hizmetler, ürünler veya dijital mülkler için de geçerlidir. Geçerli olduğu durumlarda &quot;biz&quot;, &quot;bize&quot; veya &quot;bizim&quot; ifadeleri hem Arda Demir&apos;ı hem de HayCraft Inc.&apos;i kapsar.
              </p>

              <p className="mb-2 text-sm font-medium">Asgari veri toplama beyanı</p>
              <p className="mb-2 text-sm">İstediğiniz bir hizmeti sağlamak için gerekli olmadıkça, yasalarca zorunlu tutulmadıkça veya siz gönüllü olarak sağlamadıkça sizinle ilgili kişisel ayrıntıları toplamıyoruz.</p>

              <h3 id="toc" className="text-lg font-medium mt-6">İçindekiler</h3>
              <ul className="list-disc list-inside my-3 space-y-1 text-sm">
                <li><Link href="#acceptance" className="underline text-primary">Şartların Kabulü</Link></li>
                <li><Link href="#services" className="underline text-primary">Hizmetler ve Teklifler</Link></li>
                <li><Link href="#payments" className="underline text-primary">Ödemeler</Link></li>
                <li><Link href="#refunds" className="underline text-primary">İadeler</Link></li>
                <li><Link href="#user-content" className="underline text-primary">Kullanıcı İçeriği</Link></li>
                <li><Link href="#limitation" className="underline text-primary">Sorumluluğun Sınırlandırılması</Link></li>
                <li><Link href="#termination" className="underline text-primary">Fesih</Link></li>
                <li><Link href="#governing" className="underline text-primary">Uygulanacak Hukuk ve Uyuşmazlık Çözümü</Link></li>
                <li><Link href="#changes" className="underline text-primary">Şartlardaki Değişiklikler</Link></li>
                <li><Link href="#contact" className="underline text-primary">İletişim</Link></li>
              </ul>

              <h4 id="acceptance" className="mt-4 font-semibold">Şartların Kabulü</h4>
              <p className="mb-2 text-sm">Sitelere erişerek bu Şartları kabul etmiş olursunuz. Kabul etmiyorsanız, Siteleri kullanmayınız.</p>

              <h4 id="services" className="mt-4 font-semibold">Hizmetler ve Teklifler</h4>
              <p className="mb-2 text-sm">Danışmanlık, proje çalışması veya diğer hizmetleri sağlayabiliriz. Belirli kapsamlar, teslimatlar, zaman çizelgeleri ve fiyatlar ayrı sözleşmelere veya tekliflere tabidir.</p>

              <h4 id="payments" className="mt-4 font-semibold">Ödemeler</h4>
              <p className="mb-2 text-sm">Hizmet ödemeleri, ilgili fatura veya teklifte belirtildiği şekilde yapılmalıdır. Satın alma sırasında belirtilen yöntemlerle (örneğin banka havalesi, üçüncü taraf ağ geçitleri üzerinden kart ödemeleri) ödeme kabul ediyoruz. Doğru fatura bilgileri sağlamayı ve herhangi bir fatura uyuşmazlığını derhal bize bildirmeyi kabul edersiniz.</p>

              <h4 id="refunds" className="mt-4 font-semibold">İadeler</h4>
              <p className="mb-2 text-sm">
                <a className="underline text-primary" href="/refund-policy">İade Politikamızda</a> belirtildiği üzere, genel olarak iade sunmuyoruz. Faturalandırma hatası, mükerrer çekim veya yasal zorunluluk nedeniyle iadeye hak kazandığınızı düşünüyorsanız İade Politikası&apos;ndaki prosedürü izleyin. İade talepleri, satın alma işleminin yapıldığı yere bağlı olarak <a className="underline text-primary" href="mailto:refund@acevyn.com">refund@acevyn.com</a> (şahsi) veya <a className="underline text-primary" href="mailto:refund@hayccraft.com.tr">refund@hayccraft.com.tr</a> (HayCraft Inc.) adresine e-posta ile gönderilebilir.
              </p>

              <h4 id="user-content" className="mt-4 font-semibold">Kullanıcı İçeriği</h4>
              <p className="mb-2 text-sm">Gönderdiğiniz her türlü içerikten siz sorumlusunuz. Gizlilik taahhütlerine tabi olmak kaydıyla, bu içeriği hizmet sağlamak ve çalışmalarımızı tanıtmak amacıyla kullanmamız için bize münhasır olmayan bir lisans vermiş olursunuz.</p>

              <h4 id="limitation" className="mt-4 font-semibold">Sorumluluğun Sınırlandırılması</h4>
              <p className="mb-2 text-sm">Yasaların izin verdiği ölçüde, Siteleri veya hizmetleri kullanımınızdan kaynaklanan dolaylı, arızi veya netice kabilinden doğan zararlardan sorumlu değiliz. Doğrudan zararlar için toplam sorumluluğumuz, ilgili hizmetler için ödenen ücretlerle sınırlıdır.</p>

              <h4 id="termination" className="mt-4 font-semibold">Fesih</h4>
              <p className="mb-2 text-sm">Bu Şartların ihlali durumunda veya yasaların gerektirdiği şekilde bildirimde bulunarak herhangi bir yasal nedenle Sitelere erişimi askıya alabilir veya sonlandırabiliriz.</p>

              <h4 id="governing" className="mt-4 font-semibold">Uygulanacak Hukuk ve Uyuşmazlık Çözümü</h4>
              <p className="mb-2 text-sm">Bu Şartlar Hindistan yasalarına tabidir. Hindistan dışındaki kullanıcılar için, yerel zorunlu tüketici koruma yasaları aksini öngörmedikçe, bu Şartlardan doğan uyuşmazlıklarda Hindistan hukukunun geçerli olacağını kabul edersiniz. Taraflar, dava açmadan önce iyi niyetli müzakere yoluyla uyuşmazlıkları çözmeye çalışmayı kabul ederler; ayrı hizmet sözleşmelerinde özel yetkili mahkemeler belirtilebilir.</p>

              <h4 id="changes" className="mt-4 font-semibold">Şartlardaki Değişiklikler</h4>
              <p className="mb-2 text-sm">Bu Şartları değiştirebiliriz; önemli değişiklikler yayınlanacak ve belirtildiği tarihte yürürlüğe girecektir. Değişikliklerden sonra Siteleri kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir.</p>

              <h4 id="contact" className="mt-4 font-semibold">İletişim</h4>
              <p className="mb-2 text-sm">
                Bu Şartlar hakkındaki sorularınız veya yasal bildirimler için: <a className="underline text-primary" href="mailto:acevyns@haycraft.com.tr">acevyns@haycraft.com.tr</a> (şahsi), <a className="underline text-primary" href="mailto:acevyns@gmail.com">acevyns@gmail.com</a> (şahsi) veya <a className="underline text-primary" href="mailto:contactus@hayccraft.com.tr">contactus@hayccraft.com.tr</a> (HayCraft Inc.). Yasal bildirimler için: <a className="underline text-primary" href="mailto:legal@hayccraft.com.tr">legal@hayccraft.com.tr</a>. İade sorguları için: satın aldığınız yere bağlı olarak <a className="underline text-primary" href="mailto:refund@acevyn.com">refund@acevyn.com</a> veya <a className="underline text-primary" href="mailto:refund@hayccraft.com.tr">refund@hayccraft.com.tr</a>.
              </p>

              <p className="mt-6 text-sm">Bu Şartlar zaman zaman değişebilir. Güncellemeleri burada yayınlayacağız ve &quot;Son güncelleme&quot; tarihi en son revizyonu yansıtır; lütfen bu sayfayı periyodik olarak kontrol edin.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}