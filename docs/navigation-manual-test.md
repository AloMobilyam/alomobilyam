# Navigasyon Manuel Test Raporu

Bu doküman hizmet sayfası / ana sayfa menü linklerinin doğru çalıştığını doğrulamak için kullanılır.

## Ön koşul

```bash
npm run dev
```

Tarayıcıda `http://localhost:3000` açın. Geliştirici araçlarında (F12) **Network** sekmesinde tam URL değişimlerini izleyin.

## Beklenen link setleri

### Ana sayfa (`/`)

| Menü       | Beklenen href   |
|------------|-----------------|
| Hizmetler  | `/#hizmetler`   |
| Galeri     | `/#galeri`      |
| Yorumlar   | `/#yorumlar`    |
| SSS        | `/#sss`         |
| İletişim   | `/#iletisim`    |

### Hizmet sayfası (`/hizmetler/mersin-mutfak-dolabi-yenileme`)

| Menü       | Beklenen href                                                        |
|------------|----------------------------------------------------------------------|
| Hizmetler  | `/#hizmetler`                                                        |
| Galeri     | `/hizmetler/mersin-mutfak-dolabi-yenileme#galeri`                    |
| Yorumlar   | `/hizmetler/mersin-mutfak-dolabi-yenileme#musteri-yorumlari`         |
| SSS        | `/hizmetler/mersin-mutfak-dolabi-yenileme#sss`                       |
| İletişim   | `/#iletisim`                                                         |

> Link doğrulama: Üst menüdeki her öğeye sağ tık → **Bağlantıyı yeni sekmede aç** veya öğeyi incele (`href` attribute).

---

## Test senaryosu

| Adım | Aksiyon | Beklenen URL |
|------|---------|--------------|
| 1 | Ana sayfa → Hizmetler bölümü → **Mutfak Dolabı Yenileme** kartına tıkla | `/hizmetler/mersin-mutfak-dolabi-yenileme` |
| 2 | Hizmet sayfası → üst menü **Yorumlar** | `/hizmetler/mersin-mutfak-dolabi-yenileme#musteri-yorumlari` |
| 3 | Hizmet sayfası → üst menü **Galeri** | `/hizmetler/mersin-mutfak-dolabi-yenileme#galeri` |
| 4 | Hizmet sayfası → üst menü **Hizmetler** | `/#hizmetler` |
| 5 | Ana sayfa → üst menü **Yorumlar** | `/#yorumlar` |
| 6 | Ana sayfa → **Mutfak Dolabı Yenileme** kartına tekrar git → üst menü **Yorumlar** | `/hizmetler/mersin-mutfak-dolabi-yenileme#musteri-yorumlari` |

### Ek kontroller (mobil)

- Hamburger menüyü açın; her adımda `href` değerleri masaüstü ile aynı olmalı.
- Footer **Hızlı Menü** linkleri de aynı kuralları izlemeli.

### Bilinen not

Hizmet sayfasında `#sss` bölümü henüz eklenmemiş olabilir; link şimdiden mutlak path olarak tanımlıdır (gelecek SSS bölümü için).

---

## Otomatik doğrulama (link mantığı)

`getNavLinks` fonksiyonu `src/lib/navigation.ts` içinde tanımlıdır. Geliştirme sırasında şu kontroller yapıldı:

- Ana sayfa path (`/`) → ana sayfa anchor'ları
- Hizmet path (`/hizmetler/mersin-mutfak-dolabi-yenileme`) → mutlak hizmet anchor'ları
- Trailing slash (`/hizmetler/.../`) → normalize edilerek hizmet linkleri döner
