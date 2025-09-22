// stocks.js
export const initialStocks = [
    { name: "Yönetim", type: "folder", parentPath: "" },
    { name: "Muhasebe", type: "folder", parentPath: "" },
    { name: "Pazarlama", type: "folder", parentPath: "" },
    { name: "Yazılım Geliştirme", type: "folder", parentPath: "" },
    { name: "Satış Raporu.txt", type: "file", content: "2024 yılı 1. çeyrek satış raporu.\n- Çelik: 120.000 ton\n- Boru: 85.000 ton\n- Profil: 45.000 ton", parentPath: "Yönetim" },
    { name: "Gider Tablosu.txt", type: "file", content: "Mart 2024 aylık giderler.\n- Ofis kirası: 15.000 TL\n- Personel maaşları: 85.000 TL\n- Pazarlama giderleri: 10.000 TL", parentPath: "Muhasebe" },
    { name: "Reklam Kampanyası.txt", type: "file", content: "Yeni ürün için sosyal medya reklam kampanyası planı.\n- Hedef kitle: İnşaat firmaları ve bireysel müteahhitler\n- Platformlar: Instagram, LinkedIn\n- Bütçe: 5.000 TL", parentPath: "Pazarlama" },
    { name: "Proje_Plan.txt", type: "file", content: "Yeni web sitesi için proje planı.\n- Modüller: Ürün kataloğu, sipariş takip, blog\n- Teknolojiler: React, Node.js, Firebase\n- Tahmini süre: 3 ay", parentPath: "Yazılım Geliştirme" },
    { name: "Vergi Beyannamesi.txt", type: "file", content: "2023 yılı vergi beyannamesi.\n- Kurumlar Vergisi\n- KDV Beyannamesi", parentPath: "Muhasebe" },
    { name: "Personel Listesi.txt", type: "file", content: "Müdür: Ali Yılmaz\nMüdür Yardımcısı: Ayşe Kara\nSatış Sorumlusu: Can Tekin", parentPath: "Yönetim" },
    { name: "SEO Raporu.txt", type: "file", content: "Web sitesi arama motoru optimizasyon (SEO) analizi.\n- Anahtar kelime sıralamaları\n- Geri bağlantı profili\n- Teknik SEO kontrolleri", parentPath: "Pazarlama" }
];
