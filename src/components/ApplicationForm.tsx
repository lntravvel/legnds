import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles, CheckCircle2, User, Phone, Globe, Video, Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { BrandIcons } from './BrandIcons';

export function ApplicationForm() {
  const { t, lang, dir } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: '',
    age: '',
    experience: 'beginner',
    socialHandle: '',
    termsAccepted: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.country.trim() || !formData.age.trim()) {
      setErrorMsg(
        t(
          'يرجى ملء جميع الحقول الأساسية (الاسم، رقم الهاتف، الدولة، العمر)',
          'Please fill in all required fields (Name, Phone, Country, Age)',
          'Пожалуйста, заполните обязательные поля (Имя, Телефон, Страна, Возраст)',
          'Vă rugăm să completați câmpurile obligatorii (Nume, Telefon, Țară, Vârstă)',
          'Veuillez remplir les champs obligatoires (Nom, Téléphone, Pays, Âge)',
          'Si prega di compilare i campi obbligatori (Nome, Telefono, Paese, Età)'
        )
      );
      return;
    }

    const ageNum = parseInt(formData.age, 10);
    if (isNaN(ageNum) || ageNum < 18) {
      setErrorMsg(
        t(
          'الانضمام متاح فقط لمن هم 18 سنة فأكثر.',
          'Joining is only available for individuals 18 years or older.',
          'Вступление доступно только лицам от 18 лет и старше.',
          'Înscrierea este permisă doar persoanelor cu vârsta de 18 ani sau mai mult.',
          'L\'inscription est réservée aux personnes de 18 ans et plus.',
          'L\'iscrizione è consentita solo a chi ha compiuto 18 anni o più.'
        )
      );
      return;
    }

    if (!formData.termsAccepted) {
      setErrorMsg(
        t(
          'يرجى تأكيد الإقرار بأن عمرك 18 سنة أو أكثر والموافقة على سياسات Xena Live.',
          'Please confirm that you are 18+ and agree to Xena Live policies.',
          'Пожалуйста, подтвердите, что вам исполнилось 18 лет, и согласие с правилами Xena Live.',
          'Vă rugăm să confirmați că aveți cel puțin 18 ani și sunteți de acord cu politicile Xena Live.',
          'Veuillez confirmer que vous avez 18 ans ou plus et accepter les règles de Xena Live.',
          'Conferma di avere almeno 18 anni e di accettare le regole di Xena Live.'
        )
      );
      return;
    }

    const expTextMap: Record<string, string> = {
      beginner: t('مذيع جديد (أول مرة)', 'Beginner (First time)', 'Новичок (впервые)', 'Începător (prima dată)', 'Débutant (première fois)', 'Principiante (prima volta)'),
      tiktok_bigo: t('خبرة سابقة على تيك توك / تطبيقات أخرى', 'Experience on TikTok / Other apps', 'Опыт в TikTok / других приложениях', 'Experiență pe TikTok / alte aplicații', 'Expérience sur TikTok / autres', 'Esperienza su TikTok / altre app'),
      xena_current: t('مذيع حالي على زينا لايف', 'Current host on Xena Live', 'Текущий ведущий на Xena Live', 'Gazdă actuală pe Xena Live', 'Diffuseur actuel sur Xena Live', 'Host attuale su Xena Live')
    };

    const experienceLabel = expTextMap[formData.experience] || formData.experience;

    // Sanitize inputs to prevent control character injection and excessive lengths
    const cleanStr = (str: string, maxLen = 80) =>
      str.replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, maxLen);

    const safeName = cleanStr(formData.name, 50);
    const safePhone = cleanStr(formData.phone, 25);
    const safeCountry = cleanStr(formData.country, 40);
    const safeAge = cleanStr(formData.age, 3);
    const safeHandle = cleanStr(formData.socialHandle, 50);

    // Formatted WhatsApp message
    const message = [
      '🌟 *طلب انضمام جديد - وكالة الأساطير (Legends Agency)* 🌟',
      '────────────────────────────',
      `👤 *الاسم:* ${safeName}`,
      `📱 *رقم الواتساب:* ${safePhone}`,
      `🌍 *الدولة / الإقامة:* ${safeCountry}`,
      `🎂 *العمر (18+):* ${safeAge}`,
      `🎙️ *مستوى الخبرة:* ${experienceLabel}`,
      safeHandle ? `🔗 *معرف السوشيال / الآيدي:* ${safeHandle}` : null,
      '✅ *إقرار:* المتقدم 18+ وموافق على سياسات تطبيق Xena Live',
      '────────────────────────────',
      'تم إرسال هذا الطلب عبر الموقع: https://legeends.com/'
    ].filter(Boolean).join('\n');

    setIsSubmitted(true);

    const waUrl = `https://wa.me/447460018974?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="apply-form" className="relative z-10 w-full px-4 sm:px-6 max-w-4xl mx-auto my-6 sm:my-10">
      {/* Background Ambient Glow */}
      <div 
        className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-cyan-500/15 to-purple-600/20 rounded-[32px] blur-2xl opacity-70 pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-white/[0.05] via-[#090b14]/95 to-[#05070d]/98 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl p-6 sm:p-10 overflow-hidden">
        {/* Subtle decorative top gradient bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          {/* 18+ Adult Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold mb-3 shadow-sm">
            <span>🔞</span>
            <span>{t('الخدمة متاحة للبالغين 18+ فقط', 'Service for Adults 18+ Only', 'Сервис только для совершеннолетних 18+', 'Serviciu doar pentru adulți 18+', 'Réservé aux adultes 18+ uniquement', 'Servizio riservato ai maggiorenni 18+')}</span>
          </div>

          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/60 border border-pink-500/30 text-pink-300 text-xs font-mono shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
              <span className="font-bold tracking-wider uppercase">
                {t('انضم إلى وكالة الأساطير', 'Join Legends Agency', 'Вступить в Legends Agency', 'Alătură-te Agenției Legends', 'Rejoignez l\'Agence Legends', 'Unisciti a Legends Agency')}
              </span>
            </div>
          </div>

          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'قدّم طلب الانضمام',
              'Submit Your Application',
              'Подать заявку на вступление',
              'Trimite cererea de înscriere',
              'Soumettre votre candidature',
              'Invia la domanda di candidatura'
            )}
          </h2>

          <p className={`text-xs sm:text-sm text-white/60 leading-relaxed ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'املأ بياناتك أدناه وسيقوم فريق إدارة الوكالة بالتواصل معك مباشرة عبر الواتساب لإتمام تسجيلك وتفعيل الدعم الفني والتوجيه.',
              'Fill in your details below and our management team will reach out directly on WhatsApp to guide you and complete setup.',
              'Заполните форму ниже, и наша команда свяжется с вами в WhatsApp для завершения регистрации.',
              'Completează datele de mai jos și echipa noastră te va contacta direct pe WhatsApp.',
              'Remplissez vos coordonnées ci-dessous et notre équipe vous contactera directement sur WhatsApp.',
              'Compila i dettagli di seguito e il nostro team ti contatterà su WhatsApp.'
            )}
          </p>
        </div>

        {/* Success Confirmation Modal / Banner */}
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-10 px-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
              <CheckCircle2 size={36} />
            </div>
            <h3 className={`text-xl font-bold text-white mb-2 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t('تم تجهيز طلبك بنجاح!', 'Application Prepared Successfully!', 'Заявка успешно подготовлена!', 'Aplicație pregătită cu succes!', 'Candidature préparée avec succès !', 'Candidatura preparata con successo!')}
            </h3>
            <p className={`text-sm text-emerald-200/80 max-w-md mb-6 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t(
                'تم توجيهك إلى تطبيق الواتساب لإرسال الطلب. إذا لم يفتح التطبيق تلقائياً، اضغط على الزر أدناه.',
                'You have been redirected to WhatsApp. If it did not open automatically, click the button below.',
                'Вы были перенаправлены в WhatsApp. Если он не открылся, нажмите кнопку ниже.',
                'Ai fost redirecționat pe WhatsApp. Dacă nu s-a deschis, apasă pe butonul de mai jos.',
                'Vous avez été redirigé vers WhatsApp. S\'il ne s\'est pas ouvert, cliquez ci-dessous.',
                'Sei stato reindirizzato su WhatsApp. Se non si è aperto, clicca sul pulsante qui sotto.'
              )}
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="text-xs text-white/60 hover:text-white underline underline-offset-4 cursor-pointer"
            >
              {t('تعديل البيانات أو إرسال طلب آخر', 'Edit details or submit another', 'Изменить данные', 'Modifică datele', 'Modifier les données', 'Modifica i dati')}
            </button>
          </motion.div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs sm:text-sm text-center font-medium">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t('الاسم الكامل / اسم الشهرة *', 'Full Name / Streamer Name *', 'Имя / Никнейм *', 'Nume complet *', 'Nom complet *', 'Nome completo *')}</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('مثال: سارة محمد أو Alex', 'e.g. Alex Legend', 'Например: Алекс', 'ex: Alex Legend', 'ex : Alex', 'es: Alex')}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-cyan-400 focus:bg-black/50 text-white text-sm outline-none transition-all placeholder:text-white/20"
                />
              </div>

              {/* WhatsApp Phone */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t('رقم الواتساب (مع رمز الدولة) *', 'WhatsApp Number (with code) *', 'Номер WhatsApp (с кодом) *', 'Număr WhatsApp *', 'Numéro WhatsApp *', 'Numero WhatsApp *')}</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('+968 xxxxxxxx أو +966 xxxxxxxx', '+1 555 123 4567', '+7 999 123 4567', '+40 7xx xxx xxx', '+33 6 xx xx xx xx', '+39 3xx xxx xxxx')}
                  required
                  dir="ltr"
                  inputMode="tel"
                  autoComplete="tel"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-emerald-400 focus:bg-black/50 text-white text-sm outline-none transition-all placeholder:text-white/20"
                />
              </div>

              {/* Country */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80">
                  <Globe className="w-3.5 h-3.5 text-purple-400" />
                  <span>{t('الدولة / بلد الإقامة *', 'Country / Residence *', 'Страна проживания *', 'Țara de reședință *', 'Pays de résidence *', 'Paese di residenza *')}</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder={t('مثال: سلطنة عمان، السعودية، مصر...', 'e.g. United Kingdom, USA...', 'Например: Казахстан, Россия...', 'ex: România, Moldova...', 'ex : France, Maroc...', 'es: Italia, Spagna...')}
                  required
                  autoComplete="country-name"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-purple-400 focus:bg-black/50 text-white text-sm outline-none transition-all placeholder:text-white/20"
                />
              </div>

              {/* Age (Mandatory 18+) */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80">
                  <Clock className="w-3.5 h-3.5 text-pink-400" />
                  <span>{t('العمر (18 سنة فأكثر) *', 'Age (18+ only) *', 'Возраст (18+) *', 'Vârstă (18+) *', 'Âge (18+ ans) *', 'Età (18+ anni) *')}</span>
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder={t('مثال: 22', 'e.g. 24', 'Например: 24', 'ex: 24', 'ex : 24', 'es: 24')}
                  min="18"
                  max="99"
                  required
                  inputMode="numeric"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-pink-400 focus:bg-black/50 text-white text-sm outline-none transition-all placeholder:text-white/20"
                />
              </div>

              {/* Streaming Experience */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80">
                  <Video className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t('الخبرة السابقة في البث المباشر', 'Streaming Experience', 'Опыт стриминга', 'Experiență de streaming', 'Expérience de streaming', 'Esperienza di streaming')}</span>
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 hover:border-white/20 focus:border-cyan-400 text-white text-sm outline-none transition-all"
                >
                  <option value="beginner">{t('مذيع جديد (أول مرة)', 'Beginner (First time)', 'Новичок (впервые)', 'Începător (prima dată)', 'Débutant (première fois)', 'Principiante (prima volta)')}</option>
                  <option value="tiktok_bigo">{t('خبرة سابقة على تيك توك / تطبيقات أخرى', 'Experience on TikTok / Other apps', 'Опыт в TikTok / других приложениях', 'Experiență pe TikTok / alte aplicații', 'Expérience sur TikTok / autres', 'Esperienza su TikTok / altre app')}</option>
                  <option value="xena_current">{t('مذيع حالي على زينا لايف', 'Current host on Xena Live', 'Ведущий на Xena Live', 'Gazdă pe Xena Live', 'Diffuseur sur Xena Live', 'Host su Xena Live')}</option>
                </select>
              </div>
            </div>

            {/* Social Handle / ID (Optional) */}
            <div className="space-y-1.5 pt-1">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>{t('حسابك على السوشيال ميديا أو الآيدي (اختياري)', 'Social Handle or Streamer ID (Optional)', 'Профиль соцсетей / ID (необязательно)', 'Cont social / ID (opțional)', 'Profil social / ID (facultatif)', 'Profilo social / ID (facoltativo)')}</span>
              </label>
              <input
                type="text"
                name="socialHandle"
                value={formData.socialHandle}
                onChange={handleChange}
                placeholder={t('مثال: @username على تيك توك أو رقم الآيدي على زينا لايف', 'e.g. @username on TikTok or Xena Live ID', 'Например: @username в TikTok или ID Xena', 'ex: @username TikTok sau ID Xena', 'ex : @username TikTok ou ID Xena', 'es: @username TikTok o ID Xena')}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-pink-400 focus:bg-black/50 text-white text-sm outline-none transition-all placeholder:text-white/20"
              />
            </div>

            {/* 18+ Mandatory Agreement Checkbox */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-white/85 select-none leading-relaxed">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }));
                    if (errorMsg) setErrorMsg('');
                  }}
                  required
                  className="mt-0.5 w-4 h-4 rounded border-white/30 bg-black/40 text-cyan-400 focus:ring-cyan-400 focus:ring-offset-0 cursor-pointer shrink-0"
                />
                <span>
                  {t(
                    'أقر بأن عمري 18 سنة أو أكثر، وأنني أوافق على سياسات تطبيق Xena Live.',
                    'I confirm that I am 18 years or older, and I agree to Xena Live platform policies.',
                    'Я подтверждаю, что мне 18 лет или больше, и согласен с правилами Xena Live.',
                    'Confirm că am 18 ani sau mai mult și sunt de acord cu politicile Xena Live.',
                    'Je certifie avoir 18 ans ou plus et j\'accepte les règles de Xena Live.',
                    'Confermo di avere 18 anni o più e accetto le regole di Xena Live.'
                  )}
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="relative w-full group py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <BrandIcons.WhatsApp className="w-5 h-5 text-white" />
                <span>
                  {t(
                    'قدّم طلب الانضمام',
                    'Submit Application',
                    'Подать заявку на вступление',
                    'Trimite cererea de înscriere',
                    'Soumettre la candidature',
                    'Invia la domanda di adesione'
                  )}
                </span>
                <Send className={`w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>

              <p className="text-[11px] text-center text-white/40 mt-3 font-mono">
                {t(
                  '🔒 سيتم استخدام بياناتك للتواصل معك بخصوص طلبك فقط.',
                  '🔒 Your data will only be used to contact you regarding your application.',
                  '🔒 Ваши данные будут использованы только для связи с вами по поводу вашей заявки.',
                  '🔒 Datele tale vor fi folosite exclusiv pentru a te contacta în legătură cu cererea ta.',
                  '🔒 Vos données seront utilisées uniquement pour vous contacter au sujet de votre candidature.',
                  '🔒 I tuoi dati verranno utilizzati solo per contattarti in merito alla tua candidatura.'
                )}
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
