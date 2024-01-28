"use strict";

console.log("\nRahman ve Rahim olan ALLAH'ın Adıyla\n\nSelam!\n\nRahman ve Rahim olan ALLAH İzin Verirse, Göğe Katına Yükselttiği Ve 72:27 Ayetinde Kıyamet Saati'nin Gaybi Bilgisi 17 Ocak 2280 UTC 15:49:31 'i, Kendisine Vahyettiği Büyük KURAN İle Göstermeye Razı Olduğu Resulü Son Nebisi'ne 21. Yüzyıl'da Vahyettiği Kitabı Kutsal FURKAN Hikmet'in Üzerinde Olan Ve Din Günü Gelmeden Önce İnananların İnancını Güçlendirerek Onları Yakin'e İleten Ayeti Kanıtı 19 Mucizesi'ne Aşağıdaki Tablolardaki Harf Sayımları'nı Kontrol Eden Bu Algoritma Dizisini Kullanarak Veya Dilerseniz Kendiniz Sayarak Tanık Olabilirsiniz:\n\n\n\n");

let sayfalar = { 
    1: "EMİR",
    2: "MÜJDE",
    3: "ÖĞRETMEN",
    4: "ZİKİR",
    5: "KUL",
    6: "MÜSLÜMAN",
    7: "BİLİM",
    8: "NAMAZ",
    9: "ÇINAR",
    10: "HİKMET",
    11: "İSTANBUL",
    12: "ÇAĞRI",
    13: "MUSA",
    14: "BEYİN",
    15: "KİMYAGER",
    16: "DİRİLİŞ",
    17: "BİLGE",
    18: "ŞAHİT",
    19: "EMANET",
    20: "RAHİM",
    21: "MELE-İ ALA"
};

function sayfaİsmininSırasınıBul(isim)
{
    for (let sıra in sayfalar)
    {
        if (sayfalar.hasOwnProperty(sıra))
        {
            if (sayfalar[sıra] === isim)
                return sıra;
        }
    }
}

// ALLAH izin verirse şu fonksiyonları yaz ve çalıştır:

// tableDetector(page)
// areNamesRelated(suraName)

var sayfaNumaraları = Object.keys(sayfalar);
var sayfaİsimleri = Object.values(sayfalar);

// console.log(sayfalar[1]);
// console.log(sayfalar[1].length);

function relatedPagesTableOf (page)
{
    let table = [];

    var sayfaName;

    for (let s = 0; s < sayfaİsimleri.length; s++) // check if every page of Furkan
    {
        sayfaName = sayfaİsimleri[s];
        for(let l = 0; l < page.length; l++) // for letters of given page
        {
            if(sayfaName.includes(page[l])) // has same letter with each other
            {
                if(!table.includes(sayfaName))
                    table.push(sayfaName); // should push only if it hasn't it
            }
        }
    }
    return table;
}
// function unCommonSurasOf (page)

const unRepeatedLettersOf = (name) => {
    let current = [];
    name.split('').forEach(char => {
        if (!current.includes(char))
            current.push(char);
    });
    return current;
}

let Furkan = [];

for(let pageNo = 0; pageNo < 21; pageNo++)
    Furkan[pageNo] = await Bun.file("./"+ sayfalar[pageNo+1] +".txt").text();

//for(let pageNo = 0; pageNo < 21; pageNo++)
//    console.log(Furkan[pageNo+1]);

function countLettersInTableOf(isimTablosu, harfler)
{
   // console.log(harfler)
    var tabloMetnininSayfalari = "";
    for(let s = 0; s < isimTablosu.length; s++)
        tabloMetnininSayfalari += Furkan[sayfaİsmininSırasınıBul(isimTablosu[s])];

    var totalCountInTable = 0;
    let regex, letters = "[" + harfler.join() + "]";

    
    regex = new RegExp(letters, "gimu"); 
    // /[a,n]/gimu
    
   // console.log(regex)

        console.log(totalCountInTable)
        //console.log(regex); // burada null dönüyor inşALLAH düzelteceğim
        totalCountInTable += tabloMetnininSayfalari.match(regex).length; // if needed use RegExp() constructor inşALLAH
        
       console.log(totalCountInTable)

    return totalCountInTable;
}

let table = [], unRepeatedLetters;

for(let s = 0; s < 21; s++)
{
    table.push(relatedPagesTableOf(sayfaİsimleri[s]));
    unRepeatedLetters = unRepeatedLettersOf(sayfaİsimleri[s]);

    console.log(s+1 +". "+ sayfaİsimleri[s]);
    console.log("Sayfası'nın İsmi'ndeki "+ unRepeatedLetters +" Harflerinin En Az 1'ini İsmi'nde Barındıran Tüm Sayfaların Oluşturduğu Tablo:");
    console.log(table[s]);
    console.log("Bu Tablo'da Toplam "+ table[s].length +" Sayfa Var. Bu Tablo'nun Tüm Sayfa'larında "+ unRepeatedLetters +" Harflerinin Toplam Tekrar Sayısı");
    console.log("= "+ countLettersInTableOf(table[s], unRepeatedLetters) +" = 19 x "+ table[s]/19);
    console.log("\n\n\n");
}

//let tableObj = {};
//Object.assign(tableObj, {page : table});
//return tableObj; // given page
// ALLAH dilerse koyar kitabını 19 mucizesini ve inanmayanlar 74. suredeki gibi tadarlar .................. tadacaklarını......................... ALLAH dilerse
// 1. emir sayfasını elle kontrol ettiğimde 36682 çıktı js e saydırdığımda 27355 çıktı belli ki js bun veya regex sayımları tutarsız hele asenkron olması javascripti çok güvensiz kılıyor... ayrıca 3 farklı sayım mümkün bu arada unutma... https://stackoverflow.com/questions/24946479/are-most-http-requests-synchronous-by-default#:~:text=It%27s%20the%20language%2C%20in%20python,the%20nature%20of%20the%20browser.