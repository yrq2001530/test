if(location.href!=='http://www.xjtu.edu.cn/'){
    location.href = 'http://www.xjtu.edu.cn/'
}
mymoveu0=()=>{}
const ad = document.querySelector('#myrightu0')
ad.style.position = 'fixed'
ad.style.zIndex = 999
ad.style.transition='left 1s, top 1s'
ad.style.transitionTimingFunction='linear, linear'
let speed = 100
let leftd = speed
let topd = speed
let step = ()=>{
    let left = parseInt(ad.style.left.slice(0, -2))
    let top  = parseInt(ad.style.top.slice(0, -2))
    if(left>document.documentElement.clientWidth-350){
        leftd=-speed
    }
    if(left<=0){
        leftd=speed
    }
    if(top>document.documentElement.clientHeight-197){
        topd=-speed
    }
    if(top<=0){
        topd=speed
    }
    ad.style.left = (left + leftd) + 'px'
    ad.style.top = (top + topd) + 'px'
}
step()
ad.addEventListener('transitionend', (e)=>{
    if(e.propertyName === 'left') {
        step()
    }
})