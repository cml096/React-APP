export type Country = {capital: Array<string>, languages: { [key: string]: string }};
export enum ResponseType {
    DETAILS = 'DETAILS',
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',
    LIST = 'LIST',
}
export enum RequestMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}