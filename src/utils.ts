export class Utils {

    public static formatStrForSQL(input: string): string {
        return decodeURIComponent(input).replace(/'/g, '\'\'')
    }

    public static async extendNumber(value: number, extraZero: any) {
        const valueStr: string = value.toString()
        if (valueStr.length < extraZero) {
            let zeroStr: string = ''
            for (let index = 0; index < extraZero - valueStr.length; index++) {
                zeroStr += '0'
            }
            return zeroStr + valueStr
        }
        else {
            return valueStr
        }
    }

    public static async getDate() {

        let dateOb = new Date()
        let day = await this.extendNumber(parseInt(('0' + dateOb.getDate()).slice(-2), 10), 2)
        let month = await this.extendNumber(parseInt(('0' + (dateOb.getMonth() + 1)).slice(-2), 10), 2)
        let year = await this.extendNumber(dateOb.getFullYear(), 4)
        let hours = await this.extendNumber(dateOb.getHours(), 2)
        let minutes = await this.extendNumber(dateOb.getMinutes(), 2)
        let seconds = await this.extendNumber(dateOb.getSeconds(), 2)

        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
    }

}