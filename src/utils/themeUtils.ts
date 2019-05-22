import { themes, ThemeInput } from '@stardust-ui/react';
import * as queryString from 'query-string';

enum themeTypes{
    Dark='dark',
    Default='default',
    Contrast='contrast'
};

// gets theme name from url params
export const getThemeFromURL = (iUrl: string): string => {
    var url = queryString.parseUrl(iUrl);

    var themeString: any = url.query.theme;

    if(!themeString){
        return 'default';
    }
    return themeString;
}

// gets theme type from string
export const getTheme = (theme:string):ThemeInput => {
    var newTheme:ThemeInput = themes.teams;
    
    switch(theme){
        case(themeTypes.Contrast): return themes.teamsHighContrast;
        case(themeTypes.Dark): return themes.teamsDark;
    }

    return newTheme;
}