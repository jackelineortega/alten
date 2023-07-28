export interface IAnswers {
    name: string
    type: string
    message: string
}

export interface IReqApiReading{
    file : string
}

export interface IRespApiReading {
    data: any
    error?: string
}