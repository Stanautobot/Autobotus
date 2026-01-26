import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  auctions,
  auctionLocations,
  vehicleTypes,
  engineTypes,
  destinationPorts,
  calculateTotalCost,
  parseCopartUrl,
  calculatorLabels,
} from '../data/calculatorConfig';
import { 
  Calculator, Ship, DollarSign, Shield, Info, Truck, Link2, 
  CheckCircle, Loader2, AlertCircle, Car, Anchor
} from 'lucide-react';
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
import { toast } from 'sonner';

const USADeliveryPage = () => {
  const { t, language } = useLanguage();
  const labels = calculatorLabels[language] || calculatorLabels.en;
  
  const [lotLink, setLotLink] = useState('');
  const [isParsing, setIsParsing] = useState(false);
  const [formData, setFormData] = useState({
    lotPrice: '',
    auction: '',
    locationId: '',
    vehicleType: '',
    engineType: '',
    engineVolume: '',
    year: '',
    destinationPortId: 'klaipeda'
  });
  const [result, setResult] = useState(null);
  const [locations, setLocations] = useState([]);

  // Update locations when auction changes
  useEffect(() => {
    if (formData.auction) {
      setLocations(auctionLocations[formData.auction] || []);
      setFormData(prev => ({ ...prev, locationId: '' }));
    }
  }, [formData.auction]);

  // Auto-calculate when form changes
  useEffect(() => {
    if (formData.lotPrice && formData.auction && formData.locationId && formData.vehicleType) {
      const calculated = calculateTotalCost({
        lotPrice: parseFloat(formData.lotPrice) || 0,
        auction: formData.auction,
        locationId: formData.locationId,
        vehicleType: formData.vehicleType,
        destinationPortId: formData.destinationPortId
      });
      setResult(calculated);
    } else {
      setResult(null);
    }
  }, [formData]);

  // Parse auction link
  const handleParseLink = async () => {
    if (!lotLink.trim()) return;
    
    setIsParsing(true);
    
    // Parse the URL
    const parsed = parseCopartUrl(lotLink);
    
    if (parsed) {
      // Simulate fetching lot data (in real app, this would call backend API)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set auction type
      setFormData(prev => ({
        ...prev,
        auction: parsed.auction,
      }));
      
      toast.success(labels.parseSuccess);
    } else {
      toast.error(labels.parseError);
    }
    
    setIsParsing(false);
  };

  const years = [];
  for (let y = 2026; y >= 2000; y--) {
    years.push(y);
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/50 to-white py-16 lg:py-20 overflow-hidden">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              🇺🇸 USA
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t.usa.title}
            </h1>
            <p className="text-lg text-slate-600">
              {labels.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Calculator Form */}
            <div className="space-y-6">
              {/* Lot Link Input */}
              <Card className="border-orange-200 bg-orange-50/50">
                <CardContent className="p-6">
                  <Label className="text-slate-700 font-medium mb-3 flex items-center gap-2">
                    <Link2 className="w-4 h-4 text-orange-600" />
                    {labels.lotLink}
                  </Label>
                  <div className="flex gap-3">
                    <Input
                      value={lotLink}
                      onChange={(e) => setLotLink(e.target.value)}
                      placeholder={labels.lotLinkPlaceholder}
                      className="flex-1 h-12 border-slate-200 focus:border-blue-500 bg-white"
                    />
                    <Button
                      onClick={handleParseLink}
                      disabled={isParsing || !lotLink.trim()}
                      className="h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      {isParsing ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        labels.apply
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">
                    Copart: copart.com/lot/12345678 | IAAI: iaai.com/VehicleDetail/12345678
                  </p>
                </CardContent>
              </Card>

              {/* Main Calculator Form */}
              <Card className="border-slate-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-lg">
                  <CardTitle className="text-white flex items-center gap-3">
                    <Calculator className="w-6 h-6" />
                    {labels.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-5">
                  {/* Lot Price */}
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">{labels.lotPrice}</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="number"
                        placeholder="10000"
                        value={formData.lotPrice}
                        onChange={(e) => setFormData({ ...formData, lotPrice: e.target.value })}
                        className="h-12 pl-10 border-slate-200 focus:border-blue-500 text-lg font-medium"
                      />
                    </div>
                  </div>

                  {/* Auction */}
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">{labels.auction}</Label>
                    <Select
                      value={formData.auction}
                      onValueChange={(value) => setFormData({ ...formData, auction: value })}
                    >
                      <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500">
                        <SelectValue placeholder={labels.selectAuction} />
                      </SelectTrigger>
                      <SelectContent>
                        {auctions.map((auction) => (
                          <SelectItem key={auction.id} value={auction.id}>
                            {auction.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">{labels.location}</Label>
                    <Select
                      value={formData.locationId}
                      onValueChange={(value) => setFormData({ ...formData, locationId: value })}
                      disabled={!formData.auction}
                    >
                      <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500">
                        <SelectValue placeholder={labels.selectLocation} />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((loc) => (
                          <SelectItem key={loc.id} value={loc.id}>
                            {loc.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Vehicle Type */}
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">{labels.vehicleType}</Label>
                    <Select
                      value={formData.vehicleType}
                      onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}
                    >
                      <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500">
                        <SelectValue placeholder={labels.selectVehicle} />
                      </SelectTrigger>
                      <SelectContent>
                        {vehicleTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name[language] || type.name.en}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Engine Type */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">{labels.engineType}</Label>
                      <Select
                        value={formData.engineType}
                        onValueChange={(value) => setFormData({ ...formData, engineType: value })}
                      >
                        <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500">
                          <SelectValue placeholder={labels.selectEngine} />
                        </SelectTrigger>
                        <SelectContent>
                          {engineTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.name[language] || type.name.en}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">{labels.engineVolume}</Label>
                      <Input
                        type="number"
                        placeholder="2000"
                        value={formData.engineVolume}
                        onChange={(e) => setFormData({ ...formData, engineVolume: e.target.value })}
                        className="h-12 border-slate-200 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Year */}
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">{labels.year}</Label>
                    <Select
                      value={formData.year}
                      onValueChange={(value) => setFormData({ ...formData, year: value })}
                    >
                      <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500">
                        <SelectValue placeholder="2024" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Destination Port */}
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">{labels.destinationPort}</Label>
                    <Select
                      value={formData.destinationPortId}
                      onValueChange={(value) => setFormData({ ...formData, destinationPortId: value })}
                    >
                      <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500">
                        <SelectValue placeholder={labels.selectPort} />
                      </SelectTrigger>
                      <SelectContent>
                        {destinationPorts.map((port) => (
                          <SelectItem key={port.id} value={port.id}>
                            {port.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {result ? (
                <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg sticky top-24">
                  <CardHeader className="border-b border-blue-100">
                    <CardTitle className="text-blue-900 flex items-center gap-3">
                      <DollarSign className="w-6 h-6 text-blue-600" />
                      {labels.results}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-3">
                    {/* Lot Price */}
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <Car className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">{labels.lotPrice.replace(' ($)', '')}</span>
                      </div>
                      <span className="font-semibold text-slate-900">${result.lotPrice.toLocaleString()}</span>
                    </div>
                    
                    {/* Auction Fee */}
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-100">
                      <span className="text-slate-600">{labels.auctionFee}</span>
                      <span className="font-semibold text-slate-900">${result.auctionFee.toLocaleString()}</span>
                    </div>

                    <div className="h-px bg-slate-200 my-2" />
                    
                    {/* Domestic Shipping */}
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <Truck className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">{labels.domesticShipping}</span>
                      </div>
                      <span className="font-semibold text-slate-900">${result.domesticShipping.toLocaleString()}</span>
                    </div>

                    {/* Port Fee */}
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-100">
                      <span className="text-slate-600">{labels.portFee}</span>
                      <span className="font-semibold text-slate-900">${result.portFee.toLocaleString()}</span>
                    </div>
                    
                    {/* Ocean Shipping */}
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-100">
                      <div>
                        <div className="flex items-center gap-3">
                          <Ship className="w-5 h-5 text-slate-400" />
                          <span className="text-slate-600">{labels.oceanShipping}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 ml-8">
                          {result.portName} → {result.destPortName}
                        </p>
                      </div>
                      <span className="font-semibold text-slate-900">${result.oceanShipping.toLocaleString()}</span>
                    </div>
                    
                    {/* Insurance */}
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">{labels.insurance}</span>
                      </div>
                      <span className="font-semibold text-slate-900">${result.insurance.toLocaleString()}</span>
                    </div>

                    {/* Service & Documentation */}
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-100">
                      <span className="text-slate-600">{labels.serviceFee} + {labels.documentation}</span>
                      <span className="font-semibold text-slate-900">${(result.serviceFee + result.documentation).toLocaleString()}</span>
                    </div>

                    {/* Broker Fee */}
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-100">
                      <span className="text-slate-600">{labels.brokerFee}</span>
                      <span className="font-semibold text-slate-900">${result.brokerFee.toLocaleString()}</span>
                    </div>

                    <div className="h-px bg-slate-200 my-2" />

                    {/* Total Delivery */}
                    <div className="flex justify-between items-center p-4 bg-blue-100 rounded-xl">
                      <span className="font-medium text-blue-800">{labels.totalDelivery}</span>
                      <span className="font-bold text-blue-800 text-lg">${result.totalDelivery.toLocaleString()}</span>
                    </div>
                    
                    {/* Grand Total */}
                    <div className="flex justify-between items-center p-5 bg-blue-600 rounded-xl text-white">
                      <span className="font-medium text-lg">{labels.total}</span>
                      <span className="font-bold text-2xl">${result.total.toLocaleString()}</span>
                    </div>
                    
                    <p className="text-sm text-slate-500 flex items-start gap-2 pt-2">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {labels.note}
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
                      {language === 'ru' ? 'Вставьте ссылку на лот или заполните данные вручную' : language === 'uk' ? 'Вставте посилання на лот або заповніть дані вручну' : language === 'de' ? 'Link einfügen oder manuell ausfüllen' : language === 'lt' ? 'Įklijuokite nuorodą arba užpildykite rankiniu būdu' : 'Paste lot link or fill data manually'}
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
                  <p className="text-sm text-slate-500">14-45 {language === 'ru' || language === 'uk' ? 'дней' : language === 'de' ? 'Tage' : language === 'lt' ? 'dienų' : 'days'}</p>
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
            {language === 'ru' ? 'Нужна помощь с расчётом? Свяжитесь с нами!' : language === 'uk' ? 'Потрібна допомога з розрахунком? Зв\'яжіться з нами!' : language === 'de' ? 'Brauchen Sie Hilfe? Kontaktieren Sie uns!' : language === 'lt' ? 'Reikia pagalbos? Susisiekite su mumis!' : 'Need help? Contact us!'}
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
