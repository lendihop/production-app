import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";

import * as cls from './LanguageSwitcher.module.scss';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({className}) => {
  const {t, i18n} = useTranslation();

  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');

  return (
    <Button theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwitcher, [className])} onClick={toggleLanguage}>
      {t('lang')}
    </Button>
  );
};
