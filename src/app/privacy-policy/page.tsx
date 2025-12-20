import React from "react";
import Link from "next/link";
import { siteConfig, buildMetadata } from "@/config/site.config";

export const metadata = buildMetadata({
  title: `Gizlilik Politikası | ${siteConfig.siteName}`,
  description: 'Gizlilik Politikası — verileri nasıl topladığımız, kullandığımız ve koruduğumuz hakkında bilgiler.',
});

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-5xl mx-auto pt-20 sm:pt-24 pb-12 px-4">
      <div className="transition-all duration-300 ease-out">
        <Card>
          <CardHeader>
            <CardTitle>Gizlilik Politikası</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-base lg:text-lg space-y-4">
              <p className="text-sm text-muted-foreground mb-4">Son güncelleme: 20 Ağustos 2025</p>

              <p className="mb-4">
                Bu Gizlilik Politikası, acevyn.com ve hayccraft.com.tr (topluca &apos;biz&apos;, &apos;tarafımız&apos; veya &apos;HayCraft Inc.&apos; olarak anılacaktır) portföyümüzü ve ilgili hizmetlerimizi ziyaret ettiğinizde veya kullandığınızda kişisel bilgileri nasıl topladığımızı, kullandığımızı, açıkladığımızı ve koruduğumuzu açıklar. Sitelerimize erişerek veya kullanarak, bu Politikayı okuyup anladığınızı ve bilgilerinizin burada belirtilen şekilde toplanmasını ve kullanılmasını kabul ettiğinizi beyan etmiş olursunuz.
              </p>
              <p className="mb-4 text-sm">
                Bu Politika aynı zamanda acevyn.com, hayccraft.com.tr ve Arda Demir (şahsi olarak) veya HayCraft Inc. tarafından sahip olunan, işletilen veya sunulan diğer tüm web siteleri, alan adları, uygulamalar, hizmetler, ürünler veya dijital mülkler için de geçerlidir. Netlik sağlamak adına, bu Politikada geçen &quot;biz&quot;, &quot;bize&quot; veya &quot;bizim&quot; ifadeleri, geçerli olduğu durumlarda hem Arda Demir&apos;ı hem de HayCraft Inc.&apos;i kapsar.
              </p>

              <p className="mb-2 text-sm font-medium">Asgari veri toplama beyanı</p>
              <p className="mb-2 text-sm">İstediğiniz bir hizmeti sağlamak için gerekli olmadıkça, yasalarca zorunlu tutulmadıkça veya siz gönüllü olarak sağlamadıkça (örneğin bir iletişim formu, iş başvurusu veya satın alma yoluyla) sizinle ilgili kişisel ayrıntıları toplamıyoruz. Amacımız, talep edilen amacı gerçekleştirmek için gereken asgari bilgiyi toplamak ve bunları yalnızca gerekli olduğu sürece saklamaktır.</p>

              <h3 id="toc" className="text-lg font-medium mt-6">İçindekiler</h3>
              <ul className="list-disc list-inside my-3 space-y-1 text-sm">
                <li><Link href="#collection" className="underline text-primary">Topladığımız Bilgiler</Link></li>
                <li><Link href="#use" className="underline text-primary">Bilgileri Kullanım Şeklimiz</Link></li>
                <li><Link href="#sharing" className="underline text-primary">Paylaşım ve Üçüncü Taraflar</Link></li>
                <li><Link href="#cookies" className="underline text-primary">Çerezler ve Takip</Link></li>
                <li><Link href="#security" className="underline text-primary">Güvenlik</Link></li>
                <li><Link href="#rights" className="underline text-primary">Haklarınız</Link></li>
                <li><Link href="#international" className="underline text-primary">Uluslararası Kullanıcılar ve Veri Transferi</Link></li>
                <li><Link href="#contact" className="underline text-primary">İletişim</Link></li>
              </ul>

              <h4 id="collection" className="mt-4 font-semibold">Topladığımız Bilgiler</h4>
              <p className="mb-2 text-sm">Doğrudan sağladığınız bilgileri (örneğin iletişim formları aracılığıyla mesaj gönderdiğinizde, bir başvuru yaptığınızda veya hizmet talep ettiğinizde) topluyoruz. Bu bilgiler adınızı, e-posta adresinizi, telefon numaranızı, özgeçmişinizi, proje detaylarınızı ve hizmet satın alırken fatura bilgilerinizi içerebilir. Ayrıca sunucu günlüklerini ve analiz araçlarını kullanarak kullanım bilgilerini ve teknik verileri (IP adresi, tarayıcı türü, cihaz tanımlayıcıları ve ziyaret edilen sayfalar gibi) otomatik olarak topluyoruz. Analiz ve site iyileştirmesi için kişisel bilgilerden türetilmiş toplu veya anonimleştirilmiş veriler kullanılabilir.</p>

              <h4 id="use" className="mt-4 font-semibold">Bilgileri Kullanım Şeklimiz</h4>
              <div className="mb-2 text-sm">Toplanan bilgileri şu amaçlarla kullanıyoruz:
                <ul className="list-disc list-inside ml-5 mt-2">
                  <li>Sitelerimizi ve hizmetlerimizi sunmak ve sürdürmek.</li>
                  <li>Sorulara, tekliflere ve hizmet taleplerine yanıt vermek.</li>
                  <li>Ödemeleri işlemek ve faturalandırmayı yönetmek.</li>
                  <li>İşlem bildirimleri, onaylar ve idari mesajlar göndermek.</li>
                  <li>Performansı, tasarımı ve içeriği iyileştirmek için kullanımı analiz etmek.</li>
                  <li>Yasal yükümlülüklere uymak ve haklarımızı korumak.</li>
                </ul>
              </div>

              <h4 id="sharing" className="mt-4 font-semibold">Paylaşım ve Üçüncü Taraflar</h4>
              <p className="mb-2 text-sm">Bilgilerinizi, bizim adımıza hizmet veren güvenilir üçüncü taraf hizmet sağlayıcılarla (barındırma, analiz, ödeme işlemcileri, e-posta gönderimi) paylaşabiliriz. Bu sağlayıcılar, verilerinizi korumak ve yalnızca üzerinde anlaşılan hizmetleri sağlamak için kullanmakla sözleşmeli olarak yükümlüdür. Ayrıca yasalarca zorunlu kılındığında, yasal süreçlere yanıt vermek, şartlarımızı uygulamak veya kullanıcılarımızın ya da başkalarının haklarını, mülkiyetini veya güvenliğini korumak için bilgileri açıklayabiliriz. Bir birleşme, devralma veya varlık satışı durumunda, kişisel veriler bu işlemin bir parçası olarak aktarılabilir.</p>

              <h4 id="cookies" className="mt-4 font-semibold">Çerezler ve Takip</h4>
              <p className="mb-2 text-sm">Temel site işlevselliğini etkinleştirmek, kullanıcı tercihlerini hatırlamak ve site kullanımı hakkında analizler sağlamak için çerezler ve benzer takip teknolojileri kullanıyoruz. Çerezleri tarayıcı ayarlarınızdan kontrol edebilir veya silebilirsiniz. Üçüncü taraf analiz sağlayıcıları (örneğin Google Analytics) da çerez bırakabilir; ayrıntılar ve varsa devre dışı bırakma seçenekleri için onların gizlilik politikalarına başvurunuz.</p>

              <h4 id="security" className="mt-4 font-semibold">Güvenlik</h4>
              <p className="mb-2 text-sm">Kişisel verileri korumak için endüstri standardı güvenlik önlemleri (HTTPS üzerinden iletim sırasında şifreleme, erişim kontrolleri ve güvenli barındırma) kullanıyoruz. Güvenlik uygulamalarımızı düzenli olarak gözden geçiriyoruz ancak yetkisiz erişim, bilgisayar korsanlığı veya veri kaybının asla gerçekleşmeyeceğini garanti edemeyiz. Şüpheli ihlalleri derhal acevyns@haycraft.com.tr adresine bildirin.</p>

              <h4 id="rights" className="mt-4 font-semibold">Haklarınız</h4>
              <p className="mb-2 text-sm">Geçerli veri koruma yasaları uyarınca kişisel verilerinize erişme, bunları düzeltme, güncelleme veya silme haklarına sahip olabilirsiniz. Doğrulamaya ve geçerli istisnalara tabi olarak, işlemeyi kısıtlama veya işlemeye itiraz etme ve verilerinizin taşınabilirliğini talep etme haklarınız da olabilir. Haklarınızı kullanmak için acevyns@haycraft.com.tr adresine bir talep gönderin. Talepleri yerine getirmeden önce kimliğinizi doğrulamak için bilgi talep edebiliriz.</p>

              <h4 id="international" className="mt-4 font-semibold">Uluslararası Kullanıcılar ve Veri Transferi</h4>
              <p className="mb-2 text-sm">Sitelerimiz küresel olarak erişilebilirdir ve kişisel veriler Hindistan veya diğer ülkelerde aktarılabilir, saklanabilir ve işlenebilir. Sınır ötesi transferler sırasında kişisel verilerinizi korumak için yasalarca zorunlu kılındığında gerekli adımları (standart sözleşme maddeleri veya diğer uygun güvenceler gibi) atacağız.</p>

              <h4 id="contact" className="mt-4 font-semibold">İletişim</h4>
              <p className="mb-2 text-sm">Gizlilik talepleri veya sorularınız için iletişim: <a className="underline text-primary" href="mailto:acevyns@haycraft.com.tr">acevyns@haycraft.com.tr</a> (şahsi), <a className="underline text-primary" href="mailto:acevyns@gmail.com">acevyns@gmail.com</a> (şahsi) adresiyle iletişime geçin. Gizlilikle ilgili uyuşmazlıklar için lütfen talebinizi tanımlayacak ve hızlı yanıt vermemizi sağlayacak yeterli bilgiyi ekleyin.</p>

              <p className="mt-6 text-sm">Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Sayfanın üst kısmındaki &quot;Son güncelleme&quot; tarihi en son revizyonu gösterir; herhangi bir değişiklikten haberdar olmak için lütfen bu sayfayı periyodik olarak inceleyin.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}