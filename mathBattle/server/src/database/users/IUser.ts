export interface IUser {
    username: string,
    password: string,
    options: IOptions
}

export interface IOptions {
    gameTimer: boolean,
    soundVolumen: number,
    fintSize: number
}