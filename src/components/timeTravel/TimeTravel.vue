<template>
  <div class="timeContainer">
    <ul id="timeLineList" class="timeLineList" v-if="supportTouch">
        <li class="timeItem" v-for="(time,index) in timeSplite" v-bind:key="index"  v-hammer:tap="handleTimeClick">
          <span>{{time.year}}</span>
          <span v-if="index == 4" class="lastItem">2019</span>
        </li>
    </ul>
    <ul id="timeLineList" class="timeLineList" v-else>
        <li class="timeItem" v-for="(time,index) in timeSplite" v-bind:key="index"  @click.stop="handleTimeClick($event)">
          <span>{{time.year}}</span>
          <span v-if="index == 4" class="lastItem">2019</span>
        </li>      
    </ul>
    <div id="timePointer" class="pointer"></div>
  </div>
</template>
<script>

import Velocity from 'velocity-animate'
import { VueHammer } from 'vue2-hammer' 
import Vue from 'vue'
import { EventEmitter } from 'events';
Vue.use(VueHammer)
export default {
  name: "TimeTravel",
  data() {
    return {
      supportTouch: false,
      timeSplite: [{'year':'1994'},{'year':'1999'},{'year':'2004'},{'year':'2009'},{'year':'2014'}]
    }
  },
  methods: {
    handleTimeClick(evt) {
      evt.preventDefault();
      moveTapClk(evt.target);
    }
  },
  beforeMount(){
    this.supportTouch = typeof window.ontouchstart === 'undefined' ? false:true;
  }
};

function moveTapClk(target) {
      const pointer = document.getElementById('timePointer');
      const timeLineList = document.getElementById('timeLineList');
      const slideSpace = pointer.offsetLeft - timeLineList.offsetLeft ;
      const space =  pointer.offsetLeft - target.offsetLeft - 58;
      Velocity(timeLineList,{left: space})
}

</script>
<style lang="scss" scoped>
.timeContainer {
  width: 100%;
  height: 54px;
  padding-bottom: 4px;
  position: relative;
  z-index: 0;
  .timeLineList {
    background-color: #fff;
    height: 100%;
    position: relative;
    text-align: center;
    white-space: nowrap;
    list-style: none;
    margin: 0;
    padding: 0 50%;
    left: -58px;
    z-index: 50;
    .timeItem {
      color: rgba(0, 0, 0, 0.54);
      border-left: 1px solid rgba(0, 0, 0, 0.54);
      line-height: 16px;
      font-size: 15px;
      height: 16px;
      margin-top: 30px;
      overflow: visible;
      width: 116px;
      position: relative;
      display: inline-block;
      outline: none;
      cursor: pointer;
      text-overflow: ellipsis;
      &:last-child {
        border-right: 1px solid rgba(0, 0, 0, 0.54);
      }
      span {
        position: relative;
        display: inline-block;
        left: -50%;
        height: 16px;
        max-width: 100%;
        overflow: hidden;
        top: -22px;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        opacity: 0.6;
        color: rgba(0, 0, 0, 0.54);
        font-size: 15px;
        line-height: 16px;
        &.lastItem {
          position: absolute;
          right: -50%;
          opacity: 1;
          left: 50%;
          width: 100%;
        }
      }
    }
  }
  .pointer {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    background: none;
    border-bottom: 7px solid rgba(0, 0, 0, 0.38);
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    bottom: 4px;
    display: block;
    height: 0;
    margin-left: -7px;
    top: auto;
    width: 0;
    z-index: 2;
    left: 50%;
    position: absolute;
    z-index: 60;
  }
}
</style>

