

import { SERVICE_INFO_LOGIN, } from './constant';



export function SetLoginData(props) {
    var request = {
        "requestData": {
            "person": {
                "personDetails": {
                    "email": props.username,
                    "password": props.password,
                },
            },
            "serviceInfo": SERVICE_INFO_LOGIN
        },
    }
    
    return request;
}


