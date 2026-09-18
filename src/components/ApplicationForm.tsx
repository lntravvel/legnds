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
    hours: 'part-time',
    socialHandle: ''
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

    if (!formData.name.trim() || !formData.phone.trim() || !formData.country.trim()) {
      setErrorMsg(
        t(
          'يرجى ملء جميع الحقول الأساسية (الاسم، رقم الهاتف، الدولة)',
          'Please fill in required fields (Name, Phone, Country)',
          'Пожалуйста, заполните обязательные поля (Имя, Телефон, Страна)',
          'Vă rugăm să completați câmpurile obligatorii (Nume, Telefon, Țară)',
          'Veuillez remplir les champs obligatoires (Nom, Téléphone, Pays)',
          'Si prega di compilare i campi obbligatori (Nome, Telefono, Paese)'
        )
      );
      return;
    }

    const expTextMap: Record<string, string> = {
      beginner: t('مذيع جديد (أول مرة)', 'Beginner (First time)', 'Новичок (впервые)', 'Începător (prima dată)', 'Débutant (première fois)', 'Principiante (prima volta)'),
      tiktok_bigo: t('خبرة سابقة على تيك توك / تطبيقات أخرى', 'Experience on TikTok / Other apps', 'Опыт в TikTok / других приложениях', 'Experiență pe TikTok / alte aplicații', 'Expérience sur TikTok / autres', 'Esperienza su TikTok / altre app'),
      xena_current: t('مذيع حالي على زينا لايف', 'Current host on Xena Live', 'Текущий ведущий на Xena Live', 'Gazdă actuală pe Xena Live', 'Diffuseur actuel sur Xena Live', 'Host attuale su Xena Live')
    };

    const hoursTextMap: Record<string, string> = {
      'part-time': t('دوام جزئي (2 - 3 ساعات يومياً)', 'Part-time (2-3 hours daily)', 'Частичная занятость (2-3 часа)', 'Part-time (2-3 ore zilnic)', 'Temps partiel (2-3h par jour)', 'Part-time (2-3 ore al giorno)'),
      'full-time': t('دوام كامل احترافي (4 - 6 ساعات يومياً)', 'Full-time Pro (4-6 hours daily)', 'Полная занятость (4-6 часов)', 'Full-time Pro (4-6 ore zilnic)', 'Temps plein (4-6h par jour)', 'Full-time Pro (4-6 ore al giorno)'),
      'flexible': t('مرن حسب التفرغ', 'Flexible schedule', 'Гибкий график', 'Program flexibil', 'Horaires flexibles', 'Orario flessibile')
    };

    const experienceLabel = expTextMap[formData.experience] || formData.experience;
    const hoursLabel = hoursTextMap[formData.hours] || formData.hours;

    // Beautifully formatted WhatsApp message
    const message = [
      '🌟 *طلب انضمام جديد - وكالة الأساطير (Legends Agency)* 🌟',
      '────────────────────────────',
      `👤 *الاسم:* ${formData.name.trim()}`,
      `📱 *رقم الواتساب:* ${formData.phone.trim()}`,
      `🌍 *الدولة / الإقامة:* ${formData.country.trim()}`,
      formData.age ? `🎂 *العمر:* ${formData.age.trim()}` : null,
      `🎙️ *مستوى الخبرة:* ${experienceLabel}`,
      `⏱️ *ساعات البث المستهدفة:* ${hoursLabel}`,
      formData.socialHandle ? `🔗 *معرف السوشيال / الآيدي:* ${formData.socialHandle.trim()}` : null,
      '────────────────────────────',
      '✨ تم إرسال هذا الطلب عبر الموقع الرسمي: https://legeends.com/'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/60 border border-pink-500/30 text-pink-300 text-xs font-mono mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span className="font-bold tracking-wider uppercase">
              {t('انضم إلى نخبة الأساطير', 'Join The Legends Elite', 'Станьте легендой', 'Alătură-te elitei', 'Rejoignez l\'élite', 'Unisciti all\'élite')}
            </span>
          </div>

          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'قدّم طلبك الآن وابدأ رحلة الأرباح',
              'Apply Now & Start Your Earnings Journey',
              'Подайте заявку и начните зарабатывать',
              'Aplică acum și începe să câștigi',
              'Postulez maintenant et commencez à gagner',
              'Candidati ora e inizia a guadagnare'
            )}
          </h2>

          <p className={`text-xs sm:text-sm text-white/60 leading-relaxed ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t(
              'املأ بياناتك أدناه وسيقوم فريق إدارة الوكالة بالتواصل معك مباشرة عبر الواتساب لإتمام تسجيلك وتفعيل الدعم الفوري.',
              'Fill in your details below and our management team will reach out directly on WhatsApp to complete your registration.',
              'Заполните форму ниже, и мы свяжемся с вами в WhatsApp для завершения регистрации.',
              'Completează formularul de mai jos și echipa noastră te va contacta pe WhatsApp.',
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
                'تم توجيهك إلى تطبيق الواتساب الرسمي للوكالة لإرسال الطلب. إذا لم يفتح التطبيق تلقائياً، اضغط على الزر أدناه.',
                'You have been redirected to official WhatsApp. If it did not open automatically, click the button below.',
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
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-purple-400 focus:bg-black/50 text-white text-sm outline-none transition-all placeholder:text-white/20"
                />
              </div>

              {/* Age */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80">
                  <Clock className="w-3.5 h-3.5 text-pink-400" />
                  <span>{t('العمر (اختياري)', 'Age (Optional)', 'Возраст (необязательно)', 'Vârstă (opțional)', 'Âge (facultatif)', 'Età (facoltativo)')}</span>
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder={t('مثال: 22', 'e.g. 24', 'Например: 24', 'ex: 24', 'ex : 24', 'es: 24')}
                  min="18"
                  max="70"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-pink-400 focus:bg-black/50 text-white text-sm outline-none transition-all placeholder:text-white/20"
                />
              </div>

              {/* Streaming Experience */}
              <div className="space-y-1.5">
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
                  <option value="tiktok_bigo">{t('خبرة سابقة على تيك توك / بيجو لايف', 'Experience on TikTok / Bigo', 'Опыт в TikTok / Bigo', 'Experiență pe TikTok / Bigo', 'Expérience sur TikTok / Bigo', 'Esperienza su TikTok / Bigo')}</option>
                  <option value="xena_current">{t('مذيع حالي على زينا لايف', 'Current host on Xena Live', 'Ведущий на Xena Live', 'Gazdă pe Xena Live', 'Diffuseur sur Xena Live', 'Host su Xena Live')}</option>
                </select>
              </div>

              {/* Target Hours */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t('ساعات البث المقترحة يومياً', 'Target Hours Daily', 'Часов в день', 'Ore zilnice', 'Heures par jour', 'Ore al giorno')}</span>
                </label>
                <select
                  name="hours"
                  value={formData.hours}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 hover:border-white/20 focus:border-emerald-400 text-white text-sm outline-none transition-all"
                >
                  <option value="part-time">{t('دوام جزئي (2 - 3 ساعات يومياً)', 'Part-time (2-3 hours daily)', 'Частичная занятость (2-3 ч)', 'Part-time (2-3 ore)', 'Temps partiel (2-3h)', 'Part-time (2-3 ore)')}</option>
                  <option value="full-time">{t('دوام كامل احترافي (4 - 6 ساعات يومياً)', 'Full-time Pro (4-6 hours daily)', 'Полная занятость (4-6 ч)', 'Full-time Pro (4-6 ore)', 'Temps plein (4-6h)', 'Full-time Pro (4-6 ore)')}</option>
                  <option value="flexible">{t('مرن حسب التفرغ', 'Flexible schedule', 'Гибкий график', 'Program flexibil', 'Horaires flexibles', 'Orario flessibile')}</option>
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

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="relative w-full group py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <BrandIcons.WhatsApp className="w-5 h-5 text-white" />
                <span>
                  {t(
                    'إرسال طلب الانضمام عبر واتساب الإدارة',
                    'Send Application via WhatsApp Management',
                    'Отправить заявку в WhatsApp руководству',
                    'Trimite aplicația prin WhatsApp',
                    'Envoyer la candidature via WhatsApp',
                    'Invia la candidatura tramite WhatsApp'
                  )}
                </span>
                <Send className={`w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>

              <p className="text-[11px] text-center text-white/40 mt-3 font-mono">
                {t(
                  '🔒 معلوماتك محمية ومشفرة، وسيتم فتح محادثة رسمية ومباشرة مع إدارة وكالة الأساطير.',
                  '🔒 Your data is protected. A direct verified chat with Legends Agency will open.',
                  '🔒 Ваши данные защищены. Откроется официальный чат с агентством Legends.',
                  '🔒 Datele tale sunt în siguranță. Se va deschide un chat direct.',
                  '🔒 Vos données sont protégées. Un chat direct et officiel s\'ouvrira.',
                  '🔒 I tuoi dati sono protetti. Si aprirà una chat ufficiale diretta.'
                )}
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
