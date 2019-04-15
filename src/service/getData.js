export const getUser = () => {
    this.$http.get('/api/userIsLogin')
      .then(res=> {
        console.log('res',res)
        if(res.data.error || localStorage.getItem('userInfo')===null) {
          this.$message.error(res.data.error)
          this.user.name = null
          return false
        }else {
          let user = JSON.parse(localStorage.getItem('userInfo'))
          console.log('user',user)
          if(user) {
            this.user.name = user.name
          }
        }
      })
      .catch(err=> {
        console.log('err',err)
        this.$message.error('${err.message}',err)
      })
}