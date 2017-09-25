import React from 'react';
import style from './Total.scss';

export default class Total extends React.Component {
  
  componentDidMount() {
    // const option = {
    //   angleAxis: {
    //   },
    //   radiusAxis: {
    //     type: 'category',
    //     data: [
    //         {
    //             value: '工控设备',
    //             textStyle: {color: 'white'}
    //         }, 
    //         {
    //             value: '蜜罐',
    //             textStyle: {color: 'white'}
    //         }, 
    //         {
    //             value: '摄像头',
    //             textStyle: {color: 'white'}
    //         }],
    //     z: 10
    //   },
    //   polar: {
    //   },
    //   series: [{
    //       type: 'bar',
    //       data: [3, 0, 0],
    //       coordinateSystem: 'polar',
    //       name: '蜜罐',
    //       stack: 'a'
    //   }, {
    //       type: 'bar',
    //       data: [0, 16, 0],
    //       coordinateSystem: 'polar',
    //       name: '摄像头',
    //       stack: 'a'
    //   }, {
    //       type: 'bar',
    //       data: [0, 0, 1341],
    //       coordinateSystem: 'polar',
    //       name: '工控设备',
    //       stack: 'a'
    //   }],
    //   legend: {
    //       show: true,
    //       data: ['工控设备', '摄像头', '蜜罐']
    //   }
    // };
    // const charts = Echarts.init(this.refs['total-charts']);
    // charts.setOption(option);
  }

  render() {
    return (
      <div className={`${style.cTotal} ${this.props.className || ''}`}>
        <p>设备总数</p>
        <p>1360</p>
        <p>工控设备数</p>
        <p>1341(扫描平台) 670(线下核查)</p>
        <p>摄像头</p>
        <p>16(扫描平台) 325(线下核查)</p>
        <p>蜜罐</p>
        <p>3(扫描平台) 0(线下核查)</p>
      </div>
    )
  }

}