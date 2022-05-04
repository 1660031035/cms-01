// 1. 饼形图 封装函数 方便ajax渲染
function setPie() {
  let myChart = echarts.init(document.querySelector('.pie'))
  let option = {
    // 添加标题组件
    title: {
      text: '籍贯 Hometown',
      textStyle: {
        color: '#6d767e'
      },
    },
    tooltip: {
      // {a}系列名称 {b}name {c}value 
      formatter: '{a}<br>{b}:{c}人  占比:{d}%'
    },
    series: [{
      name: '各地人员分布',
      type: 'pie',
      radius: ['10%', '65%'],
      center: ['50%', '50%'],
      roseType: 'area', // 面积模式 或者 半径模式
      itemStyle: {
        borderRadius: 4 // 扇形边缘圆角设置
      },
      data: [{
          value: 6,
          name: '河南省'
        },
        {
          value: 7,
          name: '甘肃省'
        },
        {
          value: 4,
          name: '江苏省'
        },
        {
          value: 4,
          name: '黑龙江省'
        },
        {
          value: 4,
          name: '山东省'
        },
        {
          value: 6,
          name: '西藏自治区'
        },
        {
          value: 6,
          name: '河北省'
        },
        {
          value: 3,
          name: '内蒙古自治区'
        },
        {
          value: 2,
          name: '新疆维吾尔自治区'
        },
        {
          value: 6,
          name: '广西壮族自治区'
        },
        {
          value: 3,
          name: '广东省'
        },
        {
          value: 2,
          name: '湖南省'
        },
        {
          value: 3,
          name: '云南省'
        }
      ]
    }]
  }
  myChart.setOption(option)
}
setPie()



// 2. 折线图
function setLine() {
  let myChart = echarts.init(document.querySelector('.line'))
  let option = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    title: {
      text: '薪资 Salary',
      textStyle: {
        color: '#6d767e'
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['张三', '李四', '王五', '小明', '小强', '小红']
    },

    yAxis: {
      type: 'value',
      // y 轴最大值最小值范围
      boundaryGap: [0, '50%']
    },
    dataZoom: [{
        type: 'slider',
        start: 0,
        end: 50
      },
      {
        start: 0,
        end: 10
      }
    ],
    // 添加图例组件
    legend: {
      top: 20
    },
    color: ['#ee6666', '#5470c6'],
    series: [{
        name: '期望薪资',
        type: 'line',
        symbol: 'none', // circle圆点 none无状态
        smooth: true, // 转折位置是否平滑
        sampling: 'lttb',
        data: [123, 100, 542, 1200, 666, 200, 888]
      },
      {
        name: '实际薪资',
        type: 'line',
        symbol: 'none',
        smooth: true,
        sampling: 'lttb',
        data: [1000, 100, 942, 100, 6, 2000, 1888]
      }

    ]
  };
  myChart.setOption(option)
}
setLine()

// 3. 柱形图
function setBar(arr) {
  let myChart = echarts.init(document.querySelector('.barChart'))
  let option = {
    grid: {
      top: 30,
      bottom: 30,
      left: '7%',
      right: '7%'
    },
    legend: {
      // legend 删除data属性 series中的name属性
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    xAxis: [{
      type: 'category',
      data: arr.group,
      axisPointer: {
        type: 'shadow' // 鼠标放入有阴影
      }
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: 100,
        interval: 10, // 间隔
        axisLabel: {
          formatter: '{value} 分'
        }
      },
      {
        type: 'value',
        min: 0,
        max: 10,
        interval: 1,
        axisLabel: {
          formatter: '{value} 人'
        }
      }
    ],
    series: [{
        name: '平均分',
        type: 'bar',
        barWidth: '15', // 柱形图宽度
        data: arr.avgScore
      },
      {
        name: '低于60分人数',
        type: 'bar',
        yAxisIndex: 1, // Y轴索引，1表示使用第2个Y轴
        barWidth: '15', // 柱形图宽度
        data: arr.gt60
      },
      {
        name: '60到80分之间',
        type: 'bar',
        yAxisIndex: 1,
        barWidth: '15', // 柱形图宽度
        data: arr.gt80
      },
      {
        name: '高于80分人数',
        type: 'bar',
        yAxisIndex: 1,
        barWidth: '15', // 柱形图宽度
        data: arr.lt60
      },

    ]
  };
  myChart.setOption(option)
}
// setBar()

// 4. 地图
function setMap() {
  let myChart = echarts.init(document.querySelector('.map'))

  // 位置 + 经纬度
  var chinaGeoCoordMap = {
    "顺义校区": [
      116.4551,
      40.2539
    ],
    "海拉尔区": [
      119.736279,
      49.212189
    ],
    "市中区": [
      116.997777,
      36.651474
    ],
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京市': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
    "江苏": [118.8062, 31.9208],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    "江西": [116.0046, 28.6633],
    "湖南": [113.0823, 28.2568],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "广东": [113.12244, 23.009505],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],
    '上海': [121.4648, 31.2891]
  };
  var chinaDatas = [
    [{
      "name": "海拉尔区",
      "value": 0
    }],
    [{
      "name": "市中区",
      "value": 0
    }],
    [{
      name: '黑龙江',
      value: 0
    }],
    [{
      name: '内蒙古',
      value: 0
    }],
    [{
      name: '吉林',
      value: 0
    }],
    [{
      name: '辽宁',
      value: 0
    }],
    [{
      name: '河北',
      value: 0
    }],
    [{
      name: '天津',
      value: 0
    }],
    [{
      name: '山西',
      value: 0
    }],
    [{
      name: '陕西',
      value: 0
    }],
    [{
      name: '甘肃',
      value: 0
    }],
    [{
      name: '宁夏',
      value: 0
    }],
    [{
      name: '青海',
      value: 0
    }],
    [{
      name: '新疆',
      value: 0
    }],
    [{
      name: '西藏',
      value: 0
    }],
    [{
      name: '四川',
      value: 0
    }],
    [{
      name: '重庆',
      value: 0
    }],
    [{
      name: '山东',
      value: 0
    }],
    [{
      name: '河南',
      value: 0
    }],
    [{
      name: '江苏',
      value: 0
    }],
    [{
      name: '安徽',
      value: 0
    }],
    [{
      name: '湖北',
      value: 0
    }],
    [{
      name: '浙江',
      value: 0
    }],
    [{
      name: '福建',
      value: 0
    }],
    [{
      name: '江西',
      value: 0
    }],
    [{
      name: '湖南',
      value: 0
    }],
    [{
      name: '贵州',
      value: 0
    }],
    [{
      name: '广西',
      value: 0
    }],
    [{
      name: '海南',
      value: 0
    }]
  ];

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = chinaGeoCoordMap[dataItem[0].name];
      var toCoord = [116.4551, 40.2539]; // 目标点经纬度（北京顺义校区）
      if (fromCoord && toCoord) {
        res.push([{
          coord: fromCoord,
          value: dataItem[0].value
        }, {
          coord: toCoord,
        }]);
      }
    }
    return res;
  };
  var series = [];
  [
    ['顺义校区', chinaDatas]
  ].forEach(function (item, i) {
    series.push({
        type: 'lines',
        zlevel: 2,
        effect: {
          show: true,
          period: 4, //箭头指向速度，值越小速度越快
          trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: 'arrow', //箭头图标
          symbolSize: 5, //图标大小
        },
        lineStyle: {
          normal: {
            width: 1, //尾迹线条宽度
            opacity: 1, //尾迹线条透明度
            curveness: 0.2 //尾迹线条曲直度
          }
        },
        data: convertData(item[1])
      }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: { //涟漪特效
          period: 4, //动画时间，值越小速度越快
          brushType: 'stroke', //波纹绘制方式 stroke, fill
          scale: 4 //波纹圆环最大限制，值越大波纹越大
        },
        label: {
          normal: {
            show: true,
            position: 'right', //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) { //圆环显示文字
              return params.data.name;
            },
            fontSize: 12
          },
          emphasis: {
            show: true
          }
        },
        symbol: 'circle',
        symbolSize: function (val) {
          return 4 + val[2] * 5; //圆环大小
        },
        itemStyle: {
          normal: {
            show: false,
            color: '#f00'
          }
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[0].name,
            value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
          };
        }),
      },
      //被攻击点
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          period: 4,
          brushType: 'stroke',
          scale: 4
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            offset: [5, 0],
            color: '#9eca7f', // 目标点文字颜色
            formatter: '{b}',
            textStyle: {
              color: "#9eca7f"
            }
          },
          emphasis: {
            show: true,
            color: "#f60", // 目标点鼠标移入的颜色
          }
        },
        symbol: 'pin',
        symbolSize: 50,
        data: [{
          name: item[0],
          value: chinaGeoCoordMap[item[0]].concat([10]),
        }],
      }
    );
  });

  let option = {
    title: {
      text: '来京路线 From',
      textStyle: {
        color: '#6d767e'
      }
    },
    // tooltip: {
    //   trigger: 'item',
    //   backgroundColor: 'rgba(166, 200, 76, 0.82)',
    //   borderColor: '#FFFFCC',
    //   showDelay: 0,
    //   hideDelay: 0,
    //   enterable: true,
    //   transitionDuration: 0,
    //   extraCssText: 'z-index:100',
    //   formatter: function (params, ticket, callback) {
    //     //根据业务自己拓展要显示的内容
    //     var res = "";
    //     var name = params.name;
    //     var value = params.value[params.seriesIndex + 1];
    //     res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
    //     return res;
    //   }
    // },
    // backgroundColor: "#013954",
    // visualMap: { //图例值控制
    //   min: 0,
    //   max: 1,
    //   calculable: true,
    //   show: false,
    //   color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
    //   textStyle: {
    //     color: '#fff'
    //   }
    // },
    geo: {
      map: 'china',
      zoom: 1.2,
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true, //是否允许缩放
      itemStyle: {
        normal: {
          // color: 'rgba(51, 69, 89, .5)', //地图背景色
          // color: '#5a6fc0', //地图背景色
          // borderColor: '#516a89', //省市边界线00fcff 516a89
          borderWidth: 1
        },
        emphasis: {
          color: 'rgba(37, 43, 61, .5)' //悬浮背景
        }
      }
    },
    series: series
  };

  myChart.setOption(option)
}
setMap()

// 需求1 渲染班级数据
axios({
  url: '/student/overview',
  method: 'get',
}).then(({
  data: res
}) => {
  //成功回调
  console.log(res)
  document.querySelector('.total').innerHTML = res.data.total
  document.querySelector('.avgSalary').innerHTML = res.data.avgSalary
  document.querySelector('.avgAge').innerHTML = res.data.avgAge
  document.querySelector('.proportion').innerHTML = res.data.proportion
})

// 需求2: 点击显示隐藏成绩
document.querySelector('.bar .btn').addEventListener('click', function () {
  let ul = document.querySelector('#batch')
  if (ul.style.display == 'none') {
    ul.style.display = 'block'
    // console.log(22)
  } else {
    ul.style.display = 'none'
  }
})

// 需求3: 点击a链接 发送ajax请求
let lis = document.querySelectorAll('#batch li')
lis.forEach((item, index) => {
  lis[index].onclick = function () {
    // 发送ajax请求
    axios({
      url: '/score/batch',
      method: 'get',
      params: {
        batch: index + 1
      }
    }).then(({
      data: res
    }) => {
      //成功回调
      // console.log(res)
      if (res.code == 0) {
        setBar(res.data)
      }
    })
  }
  lis[0].onclick()
})

// 需求4: 发送ajax 请求所有学员的饼形图 折线图 地图
axios({
  url: '/student/list',
  method: 'get',
}).then(({
  data: res
}) => {
  //成功回调
  console.log(res)
  if(res.code==0) {
    let lineData = {
      
    }
  }
})