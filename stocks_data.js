// Bu dosya, uygulamanın ilk açılışında Firestore'a yüklenecek olan
// başlangıç dosya ve klasör yapısını içerir.
const initialFileSystem = [
    {
        name: 'Stoklar',
        type: 'folder',
        parentPath: ''
    },
    {
        name: 'Belgeler',
        type: 'folder',
        parentPath: ''
    },
    {
        name: 'oyun-stok.txt',
        type: 'file',
        content: 'Valorant: 10 adet\nLeague of Legends: 5 adet',
        parentPath: 'Stoklar'
    },
    {
        name: 'koleksiyon.txt',
        type: 'file',
        content: 'Efsanevi hesaplar\n...\n...',
        parentPath: 'Stoklar'
    },
    {
        name: 'genel-sirket-bilgileri.txt',
        type: 'file',
        content: 'Şirket adı: Prestij Tedarik\nAdres: Sanal Sokak, Bulut No: 1',
        parentPath: 'Belgeler'
    },
    {
        name: 'README.txt',
        type: 'file',
        content: 'Bu bir Dosya Yöneticisi demosu.',
        parentPath: ''
    }
];

// Bu verileri diğer dosyalardan erişilebilmesi için dışa aktarıyoruz.
export { initialFileSystem };
