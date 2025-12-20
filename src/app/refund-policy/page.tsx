import React from "react";
import Link from "next/link";
import { siteConfig, buildMetadata } from "@/config/site.config";

export const metadata = buildMetadata({
  title: `İade Politikası | ${siteConfig.siteName}`,
  description: 'İade Politikası — iadeler, istisnalar ve talep süreci.',
});

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function RefundPolicy() {
  return (
    <main className="max-w-5xl mx-auto pt-20 sm:pt-24 pb-12 px-4">
      <div className="transition-all duration-300 ease-out">
        <Card>
          <CardHeader>
            <CardTitle>İade Politikası</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-base lg:text-lg space-y-4">
              <p className="text-sm text-muted-foreground mb-4">Son güncelleme: 20 Ağustos 2025.</p>

              <p className="mb-4">
                Bu İade Politikası, acevyn.com ve hayccraft.com.tr (HayCraft Inc.) üzerinden yapılan satın alımlar ve hizmetler ile Arda Demir tarafından şahsen veya HayCraft Inc. tarafından sunulan ilgili tüm teklifler veya hizmetler için geçerlidir. Geçerli olduğu durumlarda &quot;biz&quot;, &quot;bize&quot; veya &quot;bizim&quot; ifadeleri hem Arda Demir&apos;ı hem de HaycRaft Inc.&apos;i kapsar.
              </p>

              <p className="mb-2 text-sm font-medium">Asgari veri toplama beyanı</p>
              <p className="mb-2 text-sm">İstediğiniz bir hizmeti sağlamak için gerekli olmadıkça, yasalarca zorunlu tutulmadıkça veya siz gönüllü olarak sağlamadıkça sizinle ilgili kişisel ayrıntıları toplamıyoruz.</p>

              <h3 id="toc" className="text-lg font-medium mt-6">İçindekiler</h3>
              <ul className="list-disc list-inside my-3 space-y-1 text-sm">
                <li><Link href="#summary" className="underline text-primary">Özet</Link></li>
                <li><Link href="#scope" className="underline text-primary">Kapsam</Link></li>
                <li><Link href="#no-refund" className="underline text-primary">İade Yapılmama Politikası</Link></li>
                <li><Link href="#exceptions" className="underline text-primary">İstisnalar</Link></li>
                <li><Link href="#requests" className="underline text-primary">İade Talebi Nasıl Oluşturulur?</Link></li>
                <li><Link href="#payments" className="underline text-primary">Ödeme İşlemleri ve Ücretler</Link></li>
                <li><Link href="#disputes" className="underline text-primary">Uyuşmazlıkların Çözümü</Link></li>
                <li><Link href="#contact" className="underline text-primary">İletişim</Link></li>
              </ul>

              <h4 id="summary" className="mt-4 font-semibold">Özet</h4>
              <p className="mb-2 text-sm">Genel kural olarak, Siteler üzerinden yapılan ödemeler için iade sağlamıyoruz. Bir hizmeti satın almak, bir istisna uygulanmadıkça veya yürürlükteki yasalarca aksi gerekmedikçe, satışın kesin olduğunu kabul ettiğiniz anlamına gelir. Bu iade yapılmama yaklaşımı; sipariş üzerine yapılan (bespoke) hizmetler, depozitolar ve ödeme yapıldıktan sonra çalışmanın başladığı proje tabanlı işler için uygundur.</p>

              <h4 id="scope" className="mt-4 font-semibold">Kapsam</h4>
              <p className="mb-2 text-sm"> Bu Politika; HayCraft Inc. tarafından acevyn.com ve hayccraft.com.tr aracılığıyla doğrudan satılan ücretli hizmetleri, depozitoları ve proje çalışmaları, danışmanlık ve dijital ürünler için alınan ücretleri kapsar.</p>

              <h4 id="no-refund" className="mt-4 font-semibold">İade Yapılmama Politikası</h4>
              <p className="mb-2 text-sm">Aşağıda belirtilen durumlar haricinde tüm ödemeler iade edilemez. Hizmetleri satın alarak ödemelerin nihai olduğunu kabul etmiş olursunuz.</p>

              <h4 id="exceptions" className="mt-4 font-semibold">İstisnalar</h4>
              <div className="mb-2 text-sm">İstisnalar nadirdir ancak şunları içerebilir:
                <ul className="list-disc list-inside ml-5 mt-2">
                  <li>Ödeme işlemcimiz tarafından onaylanan mükerrer çekimler veya bariz faturalandırma hataları.</li>
                  <li>Bulunduğunuz yargı bölgesindeki yürürlükteki yasaların veya tüketiciyi koruma düzenlemelerinin zorunlu kıldığı durumlar.</li>
                  <li>Tarafımızca yapılan açık bir yazılı sözleşmenin esaslı ihlali.</li>
                </ul>
              </div>

              <h4 id="requests" className="mt-4 font-semibold">İade Talebi Nasıl Oluşturulur?</h4>
              <div className="mb-2 text-sm">İade talebinde bulunmak için lütfen şunları yapın:
                <ol className="list-decimal list-inside ml-5 mt-2">
                  <li>Hizmeti nereden satın aldığınızı belirtin (acevyn.com) ve bir fatura/sipariş numarası veya ödeme belgesi ekleyin.</li>
                  <li>Talebinizi ve destekleyici belgelerinizi; acevyn.com üzerinden yapılan alımlar için <a className="underline text-primary" href="mailto:refund@acevyn.com">refund@acevyn.com</a> adresine, haycraft.com.tr üzerinden yapılan alımlar için <a className="underline text-primary" href="mailto:refund@hayccraft.com.tr">refund@hayccraft.com.tr</a> adresine e-posta ile gönderin.</li>
                  <li>Başvurunuzun alındığını 7 iş günü içinde onaylayacağız ve talebi doğrulamak için ek bilgi isteyebiliriz.</li>
                  <li>Onaylandığı takdirde iadeler, mümkün olan durumlarda orijinal ödeme yöntemi kullanılarak işleme alınacaktır. İadenin hesabınıza geçme süresi bankanıza veya ödeme sağlayıcınıza bağlı olarak değişebilir.</li>
                </ol>
              </div>

              <h4 id="payments" className="mt-4 font-semibold">Ödeme İşlemleri ve Ücretler</h4>
              <p className="mb-2 text-sm">Üçüncü taraf ödeme ağ geçitleri aracılığıyla işlenen ödemeler, ilgili kurumların şartlarına tabidir. Ödeme sağlayıcıları tarafından alınan işlem ücretlerinden sorumlu değiliz ve iade yaparken bu ücretleri geri alamayabiliriz.</p>

              <h4 id="disputes" className="mt-4 font-semibold">Uyuşmazlıkların Çözümü</h4>
              <p className="mb-2 text-sm">Bir ödeme uyuşmazlığı ortaya çıkarsa, taraflar dostane bir çözüm denemek için aşağıdaki adreslerden bizimle iletişime geçmelidir. Uygulanacak hukuk Hindistan yasalarıdır; uluslararası müşteriler için yerel tüketiciyi koruma yasaları da geçerli olabilir.</p>

              <h4 id="contact" className="mt-4 font-semibold">İletişim</h4>
              <p className="mb-2 text-sm">
                İade talepleri veya sorularınız için: <a className="underline text-primary" href="mailto:refund@acevyn.com">refund@acevyn.com</a> (acevyn.com alımları için), <a className="underline text-primary" href="mailto:acevyns@gmail.com">acevyns@gmail.com</a> (şahsi). 
                Genel sorularınız için: <a className="underline text-primary" href="mailto:acevyns@haycraft.com.tr">acevyns@haycraft.com.tr</a> veya <a className="underline text-primary" href="mailto:contactus@acevyn.com">contactus@acevyn.com</a>.
              </p>

              <p className="mt-6 text-sm">Bu İade Politikası zaman zaman güncellenebilir. Sayfanın üst kısmındaki &quot;Son güncelleme&quot; tarihi en son revizyonu gösterir; lütfen bu sayfayı periyodik olarak kontrol edin.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}