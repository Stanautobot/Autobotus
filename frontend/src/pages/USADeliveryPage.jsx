import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { calculatorData } from '../data/translations';
import { Calculator, Ship, DollarSign, Shield, Info, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const USADeliveryPage = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    auction: '',
    usPort: '',
    destinationPort: '',
    vehicleType: '',
    carPrice: ''
  });
  const [result, setResult] = useState(null);

  const calculateCost = () => {
    if (!formData.auction || !formData.usPort || !formData.destinationPort || !formData.vehicleType) {
      return;
    }

    const usPort = calculatorData.usPorts.find(p => p.id === formData.usPort);
    const destPort = calculatorData.destinationPorts.find(p => p.id === formData.destinationPort);
    const vehicle = calculatorData.vehicleTypes.find(v => v.id === formData.vehicleType);
    const carPrice = parseFloat(formData.carPrice) || 0;

    // Calculate auction fee (simplified - typically 10% of car price + fixed fees)
    const auctionFee = carPrice > 0 ? Math.round(carPrice * 0.1 + 300) : 500;
    
    // Shipping cost based on port + vehicle multiplier
    const shippingCost = Math.round((usPort.fee + destPort.shippingCost) * vehicle.multiplier);
    
    // Insurance (1.5% of car price or minimum $150)
    const insurance = carPrice > 0 ? Math.max(Math.round(carPrice * 0.015), 150) : 150;

    const total = auctionFee + shippingCost + insurance;

    setResult({
      auctionFee,
      shippingCost,
      insurance,
      total
    });
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/50 to-white py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1720014836833-20d9992a510f?w=1920&q=80" 
            alt="Car carrier" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-white/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              🇺🇸 USA
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t.usa.title}
            </h1>
            <p className="text-lg text-slate-600">
              {t.usa.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Calculator Form */}
            <Card className="border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-lg">
                <CardTitle className="text-white flex items-center gap-3">
                  <Calculator className="w-6 h-6" />
                  {t.usa.calculator.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Auction Select */}
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">{t.usa.calculator.auction}</Label>
                  <Select
                    value={formData.auction}
                    onValueChange={(value) => setFormData({ ...formData, auction: value })}
                  >
                    <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500">
                      <SelectValue placeholder={t.usa.calculator.auction} />
                    </SelectTrigger>
                    <SelectContent>
                      {calculatorData.auctions.map((auction) => (
                        <SelectItem key={auction.id} value={auction.id}>
                          {auction.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* US Port Select */}
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">{t.usa.calculator.port}</Label>
                  <Select
                    value={formData.usPort}
                    onValueChange={(value) => setFormData({ ...formData, usPort: value })}
                  >
                    <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500">
                      <SelectValue placeholder={t.usa.calculator.port} />
                    </SelectTrigger>
                    <SelectContent>
                      {calculatorData.usPorts.map((port) => (
                        <SelectItem key={port.id} value={port.id}>
                          {port.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Destination Port Select */}
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">{t.usa.calculator.destinationPort}</Label>
                  <Select
                    value={formData.destinationPort}
                    onValueChange={(value) => setFormData({ ...formData, destinationPort: value })}
                  >
                    <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500">
                      <SelectValue placeholder={t.usa.calculator.destinationPort} />
                    </SelectTrigger>
                    <SelectContent>
                      {calculatorData.destinationPorts.map((port) => (
                        <SelectItem key={port.id} value={port.id}>
                          {port.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Vehicle Type Select */}
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">{t.usa.calculator.vehicleType}</Label>
                  <Select
                    value={formData.vehicleType}
                    onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}
                  >
                    <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500">
                      <SelectValue placeholder={t.usa.calculator.vehicleType} />
                    </SelectTrigger>
                    <SelectContent>
                      {calculatorData.vehicleTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Car Price Input */}
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">
                    {language === 'ru' ? 'Цена авто ($)' : language === 'uk' ? 'Ціна авто ($)' : language === 'de' ? 'Autopreis ($)' : language === 'lt' ? 'Automobilio kaina ($)' : 'Car Price ($)'}
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      type="number"
                      placeholder="10000"
                      value={formData.carPrice}
                      onChange={(e) => setFormData({ ...formData, carPrice: e.target.value })}
                      className="h-12 pl-10 border-slate-200 focus:border-blue-500"
                    />
                  </div>
                </div>

                <Button
                  onClick={calculateCost}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  {t.usa.calculator.calculate}
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {result ? (
                <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-blue-900 flex items-center gap-3">
                      <DollarSign className="w-6 h-6 text-blue-600" />
                      {t.usa.calculator.result}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-100">
                        <span className="text-slate-600">{t.usa.calculator.auctionFee}</span>
                        <span className="font-semibold text-slate-900">${result.auctionFee.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-100">
                        <span className="text-slate-600">{t.usa.calculator.shipping}</span>
                        <span className="font-semibold text-slate-900">${result.shippingCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-100">
                        <span className="text-slate-600">{t.usa.calculator.insurance}</span>
                        <span className="font-semibold text-slate-900">${result.insurance.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-5 bg-blue-600 rounded-xl text-white">
                        <span className="font-medium text-lg">{t.usa.calculator.total}</span>
                        <span className="font-bold text-2xl">${result.total.toLocaleString()}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 flex items-start gap-2">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {t.usa.calculator.note}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-slate-200 bg-slate-50 shadow-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Calculator className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {language === 'ru' ? 'Заполните форму' : language === 'uk' ? 'Заповніть форму' : language === 'de' ? 'Formular ausfüllen' : language === 'lt' ? 'Užpildykite formą' : 'Fill the form'}
                    </h3>
                    <p className="text-slate-500">
                      {language === 'ru' ? 'Выберите параметры доставки' : language === 'uk' ? 'Виберіть параметри доставки' : language === 'de' ? 'Wählen Sie die Lieferparameter' : language === 'lt' ? 'Pasirinkite pristatymo parametrus' : 'Select delivery parameters'}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <Ship className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-1">
                    {language === 'ru' ? 'Морская доставка' : language === 'uk' ? 'Морська доставка' : language === 'de' ? 'Seefracht' : language === 'lt' ? 'Jūrų transportas' : 'Ocean Shipping'}
                  </h4>
                  <p className="text-sm text-slate-500">14-30 {language === 'ru' || language === 'uk' ? 'дней' : language === 'de' ? 'Tage' : language === 'lt' ? 'dienų' : 'days'}</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <Shield className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-1">
                    {language === 'ru' ? 'Страховка' : language === 'uk' ? 'Страхування' : language === 'de' ? 'Versicherung' : language === 'lt' ? 'Draudimas' : 'Insurance'}
                  </h4>
                  <p className="text-sm text-slate-500">{language === 'ru' ? 'Полное покрытие' : language === 'uk' ? 'Повне покриття' : language === 'de' ? 'Vollschutz' : language === 'lt' ? 'Pilna apsauga' : 'Full coverage'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 mb-4">
            {language === 'ru' ? 'Нужна помощь? Свяжитесь с нами!' : language === 'uk' ? 'Потрібна допомога? Зв\'яжіться з нами!' : language === 'de' ? 'Brauchen Sie Hilfe? Kontaktieren Sie uns!' : language === 'lt' ? 'Reikia pagalbos? Susisiekite su mumis!' : 'Need help? Contact us!'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+4915158375787" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
              +49 151 5837 5787
            </a>
            <a href="https://t.me/autobotus" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default USADeliveryPage;
