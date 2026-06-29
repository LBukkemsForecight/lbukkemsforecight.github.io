// Klaro consent manager configuration
// PIPEDA-aligned — Canadian privacy law requires explicit opt-in for non-essential services
var klaroConfig = {
  version: 1,
  elementID: 'klaro',
  storageMethod: 'cookie',
  cookieName: 'forecight-consent',
  cookieExpiresAfterDays: 365,
  privacyPolicy: '/privacy-policy',
  default: false,          // all non-essential off by default
  mustConsent: false,      // show banner, not modal wall
  acceptAll: true,
  hideDeclineAll: false,
  lang: 'en',

  translations: {
    en: {
      consentNotice: {
        description: 'We use cookies to improve your experience and analyse site usage. You can manage your preferences below.',
      },
      acceptAll: 'Accept all',
      declineAll: 'Decline all',
      acceptSelected: 'Accept selected',
      close: 'Close',
      purposes: {
        analytics:   'Analytics',
        security:    'Security',
        functional:  'Functional',
      },
    },
  },

  services: [
    {
      name: 'google-fonts',
      title: 'Google Fonts',
      purposes: ['functional'],
      required: false,
      description: 'Loads web fonts from Google servers.',
    },
    {
      name: 'turnstile',
      title: 'Cloudflare Turnstile',
      purposes: ['security'],
      required: true,           // needed for form bot protection
      description: 'Bot-detection for contact forms. No personal data stored.',
    },
  ],
};
