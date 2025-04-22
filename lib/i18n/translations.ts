export const translations = {
  en: {
    common: {
      switchLanguage: "Switch to Japanese",
      home: "Home",
      about: "About",
      contact: "Contact",
      portfolio: "Portfolio",
    },
    home: {
      title: "Frontend Engineer Portfolio",
      description:
        "Creative frontend engineer portfolio showcasing modern web development",
      greeting: "Frontend Engineer &",
      role: "UI/UX Designer",
      intro:
        "Crafting beautiful, intuitive, and performant web experiences with modern technologies",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      expertise: "Expertise",
      frontendDev: "Frontend Development",
      frontendDesc:
        "Building responsive and accessible web applications with modern frameworks",
      uiuxDesign: "UI/UX Design",
      uiuxDesc:
        "Creating intuitive and beautiful user interfaces with attention to detail",
      backendTech: "Backend Technologies",
      backendDesc:
        "Building robust and scalable backend systems with modern technologies",
    },
    about: {
      title: "About Me",
      description: "Learn more about my background and skills",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      passionate: "Passionate",
      passionateDesc: "About creating exceptional user experiences",
      dedicated: "Dedicated",
      dedicatedDesc: "To continuous learning and improvement",
      creative: "Creative",
      creativeDesc: "In solving complex problems",
      technicalSkills: "Technical Skills",
      frontendSkills: "Frontend Development",
      backendSkills: "Backend Development",
      otherSkills: "Other Skills",
    },
    contact: {
      title: "Contact Me",
      description:
        "Have a project in mind or just want to chat? Feel free to reach out!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      connectWithMe: "Connect With Me",
      socialMedia: "Social Media",
      officeHours: "Office Hours",
      officeHoursTime: "8:00 AM - 10:00 PM",
    },
  },
  ja: {
    common: {
      switchLanguage: "英語に切り替え",
      home: "ホーム",
      about: "概要",
      contact: "お問い合わせ",
      portfolio: "ポートフォリオ",
    },
    home: {
      title: "フロントエンドエンジニアのポートフォリオ",
      description: "最新のWeb開発技術を活用したクリエイティブなポートフォリオ",
      greeting: "フロントエンドエンジニア &",
      role: "UI/UXデザイナー",
      intro:
        "最新技術を活用した美しく、直感的で、高性能なWebエクスペリエンスの創造",
      viewProjects: "プロジェクトを見る",
      contactMe: "お問い合わせ",
      expertise: "専門分野",
      frontendDev: "フロントエンド開発",
      frontendDesc:
        "モダンなフレームワークを使用した、レスポンシブでアクセシブルなWebアプリケーションの開発",
      uiuxDesign: "UI/UXデザイン",
      uiuxDesc:
        "細部にまでこだわった、直感的で美しいユーザーインターフェースの作成",
      backendTech: "バックエンド技術",
      backendDesc: "堅牢でスケーラブルなバックエンドシステムの構築",
    },
    about: {
      title: "自己紹介",
      description: "経歴とスキルについて",
      experience: "経験",
      skills: "スキル",
      education: "学歴",
      passionate: "情熱的",
      passionateDesc: "優れたユーザー体験の創造に向けて",
      dedicated: "献身的",
      dedicatedDesc: "継続的な学習と改善に対して",
      creative: "創造的",
      creativeDesc: "複雑な問題の解決において",
      technicalSkills: "技術スキル",
      frontendSkills: "フロントエンド開発",
      backendSkills: "バックエンド開発",
      otherSkills: "その他のスキル",
    },
    contact: {
      title: "お問い合わせ",
      description:
        "プロジェクトのご相談や、お気軽なお問い合わせをお待ちしております",
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
      send: "送信する",
      sending: "送信中...",
      connectWithMe: "連絡先",
      socialMedia: "ソーシャルメディア",
      officeHours: "対応時間",
      officeHoursTime: "8:00 - 22:00",
    },
  },
} as const;

export type Language = "en" | "ja";
export type TranslationKey = keyof typeof translations.en.common;

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang].common[key];
}

export function getPageTranslation(
  lang: Language,
  section: keyof typeof translations.en,
  key: string
): string {
  return translations[lang][section][
    key as keyof (typeof translations.en)[typeof section]
  ];
}
