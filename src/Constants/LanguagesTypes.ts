interface LanguagesTypes {
  title: string;
  code: string;
  allowRT: boolean;
}

export const Language: LanguagesTypes[] = [
  {
    title: 'English',
    code: 'en',
    allowRT: false,
  },
  {
    title: 'Français',
    code: 'fr',
    allowRT: false,
  }
];
