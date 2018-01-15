require.config({
    baseUrl:'../js'    ,
    waitSeconds:20,
    paths:{
        'highcharts':'lib/highcharts',
        'bootstrap':'lib/bootstrap.min',
        'bootstrap-table':'lib/bootstrap-table'
    }
});
require([
    'highcharts',
    'bootstrap',
    'bootstrap-table'
    ],function(){

$(function () {
    //7月
    $('#July').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        credits: {
             enabled:false
        },
        title: {
            text: '7月开销占比'
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '7月开销占比',
            data: [
                ['餐饮',50.0],  
                ['生活杂费',5.6],
                ['其他',7.9],
                {
                   name: '房租',
                    y: 11.7,
                    sliced: true,
                    selected: true
                },
                ['结余',24.80]
            ]
        }]
    });
    //8月
    $('#Aug').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        credits: {
             enabled:false
        },
        title: {
            text: '8月开销占比'
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '8月开销占比',
            data: [
                {
                    name: '餐饮',
                    y: 50,
                    sliced: true,
                    selected: true
                },
                ['党费',4],
                ['其他',14.23],
                ['房租',11.7],
                ['结余',20.07]
            ]
        }]
    });
    //9月
    $('#Sept').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        credits: {
             enabled:false
        },
        title: {
            text: '9月开销占比'
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '9月开销占比',
            data: [
                ['餐饮',50.0],  
                ['生活杂费',1.4],
                 {
                    name: '其他',
                    y: 12.26,
                    sliced: true,
                    selected: true
                },
                ['房租',11.7],
                ['结余',24.63]
            ]
        }]
    });
    $('#Nov').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        credits: {
             enabled:false
        },
        title: {
            text: '11月开销占比'
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '11月开销占比',
            data: [
                ['餐饮',50.0],  
                ['生活杂费',1.3],
                ['其他',11.98],
                ['房租',11.7],
                {
                    name: '余留',
                    y: 24.22,
                    sliced: true,
                    selected: true
                },
            ]
        }]
    });
/*bootstrapTable*/
/*Tables*/
$('#table').bootstrapTable({
    striped: true,     //使表格带有条纹  
  	showToggle: false,   //名片格式  
  	//showColumns: true, //显示隐藏列    
  	//showRefresh: true,  //显示刷新按钮  
  	search: false,//是否显示右上角的搜索框  
  	clickToSelect: true,//点击行即可选中单选/复选框  
  	silent: true,  //刷新事件必须设置 
    columns: [
    {
        field: 'Month',
        title: '月份'
    },{
        field: 'LivingExpenses',
        title: '生活杂费(元)'
    }, {
        field: 'eat',
        title: '餐饮(元)'
    }, {
        field: 'rent',
        title: '房租(元)'
    }, {
        field: 'other',
        title: '其他(元)'
    }, {
        field: 'leave',
        title: '余留(元)'
    }],
    data: [{
    	Month:'7月',
        LivingExpenses: '178.09',
        eat: '1500',
        rent: '350',
        other: '235.84',
        leave: '744'
    },{
    	Month:'8月',
        LivingExpenses: '120(党费)',
        eat: '1500',
        rent: '350',
        other: '426.84',
        leave: '602.1'
    },{
    	Month:'9月',
        LivingExpenses: '42.15',
        eat: '1500',
        rent: '350',
        other: '367.68',
        leave: '738'
    },{
    	Month:'11月',
        LivingExpenses: '64',
        eat: '1500',
        rent: '350',
        other: '359.52',
        leave: '726.6'
    },],
    //width:15
});



});
/*bootstrapTable对于表格的细致选项并不多，多的是样式的选项*/
 })