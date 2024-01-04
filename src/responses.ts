export interface ResponsesProps { code: number, message: string};

export const Responses: Record<string, ResponsesProps> = {
    email_required                          : {code: 1, message: 'email required...'},
    password_required                       : {code: 2, message: 'password required...'},
    incorrect_password                      : {code: 3, message: 'incorrect password...'},

    success                                 : {code: 200, message: 'success'},
    server_error                            : {code: 500, message: 'internal server error'},
}

