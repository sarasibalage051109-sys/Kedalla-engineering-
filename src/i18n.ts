import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const en = {
  translation: {
    "nav": {
      "home": "Home",
      "about": "About Us",
      "projects": "Projects",
      "services": "Services",
      "contact": "Contact",
      "loan": "Loans",
      "investment": "Investments",
      "quotation": "Get Quotation"
    },
    "home": {
      "hero_title_1": "Build",
      "hero_title_2": "Your",
      "hero_title_3": "Future.",
      "hero_desc": "Kedalla Engineering (Pvt) Ltd provides sustainable and innovative construction solutions with over 23 years of industry leadership.",
      "explore_projects": "Explore Projects",
      "request_quote": "Request Quote",
      "core_services": "Core Services",
      "service_1": "Property Development",
      "service_2": "Ready Mix Concrete",
      "service_3": "Precast Products",
      "customer_success": "Customer Success",
      "satisfaction_rate": "Client Satisfaction Rate"
    }
  }
};

// Sinhala translations
const si = {
  translation: {
    "nav": {
      "home": "මුල් පිටුව",
      "about": "අප ගැන",
      "projects": "ව්‍යාපෘති",
      "services": "සේවාවන්",
      "contact": "විමසීම්",
      "loan": "ණය",
      "investment": "ආයෝජන",
      "quotation": "මිල ගණන් ලබාගන්න"
    },
    "home": {
      "hero_title_1": "ඔබේ",
      "hero_title_2": "අනාගතය",
      "hero_title_3": "ගොඩනගන්න.",
      "hero_desc": "කෙඩැල්ල ඉංජිනේරු (පුද්) සමාගම වසර 23 කට වැඩි කර්මාන්ත නායකත්වයක් සමඟින් තිරසාර සහ නව්‍යකරණය වූ ඉදිකිරීම් විසඳුම් සපයයි.",
      "explore_projects": "ව්‍යාපෘති බලන්න",
      "request_quote": "මිල ගණන් ඉල්ලන්න",
      "core_services": "ප්‍රධාන සේවාවන්",
      "service_1": "දේපළ සංවර්ධනය",
      "service_2": "රෙඩි මික්ස් කොන්ක්‍රීට්",
      "service_3": "ප්‍රිකාස්ට් නිෂ්පාදන",
      "customer_success": "පාරිභෝගික සාර්ථකත්වය",
      "satisfaction_rate": "පාරිභෝගික තෘප්තිමත් අනුපාතය"
    }
  }
};

// Tamil translations
const ta = {
  translation: {
    "nav": {
      "home": "முகப்பு",
      "about": "எங்களை பற்றி",
      "projects": "திட்டங்கள்",
      "services": "சேவைகள்",
      "contact": "தொடர்பு",
      "loan": "கடன்கள்",
      "investment": "முதலீடுகள்",
      "quotation": "மேற்கோள் பெற"
    },
    "home": {
      "hero_title_1": "உங்கள்",
      "hero_title_2": "எதிர்காலத்தை",
      "hero_title_3": "உருவாக்குங்கள்.",
      "hero_desc": "கெடல்ல இன்ஜினியரிங் (பிரைவேட்) லிமிடெட் 23 ஆண்டுகளுக்கும் மேலான தொழில் தலைமையுடன் நிலையான மற்றும் புதுமையான கட்டுமான தீர்வுகளை வழங்குகிறது.",
      "explore_projects": "திட்டங்களை ஆராயுங்கள்",
      "request_quote": "மேற்கோள் கேட்க",
      "core_services": "முக்கிய சேவைகள்",
      "service_1": "சொத்து மேம்பாடு",
      "service_2": "ரெடி மிக்ஸ் கான்கிரீட்",
      "service_3": "ப்ரீகாஸ்ட் தயாரிப்புகள்",
      "customer_success": "வாடிக்கையாளர் வெற்றி",
      "satisfaction_rate": "வாடிக்கையாளர் திருப்தி விகிதம்"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      si,
      ta
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
