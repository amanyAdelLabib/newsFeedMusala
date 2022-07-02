import React from "react";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize"; // Use for caching/memoize for better performance
import {
	I18nManager,
  } from "react-native";
const translationGetters = {
	// lazy requires (metro bundler does not support symlinks)
	fr: () => require("./fr.json"),
	en: () => require("./en.json"),
	// fr: () => require("./src/translations/fr.json")
  };
  
export  const translate = memoize(
	(key, config) => i18n.t(key, config),
	(key, config) => (config ? key + JSON.stringify(config) : key)
  );
  
export  const setI18nConfig = (lang) => {
	// fallback if no available language fits
	const fallback = { languageTag: lang, isRTL: false };
  
	// const { languageTag, isRTL } =
	//   RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
	//   fallback;
  
	// clear translation cache
	translate.cache.clear();
	// update layout direction
	I18nManager.forceRTL(fallback.isRTL);
	// set i18n-js config
	i18n.translations = { [fallback.languageTag]: translationGetters[fallback.languageTag]() };
	i18n.locale = fallback.languageTag;
  };