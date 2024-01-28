"use strict";

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

var sayfaNumaraları = Object.keys(sayfalar);
var sayfaİsimleri = Object.values(sayfalar);

function relatedPagesTableOf (page)
{
    let table = [];

    var sayfaName;

    for (let s = 0; s < sayfaİsimleri.length; s++)
    {
        sayfaName = sayfaİsimleri[s];
        for(let l = 0; l < page.length; l++)
        {
            if(sayfaName.includes(page[l]))
            {
                if(!table.includes(sayfaName))
                    table.push(sayfaName);
            }
        }
    }
    return table;
}

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

function countLettersInTableOf(isimTablosu, harfler)
{
    var tabloMetnininSayfalari = "";
    for(let s = 0; s < isimTablosu.length; s++)
        tabloMetnininSayfalari += Furkan[sayfaİsmininSırasınıBul(isimTablosu[s])];

    var totalCountInTable = 0;
    let regex, letters = "[" + harfler.join() + "]";

    
    regex = new RegExp(letters, "gimu"); 

        console.log(totalCountInTable)

        totalCountInTable += tabloMetnininSayfalari.match(regex).length; 

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