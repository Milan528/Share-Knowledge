  
export const vracamBrojAsync = async () => 5
  
//DA li ApiCallThenCatch u service vraca promis, ne?
//ovde ne mogu da vratim 5 kao iznad, jer nikada nece uci u catch deo (nema razloga da pukne)

const Provider = async () => {
    try {
        // const resultList = await ApiCallThenCatch() //ne bi moglo da vrati 5
        return resultList
    } catch (err) {
        throw new Error('Go boom')
    }
}

export const vracamBroj = () => Promise.resolve(5)
  
export const vracamBrojPromise = () => new Promise((resolve, reject) => resolve(5))