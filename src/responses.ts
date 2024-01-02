interface ResponsesProps { code: number, message: string};

const Responses: Record<string, ResponsesProps> = {
    success                  : {code: 200, message: 'success'},
    server_error             : {code: 500, message: 'internal server error'},
}


module.exports = Responses ;