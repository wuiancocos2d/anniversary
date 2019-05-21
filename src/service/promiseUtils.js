export function getPromiseAction(p, commit, mutationType) {
    let promise = new Promise((resolve, reject)=> {
        p.then(res => {
            if(res.code===200) {
                commit(mutationType, res)
                return resolve()
            }else {
                return reject({code: 0, mesg: res.msg})
            }
        },error=>{
            return reject({code: 0, msg: 'error:' +error})
        }).catch(error=> {
            return reject({code: 0 , msg: 'error:'+error})
        })
    })
    return promise
}

export function getPromiseActionNoMutations(p) {
    let promise = new Promise((resolve, reject)=> {
        p.then(res => {
            if(res.code===1) {
                return resolve()
            }else {
                return reject({code: 0, mesg: res.msg})
            }
        },error=>{
            return reject({code: 0, msg: 'error:' +error})
        }).catch(error=> {
            return reject({code: 0 , msg: 'error:'+error})
        })
    })
    return promise
}