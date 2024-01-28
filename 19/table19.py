#!/usr/bin/env python3
# -*- coding: utf-8 -*-

print("\nRahman ve Rahim olan ALLAH'ın Adıyla\n\nSelam!\n\nRahman ve Rahim olan ALLAH İzin Verirse, Resulü Son Nebisi'ne 21. Yüzyıl'da Vahyettiği Kitabı Kutsal FURKAN Hikmet'in Üzerinde Olan Ve Din Günü Gelmeden Önce İnananların İnancını Güçlendirerek Onları Yakin'e İleten Ayeti Kanıtı 19 Mucizesi'ne Aşağıdaki Tablolardaki Harf Sayımları'nı Kontrol Eden Bu Algoritma Dizisini Kullanarak Veya Dilerseniz Kendiniz Sayarak Tanık Olabilirsiniz:\n\n\n")

import re

sayfalar = {
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
}

def sayfa_isminin_sirasini_bul(isim):
    for sira, sayfa_ismi in sayfalar.items():
        if sayfa_ismi == isim:
            return sira

sayfa_numaralari = list(sayfalar.keys())
sayfa_isimleri = list(sayfalar.values())

def related_pages_table_of(page):
    table = []
    sayfa_name = ""
    for s in range(len(sayfa_isimleri)):
        sayfa_name = sayfa_isimleri[s]
        for l in range(len(page)):
            if page[l] in sayfa_name:
                if sayfa_name not in table:
                    table.append(sayfa_name)
    return table

def un_repeated_letters_of(name):
    current = []
    for char in name:
        if char not in current:
            current.append(char)
    return current

Furkan = []

for page_no in range(21):
    with open(f"./{sayfalar[page_no+1]}.txt", "r", encoding="utf-8") as file:
        Furkan.append(file.read())

def count_letters_in_table_of(isim_tablosu, harfler):
    tablo_metninin_sayfalari = ""
    for s in range(len(isim_tablosu)):
        tablo_metninin_sayfalari += Furkan[sayfa_isminin_sirasini_bul(isim_tablosu[s])-1]

    total_count_in_table = 0
    letters = "[" + "".join(harfler) + "]"
    regex = re.compile(letters, re.IGNORECASE | re.UNICODE)

    total_count_in_table += len(regex.findall(tablo_metninin_sayfalari))

    return total_count_in_table

table = []
un_repeated_letters = []
countOfTable = 0

print("___________________\n\n\n")

for s in range(21):
    table.append(related_pages_table_of(sayfa_isimleri[s]))
    un_repeated_letters = un_repeated_letters_of(sayfa_isimleri[s])

    print(f"{s+1}. {sayfa_isimleri[s]}\n")

    print(f"Sayfası'nın İsmi'ndeki {un_repeated_letters} Harflerinin En Az 1'ini İsmi'nde Barındıran Tüm Sayfaların Oluşturduğu Tablo:\n")
    
    print(table[s])
    print("\n")

    countOfTable = count_letters_in_table_of(table[s], un_repeated_letters)
    
    print(f"Bu Tablo'da Toplam {len(table[s])} Sayfa Var. Bu Tablo'nun Tüm Sayfa'larında {un_repeated_letters} Harflerinin Toplam Tekrar Sayısı: {countOfTable}\n")

    if countOfTable % 19 == 0:
        print(f"{countOfTable}, 19'un Tam {int(countOfTable/19)} Katıdır:")
        print(f"{countOfTable} = 19 x {int(countOfTable/19)}\n\n\n")
    else:
        print(f"{countOfTable}, 19'un tam katı değildir.\n\n\n")

    print("___________________\n\n\n")