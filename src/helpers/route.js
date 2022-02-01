export const getNextRoute = (currentLink) => {

    switch (currentLink){
        case '/':
            return {link:'/sing-up', content: 'Sing Up'};
        case '/sing-up':
            return {link:'/', content: 'Sing In'};
        case '/movies':
            return {link:'/', content: 'Log Out'};
        default:
            return {link:'/', content: 'Log Out'};
    }

};