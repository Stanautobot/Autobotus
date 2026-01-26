import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Shield, Clock, Award, Truck, Globe, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const HomePage = () => {
  const { t } = useLanguage();

  const heroImages = [
    'https://images.unsplash.com/photo-1720014836833-20d9992a510f?w=1920&q=80',
    'https://images.unsplash.com/photo-1522674149721-b0191358dc5c?w=1920&q=80',
    'https://images.unsplash.com/photo-1634638021403-70f46d19fc02?w=1920&q=80',
  ];

  const features = [
    {
      icon: Shield,
      title: { en: 'Full Insurance', de: 'Vollversicherung', lt: 'Pilnas draudimas', ru: 'Полная страховка', uk: 'Повне страхування' },
      desc: { en: 'Complete coverage during transportation', de: 'Vollständiger Schutz während des Transports', lt: 'Pilna apsauga transportavimo metu', ru: 'Полное покрытие при транспортировке', uk: 'Повне покриття під час транспортування' }
    },
    {
      icon: Clock,
      title: { en: 'Fast Delivery', de: 'Schnelle Lieferung', lt: 'Greitas pristatymas', ru: 'Быстрая доставка', uk: 'Швидка доставка' },
      desc: { en: '14-30 days from USA, 5-12 days from EU', de: '14-30 Tage aus den USA, 5-12 Tage aus der EU', lt: '14-30 dienų iš JAV, 5-12 dienų iš ES', ru: '14-30 дней из США, 5-12 дней из ЕС', uk: '14-30 днів з США, 5-12 днів з ЄС' }
    },
    {
      icon: Award,
      title: { en: 'Professional Service', de: 'Professioneller Service', lt: 'Profesionalus aptarnavimas', ru: 'Профессиональный сервис', uk: 'Професійний сервіс' },
      desc: { en: 'Years of experience in auto import', de: 'Jahre Erfahrung im Autoimport', lt: 'Metų patirtis automobilių importe', ru: 'Годы опыта в импорте авто', uk: 'Роки досвіду в імпорті авто' }
    },
    {
      icon: Globe,
      title: { en: 'Worldwide Shipping', de: 'Weltweiter Versand', lt: 'Pristatymas visame pasaulyje', ru: 'Доставка по всему миру', uk: 'Доставка по всьому світу' },
      desc: { en: 'From USA and all EU countries', de: 'Aus den USA und allen EU-Ländern', lt: 'Iš JAV ir visų ES šalių', ru: 'Из США и всех стран ЕС', uk: 'З США та всіх країн ЄС' }
    }
  ];

  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImages[0]} 
            alt="Car shipping" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-white/85" />
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              <Truck className="w-4 h-4" />
              autobotus.lt
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/usa-delivery">
                <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300">
                  {t.hero.ctaCalculator}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/eu-delivery">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg rounded-xl border-2 border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300">
                  {t.hero.ctaContact}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title[language]}
                </h3>
                <p className="text-slate-600 text-sm">
                  {feature.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1634638022229-5a52221886dc?w=1920&q=80" 
            alt="Port logistics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/97 via-slate-50/95 to-blue-50/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* USA Delivery Card */}
            <div className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  🇺🇸 USA
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {t.nav.usaDelivery}
                </h3>
                <p className="text-slate-600 mb-6">
                  {t.usa.subtitle}
                </p>
                <ul className="space-y-3 mb-8">
                  {['Copart, IAAI, Manheim', 'Copart, IAAI, Manheim'].slice(0, 1).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span>Copart, IAAI, Manheim</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>14-30 {language === 'ru' || language === 'uk' ? 'дней' : 'days'}</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>{language === 'ru' ? 'Онлайн калькулятор' : language === 'uk' ? 'Онлайн калькулятор' : 'Online calculator'}</span>
                  </li>
                </ul>
                <Link to="/usa-delivery">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6">
                    {t.hero.ctaCalculator}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* EU Delivery Card */}
            <div className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  🇪🇺 EU
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {t.nav.euDelivery}
                </h3>
                <p className="text-slate-600 mb-6">
                  {t.eu.subtitle}
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>{t.eu.countries.list.join(', ')}</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>5-12 {language === 'ru' || language === 'uk' ? 'дней' : 'days'}</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>{language === 'ru' ? 'Полное сопровождение' : language === 'uk' ? 'Повний супровід' : 'Full support'}</span>
                  </li>
                </ul>
                <Link to="/eu-delivery">
                  <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl py-6 transition-all duration-300">
                    {t.hero.ctaContact}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-blue-600 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522674149721-b0191358dc5c?w=1920&q=80" 
            alt="Car shipping" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600/90" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.contacts.title}?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            {t.contacts.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4915158375787">
              <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl">
                +49 151 5837 5787
              </Button>
            </a>
            <a href="https://t.me/autobotus" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                Telegram
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
