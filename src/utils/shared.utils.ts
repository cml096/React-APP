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
export type ResponseTypes<T> = {
    data: T;
};
