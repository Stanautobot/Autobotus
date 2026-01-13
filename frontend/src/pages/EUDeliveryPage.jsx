import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, FileText, Car, Truck, ClipboardCheck, Package,
  ArrowRight, CheckCircle, MapPin, Euro, Send, Phone, Mail
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';

const EUDeliveryPage = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    car: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stages = [
    { icon: Search, ...t.eu.stages.stage1 },
    { icon: FileText, ...t.eu.stages.stage2 },
    { icon: ClipboardCheck, ...t.eu.stages.stage3 },
    { icon: Truck, ...t.eu.stages.stage4 },
    { icon: Car, ...t.eu.stages.stage5 },
    { icon: Package, ...t.eu.stages.stage6 },
  ];

  const transportOptions = [
    { key: 'carrier', icon: Truck, ...t.eu.transport.carrier },
    { key: 'container', icon: Package, ...t.eu.transport.container },
    { key: 'selfDrive', icon: Car, ...t.eu.transport.selfDrive },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error(language === 'ru' ? 'Заполните обязательные поля' : language === 'uk' ? 'Заповніть обов\'язкові поля' : 'Please fill required fields');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call - in production this would send to backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    
    toast.success(t.eu.form.success);
    setFormData({ name: '', phone: '', email: '', car: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              🇪🇺 EU
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t.eu.title}
            </h1>
            <p className="text-lg text-slate-600">
              {t.eu.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            {t.eu.stages.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center transition-colors">
                    <stage.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="absolute top-6 right-6 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-semibold text-slate-500">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 pr-10">
                      {stage.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            {t.eu.transport.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transportOptions.map((option) => (
              <div
                key={option.key}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-200 rounded-2xl flex items-center justify-center mb-4 transition-colors">
                  <option.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-slate-600">
                  {option.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Countries */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pricing */}
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900">
                  <Euro className="w-6 h-6 text-blue-600" />
                  {t.eu.pricing.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{t.eu.pricing.shipping}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{t.eu.pricing.orgFee}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{t.eu.pricing.fullService}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{t.eu.pricing.customs}</span>
                </div>
              </CardContent>
            </Card>

            {/* Countries */}
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  {t.eu.countries.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {t.eu.countries.list.map((country, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-lg">
                          {index === 0 ? '🇩🇪' : index === 1 ? '🇵🇱' : index === 2 ? '🇱🇹' : '🇦🇹'}
                        </span>
                      </div>
                      <span className="font-medium text-slate-900">{country}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl text-slate-900">
                {t.eu.form.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-slate-700">{t.eu.form.name} *</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 border-slate-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-700">{t.eu.form.phone} *</Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 border-slate-200 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700">{t.eu.form.email}</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 border-slate-200 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700">{t.eu.form.car}</Label>
                  <Input
                    value={formData.car}
                    onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                    placeholder="BMW X5 2020, Audi A6 2019..."
                    className="h-12 border-slate-200 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700">{t.eu.form.message}</Label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="border-slate-200 focus:border-blue-500 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {language === 'ru' ? 'Отправка...' : language === 'uk' ? 'Відправка...' : 'Sending...'}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      {t.eu.form.submit}
                    </span>
                  )}
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="tel:+4915158375787"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +49 151 5837 5787
                  </a>
                  <a
                    href="https://t.me/autobotus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://wa.me/4915158375787"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default EUDeliveryPage;
