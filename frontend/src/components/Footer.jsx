import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block bg-white rounded-xl p-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_globalcarbuy/artifacts/frpg0r8l_Autobot%20logog.png" 
                alt="Autobotus" 
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                {t.nav.home}
              </Link>
              <Link to="/usa-delivery" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                {t.nav.usaDelivery}
              </Link>
              <Link to="/eu-delivery" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                {t.nav.euDelivery}
              </Link>
              <Link to="/contacts" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                {t.nav.contacts}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">{t.contacts.title}</h4>
            <div className="space-y-3">
              <a 
                href="tel:+4915158375787" 
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                +49 151 5837 5787
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Clock className="w-4 h-4 text-blue-400" />
                {t.contacts.workHoursValue}
              </div>
            </div>
          </div>

          {/* Messengers */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">{t.contacts.messengers}</h4>
            <div className="flex gap-3">
              <a
                href="https://t.me/autobotus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                title="Telegram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/4915158375787"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                title="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="viber://chat?number=%2B380937197030"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                title="Viber"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.63 6.77.533 9.97c-.097 3.2-.22 9.203 5.64 10.88h.003l-.003 2.46s-.04.993.617 1.196c.793.246 1.26-.51 2.02-1.327.417-.449.994-1.108 1.43-1.613 3.937.33 6.963-.425 7.31-.537.8-.257 5.326-.84 6.063-6.85.763-6.2-.37-10.12-2.416-11.884l-.002-.001C19.87 1.027 15.19.018 11.4 0zm.363 1.63h.053c3.307.018 7.514.81 8.773 1.903 1.696 1.467 2.673 4.963 2.027 10.197-.6 4.89-4.063 5.52-4.72 5.73-.283.092-2.89.736-6.163.534 0 0-2.44 2.94-3.2 3.7-.12.12-.26.167-.353.145-.13-.03-.167-.187-.163-.41l.02-4.022c-4.6-1.327-4.333-6.203-4.257-8.89.077-2.687.6-4.877 2.03-6.29 1.912-1.754 5.603-2.577 5.953-2.597zM11.29 4.6a.523.523 0 00-.513.527c0 .286.227.52.513.524 1.25.013 2.387.5 3.266 1.393.88.893 1.36 2.047 1.373 3.31a.524.524 0 00.527.513h.007a.524.524 0 00.513-.527c-.017-1.537-.6-2.95-1.673-4.037S12.826 4.617 11.29 4.6zm-1.897.453a.528.528 0 00-.286.08l-.076.05c-.32.207-.67.44-.96.835-.227.31-.377.67-.37 1.013.003.193.053.383.12.567.15.467.377.907.627 1.34.507.89 1.17 1.737 1.957 2.543l.016.017.017.016c.806.787 1.653 1.45 2.543 1.957.433.25.873.477 1.34.627.237.083.5.14.753.133h.003c.343-.007.703-.143 1.013-.37.397-.29.63-.64.837-.96l.05-.076a.527.527 0 00-.074-.653l-1.543-1.54a.527.527 0 00-.627-.093l-.01.003c-.177.1-.337.23-.523.353-.097.06-.193.12-.32.173l-.04.017a.453.453 0 01-.47-.07l-.01-.007a10.133 10.133 0 01-1.273-1.093 10.14 10.14 0 01-1.093-1.273l-.007-.01a.453.453 0 01-.07-.47l.017-.04c.053-.127.113-.223.173-.32.123-.186.253-.346.353-.523l.003-.01a.527.527 0 00-.093-.627l-1.54-1.543a.527.527 0 00-.437-.196zm3.777.887a.524.524 0 00-.093 1.04c.653.12 1.223.453 1.653.94.426.487.7 1.1.76 1.767a.524.524 0 00.57.47.524.524 0 00.47-.57 4.056 4.056 0 00-1.083-2.507 4.059 4.059 0 00-2.217-1.333.524.524 0 00-.06-.007zm.123 1.75a.524.524 0 00-.127 1.033c.303.077.557.247.733.483.177.237.277.53.287.84a.524.524 0 001.047-.03 2.553 2.553 0 00-.527-1.52 2.54 2.54 0 00-1.323-.876.525.525 0 00-.09.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Autobotus. {t.footer.rights}
            </p>
            <div className="flex gap-6">
              <Link to="/" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">
                {t.footer.privacy}
              </Link>
              <Link to="/" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
