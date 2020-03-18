export const getTranslation = (item, locale) => {
  let translation = null;
  if (item && item.translation) {
    translation = item.translation.find(t => t.language.locale == locale);
  }
  return translation;
};
