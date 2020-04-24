<template>
  <div class="content">
    <img id="renimg" class="renimg" src="../assets/ren1.png" alt="">
    <div class="circle" id='fire-should-be-here'></div>
    <div class="boxcolor" v-for="(item, index) in dian" :key='index'></div>
    <div class="boxcolor1" v-for="(item, index) in dian" :key='index + 100'>{{item.name}}</div>
    <svg>
      <path id="path1" class='path1' d="m353.5,95.109375c0,-1 -1.949707,-3.241531 -11,-5c-17.9133,-3.480553 -46.923859,-10.54837 -81,-15c-34.931015,-4.563309 -60.403656,-7.312569 -82,-3c-11.478088,2.292053 -18.900238,8.319351 -24,16c-6.184372,9.314156 -9.432419,33.537025 0,50c10.569168,18.447021 38.745804,29.970886 70,33c29.876663,2.895615 56.906647,1.998062 73,3c6.986481,0.434967 14.311676,1.294815 21,-1c7.625885,-2.616501 14.480804,-9.480804 21,-16c6.519196,-6.519196 10.498749,-15.946716 11,-23c0.496216,-6.982391 0.707092,-10.292892 0,-11c-3.535522,-3.535538 -18.17746,-0.095978 -40,4c-25.268677,4.742798 -45.292664,14.51355 -57,26c-9.141205,8.96875 -14.498291,17.937958 -15,24c-0.412399,4.982956 -0.922363,12.558029 3,18c8.269058,11.472702 25.36792,19.124252 49,25c25.528656,6.347305 52.088593,7.144501 78,5c24.248138,-2.006836 44.620422,-12.437973 50,-19c4.571747,-5.576645 4,-10 4,-12c0,-2 -0.037476,-2.389084 -5,-3c-16.368866,-2.015091 -33.061066,-4.854523 -53,-3c-22.108185,2.056274 -47.668671,7.82135 -66,19c-10.421661,6.35524 -19.23468,12.774155 -25,19c-6.264221,6.764587 -10.986908,12.757111 -12,19c-0.800903,4.93544 -2.642914,13.484009 5,24c5.420319,7.457886 17.75531,11.827087 30,15c15.758362,4.083405 31.026001,3.940094 48,3c18.083069,-1.001526 34.431427,-6.020264 42,-13c5.301056,-4.888641 8,-13 8,-18c0,-7 0.571747,-12.423355 -4,-18c-3.586395,-4.37468 -13.724152,-8.688522 -30,-9c-27.289703,-0.522247 -36.040497,6.890182 -66,18c-16.021881,5.94136 -27.65448,10.191864 -34,16c-6.800812,6.224854 -11.23671,12.885956 -15,21c-3.204315,6.908844 -5,14 -5,20c0,5 -1.375107,12.6297 1,16c2.076965,2.947235 6.957962,5.130829 13,7c6.954895,2.151581 15,3 25,3c16,0 24.0578,0.320374 36,-2c9.050293,-1.758484 18.621277,-6.256866 30,-9c7.837708,-1.889496 15.080261,-2.31073 18,-3c2.176239,-0.513733 5,-2 7,-3l1,0" />
      <path id="path" class='path' d="m353.5,95.109375c0,-1 -1.949707,-3.241531 -11,-5c-17.9133,-3.480553 -46.923859,-10.54837 -81,-15c-34.931015,-4.563309 -60.403656,-7.312569 -82,-3c-11.478088,2.292053 -18.900238,8.319351 -24,16c-6.184372,9.314156 -9.432419,33.537025 0,50c10.569168,18.447021 38.745804,29.970886 70,33c29.876663,2.895615 56.906647,1.998062 73,3c6.986481,0.434967 14.311676,1.294815 21,-1c7.625885,-2.616501 14.480804,-9.480804 21,-16c6.519196,-6.519196 10.498749,-15.946716 11,-23c0.496216,-6.982391 0.707092,-10.292892 0,-11c-3.535522,-3.535538 -18.17746,-0.095978 -40,4c-25.268677,4.742798 -45.292664,14.51355 -57,26c-9.141205,8.96875 -14.498291,17.937958 -15,24c-0.412399,4.982956 -0.922363,12.558029 3,18c8.269058,11.472702 25.36792,19.124252 49,25c25.528656,6.347305 52.088593,7.144501 78,5c24.248138,-2.006836 44.620422,-12.437973 50,-19c4.571747,-5.576645 4,-10 4,-12c0,-2 -0.037476,-2.389084 -5,-3c-16.368866,-2.015091 -33.061066,-4.854523 -53,-3c-22.108185,2.056274 -47.668671,7.82135 -66,19c-10.421661,6.35524 -19.23468,12.774155 -25,19c-6.264221,6.764587 -10.986908,12.757111 -12,19c-0.800903,4.93544 -2.642914,13.484009 5,24c5.420319,7.457886 17.75531,11.827087 30,15c15.758362,4.083405 31.026001,3.940094 48,3c18.083069,-1.001526 34.431427,-6.020264 42,-13c5.301056,-4.888641 8,-13 8,-18c0,-7 0.571747,-12.423355 -4,-18c-3.586395,-4.37468 -13.724152,-8.688522 -30,-9c-27.289703,-0.522247 -36.040497,6.890182 -66,18c-16.021881,5.94136 -27.65448,10.191864 -34,16c-6.800812,6.224854 -11.23671,12.885956 -15,21c-3.204315,6.908844 -5,14 -5,20c0,5 -1.375107,12.6297 1,16c2.076965,2.947235 6.957962,5.130829 13,7c6.954895,2.151581 15,3 25,3c16,0 24.0578,0.320374 36,-2c9.050293,-1.758484 18.621277,-6.256866 30,-9c7.837708,-1.889496 15.080261,-2.31073 18,-3c2.176239,-0.513733 5,-2 7,-3l1,0" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      box: null,
      renimg: null,
      canvas: null,
      boxcolor: null,
      boxcolor1: null,
      percentage: 10, // 1-100 百分比
      each: 0, // 百分之一的距离
      dian: [{
        value: 0,
        name: '1'
      }, {
        value: 10,
        name: '2'
      }, {
        value: 15,
        name: '3'
      }, {
        value: 20,
        name: '4'
      }, {
        value: 26,
        name: '5'
      }, {
        value: 30,
        name: '6'
      }, {
        value: 50,
        name: '7'
      }, {
        value: 70,
        name: '8'
      }, {
        value: 90,
        name: '9'
      }, {
        value: 100,
        name: '10'
      }]
    }
  },
  components: {
  },
  methods: {
    update (length) {
      const offset = length * this.each // 线长偏移
      const offset1 = (100 - length) * this.each // 线长偏移
      const firePoint = this.path.getPointAtLength(offset) // 返回沿路径给定距离的点
      this.path.style.strokeDashoffset = offset1
      this.path.style.strokeDasharray = this.path.getTotalLength()

      this.box.style.transform = 'translate3d(' + firePoint.x + 'px,' + firePoint.y + 'px,0)' // IE
      this.box.style.WebkitTransform = 'translate3d(' + firePoint.x + 'px,' + firePoint.y + 'px,0)' // Chrome&Safari
      this.renimg.style.transform = 'translate3d(' + firePoint.x + 'px,' + firePoint.y + 'px,0)' // IE
      this.renimg.style.WebkitTransform = 'translate3d(' + firePoint.x + 'px,' + firePoint.y + 'px,0)' // Chrome&Safari
      this.dian.forEach((element, index) => {
        if (element.value <= length) {
          this.boxcolor[index].style.backgroundColor = 'red'
          this.boxcolor1[index].style.color = '#5415ef'
        }
      })
    },
    /* 只画点 */
    setdian (length, item) {
      const offset = length * this.each // 线长偏移
      const firePoint = this.path.getPointAtLength(offset) // 返回沿路径给定距离的点
      this.boxcolor[item].style.transform = 'translate3d(' + firePoint.x + 'px,' + firePoint.y + 'px,0)' // IE
      this.boxcolor[item].style.WebkitTransform = 'translate3d(' + firePoint.x + 'px,' + firePoint.y + 'px,0)' // Chrome&Safari
    },
    /* 只画字 */
    settext (length, item) {
      const offset = length * this.each // 线长偏移
      const firePoint = this.path.getPointAtLength(offset) // 返回沿路径给定距离的点
      this.boxcolor1[item].style.transform = 'translate3d(' + firePoint.x + 'px,' + firePoint.y + 'px,0)' // IE
      this.boxcolor1[item].style.WebkitTransform = 'translate3d(' + firePoint.x + 'px,' + firePoint.y + 'px,0)' // Chrome&Safari
    }
  },
  async mounted () {
    this.box = document.getElementById('fire-should-be-here')
    this.path = document.getElementById('path')
    this.renimg = document.getElementById('renimg')
    this.boxcolor = document.getElementsByClassName('boxcolor')
    this.boxcolor1 = document.getElementsByClassName('boxcolor1')
    this.each = this.path.getTotalLength() / 100
    setInterval(() => {
      if (this.percentage >= 100) {
        this.percentage = 1
        this.dian.forEach((element, index) => {
          this.boxcolor[index].style.backgroundColor = '#318bcb'
          this.boxcolor1[index].style.color = '#318bcb'
        })
      }
      this.percentage++
      this.update(this.percentage)
    }, 100)
    this.dian.forEach((element, index) => {
      this.setdian(element.value, index)
      this.settext(element.value, index)
    })
  }
}
</script>

<style lang="scss">
.content {
  width: 917px;
  height: 714px;
  box-sizing: border-box;
  background-size: cover;
  overflow: hidden;
  position: relative;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 917px;
    height: 714px;
    background: url('../assets/bg1.png') no-repeat;
    background-size: 100% 100%;
  }
  .renimg {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    position: absolute;
    top: -128px;
    left: -64px;
    overflow: hidden;
    z-index: 3;
  }
  .circle {
    width: 12px;
    height: 12px;
    background: red;
    position: absolute;
    top: -6px;
    left: -6px;
    border-radius: 50%;
    opacity: 1;
    z-index: 2;
  }
  .path {
    fill: none;
    stroke: red;
    stroke-width: 3;
    stroke-linecap: round;
  }
  .path1 {
    fill: none;
    stroke: #318bcb;
    stroke-width: 3;
    stroke-linecap: round;
  }
  .boxcolor {
    width: 10px;
    height: 10px;
    background: #318bcb;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    left: -5px;
    border-radius: 50%;
    opacity: 1;
    z-index: 1;
  }
  .boxcolor1 {
    width: 100px;
    height: 20px;
    line-height: 20px;
    color: #318bcb;
    font-size: 20px;
    font-weight: 900;
    text-align: right;
    position: absolute;
    top: -10px;
    left: -120px;
    opacity: 1;
    z-index: 1;
  }
}
</style>
