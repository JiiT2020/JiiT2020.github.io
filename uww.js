
export const unwantedWords =  ['adult graphics magazine', 'aikuisviihde', 'anni swan', 'anu ja antti', 'aselajitunnu', 'bigtits', 'blu ray',
    'Blue Climax', 'blu-ray', 'blue ray', 'busen', 'busty', 'classic rock', 'classis rock','club international', 'color climax', 'cummers', 
    'C-kasetti', 'Dallapé', 'dvd', 'enchanted world', 'erotica', 'erotiikan maailma', 'erämies', 'evankeliumi',
    'expose', 'fetissi', 'foxy lady', 'haloo', 'harlekin', 'harlequin', 'high society', 'hihamerkk', 'hustler', 'Intim månad', 'jallu', 'jermu', 'jewish', 'juggs',
    'kalle', 'kallu', 'kangasmerkki', 'kartanosarja', 'kauluslaatat', 'keltainen kirjasto', 'keräilylautanen', 'kristuks', 'kristus', 'kuuma rakkaus', 'käsityö', 'käsitöitä', 'käyttöohje', 'laivavalokuva',
    'lapsikohtalo', 'leg sex', 'lollo', 'manga', 'matkailijayhdisty', 'matkailuviiri', 'mayfair', 'men only', 'milf', 'modelljahr',
    'napakymppi', 'neuvostoliit', 'novitaa', 'penthouse', 'pirate', 'playboy', 'pleasure', 'private', 'pukukoru', 'raamat', 'ratto', 'rintakoru', 'rodox',
    'saab', 'sarah young', 'seinälautanen', 'seksi', 'seurakun', 'sex weekend', 'Sexmagazine', 'Sigildar Sogur', 'signal', 'staviss', 'svärd', 'swank', 'sydänsarja', 
    'tabu', 'tekniikan maailma', 'testament', 'tete-a-tete', 'tiekartta', 'tuuvan talli',
    'uistin', 'uskonto', 'uusintapai', 'v8-magazine', 'vauhdin maailma', 'volvo', 'ympäristökartta', 'young & nasty']

export const unwantedTominAntikvariaattiWords = [
    'JÄNNÄ-JUSSI', 'KIPPARI KALLE 4/1955 - TIPSA JA TOTTI', 'pecos bill' ]

export const unwantedZz66 = [
    'huuli ', 'jymy-sarjat ', 'tex ', 'villi länsi' ]

export const stripBuyNowItems = [

    'avaruuden korkeajännitys',
    'Avaruuden Tarzan',
    'huuli ',
    'james bond',
    'joulumanteli',
    'jouluparaati',
    'judge dredd',
    'juhlanumero',
    'jymy ' /*HUOM! JYMY */,
    'jymy-sarjat',
    'kädet ylös' /* HUOM! KÄDET YLÖS */,
    'lassi ja leevi',
    'lucky luke', 
    'mini-taskari',
    'mokkeri',
    'muumi ' /* HUOM! MUUMI */,
    'nakke ',
    'perry rhodan ',
    'pikku riku',
    'raf ',
    'robin hood',
    'roope setä ',
    'roope-setä ',
    /* 'roope-setä 6',
    'roope-setä 7',
    'roope-setä 8',
    'roope-setä 09',
    'roope-setä 12', */
    'sarjakirja' /* HUOM! SARJAKIRJA */,
    'Siivet ',
    'taskarit',
    'taskukirj' /* HUOM TASKUKIRJA/-JOJA/-T */,
    'taskulehti',
    'tenavat' /* HUOM! TENAVAT */,
    'Teräsnyrkki ',
    'tex willer',
    'texas ',
    'tintin ',
    'tintti ',
    'valerian' /* valerian */,
    'villi länsi ',
    'x-men',
    'yoko tsuno',
    
    ' - 1980', // puree välilyönneillä yhteen Aku Ankka caseen
    '1985', '1986', '1987', '1988', '1989', '199', '200', '201',
    '/85', '/86', '/87', '/88', '/89', 
    '/90', '/91', '/92', '/93', '/94', '/95', '/96', '/97', '/98', '/99',

]

export const unwantedHuutonetWords =  [ 
    
    
    '1998', '1999', '2000', '2001',
    '2008', '2009', '2010', '2011', '2012', '2014', '2015', '2016',
    '2020', '2021', '2099',
    'cowboy', 'historia', 'hymy', 'jippo', 'juhlakirja', 'jumbo', 'kamut ', 'katso ', 'kädet ylös ',
    'natasa', 'nemi ', 'PEKKA LIPPONEN', 'Pekka Lipposen seikkailuja', 'Robin Hood', 'viidakko ', 'älli ja tälli',
    
    //temp
    'o 8 / 1957',  // vahetuksen revennyt pecos bill
    'alkuperäisteos 19', 'Muumikirja Muumipapan Urotyöt, 60-lvl.', // eurokaverin ruotsinkieliset muumit
    //temp
    
    '007 JA LUPA TAPPAA', '1000pyörä', '101 dalmatiankoiraa', '2.painos', '2. painos', '3. painos', '4 Ässää ', '516 sivua, irtosivuina', '7 päivää', '7-päivää', 'an 6/1956' /* huom. 91:an */, 'aale tynni', 'Aallas Arvo', 'aaltonen', 'Aapinen Kustaa Kuusela', 'aapo kukko', 'Aapo Rapi',
'aardenburg', 'aarne ankka', 'aaro honka', 'aaro liukko', 'aarresaari', 'Aarteenetsijäin Aatelia', 'aarteiden kirja', 'Aavikon Korkeajännitys',
'acerdi', 'ACHERONIN NOITAKUNINGATAR', 'Ackermann', 'action foce', 'action force', 'Adam Sarlech', 'Adams, Scott', 'adolfsson', 'ADVENTURES OF TINTIN', 'Aedenan puutarhat', 'agaton sax', 'agent x9',
'AGENTTI 7 1975', 'AGENTTI 11/1975', 'Agentti 13 ', 'Agentti X9 numero 4 (1974)', 'Agentti X9 1 1981', 'AGENTTI X9 2 1981', 'Agentti X9 1/1983', 'Agentti X9 7/1983', 'agentti korke', 'AGENTTI-KORKEA', 'Agenttisarja', 'AgenttiÄssä', 'agentti ässä',
'ahlrud', 'AHMED AHNE', 'ahonen', 'ahonius', 'ahlqvist', 'ahtokari', 'AIKA JA MIES', 'Aikuisparodiaa', 'aikuisviihde', 'Ainikki Kivi', 'Aira Kokki', 'AITTA LEHTI',
'ajan sävel', 'Ajan vangit', 'AJANVIETE Sarja',  'ajanvietesarja', 
'akim ', 'akira', 'Aku Ankan avaruusmatka', 'Aku Ankan Joulusukka', 'aku ankan juhla' /* 'aku ankan juhlakirja', 'Aku Ankan Juhlamarssi', 'aku ankan juhlasarjat' */, 'aku ankan karuselli', 
'Aku Ankan kuva-albumi', 'Aku Ankan Lemmenkutsu', 'Aku Ankan Loma-albumi', 'Aku Ankan lyhyt oppimäärä',
'aku ankan parhaat', 'AKU ANKAAN PARHAAT', 'aku ankan parhaita', 'Aku Ankan punainen kansio', '10 Aku Ankan taskaria 1970-luvulta, suurin osa ensipainoksia',
'aku ankan riemukaruselli', 'Aku Ankan riippumatto', 'Aku Ankka sarjisekstra 15-20', 'ankan satasivuiset ', 'Aku Ankan Päistikka', 'aku ankan sompailut', 'AKU ANKAN TASKUKIRJOJA: TEEMA KIRJAT 52 KPL', 'aku ankan toivesarjat', 'Aku Ankan Täysosuma',
]
