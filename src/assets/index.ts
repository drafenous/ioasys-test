import { IAssets } from 'interfaces';
import logo_1x from './images/logo-home.png';
import logo_2x from './images/logo-home@2x.png';
import logo_3x from './images/logo-home@3x.png';
import logo_white_1x from './images/logo-nav.png';
import logo_white_2x from './images/logo-nav@2x.png';
import logo_white_3x from './images/logo-nav@3x.png';
import icon_email from './icons/email.svg';
import icon_lock from './icons/lock.svg';
import icon_search from './icons/search.svg';
import icon_times from './icons/times.svg';
import icon_back from './icons/back.svg';
import loader_spinner from './images/loader-spinner.png';

export const Assets: IAssets = {
    logo: {
        '1x': logo_1x,
        '2x': logo_2x,
        '3x': logo_3x,
    },
    logoWhite: {
        '1x': logo_white_1x,
        '2x': logo_white_2x,
        '3x': logo_white_3x,
    },
    icon: {
        email: icon_email,
        lock: icon_lock,
        search: icon_search,
        times: icon_times,
        back: icon_back,
    },
    other: {
        loaderSpinner: loader_spinner,
    },
};
