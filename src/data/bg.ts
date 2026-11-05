/**
 * Bulgarian for every English string on the site, keyed by the English text.
 * A string missing from here simply shows in English.
 */
export const bg: Record<string, string> = {
  // Navigation and shared controls
  About: "За нас",
  App: "Приложение",
  Cart: "Количка",
  Compare: "Сравнение",
  Contact: "Контакт",
  Goggles: "Очила",
  Moto: "Мото",
  Questions: "Въпроси",
  Safety: "Безопасност",
  Snow: "Сняг",
  "Sentio App": "Приложение Sentio",
  Support: "Поддръжка",
  Technology: "Технология",
  Explore: "Разгледай",
  "Pre-order": "Поръчай",
  "Open menu": "Отвори менюто",
  "Close menu": "Затвори менюто",
  "Switch to light mode": "Светъл режим",
  "Switch to dark mode": "Тъмен режим",

  // Cart
  "Your cart": "Твоята количка",
  "Your cart is empty.": "Количката е празна.",
  "Choose your terrain and it will wait for you here.": "Избери своя терен и той ще те чака тук.",
  "Close cart": "Затвори количката",
  Remove: "Премахни",
  "One fewer": "С една бройка по-малко",
  "One more": "С една бройка повече",
  Total: "Общо",
  "Reserve my pre-order": "Запази предварителна поръчка",
  "Free shipping worldwide · 30-day returns": "Безплатна доставка по целия свят · 30-дневно връщане",

  // Footer
  "Be first on the hill.": "Бъди пръв на склона.",
  "Launch dates, early pricing and firmware updates.": "Дати на старта, ранни цени и нови версии на фърмуера.",
  "Email address": "Имейл адрес",
  "Sign up": "Запиши се",

  // Hero
  "Vision meets instinct.": "Визия среща инстинкт.",
  "Two terrains.": "Два терена.",
  "One lens.": "Една леща.",
  Drag: "Плъзни",
  "Motocross & Enduro": "Мотокрос и ендуро",
  "Ski & Snowboard": "Ски и сноуборд",
  "Move the boundary between dirt and snow": "Премести границата между кал и сняг",

  // Homepage: intro
  "A display that disappears until you need it. Speed, navigation and crash detection, built into the goggle itself.":
    "Дисплей, който изчезва, докато не ти потрябва. Скорост, навигация и засичане на удар, вградени в самите очила.",
  "How it works": "Как работи",
  "Snow in winter. Dirt the rest of the year.": "Сняг през зимата. Кал през останалото време.",
  "HUD refresh": "Опресняване на HUD",
  "Horizontal field of view": "Хоризонтално зрително поле",
  "Moto, with electronics": "Мото, с електрониката",
  "Battery, standard mode": "Батерия, стандартен режим",
  fps: "к/с",
  g: "г",
  h: "ч",

  // Homepage: photo
  "Eight magnets hold the lens. Ten seconds to swap it, gloves on.":
    "Осем магнита държат лещата. Десет секунди за смяна, с ръкавици.",
  "Magnetic lens system, Sentio Snow": "Магнитна система за лещи, Sentio Snow",

  // Homepage: technology
  "Everything you need to know, in the corner of your eye.": "Всичко, което трябва да знаеш, в ъгъла на окото ти.",
  "Actual resolution, 128 × 64": "Реална резолюция, 128 × 64",
  "HUD layout": "Изглед на HUD",
  "Transparent OLED": "Прозрачен OLED",
  "Speed, G-force and navigation sit in the upper right of your view, at just 12% of your field of vision.":
    "Скорост, G-сила и навигация стоят горе вдясно и заемат само 12% от зрителното ти поле.",
  "ESP32S3 core": "Ядро ESP32S3",
  "A dual-core 240 MHz processor runs sensor fusion, camera and wireless together.":
    "Двуядрен процесор с 240 MHz обработва едновременно сензорите, камерата и безжичната връзка.",
  "Crash detection": "Засичане на удар",
  "A 6-axis IMU reads every impact and can call for help on its own.":
    "6-осен IMU отчита всеки удар и може сам да повика помощ.",
  "SSD1309 · SPI at 10 MHz": "SSD1309 · SPI при 10 MHz",

  // Homepage: systems
  "Four systems. One frame.": "Четири системи. Една рамка.",
  "The Brain": "Мозъкът",
  "Dual-core 240 MHz with 8 MB PSRAM and 8 MB flash, running sensor fusion at 100 Hz.":
    "Двуядрен процесор с 240 MHz, 8 MB PSRAM и 8 MB флаш памет, който обработва сензорите при 100 Hz.",
  "The Display": "Дисплеят",
  "A 128×64 OLED on a precision-ground prism. Brightness adapts in under 200 ms.":
    "OLED 128×64 върху прецизно шлифована призма. Яркостта се настройва за под 200 мс.",
  "The Guardian": "Пазителят",
  "Six axes sampled 416 times a second, judged in a 50 ms window.":
    "Шест оси, измервани 416 пъти в секунда и оценявани в прозорец от 50 мс.",
  "The Armor": "Бронята",
  "Optical polycarbonate with anti-fog, UV400 and a hydrophobic hard coat.":
    "Оптичен поликарбонат с покритие против замъгляване, UV400 и твърд хидрофобен слой.",

  // Homepage: safety
  "The one time you can't call for help, your goggles do.":
    "Единственият път, когато не можеш да повикаш помощ, очилата го правят вместо теб.",
  "50 ms": "50 мс",
  "10 s": "10 с",
  "800 ms": "800 мс",
  Impact: "Удар",
  "Force and rotation spike past the crash threshold, not just a hard landing.":
    "Силата и въртенето надхвърлят прага за удар, а не е просто тежко приземяване.",
  Countdown: "Обратно броене",
  "The HUD counts down. Press the button or shake the goggles to cancel.":
    "HUD започва да брои. Натисни бутона или разклати очилата, за да отмениш.",
  "Phone relay": "Връзка с телефона",
  "An emergency packet reaches the app over BLE and your GPS position is fixed.":
    "Спешен сигнал достига приложението през BLE и GPS позицията ти се фиксира.",
  "Contacts alerted": "Известени контакта",
  "Up to five people get your location, updated every 60 seconds until you are safe.":
    "До петима души получават местоположението ти, обновявано на всеки 60 секунди, докато си в безопасност.",

  // Homepage: editions and reviews
  "Born for the dirt.": "Роден за калта.",
  "Made for the mountain.": "Създаден за планината.",
  Riders: "Райдъри",
  "The speed readout stays out of the way until I look for it. After a few laps I stopped noticing it was there.":
    "Скоростта не ми пречи, докато не я потърся. След няколко обиколки вече не забелязвах, че е там.",
  "Enduro racer": "Ендуро състезател",
  "Straight from a warm gondola into the cold and the lens stayed clear. That used to ruin my first run.":
    "От топлия лифт направо в студа и лещата остана чиста. Това ми разваляше първото спускане.",
  "Freeride snowboarder": "Фрийрайд сноубордист",
  "My clips come out with speed and G-force already on them. It looks like a broadcast and I edited nothing.":
    "Клиповете ми излизат със скоростта и G-силата върху тях. Изглежда като телевизионно предаване, а не съм монтирал нищо.",
  "Trail rider": "Трейл райдър",

  // Homepage: questions
  "How long does the battery last in extreme cold?": "Колко издържа батерията в силен студ?",
  "Snow gives about 6 hours in heated anti-fog mode and 8+ in standard mode, thanks to a thermally insulated cell rated to -25°C. Moto runs for 8 hours. A full USB-C charge takes 90 minutes.":
    "Snow издържа около 6 часа с подгряване против замъгляване и над 8 в стандартен режим, благодарение на термоизолирана батерия за до -25°C. Moto работи 8 часа. Пълното зареждане през USB-C отнема 90 минути.",
  "Is the HUD distracting while riding?": "Разсейва ли HUD по време на каране?",
  "It sits in the upper right of the lens and covers 12% of your field of view, so you glance at it like a speedometer. Brightness adapts automatically, from full sun to low light.":
    "Намира се горе вдясно на лещата и заема 12% от зрителното ти поле, така че го поглеждаш като скоростомер. Яркостта се настройва автоматично, от силно слънце до слаба светлина.",
  "Is the Sentio App subscription-based?": "Изисква ли приложението Sentio абонамент?",
  "No. Every feature is free, with no subscription or in-app purchases. It runs on iOS 15+ and Android 12+ and updates your goggles over the air.":
    "Не. Всички функции са безплатни, без абонамент и покупки в приложението. Работи на iOS 15+ и Android 12+ и обновява очилата ти безжично.",
  "Is Sentio compatible with my helmet?": "Съвместими ли са Sentio с моята каска?",
  "Moto is confirmed with 50+ motocross and enduro helmets, with a 45 mm silicone-grip strap and outriggers that flex ±15°. Snow fits standard ski and snowboard helmets.":
    "Moto е потвърдено с над 50 каски за мотокрос и ендуро, с 45 мм силиконова лента и рамена, които се огъват на ±15°. Snow пасва на стандартни каски за ски и сноуборд.",
  "What happens if I crash with the goggles on?": "Какво става, ако падна с очилата?",
  "The lens is rated to MIL-PRF-32432 and the TPU frame absorbs impact. Above the 8 g threshold the HUD starts a 10-second countdown, then alerts up to 5 contacts with your location unless you cancel.":
    "Лещата отговаря на MIL-PRF-32432, а рамката от TPU поема удара. Над прага от 8 g HUD започва 10-секундно обратно броене и след това известява до 5 контакта с местоположението ти, освен ако не отмениш.",
  "Can I record video without the app?": "Мога ли да записвам видео без приложението?",
  "Yes. The camera records to onboard flash with no phone connected: about 45 minutes at high resolution. The app adds telemetry overlays later.":
    "Да. Камерата записва във вградената памет без свързан телефон: около 45 минути при висока резолюция. Приложението добавя телеметрията по-късно.",

  // Product pages
  "Dust-protected electronics, a vibration-dampened HUD and a ballistic-rated lens, in one 185 g goggle.":
    "Защитена от прах електроника, HUD с виброзащита и балистична леща в очила от 185 г.",
  "Dual-pane heated anti-fog, a thermally insulated battery and UV400 protection, in one 195 g goggle.":
    "Двойна подгрявана леща против замъгляване, термоизолирана батерия и защита UV400 в очила от 195 г.",
  "Overview": "Общ преглед",
  "Features": "Функции",
  "Engineering": "Инженерство",
  "Fit": "Прилягане",
  "Specs": "Спецификации",
  "Everything on your lens.": "Всичко на твоята леща.",
  "Tech specs": "Технически данни",
  "pre-order · Free shipping · 30-day returns · 2-year warranty":
    "предварителна поръчка · Безплатна доставка · 30-дневно връщане · 2 години гаранция",
  "185 g": "185 г",
  "195 g": "195 г",
  "8 h": "8 ч",
  "6 h": "6 ч",
  "Lens, frame and electronics": "Леща, рамка и електроника",
  "Active battery": "Батерия при работа",
  "Dust and splash protection": "Защита от прах и пръски",
  "Tear-off layers": "Слоя tear-off фолио",
  "Heated, 8 h standard": "С подгряване, 8 ч стандартно",
  "Dust-tight, splash-proof": "Пълна защита от прах и пръски",
  "Lowest operating temperature": "Най-ниска работна температура",

  "Live speed": "Скорост на живо",
  "Large, high-contrast numerals at 60 fps, readable through roost and direct sun.":
    "Големи контрастни цифри при 60 к/с, четливи през кал и при пряко слънце.",
  "Trail navigation": "Навигация по пътеки",
  "Load a GPX file and follow a bearing arrow to the next waypoint, accurate to ±3 m.":
    "Зареди GPX файл и следвай стрелката до следващата точка с точност ±3 м.",
  "Lap timer": "Таймер за обиколки",
  "Automatic GPS laps with ±50 ms timing and a running delta to your best.":
    "Автоматични GPS обиколки с точност ±50 мс и текуща разлика спрямо най-доброто ти време.",
  "HD recording": "HD запис",
  "1600×1200 straight to onboard flash, with up to 45 minutes of recording and no SD card.":
    "1600×1200 директно във вградената памет, до 45 минути запис без SD карта.",
  Temperature: "Температура",
  "Ambient temperature and wind chill on your lens, so you can layer up before your hands go numb.":
    "Температура на въздуха и усещане при вятър на лещата, за да се облечеш, преди ръцете ти да изтръпнат.",
  Altitude: "Надморска височина",
  "Live elevation and vertical drop from a barometer accurate to ±1 m.":
    "Височина и денивелация на живо от барометър с точност ±1 м.",
  "Run mapping": "Карта на спусканията",
  "Every run logged at 10 Hz and replayed in the app with a speed heat map.":
    "Всяко спускане се записва при 10 Hz и се преглежда в приложението с карта на скоростта.",
  "Anti-fog": "Против замъгляване",
  "A heated inner pane clears the lens in under 8 seconds.": "Подгрявано вътрешно стъкло изчиства лещата за под 8 секунди.",

  "38% warm amber lens. Ruts, roots and rocks stand out in flat light.":
    "Топла кехлибарена леща с 38% пропускливост. Коловози, корени и камъни изпъкват при равна светлина.",
  "High-contrast dirt vision": "Контрастно зрение за калта",
  "Eight magnets. Ten seconds. No tools, even with gloves on.": "Осем магнита. Десет секунди. Без инструменти, дори с ръкавици.",
  "Magnetic lens system": "Магнитна система за лещи",

  "Off-road is one of the harshest places on earth for electronics.":
    "Офроудът е едно от най-суровите места на земята за електроника.",
  "Sealed against dust": "Запечатани срещу прах",
  "Pressure-tested TPU housing with silicone gaskets at every seam, for roost, mud and puddle hits.":
    "Тествано под налягане TPU тяло със силиконови уплътнения на всяка фуга, срещу камъчета, кал и локви.",
  "7-post": "7 щифта",
  "Tear-off ready": "Готови за tear-off",
  "Takes stacks of up to 14 layers. The HUD sits behind the tear-off plane, so pulling one never touches your display.":
    "Поема до 14 слоя. HUD е зад равнината на фолиата, така че махането им не засяга дисплея.",
  "Tuned for flat light": "Настроени за равна светлина",
  "A warm amber tint lifts terrain contrast, with a hydrophobic outer coat that sheds water.":
    "Топлият кехлибарен оттенък повишава контраста на терена, а хидрофобното покритие отблъсква водата.",
  "Vibration-dampened HUD": "HUD с виброзащита",
  "A dual-durometer silicone cradle keeps text steady over whoops and protects the OLED from shock up to 50 g.":
    "Силиконово легло с две твърдости държи текста стабилен по неравностите и пази OLED при удари до 50 g.",

  "We didn't design around the cold. We designed for it.": "Не заобиколихме студа. Проектирахме за него.",
  "3 mm": "3 мм",
  "Dual-pane anti-fog": "Двойна леща против замъгляване",
  "A sealed air gap stops condensation forming. When that isn't enough, a 3 W ITO element takes over.":
    "Запечатана въздушна междина спира конденза. Когато това не стига, се включва ITO нагревател от 3 W.",
  "Thermal battery insulation": "Термоизолация на батерията",
  "An aerogel-foam jacket keeps the cell above -5°C when the air drops to -25°C.":
    "Обвивка от аерогел поддържа батерията над -5°C, когато въздухът падне до -25°C.",
  "Snow-blindness protection": "Защита от снежна слепота",
  "Blocks 100% of UVA, UVB and UVC. The Category 3 tint cuts glare and keeps terrain contrast.":
    "Спира 100% от UVA, UVB и UVC. Оттенъкът от категория 3 намалява отблясъците и запазва контраста на терена.",
  "Spherical lens": "Сферична леща",
  "Curved to match the eye, for edge-to-edge clarity with no warping at the periphery.":
    "Извита като окото, за яснота от край до край без изкривяване по периферията.",

  "Technology means nothing if it hurts.": "Технологията не значи нищо, ако боли.",
  "Triple-layer foam": "Трислойна пяна",
  "Three densities for support and all-day comfort. Antimicrobial and removable.":
    "Три плътности за опора и комфорт през целия ден. Антимикробна и сваляща се.",
  "45 mm silicone strap": "Силиконова лента 45 мм",
  "Triple lines of silicone grip any shell finish, adjusting from 15 to 28 cm.":
    "Три реда силикон захващат всяка каска, с регулиране от 15 до 28 см.",
  "50+ helmets": "Над 50 каски",
  "Confirmed with leading MX and enduro helmets, with outriggers that flex ±15°.":
    "Потвърдени с водещи MX и ендуро каски, с рамена, които се огъват на ±15°.",
  "All-day comfort in freezing conditions.": "Комфорт през целия ден в мраз.",
  "Moisture-wicking foam": "Пяна, която отвежда влагата",
  "Three layers with a fleece surface that keeps the lens area dry. Removable and washable.":
    "Три слоя с поларена повърхност, която държи зоната на лещата суха. Сваля се и се пере.",
  "Articulating outriggers": "Подвижни рамена",
  "Pivot ±15° to seal against any helmet profile, with no gaps and no cold air.":
    "Завъртат се на ±15° и прилепват към всяка каска, без пролуки и студен въздух.",
  "Quick-swap lens": "Бърза смяна на лещата",
  "Eight neodymium magnets give a tool-free change in under 10 seconds.":
    "Осем неодимови магнита позволяват смяна без инструменти за под 10 секунди.",

  // Spec labels and values
  Display: "Дисплей",
  Processor: "Процесор",
  Memory: "Памет",
  Camera: "Камера",
  Connectivity: "Свързаност",
  Battery: "Батерия",
  Charging: "Зареждане",
  Protection: "Защита",
  "Lens Standard": "Стандарт на лещата",
  "Lens VLT": "Пропускливост (VLT)",
  "Lens Category": "Категория на лещата",
  "Field of View": "Зрително поле",
  Weight: "Тегло",
  "Operating Temp": "Работна температура",
  "Strap Width": "Ширина на лентата",
  "Tear-Offs": "Tear-off фолиа",
  Barometer: "Барометър",
  "Anti-Fog": "Против замъгляване",
  "UV Protection": "UV защита",
  "Lens Swap": "Смяна на лещата",
  "ESP32S3 Dual-Core 240 MHz": "ESP32S3, двуядрен, 240 MHz",
  "8 MB PSRAM + 8 MB Flash": "8 MB PSRAM + 8 MB флаш",
  "LSM6DSO 6-Axis (±16g / ±2000°/s)": "LSM6DSO, 6 оси (±16g / ±2000°/с)",
  "Li-Po 800mAh, 8h Active": "Li-Po 800 mAh, 8 ч работа",
  "Li-Po 800mAh, 6h Heated / 8h Standard": "Li-Po 800 mAh, 6 ч с подгряване / 8 ч стандартно",
  "USB-C, 90 min Full / 15 min Quick": "USB-C, 90 мин пълно / 15 мин бързо",
  "IP54 Dust & Splash Protected": "IP54, защита от прах и пръски",
  "IP64 Dust-Tight & Splash-Proof": "IP64, пълна защита от прах и пръски",
  "MIL-PRF-32432 Ballistic": "MIL-PRF-32432, балистична",
  "38% Warm Amber": "38%, топъл кехлибар",
  "140° Horizontal / 90° Vertical": "140° хоризонтално / 90° вертикално",
  "185 g (Lens + Frame + Electronics)": "185 г (леща + рамка + електроника)",
  "195 g (Lens + Frame + Electronics)": "195 г (леща + рамка + електроника)",
  "-20°C to 45°C": "от -20°C до 45°C",
  "-25°C to 40°C": "от -25°C до 40°C",
  "45 mm Silicone-Grip": "45 мм, силиконов захват",
  "7-Post System, 14 Layer Stack": "Система със 7 щифта, 14 слоя",
  "BMP280, ±1 m Altitude": "BMP280, ±1 м височина",
  "Dual-Pane + ITO Heating (3W)": "Двойна леща + ITO нагревател (3 W)",
  "Magnetic 8-Point, 10 sec": "Магнитна, 8 точки, 10 сек",

  // Compare
  "Same brain.": "Същият мозък.",
  "Different terrain.": "Различен терен.",
  Price: "Цена",
  "Built for": "Създадени за",
  "Motocross and enduro": "Мотокрос и ендуро",
  "Ski and snowboard": "Ски и сноуборд",
  "8 h active": "8 ч работа",
  "6 h heated, 8 h standard": "6 ч с подгряване, 8 ч стандартно",
  "Operating temperature": "Работна температура",
  Lens: "Леща",
  "38% VLT warm amber": "38% VLT, топъл кехлибар",
  "Cat.3 S3, 8-18% VLT": "Кат. 3 S3, 8-18% VLT",
  "Cat.3 S3 (8-18% VLT)": "Кат. 3 S3 (8-18% VLT)",
  "Lens clearing": "Почистване на лещата",
  "7-post tear-offs, 14 layers": "Tear-off със 7 щифта, 14 слоя",
  "Dual-pane heated anti-fog": "Двойна подгрявана леща против замъгляване",
  "Lens change": "Смяна на лещата",
  "Tear-off stack": "Tear-off фолиа",
  "Magnetic, 10 seconds": "Магнитна, 10 секунди",
  "HUD highlights": "Основно на HUD",
  "Speed, navigation, lap timer": "Скорост, навигация, таймер за обиколки",
  "Temperature, altitude, run mapping": "Температура, височина, карта на спусканията",
  "Explore Moto": "Разгледай Moto",
  "Explore Snow": "Разгледай Snow",
  "In both editions.": "И в двете версии.",
  "128×64 OLED HUD at 60 fps": "OLED HUD 128×64 при 60 к/с",
  "OV2640 HD camera": "HD камера OV2640",
  "6-axis crash detection with SOS": "6-осно засичане на удар със SOS",
  "ESP32S3 dual-core 240 MHz": "ESP32S3, двуядрен, 240 MHz",
  "Wi-Fi and BLE 5.0": "Wi-Fi и BLE 5.0",
  "MIL-PRF-32432 ballistic lens": "Балистична леща MIL-PRF-32432",
  "140° × 90° field of view": "Зрително поле 140° × 90°",
  "USB-C, 90 minute full charge": "USB-C, пълно зареждане за 90 минути",

  // About
  "About Sentio": "За Sentio",
  "Riders shouldn't have to look away.": "Райдърите не трябва да откъсват поглед.",
  "Why we exist": "Защо съществуваме",
  "The best riders never look down. So we asked a simple question: what if the numbers came to you?":
    "Най-добрите райдъри никога не гледат надолу. Затова си зададохме прост въпрос: ами ако числата дойдат при теб?",
  "Sentio began with a goggle, a tiny display and one rule: nothing gets added unless it helps you ride. Everything else was left on the bench.":
    "Sentio започна с едни очила, малък дисплей и едно правило: нищо не се добавя, ако не ти помага да караш. Всичко останало остана на работната маса.",
  "Months of prototyping": "Месеца прототипи",
  "Continents of field testing": "Континента с полеви тестове",
  "Hours of rider feedback": "Часа обратна връзка от райдъри",
  "What we believe.": "В какво вярваме.",
  "Eyes stay up": "Погледът остава напред",
  "Stopping to check a phone breaks the ride. The information you need belongs in the corner of your eye.":
    "Спирането за телефона разваля карането. Информацията, която ти трябва, е мястото ѝ в ъгъла на окото.",
  "Safety is never a subscription": "Безопасността никога не е абонамент",
  "Crash detection and every app feature are included. Nothing that matters sits behind a monthly payment.":
    "Засичането на удар и всички функции на приложението са включени. Нищо важно не стои зад месечна такса.",
  "Built for the conditions": "Създадени за условията",
  "Dust, roost, ice and vibration come first. If it can't survive a real day out, it doesn't ship.":
    "Прахът, камъчетата, ледът и вибрациите са на първо място. Ако не издържи истински ден навън, не излиза на пазара.",
  "Find your goggle": "Намери своите очила",

  // Support
  "We've got you.": "Тук сме за теб.",
  Free: "Безплатна",
  "Worldwide shipping": "Доставка по целия свят",
  "Included on every pre-order.": "Включена във всяка предварителна поръчка.",
  "Day returns": "Дни за връщане",
  "Ride it. If it isn't for you, send it back.": "Пробвай ги. Ако не са за теб, ги върни.",
  "Year warranty": "Години гаранция",
  "Included with both editions.": "Включена и в двете версии.",
  "Setup and care": "Настройка и грижа",
  "More questions": "Още въпроси",
  "How do I charge my goggles?": "Как да заредя очилата?",
  "Use the USB-C port. A full charge takes about 90 minutes, and 15 minutes gives you a quick top-up.":
    "Използвай порта USB-C. Пълното зареждане отнема около 90 минути, а 15 минути дават бързо презареждане.",
  "How do I pair the app?": "Как да свържа приложението?",
  "Install the Sentio App on iOS 15+ or Android 12+. It connects over BLE 5.0, and footage transfers over Wi-Fi Direct.":
    "Инсталирай приложението Sentio на iOS 15+ или Android 12+. То се свързва през BLE 5.0, а видеата се прехвърлят през Wi-Fi Direct.",
  "How do I update the firmware?": "Как да обновя фърмуера?",
  "Updates arrive over the air through the app, so there is nothing to plug in.":
    "Обновленията идват безжично през приложението, така че няма нужда от кабели.",
  "How do I set up emergency contacts?": "Как да настроя спешни контакти?",
  "Add up to 5 contacts in the app. They are alerted with your location if a crash countdown isn't cancelled.":
    "Добави до 5 контакта в приложението. Те получават местоположението ти, ако обратното броене след удар не бъде отменено.",
  "How do I clean the foam?": "Как да почистя пяната?",
  "The face foam is removable and washable. Let it dry fully before refitting it.":
    "Лицевата пяна се сваля и се пере. Остави я да изсъхне напълно, преди да я поставиш обратно.",
  "How do I change the lens?": "Как да сменя лещата?",
  "On Snow, pull at the release points and the magnetic lens comes away in under 10 seconds. On Moto, use tear-offs on the 7-post system.":
    "При Snow дръпни от точките за освобождаване и магнитната леща излиза за под 10 секунди. При Moto използвай tear-off фолиа на системата със 7 щифта.",
  "Talk to us.": "Пиши ни.",
  "Questions before you order, or help after you ride.": "Въпроси преди поръчка или помощ след каране.",
  Email: "Имейл",
  Phone: "Телефон",

  // App
  "Sentio App · iOS 15+ and Android 12+": "Приложение Sentio · iOS 15+ и Android 12+",
  "Your ride.": "Твоето каране.",
  "Your data.": "Твоите данни.",
  "Control your HUD, relive every run and turn raw footage into something worth sharing. Free, with no subscription.":
    "Управлявай HUD, преживей отново всяко спускане и превърни суровите кадри в нещо, което си струва да споделиш. Безплатно, без абонамент.",
  "Real-time sync": "Синхронизация в реално време",
  "2 s": "2 с",
  "HUD changes reach your goggles": "Промените в HUD стигат до очилата",
  "Overlay styles": "Стила на наслагване",
  "Every feature, forever": "Всички функции, завинаги",
  "Your display, your rules.": "Твоят дисплей, твоите правила.",
  "Choose up to three readouts. The first one runs large. Try it.":
    "Избери до три показания. Първото се показва голямо. Опитай.",
  "Layout presets": "Готови изгледи",
  Race: "Състезание",
  Freeride: "Фрийрайд",
  Training: "Тренировка",
  Speed: "Скорост",
  "Ground speed from GPS": "Скорост от GPS",
  "G-Force": "G-сила",
  "Live from the IMU": "На живо от IMU",
  "Barometric, ±1 m": "Барометрична, ±1 м",
  "Ambient and wind chill": "На въздуха и при вятър",
  "Lap Timer": "Таймер за обиколки",
  "Automatic GPS laps": "Автоматични GPS обиколки",
  "Air-Time": "Време във въздуха",
  "Jump hang time": "Продължителност на скока",
  On: "Вкл.",
  Add: "Добави",
  "Your footage, with broadcast-style telemetry. Rendered on your phone.":
    "Твоите кадри с телеметрия като в телевизионно предаване. Обработени на телефона ти.",
  "Auto-sync footage": "Автоматичен трансфер на видео",
  "Clips transfer in the background over Wi-Fi Direct, with no cables or SD cards.":
    "Клиповете се прехвърлят на заден план през Wi-Fi Direct, без кабели и SD карти.",
  "Telemetry overlay": "Наслагване на телеметрия",
  "Speed, G-force and altitude are composited onto every frame, in sync to under 100 ms.":
    "Скорост, G-сила и височина се наслагват върху всеки кадър със синхрон под 100 мс.",
  "One-tap export": "Експорт с едно докосване",
  "Crops to 9:16, 1:1 or 16:9 for Reels, TikTok and YouTube.": "Изрязва до 9:16, 1:1 или 16:9 за Reels, TikTok и YouTube.",
  "Share sessions": "Споделяне на сесии",
  "Send a link to an interactive 3D map of your ride. Cloud backup is free.":
    "Изпрати линк към интерактивна 3D карта на карането. Архивирането в облака е безплатно.",
  "Free. Forever.": "Безплатно. Завинаги.",
  "No subscriptions, paywalls or in-app purchases.": "Без абонаменти, платени функции и покупки в приложението.",

  // 404
  "404 · Signal lost": "404 · Няма сигнал",
  "Off the": "Извън",
  "trail.": "пътеката.",
  "Back to the start": "Обратно в началото",
  "Compare goggles": "Сравни очилата",
};
