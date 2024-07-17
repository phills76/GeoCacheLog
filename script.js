// Initialize cache logs storage
let cacheLogs = JSON.parse(localStorage.getItem('cacheLogs')) || {};

// Language translations
const translations = {
  en: {
    home: "Home",
    pageTitle: "Welcome to GeoCacheLog.",
    formTitle: "Log Your Found Cache",
    cacheCode: "Cache GC Code:",
    dateFound: "Date Found:",
    pseudoNickname: "Pseudo / Nickname:",
    submitBtn: "Submit Log",
    recentLogsTitle: "Recent Logs",
    noLogs: "No logs found for this cache. Be the first to log it!",
    footerCopyright: "GeoCacheLog - Your Geocaching Companion, Copyright © 2023",
    welcomeMessage: `
      <p>Thank you for scanning the QR Code.</p>
      <p>From now on, you will be able to log my caches from this site. This will avoid the hassle of paper being full, wet...</p>
      <p>Don't hesitate to send me comments from the <a href="https://geocaching.com" target="_blank">geocaching.com</a> website if you notice any problems.</p>
      <p>Thank you</p>
    `
  },
  fr: {
    home: "Accueil",
    pageTitle: "Bienvenue sur GeoCacheLog.",
    formTitle: "Enregistrez Votre Cache Trouvée",
    cacheCode: "Code GC de la Cache :",
    dateFound: "Date de Découverte :",
    pseudoNickname: "Pseudo / Surnom :",
    submitBtn: "Soumettre le Journal",
    recentLogsTitle: "Journaux Récents",
    noLogs: "Aucun journal trouvé pour cette cache. Soyez le premier à l'enregistrer !",
    footerCopyright: "GeoCacheLog - Votre Compagnon de Géocaching, Droits d'auteur © 2023",
    welcomeMessage: `
      <p>Merci d'avoir scanné le QR Code.</p>
      <p>Désormais, vous pourrez enregistrer mes caches depuis ce site. Cela évitera les désagréments du papier plein, mouillé...</p>
      <p>N'hésitez pas à m'envoyer des commentaires depuis le site <a href="https://geocaching.com" target="_blank">geocaching.com</a> si vous remarquez des
