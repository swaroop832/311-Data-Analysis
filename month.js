var app = angular.module("app", []);

app.controller("MinCtrl",function ($scope,$http) {
    $scope.kcfunction1 = function (selected_year) {

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=creation_month,count(creation_month)&$group=creation_month&creation_year="+selected_year +"&$order=creation_month").then(function (response) {

            $scope.kcvalue = response.data;
            $scope.kcjan = $scope.kcvalue[0].count_creation_month;
            $scope.kcfeb = $scope.kcvalue[1].count_creation_month;
            $scope.kcmar = $scope.kcvalue[2].count_creation_month;
            $scope.kcapr = $scope.kcvalue[3].count_creation_month;
            $scope.kcmay = $scope.kcvalue[4].count_creation_month;
            $scope.kcjun = $scope.kcvalue[5].count_creation_month;
            $scope.kcjul = $scope.kcvalue[6].count_creation_month;
            $scope.kcaug = $scope.kcvalue[7].count_creation_month;
            $scope.kcsep = $scope.kcvalue[8].count_creation_month;
            $scope.kcoct = $scope.kcvalue[9].count_creation_month;
            $scope.kcnov = $scope.kcvalue[10].count_creation_month;
            $scope.kcdec = $scope.kcvalue[11].count_creation_month;
        drawChart($scope.kcjan,$scope.kcfeb,$scope.kcmar,$scope.kcapr,$scope.kcmay,$scope.kcjun,$scope.kcjul,$scope.kcaug,$scope.kcsep,$scope.kcoct,$scope.kcnov,$scope.kcdec,'kcchart1')
        });
    };

    $scope.nyfunction = function (selected_year) {

        $http.get("https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$select=date_extract_m(created_date)%20as%20month,count(month)&$group=month&$where=date_extract_y(created_date)="+selected_year+"&$order=month").then(function (value) {
            $scope.nydata = value.data;
            $scope.ny0 = $scope.nydata[0].count_month;
            $scope.ny1 = $scope.nydata[1].count_month;
            $scope.ny2 = $scope.nydata[2].count_month;
            $scope.ny3 = $scope.nydata[3].count_month;
            $scope.ny4 = $scope.nydata[4].count_month;
            $scope.ny5 = $scope.nydata[5].count_month;
            $scope.ny6 = $scope.nydata[6].count_month;
            $scope.ny7 = $scope.nydata[7].count_month;
            $scope.ny8 = $scope.nydata[8].count_month;
            $scope.ny9 = $scope.nydata[9].count_month;
            $scope.ny10 = $scope.nydata[10].count_month;
            $scope.ny11 = $scope.nydata[11].count_month;
            drawChart($scope.ny0,$scope.ny1,$scope.ny2,$scope.ny3,$scope.ny4,$scope.ny5,$scope.ny6,$scope.ny7,$scope.ny8,$scope.ny9,$scope.ny10,$scope.ny11,'nychart1');
        })
    };


    //Austin Tx  monthly api

    $scope.Aufunction = function (selected_year) {

        $http.get("https://data.austintexas.gov/resource/5h38-fd8d.json?$select=date_extract_m(sr_status_date)%20as%20month,count(month)&$group=month&$where=date_extract_y(sr_status_date)="+selected_year+"&$order=month").then(function (value) {

            $scope.Auvalue = value.data;
            $scope.Au0=$scope.Auvalue[0].count_month;
            $scope.Au1=$scope.Auvalue[1].count_month;
            $scope.Au2=$scope.Auvalue[2].count_month;
            $scope.Au3=$scope.Auvalue[3].count_month;
            $scope.Au4=$scope.Auvalue[4].count_month;
            $scope.Au5=$scope.Auvalue[5].count_month;
            $scope.Au6=$scope.Auvalue[6].count_month;
            $scope.Au7=$scope.Auvalue[7].count_month;
            $scope.Au8=$scope.Auvalue[8].count_month;
            $scope.Au9=$scope.Auvalue[9].count_month;
            $scope.Au10=$scope.Auvalue[10].count_month;
            $scope.Au11 =$scope.Auvalue[11].count_month;
            drawChart($scope.Au0,$scope.Au1,$scope.Au2,$scope.Au3,$scope.Au4,$scope.Au5,$scope.Au6,$scope.Au7,$scope.Au8,$scope.Au9,$scope.Au10,$scope.Au11,'Auchart1')
        })
    };

    //Baton Rouge monthly api


    $scope.Bafunction = function (selected_year) {

        $http.get("https://data.brla.gov/resource/uqxt-dtpe.json?$select=date_extract_m(createdate)%20as%20month,count(month)&$group=month&$where=date_extract_y(createdate)="+selected_year+"&$order=month").then(function (value) {

            $scope.Bavalue = value.data;
            $scope.Ba0=$scope.Bavalue[0].count_month;
            $scope.Ba1=$scope.Bavalue[1].count_month;
            $scope.Ba2=$scope.Bavalue[2].count_month;
            $scope.Ba3=$scope.Bavalue[3].count_month;
            $scope.Ba4=$scope.Bavalue[4].count_month;
            $scope.Ba5=$scope.Bavalue[5].count_month;
            $scope.Ba6=$scope.Bavalue[6].count_month;
            $scope.Ba7=$scope.Bavalue[7].count_month;
            $scope.Ba8=$scope.Bavalue[8].count_month;
            $scope.Ba9=$scope.Bavalue[9].count_month;
            $scope.Ba10=$scope.Bavalue[10].count_month;
            $scope.Ba11 =$scope.Bavalue[11].count_month;
            drawChart($scope.Ba0,$scope.Ba1,$scope.Ba2,$scope.Ba3,$scope.Ba4,$scope.Ba5,$scope.Ba6,$scope.Ba7,$scope.Ba8,$scope.Ba9,$scope.Ba10,$scope.Ba11,'Bachart1')
        })
    };

    //chattanooga monthly api

    $scope.Chfunction = function (selected_year) {

        $http.get("https://data.chattlibrary.org/resource/sf89-4qcw.json?$select=date_extract_m(created_date)%20as%20month,count(month)&$group=month&$where=date_extract_y(created_date)="+selected_year+"&$order=month").then(function (value) {
            $scope.Chvalue = value.data;
            $scope.Ch0 = $scope.Chvalue[0].count_month;
            $scope.Ch1 = $scope.Chvalue[1].count_month;
            $scope.Ch2 = $scope.Chvalue[2].count_month;
            $scope.Ch3 = $scope.Chvalue[3].count_month;
            $scope.Ch4 = $scope.Chvalue[4].count_month;
            $scope.Ch5 = $scope.Chvalue[5].count_month;
            $scope.Ch6 = $scope.Chvalue[6].count_month;
            $scope.Ch7 = $scope.Chvalue[7].count_month;
            $scope.Ch8 = $scope.Chvalue[8].count_month;
            $scope.Ch9 = $scope.Chvalue[9].count_month;
            $scope.Ch10 = $scope.Chvalue[10].count_month;
            $scope.Ch11 = $scope.Chvalue[11].count_month;
            drawChart($scope.Ch0,$scope.Ch1,$scope.Ch2,$scope.Ch3,$scope.Ch4,$scope.Ch5,$scope.Ch6,$scope.Ch7,$scope.Ch8,$scope.Ch9,$scope.Ch10,$scope.Ch11,'Chchart1')
            })
    };

    //Chicago monthly api

    $scope.Chifunction = function (selected_year) {

        $http.get("https://data.cityofchicago.org/resource/6zsd-86xi.json?$select=date_extract_m(date)%20as%20month,count(month)&$group=month&$where=date_extract_y(date)="+selected_year+"&$order=month").then(function (value) {
            $scope.Chivalue = value.data;
            $scope.Chi0 = $scope.Chivalue[0].count_month;
            $scope.Chi1 = $scope.Chivalue[1].count_month;
            $scope.Chi2 = $scope.Chivalue[2].count_month;
            $scope.Chi3 = $scope.Chivalue[3].count_month;
            $scope.Chi4 = $scope.Chivalue[4].count_month;
            $scope.Chi5 = $scope.Chivalue[5].count_month;
            $scope.Chi6 = $scope.Chivalue[6].count_month;
            $scope.Chi7 = $scope.Chivalue[7].count_month;
            $scope.Chi8 = $scope.Chivalue[8].count_month;
            $scope.Chi9 = $scope.Chivalue[9].count_month;
            $scope.Chi10 = $scope.Chivalue[10].count_month;
            $scope.Chi11 = $scope.Chivalue[11].count_month;
            drawChart($scope.Chi0,$scope.Chi1,$scope.Chi3,$scope.Chi3,$scope.Chi4,$scope.Chi5,$scope.Chi6,$scope.Chi7,$scope.Chi8,$scope.Chi9,$scope.Chi10,$scope.Chi11,'Chichart1')
        })
    };

    //New Orleans monthly api

    $scope.Nofunction = function (selected_year) {
        $http.get("https://data.nola.gov/resource/m959-fs8u.json?$select=date_extract_m(ticket_created_date_time)%20as%20month,count(month)&$group=month&$where=date_extract_y(ticket_created_date_time)="+selected_year+"&$order=month").then(function (value) {
            $scope.Novalue = value.data;
            $scope.No0= $scope.Novalue[0].count_month;
            $scope.No1= $scope.Novalue[1].count_month;
            $scope.No2= $scope.Novalue[2].count_month;
            $scope.No3= $scope.Novalue[3].count_month;
            $scope.No4= $scope.Novalue[4].count_month;
            $scope.No5= $scope.Novalue[5].count_month;
            $scope.No6= $scope.Novalue[6].count_month;
            $scope.No7= $scope.Novalue[7].count_month;
            $scope.No8= $scope.Novalue[8].count_month;
            $scope.No9= $scope.Novalue[9].count_month;
            $scope.No10= $scope.Novalue[10].count_month;
            $scope.No11= $scope.Novalue[11].count_month;
            drawChart($scope.No0,$scope.No1,$scope.No2,$scope.No3,$scope.No4,$scope.No5,$scope.No6,$scope.No7,$scope.No8,$scope.No9,$scope.No10,$scope.No11,'Nochart1')
        })
    };

    google.charts.load('current', {'packages': ['corechart'],'callback': drawChart});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart(var0, var1 , var2, var3, var4, var5, var6, var7, var8,
                          var9, var10,var11,var12) {
        var data = google.visualization.arrayToDataTable([
            ['Month', 'No. call requests for the month in given year'],
            ['Jan', parseInt(var0)],
            ['Feb', parseInt(var1)],
            ['Mar', parseInt(var2)],
            ['Apr', parseInt(var3)],
            ['May', parseInt(var4)],
            ['Jun', parseInt(var5)],
            ['Jul', parseInt(var6)],
            ['Aug', parseInt(var7)],
            ['Sep', parseInt(var8)],
            ['Oct', parseInt(var9)],
            ['Nov', parseInt(var10)],
            ['Dec', parseInt(var11)]
        ]);
        var options = {
            title: 'Month',
            legend: {position: 'right'},
            width: 900,
            height: 600,
            pointSize:13,
            colors:['#15a0c8'],
            pointShape:{type:'triangle', rotation: 180},
            backgroundColor: 'transparent'
        };
        // console.log(document.getElementById(var30));
        var chart = new google.visualization.AreaChart(document.getElementById(var12));
        chart.draw(data,options);
    }

    $scope.Month = [
        "January","Feburary","March","April","May","June","July","August","September","October","November","December"]
});