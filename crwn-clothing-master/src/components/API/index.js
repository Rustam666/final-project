const domain = 'http://18.215.250.222:8087/products';

function fetchApi(method, api, endpoint) {
    return (data = {}, value = '') => {
        let getParams = '';
        let options = {
        }
        if(method != 'GET') {
            options.body = {...data}
        } else {
            getParams += '?';
            for(let key in data) {
                getParams += `${key}=${data[key]}&`;
            }
        }
        return fetch(`${api}${endpoint}${value}${getParams}`, {})
    };
}

export const getProductsAPI =  fetchApi('GET', domain, 'users/');
export const getSingleProductAPI =  fetchApi('GET', domain, 'users/');