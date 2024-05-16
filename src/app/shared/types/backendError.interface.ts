export interface BackendErrorInterface{
    businessErrorCode: number,
    businessErrorDescription:string,
    error: string
    validationErrors:string[],
    errors:Map<string,string>
}
