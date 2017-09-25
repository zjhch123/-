import React from 'react';
import Echarts from 'echarts';
import style from './System.scss';

export default class System extends React.Component {
  componentDidMount() {
    const option = {
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data:['内存(%)','cpu(%)'],
          top: '28%',
          textStyle: {
            color: 'white'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '40%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['20170919', '20170920', '20170921','20170922','20170923','20170924','20170925','20170926','20170927', '20170928', '20170929', '20170930'],
          axisLabel: {
            color: 'white'
          }
      },
      yAxis: {
          type: 'value',
          axisLabel: {
            color: 'white'
          }
      },
      series: [
          {
              name:'内存(%)',
              type:'line',
              data:[6, 2, 10, 0, 17, 8, 5, 13, 6, 11, 9, 14]
          },
          {
              name:'cpu(%)',
              type:'line',
              data:[11, 1, 13, 3, 12, 8, 5, 4, 0, 14, 12, 1]
          }
      ]
    };
    const charts = Echarts.init(this.refs['system-charts']);
    charts.setOption(option);
  }
  render() {
    return (
      <div className={style.cSystem}>
        <p className={style.uSystem}>系统已平稳运行: 31天20小时</p>
        <div className={style.cCharts} ref="system-charts"></div>
      </div>
    )
  }
}