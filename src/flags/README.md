Country flags in single CSS sprite
==================================

CSS Sprites - a method to optimize page loads by combining a large number of small images into one. 

## Usage

Include CSS file in your HTML code then insert a transparent 1x1 pixel image with classes `flag` and `flag-{country code}`. The country code is in the format ISO 3166-1 alpha-2:

```html
<html>
    <head>
        <link href="flags.css" rel=stylesheet type="text/css">
    </head>
    <body>
        <img src="blank.gif" class="flag flag-cz" alt="Czech Republic" />
    </body>
</html>
```

## Included flags


* Burundi (bi)
* Алжир (dz)
* Ангола (ao)
* Бенин (bj)
* Ботсвана (bw)
* Буркина Фасо (bf)
* Габон (ga)
* Гамбия (gm)
* Гана (gh)
* Гвинея (gn)
* Гвинея-Бисау (gw)
* Демократическая Республика Конго (cd)
* Джибути (dj)
* Египет (eg)
* Замбия (zm)
* Западная Сахара (eh)
* Зимбабве (zw)
* Кабо-Верде (cv)
* Камерун (cm)
* Кения (ke)
* Коморы (km)
* Конго (cg)
* Кот д&#39;Ивуар (ci)
* Лесото (ls)
* Либерия (lr)
* Ливия (ly)
* Маврикий (mu)
* Мавритания (mr)
* Мадагаскар (mg)
* Майотта (yt)
* Малави (mw)
* Мали (ml)
* Марокко (ma)
* Мозамбик (mz)
* Намибия (na)
* Нигер (ne)
* Нигерия (ng)
* Остров Святой Елены (sh)
* Реюньон (re)
* Руанда (rw)
* Сан-Томе и Принсипи (st)
* Свазиленд (sz)
* Сейшелы (sc)
* Сенегал (sn)
* Сомали (so)
* Судан (sd)
* Сьерра Леоне (sl)
* Танзания (tz)
* Того (tg)
* Тунис (tn)
* Уганда (ug)
* Центральноафриканская Республика (cf)
* Чад (td)
* Экваториальная Гвинея (gq)
* Эритрея (er)
* Эфиопия (et)
* Южно-Африканская Республика (za)
* Южный Судан (ss)

## Links

* [CSS Flag Sprites generator](https://www.flag-sprites.com/ "Country flags in single CSS sprite")
* [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)