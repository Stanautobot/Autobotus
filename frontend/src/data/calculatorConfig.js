// Calculator configuration data

export const auctions = [
  { id: 'copart', name: 'Copart' },
  { id: 'iaai', name: 'IAAI' },
  { id: 'manheim', name: 'Manheim' }
];

// Copart locations with shipping costs to nearest port
export const auctionLocations = {
  copart: [
    { id: 'ca-los-angeles', name: 'Los Angeles, CA', port: 'la', domesticShipping: 150 },
    { id: 'ca-san-diego', name: 'San Diego, CA', port: 'la', domesticShipping: 200 },
    { id: 'ca-sacramento', name: 'Sacramento, CA', port: 'la', domesticShipping: 350 },
    { id: 'tx-houston', name: 'Houston, TX', port: 'houston', domesticShipping: 100 },
    { id: 'tx-dallas', name: 'Dallas, TX', port: 'houston', domesticShipping: 250 },
    { id: 'fl-miami', name: 'Miami, FL', port: 'savannah', domesticShipping: 400 },
    { id: 'fl-orlando', name: 'Orlando, FL', port: 'savannah', domesticShipping: 350 },
    { id: 'ga-atlanta', name: 'Atlanta, GA', port: 'savannah', domesticShipping: 200 },
    { id: 'nj-newark', name: 'Newark, NJ', port: 'newark', domesticShipping: 100 },
    { id: 'ny-long-island', name: 'Long Island, NY', port: 'newark', domesticShipping: 150 },
    { id: 'pa-philadelphia', name: 'Philadelphia, PA', port: 'newark', domesticShipping: 180 },
    { id: 'md-baltimore', name: 'Baltimore, MD', port: 'baltimore', domesticShipping: 100 },
    { id: 'il-chicago', name: 'Chicago, IL', port: 'newark', domesticShipping: 450 },
    { id: 'mi-detroit', name: 'Detroit, MI', port: 'newark', domesticShipping: 400 },
    { id: 'wa-seattle', name: 'Seattle, WA', port: 'la', domesticShipping: 550 },
    { id: 'az-phoenix', name: 'Phoenix, AZ', port: 'la', domesticShipping: 350 },
    { id: 'nv-las-vegas', name: 'Las Vegas, NV', port: 'la', domesticShipping: 280 },
    { id: 'co-denver', name: 'Denver, CO', port: 'houston', domesticShipping: 500 },
  ],
  iaai: [
    { id: 'ca-los-angeles', name: 'Los Angeles, CA', port: 'la', domesticShipping: 150 },
    { id: 'tx-houston', name: 'Houston, TX', port: 'houston', domesticShipping: 100 },
    { id: 'fl-miami', name: 'Miami, FL', port: 'savannah', domesticShipping: 400 },
    { id: 'nj-newark', name: 'Newark, NJ', port: 'newark', domesticShipping: 100 },
    { id: 'ga-atlanta', name: 'Atlanta, GA', port: 'savannah', domesticShipping: 200 },
    { id: 'il-chicago', name: 'Chicago, IL', port: 'newark', domesticShipping: 450 },
  ],
  manheim: [
    { id: 'ca-los-angeles', name: 'Los Angeles, CA', port: 'la', domesticShipping: 150 },
    { id: 'tx-houston', name: 'Houston, TX', port: 'houston', domesticShipping: 100 },
    { id: 'nj-newark', name: 'Newark, NJ', port: 'newark', domesticShipping: 100 },
  ]
};

// US ports with ocean shipping costs to destination ports
export const usPorts = {
  la: { name: 'Los Angeles, CA', fee: 200 },
  houston: { name: 'Houston, TX', fee: 180 },
  savannah: { name: 'Savannah, GA', fee: 190 },
  newark: { name: 'Newark, NJ', fee: 210 },
  baltimore: { name: 'Baltimore, MD', fee: 195 }
};

// Destination ports with ocean shipping costs from US
export const destinationPorts = [
  { id: 'klaipeda', name: 'Klaipėda, Lithuania', oceanShipping: { la: 1650, houston: 1550, savannah: 1400, newark: 1300, baltimore: 1350 } },
  { id: 'bremerhaven', name: 'Bremerhaven, Germany', oceanShipping: { la: 1700, houston: 1600, savannah: 1450, newark: 1350, baltimore: 1400 } },
  { id: 'rotterdam', name: 'Rotterdam, Netherlands', oceanShipping: { la: 1680, houston: 1580, savannah: 1430, newark: 1330, baltimore: 1380 } },
  { id: 'gdansk', name: 'Gdańsk, Poland', oceanShipping: { la: 1720, houston: 1620, savannah: 1470, newark: 1370, baltimore: 1420 } },
  { id: 'odessa', name: 'Odessa, Ukraine', oceanShipping: { la: 1900, houston: 1800, savannah: 1650, newark: 1550, baltimore: 1600 } },
  { id: 'piraeus', name: 'Piraeus, Greece', oceanShipping: { la: 1850, houston: 1750, savannah: 1600, newark: 1500, baltimore: 1550 } },
];

// Vehicle types with size multiplier
export const vehicleTypes = [
  { id: 'sedan', name: { en: 'Sedan', ru: 'Седан', uk: 'Седан', de: 'Limousine', lt: 'Sedanas' }, multiplier: 1.0 },
  { id: 'coupe', name: { en: 'Coupe', ru: 'Купе', uk: 'Купе', de: 'Coupé', lt: 'Kupė' }, multiplier: 1.0 },
  { id: 'suv', name: { en: 'SUV / Crossover', ru: 'Внедорожник / Кроссовер', uk: 'Позашляховик / Кросовер', de: 'SUV / Crossover', lt: 'Visureigis' }, multiplier: 1.3 },
  { id: 'pickup', name: { en: 'Pickup Truck', ru: 'Пикап', uk: 'Пікап', de: 'Pickup', lt: 'Pikapas' }, multiplier: 1.4 },
  { id: 'van', name: { en: 'Van / Minivan', ru: 'Минивэн', uk: 'Мінівен', de: 'Van / Minivan', lt: 'Mikroautobusas' }, multiplier: 1.35 },
  { id: 'motorcycle', name: { en: 'Motorcycle', ru: 'Мотоцикл', uk: 'Мотоцикл', de: 'Motorrad', lt: 'Motociklas' }, multiplier: 0.4 },
  { id: 'motorcycle-large', name: { en: 'Large Motorcycle', ru: 'Большой мотоцикл', uk: 'Великий мотоцикл', de: 'Großes Motorrad', lt: 'Didelis motociklas' }, multiplier: 0.5 },
];

// Engine types
export const engineTypes = [
  { id: 'gasoline', name: { en: 'Gasoline', ru: 'Бензин', uk: 'Бензин', de: 'Benzin', lt: 'Benzinas' } },
  { id: 'diesel', name: { en: 'Diesel', ru: 'Дизель', uk: 'Дизель', de: 'Diesel', lt: 'Dyzelinas' } },
  { id: 'electric', name: { en: 'Electric', ru: 'Электро', uk: 'Електро', de: 'Elektro', lt: 'Elektra' } },
  { id: 'hybrid', name: { en: 'Hybrid', ru: 'Гибрид', uk: 'Гібрид', de: 'Hybrid', lt: 'Hibridas' } },
];

// Copart auction fees based on price
export const getAuctionFee = (price, auction = 'copart') => {
  // Copart fee structure (approximate)
  if (price <= 99) return 29;
  if (price <= 199) return 49;
  if (price <= 299) return 69;
  if (price <= 399) return 79;
  if (price <= 499) return 89;
  if (price <= 599) return 99;
  if (price <= 699) return 119;
  if (price <= 799) return 139;
  if (price <= 899) return 149;
  if (price <= 999) return 169;
  if (price <= 1199) return 189;
  if (price <= 1399) return 209;
  if (price <= 1599) return 229;
  if (price <= 1799) return 249;
  if (price <= 1999) return 279;
  if (price <= 2399) return 299;
  if (price <= 2999) return 355;
  if (price <= 3499) return 400;
  if (price <= 3999) return 450;
  if (price <= 4499) return 500;
  if (price <= 4999) return 550;
  if (price <= 5999) return 600;
  if (price <= 6999) return 650;
  if (price <= 7999) return 700;
  if (price <= 9999) return 750;
  if (price <= 14999) return 800;
  if (price <= 19999) return 850;
  if (price <= 24999) return 900;
  // Above 25000 - percentage based
  return Math.round(price * 0.04 + 200);
};

// Parse Copart URL to extract lot info
export const parseCopartUrl = (url) => {
  // Copart URL patterns:
  // https://www.copart.com/lot/12345678
  // https://www.copart.com/lot/12345678/2020-tesla-model-3
  const copartMatch = url.match(/copart\.com\/lot\/(\d+)/i);
  if (copartMatch) {
    return { auction: 'copart', lotNumber: copartMatch[1] };
  }
  
  // IAAI URL patterns:
  // https://www.iaai.com/VehicleDetail/12345678
  const iaaiMatch = url.match(/iaai\.com\/VehicleDetail\/(\d+)/i);
  if (iaaiMatch) {
    return { auction: 'iaai', lotNumber: iaaiMatch[1] };
  }
  
  return null;
};

// Calculate all costs
export const calculateTotalCost = (data) => {
  const {
    lotPrice = 0,
    auction = 'copart',
    locationId = '',
    vehicleType = 'sedan',
    destinationPortId = 'klaipeda',
  } = data;
  
  if (!lotPrice || !locationId) {
    return null;
  }
  
  // Get location and port info
  const locations = auctionLocations[auction] || auctionLocations.copart;
  const location = locations.find(l => l.id === locationId);
  if (!location) return null;
  
  const destPort = destinationPorts.find(p => p.id === destinationPortId);
  if (!destPort) return null;
  
  const vehicle = vehicleTypes.find(v => v.id === vehicleType);
  const vehicleMultiplier = vehicle ? vehicle.multiplier : 1;
  
  // Calculate fees
  const auctionFee = getAuctionFee(lotPrice, auction);
  const domesticShipping = Math.round(location.domesticShipping * vehicleMultiplier);
  const portFee = usPorts[location.port]?.fee || 200;
  const oceanShipping = Math.round((destPort.oceanShipping[location.port] || 1500) * vehicleMultiplier);
  const insurance = Math.max(Math.round(lotPrice * 0.015), 100);
  const serviceFee = 300; // Our service commission
  const documentation = 150;
  const brokerFee = 200;
  
  const totalDelivery = domesticShipping + portFee + oceanShipping + insurance + serviceFee + documentation + brokerFee;
  const total = lotPrice + auctionFee + totalDelivery;
  
  return {
    lotPrice,
    auctionFee,
    domesticShipping,
    portFee,
    oceanShipping,
    insurance,
    serviceFee,
    documentation,
    brokerFee,
    totalDelivery,
    total,
    portName: usPorts[location.port]?.name || 'Unknown',
    destPortName: destPort.name
  };
};

// Labels for all languages
export const calculatorLabels = {
  en: {
    title: 'Delivery Cost Calculator',
    subtitle: 'Calculate the total cost of your car from USA',
    lotLink: 'Auction Lot Link',
    lotLinkPlaceholder: 'Paste Copart or IAAI link here...',
    apply: 'Apply',
    lotPrice: 'Lot Price ($)',
    auction: 'Auction',
    location: 'Auction Location',
    vehicleType: 'Vehicle Type',
    engineType: 'Engine Type',
    engineVolume: 'Engine Volume (cc)',
    year: 'Year',
    destinationPort: 'Destination Port',
    calculate: 'Calculate',
    results: 'Cost Breakdown',
    auctionFee: 'Auction Fee',
    domesticShipping: 'US Domestic Shipping',
    portFee: 'Port Fee',
    oceanShipping: 'Ocean Shipping',
    insurance: 'Insurance',
    serviceFee: 'Service Fee',
    documentation: 'Documentation',
    brokerFee: 'Broker Fee',
    totalDelivery: 'Total Delivery',
    total: 'Total Cost',
    note: '* Prices are estimates and may vary. Contact us for exact quote.',
    fromPort: 'From port',
    toPort: 'to',
    selectAuction: 'Select auction',
    selectLocation: 'Select location',
    selectVehicle: 'Select vehicle type',
    selectEngine: 'Select engine type',
    selectPort: 'Select destination port',
    parsing: 'Parsing link...',
    parseError: 'Could not parse link. Please fill manually.',
    parseSuccess: 'Data loaded from link!',
  },
  ru: {
    title: 'Калькулятор стоимости доставки',
    subtitle: 'Рассчитайте полную стоимость авто из США',
    lotLink: 'Ссылка на лот',
    lotLinkPlaceholder: 'Вставьте ссылку с Copart или IAAI...',
    apply: 'Применить',
    lotPrice: 'Цена лота ($)',
    auction: 'Аукцион',
    location: 'Площадка аукциона',
    vehicleType: 'Тип транспорта',
    engineType: 'Тип двигателя',
    engineVolume: 'Объём двигателя (см³)',
    year: 'Год выпуска',
    destinationPort: 'Порт назначения',
    calculate: 'Рассчитать',
    results: 'Детализация стоимости',
    auctionFee: 'Аукционный сбор',
    domesticShipping: 'Доставка по США',
    portFee: 'Портовый сбор',
    oceanShipping: 'Доставка океаном',
    insurance: 'Страховка',
    serviceFee: 'Сервисный сбор',
    documentation: 'Документация',
    brokerFee: 'Услуги брокера',
    totalDelivery: 'Итого доставка',
    total: 'Общая стоимость',
    note: '* Цены ориентировочные и могут варьироваться. Свяжитесь с нами для точного расчёта.',
    fromPort: 'Из порта',
    toPort: 'в',
    selectAuction: 'Выберите аукцион',
    selectLocation: 'Выберите площадку',
    selectVehicle: 'Выберите тип транспорта',
    selectEngine: 'Выберите тип двигателя',
    selectPort: 'Выберите порт назначения',
    parsing: 'Загрузка данных...',
    parseError: 'Не удалось получить данные. Заполните вручную.',
    parseSuccess: 'Данные загружены!',
  },
  uk: {
    title: 'Калькулятор вартості доставки',
    subtitle: 'Розрахуйте повну вартість авто з США',
    lotLink: 'Посилання на лот',
    lotLinkPlaceholder: 'Вставте посилання з Copart або IAAI...',
    apply: 'Застосувати',
    lotPrice: 'Ціна лота ($)',
    auction: 'Аукціон',
    location: 'Майданчик аукціону',
    vehicleType: 'Тип транспорту',
    engineType: 'Тип двигуна',
    engineVolume: "Об'єм двигуна (см³)",
    year: 'Рік випуску',
    destinationPort: 'Порт призначення',
    calculate: 'Розрахувати',
    results: 'Деталізація вартості',
    auctionFee: 'Аукціонний збір',
    domesticShipping: 'Доставка по США',
    portFee: 'Портовий збір',
    oceanShipping: 'Доставка океаном',
    insurance: 'Страховка',
    serviceFee: 'Сервісний збір',
    documentation: 'Документація',
    brokerFee: 'Послуги брокера',
    totalDelivery: 'Разом доставка',
    total: 'Загальна вартість',
    note: "* Ціни орієнтовні і можуть відрізнятися. Зв'яжіться з нами для точного розрахунку.",
    fromPort: 'З порту',
    toPort: 'до',
    selectAuction: 'Оберіть аукціон',
    selectLocation: 'Оберіть майданчик',
    selectVehicle: 'Оберіть тип транспорту',
    selectEngine: 'Оберіть тип двигуна',
    selectPort: 'Оберіть порт призначення',
    parsing: 'Завантаження даних...',
    parseError: 'Не вдалося отримати дані. Заповніть вручну.',
    parseSuccess: 'Дані завантажено!',
  },
  de: {
    title: 'Lieferkostenrechner',
    subtitle: 'Berechnen Sie die Gesamtkosten Ihres Autos aus den USA',
    lotLink: 'Auktions-Link',
    lotLinkPlaceholder: 'Copart oder IAAI Link einfügen...',
    apply: 'Anwenden',
    lotPrice: 'Lotpreis ($)',
    auction: 'Auktion',
    location: 'Auktionsstandort',
    vehicleType: 'Fahrzeugtyp',
    engineType: 'Motortyp',
    engineVolume: 'Hubraum (cm³)',
    year: 'Baujahr',
    destinationPort: 'Zielhafen',
    calculate: 'Berechnen',
    results: 'Kostenaufschlüsselung',
    auctionFee: 'Auktionsgebühr',
    domesticShipping: 'US-Inlandsversand',
    portFee: 'Hafengebühr',
    oceanShipping: 'Seefracht',
    insurance: 'Versicherung',
    serviceFee: 'Servicegebühr',
    documentation: 'Dokumentation',
    brokerFee: 'Maklergebühr',
    totalDelivery: 'Gesamtlieferung',
    total: 'Gesamtkosten',
    note: '* Preise sind Schätzungen. Kontaktieren Sie uns für ein genaues Angebot.',
    fromPort: 'Von Hafen',
    toPort: 'nach',
    selectAuction: 'Auktion wählen',
    selectLocation: 'Standort wählen',
    selectVehicle: 'Fahrzeugtyp wählen',
    selectEngine: 'Motortyp wählen',
    selectPort: 'Zielhafen wählen',
    parsing: 'Daten werden geladen...',
    parseError: 'Daten konnten nicht geladen werden. Bitte manuell ausfüllen.',
    parseSuccess: 'Daten geladen!',
  },
  lt: {
    title: 'Pristatymo kainos skaičiuoklė',
    subtitle: 'Apskaičiuokite visą automobilio iš JAV kainą',
    lotLink: 'Aukciono nuoroda',
    lotLinkPlaceholder: 'Įklijuokite Copart arba IAAI nuorodą...',
    apply: 'Taikyti',
    lotPrice: 'Loto kaina ($)',
    auction: 'Aukcionas',
    location: 'Aukciono vieta',
    vehicleType: 'Transporto tipas',
    engineType: 'Variklio tipas',
    engineVolume: 'Variklio tūris (cm³)',
    year: 'Metai',
    destinationPort: 'Paskirties uostas',
    calculate: 'Skaičiuoti',
    results: 'Kainos suskirstymas',
    auctionFee: 'Aukciono mokestis',
    domesticShipping: 'Pristatymas JAV',
    portFee: 'Uosto mokestis',
    oceanShipping: 'Jūrų transportas',
    insurance: 'Draudimas',
    serviceFee: 'Paslaugos mokestis',
    documentation: 'Dokumentacija',
    brokerFee: 'Brokerio mokestis',
    totalDelivery: 'Viso pristatymas',
    total: 'Bendra kaina',
    note: '* Kainos yra orientacinės. Susisiekite su mumis dėl tikslios kainos.',
    fromPort: 'Iš uosto',
    toPort: 'į',
    selectAuction: 'Pasirinkite aukcioną',
    selectLocation: 'Pasirinkite vietą',
    selectVehicle: 'Pasirinkite transporto tipą',
    selectEngine: 'Pasirinkite variklio tipą',
    selectPort: 'Pasirinkite paskirties uostą',
    parsing: 'Duomenys kraunami...',
    parseError: 'Nepavyko gauti duomenų. Užpildykite rankiniu būdu.',
    parseSuccess: 'Duomenys įkelti!',
  },
};
