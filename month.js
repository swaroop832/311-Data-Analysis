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

        $http.get("https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$select=date_extract_m(created_date)%20as%20month,count(month)&$group=month&$where=date_extract_y(created_date)%3E"+selected_year+"&$order=month").then(function (value) {
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

    google.charts.load('current', {'packages': ['corechart'],'callback': drawChart});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart(var0, var1 , var2, var3, var4, var5, var6, var7, var8,
                          var9, var10,var11,var12) {
        var data = google.visualization.arrayToDataTable([
            ['Month', 'No. call request for given year'],
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