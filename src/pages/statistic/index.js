import React, { useState } from 'react';
import RcResizeObserver from 'rc-resize-observer';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import { Pie } from '@ant-design/plots';
import { Column } from '@ant-design/plots';
import KGContent from '../kg/kg_content';
import './index.less';

class Statistic extends React.Component {
  constructor(props) {
    super(props);
    console.log('Statistic');
    this.state = {
      responsive: true,
    };
  }

  render() {
    const imgStyle = {
      display: 'block',
      width: 42,
      height: 42,
    };

    const DemoPie = () => {
      const data = [
        {
          type: '课程实体',
          value: 20,
        },
        {
          type: '概念实体',
          value: 326,
        },
        {
          type: '操作实体',
          value: 1247,
        },
        {
          type: '方法实体',
          value: 2758,
        },
      ];
      const config = {
        appendPadding: -10,
        marginLeft:'50px',
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.6,
        label: {

          content: '{percentage}',
        },
        interactions: [
          {
            type: 'pie-legend-active',
          },
          {
            type: 'element-active',
          },
        ],
      };
      return <Pie {...config} />;
    };

    const DemoColumn = () => {
      const data = [
        {
          type: '课程实体',
          value: 20,
        },
        {
          type: '概念实体',
          value: 326,
        },
        {
          type: '操作实体',
          value: 1247,
        },
        {
          type: '方法实体',
          value: 2758,
        },
      ];
      const color1 = '#5B8FF9';
      const color2 = '#F06B49';
      const color3 = '#8ED14B';
      const color4 = '#ECC2F1';
      const config = {
        data,
        xField: 'type',
        yField: 'value',
        seriesField: '',
        autoFit:false,
        width:300,
        height:250,
        color: ({ type }) => {
          if(type === '课程实体'){
            return color1;
          }
          if(type === '概念实体'){
            return color2;
          }
          if(type === '操作实体'){
            return color3;
          }
          if (type === '方法实体'){
            return color4;
          }
        },
        label: {
          content: (originData) => {
            const val = parseFloat(originData.value);
            if (val < 0.05) {
              return (val * 100).toFixed(1) + '%';
            }
          },
          offset: 5,
        },
        legend: false,
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
      };
      return <Column {...config} />;
    };
    return (
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          this.setState({
            setResponsive: offset.width < 596,
          });
        }}
      >
        <ProCard
          className="content"
          split={this.state.responsive ? 'horizontal' : 'vertical'}
          gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
          ghost
        >
          <ProCard
            split={this.state.responsive ? 'horizontal' : 'vertical'}
            gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
            ghost
          >
            <ProCard className="statisticCard" ghost>
              <StatisticCard.Group
                colSpan="30%"
                gutter={8}
                ghost
                direction={this.state.responsive ? 'row' : 'column'}
              >
                <StatisticCard
                  hoverable
                  statistic={{
                    title: '实体总数',
                    value: '4351',
                    icon: (
                      <img
                        style={imgStyle}
                        src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                        alt="icon"
                      />
                    ),
                  }}
                />
                <StatisticCard
                  hoverable
                  statistic={{
                    title: '关系总数',
                    value: '1630',
                    icon: (
                      <img
                        style={imgStyle}
                        src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                        alt="icon"
                      />
                    ),
                  }}
                />

                <StatisticCard
                  hoverable
                  statistic={{
                    title: '属性总数',
                    value: '5032',
                    icon: (
                      <img
                        style={imgStyle}
                        src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                        alt="icon"
                      />
                    ),
                  }}
                />
              </StatisticCard.Group>
            </ProCard>

            <ProCard className="statisticCard" ghost>
              <StatisticCard.Group
                colSpan="30%"
                gutter={8}
                ghost
                direction={this.state.responsive ? 'row' : 'column'}
              >
                <StatisticCard
                  hoverable
                  statistic={{
                    title: '课程实体',
                    value: '20',
                    icon: (
                      <img
                        style={imgStyle}
                        src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                        alt="icon"
                      />
                    ),
                  }}
                />

                <StatisticCard
                  hoverable
                  statistic={{
                    title: '概念实体',
                    value: '326',
                    icon: (
                      <img
                        style={imgStyle}
                        src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                        alt="icon"
                      />
                    ),
                  }}
                />
                <StatisticCard
                  hoverable
                  statistic={{
                    title: '操作实体',
                    value: '1247',
                    icon: (
                      <img
                        style={imgStyle}
                        src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                        alt="icon"
                      />
                    ),
                  }}
                />
                <StatisticCard
                  hoverable
                  statistic={{
                    title: '方法实体',
                    value: '2758',
                    icon: (
                      <img
                        style={imgStyle}
                        src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                        alt="icon"
                      />
                    ),
                  }}
                />
              </StatisticCard.Group>
            </ProCard>
          </ProCard>

          <ProCard className="statistic" gutter={8} ghost>
            <ProCard
              colSpan="30%"
              split={this.state.responsive ? 'horizontal' : 'vertical'}
            >
              <ProCard layout="center" style={{width:'320px',height:'300px'}}>
                <DemoPie />
              </ProCard>
              <ProCard layout="center" style={{width:'320px',height:'300px'}}>
                <DemoColumn />
              </ProCard>
            </ProCard>

            <ProCard layout="center" title="知识图谱" colSpan="70%">
              <KGContent />
            </ProCard>


          </ProCard>
        </ProCard>
      </RcResizeObserver>
    );
  }
}
export default Statistic;
