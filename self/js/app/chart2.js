require.config({
    baseUrl:'../js',
    waitSeconds:20,
    paths: {
        'echarts': 'lib/echarts'
    }
});
require(['echarts'],function (echarts) {     

var myChart = echarts.init(document.getElementById('July'));
option_July = {
	title:{
		//7月工资花销占比
		text:'7月花销占比',
		left:'center'
	},
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        x: 'center',
        y: 'bottom',
        //注意应该把图例设置为底部居中
        //y:'',
        data:['生活费','其他','余留','电费','餐饮','燃气','房租','其他','余留']
    },
    series: [
        {
            name:'大体开销',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1678.09, name:'生活费', selected:true},
                {value:350, name:'房租'},
                {value:235.84, name:'其他'},
                {value:744, name:'余留'}
            ]
        },
        {
            name:'具体细目',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                
                {value:100, name:'电费'},                
                {value:1500, name:'餐饮'},
                {value:78.09, name:'燃气'},
                {value:350, name:'房租'},
                {value:235.84, name:'其他'},                
                {value:744, name:'余留'},
                
            ]
        }
    ]
};
myChart.setOption(option_July);
//8月
var myChart = echarts.init(document.getElementById('Aug'));
option_Aug = {
	title:{
		text:'8月花销占比',
		left:'center'
	},
	tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        x: 'center',
        y: 'bottom',
        //注意应该把图例设置为底部居中
        //y:'',
        data:['生活费','其他','党费','餐饮','房租','其他','余留']
    },
    series: [
        {
            name:'大体开销',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1500, name:'生活费',selected:true},
                {value:120, name:'党费'},
                {value:350, name:'房租'},
                {value:426.84, name:'其他'},
                {value:602.1, name:'余留'}
            ]
        },
        {
            name:'具体细目',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:1500, name:'餐饮'},
                {value:120, name:'党费'},
                {value:350, name:'房租'},
                {value:426.84, name:'其他'},                
                {value:602.1, name:'余留'},
                
            ]
        }
    ]
};
myChart.setOption(option_Aug);
//9月
var myChart = echarts.init(document.getElementById('Sept'));
option_Sept = {
	title:{
		//9月工资花销占比
		text:'9月花销占比',
		left:'center'
	},
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        x: 'center',
        y: 'bottom',
        //注意应该把图例设置为底部居中
        //y:'',
        data:['生活费','其他','电费','餐饮','燃气','房租','其他','余留']
    },
    series: [
        {
            name:'大体开销',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1542.15, name:'生活费', selected:true},
                {value:350, name:'房租'},
                {value:367.68, name:'其他'},
                {value:738.9, name:'余留'}
            ]
        },
        {
            name:'具体细目',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[    
                {value:20, name:'电费'},
                {value:1500, name:'餐饮'},
                {value:22.15, name:'燃气'},
                {value:350, name:'房租'},
                {value:367.68, name:'其他'},
                {value:738.9, name:'余留'},
            ]
        }
    ]
};
myChart.setOption(option_Sept);
//11月
var myChart = echarts.init(document.getElementById('Nov'));
option_Nov = {
	title:{
		//11月工资花销占比
		text:'11月花销占比',
		left:'center',
	},
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        x: 'center',
        y:'bottom',
        data:['生活费','其他','余留','电费','餐饮','房租','其他','余留']
    },
    series: [
        {
            name:'大体开销',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1542.15, name:'生活费', selected:true},
                {value:350, name:'房租'},
                {value:359.52, name:'其他'},
                {value:726.6, name:'余留'}
            ]
        },
        {
            name:'具体细目',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                
                {value:40, name:'电费'},                
                {value:1500, name:'餐饮'},
                {value:24, name:'网费'},
                {value:350, name:'房租'},
                {value:359.52, name:'其他'},                
                {value:726.6, name:'余留'},
                
            ]
        }
    ]
};
myChart.setOption(option_Nov);
    // });
        })