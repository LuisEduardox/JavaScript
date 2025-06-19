export function fibonacci(a){
    if (a < 0) return ""
    let anterior1 = 0
    let anterior2 = 1
    let result = ""
    let count = 0
    while (count < a) {
        if (count === 0) {
            result += "0"
        } else if (count === 1) {
            result += ", 1"
        } else {
            let atual = anterior1 + anterior2
            result += `, ${atual}`
            anterior1 = anterior2
            anterior2 = atual
        }
        count++
    }
    return result
}
