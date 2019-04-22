var app = angular.module("app", []);

app.controller("MinCtrl",function ($scope,$http) {

    $scope.kcfunction = function () {

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year=2010").then(function (value) {

            $scope.avg_days_2010 = Math.round(value.data[0].avg_days_to_close);

            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year=2011").then(function (value) {

                $scope.avg_days_2011 = Math.round(value.data[0].avg_days_to_close);

                $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year=2012").then(function (value) {

                    $scope.avg_days_2012 = Math.round(value.data[0].avg_days_to_close);

                    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year=2013").then(function (value) {

                        $scope.avg_days_2013 = Math.round(value.data[0].avg_days_to_close);

                        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year=2014").then(function (value) {

                            $scope.avg_days_2014 = Math.round(value.data[0].avg_days_to_close);

                            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year=2015").then(function (value) {

                                $scope.avg_days_2015 = Math.round(value.data[0].avg_days_to_close);

                                $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year=2016").then(function (value) {

                                    $scope.avg_days_2016 = Math.round(value.data[0].avg_days_to_close);

                                    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year=2017").then(function (value) {

                                        $scope.avg_days_2017 = Math.round(value.data[0].avg_days_to_close);
                                        
                                        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=avg(days_to_close)&creation_year=2018").then(function (value) {

                                           $scope.avg_days_2018 = Math.round(value.data[0].avg_days_to_close);
                                            drawChartx($scope.avg_days_2010, $scope.avg_days_2011, $scope.avg_days_2012, $scope.avg_days_2013, $scope.avg_days_2014, $scope.avg_days_2015, $scope.avg_days_2016, $scope.avg_days_2017, $scope.avg_days_2018, 'kc_chart1');
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };


    $scope.nyfunction = function () {
        $scope.avg_days_2010 = 15;
        $scope.avg_days_2011 = 32;
        $scope.avg_days_2012 = 29;
        $scope.avg_days_2013 = 30;
        $scope.avg_days_2014 = 15;
        $scope.avg_days_2015 = 16;
        $scope.avg_days_2016 = 12;
        $scope.avg_days_2017 = 8;
        $scope.avg_days_2018 = 8;
        drawChartx($scope.avg_days_2010, $scope.avg_days_2011, $scope.avg_days_2012, $scope.avg_days_2013, $scope.avg_days_2014, $scope.avg_days_2015, $scope.avg_days_2016, $scope.avg_days_2017, $scope.avg_days_2018, 'ny_chart1');
    };

    $scope.bsfunction = function () {
        $scope.avg_days_2010 = -1;
        $scope.avg_days_2011 = -1;
        $scope.avg_days_2012 = 41;
        $scope.avg_days_2013 = 29;
        $scope.avg_days_2014 = 29;
        $scope.avg_days_2015 = 19;
        $scope.avg_days_2016 = 16;
        $scope.avg_days_2017 = 18;
        $scope.avg_days_2018 = 12;
        drawChartx($scope.avg_days_2010, $scope.avg_days_2011, $scope.avg_days_2012, $scope.avg_days_2013, $scope.avg_days_2014, $scope.avg_days_2015, $scope.avg_days_2016, $scope.avg_days_2017, $scope.avg_days_2018, 'bs_chart1');
    };

    $scope.dvfunction = function () {
        $scope.avg_days_2010 = 41;
        $scope.avg_days_2011 = 81;
        $scope.avg_days_2012 = 32;
        $scope.avg_days_2013 = 7;
        $scope.avg_days_2014 = 9;
        $scope.avg_days_2015 = 7;
        $scope.avg_days_2016 = 1;
        $scope.avg_days_2017 = 0;
        $scope.avg_days_2018 = 0;
        drawChartx($scope.avg_days_2010, $scope.avg_days_2011, $scope.avg_days_2012, $scope.avg_days_2013, $scope.avg_days_2014, $scope.avg_days_2015, $scope.avg_days_2016, $scope.avg_days_2017, $scope.avg_days_2018, 'dv_chart1');
    };
    $scope.hsfunction = function () {
        $scope.avg_days_2010 = -1;
        $scope.avg_days_2011 = 47;
        $scope.avg_days_2012 = 35;
        $scope.avg_days_2013 = 29;
        $scope.avg_days_2014 = 23;
        $scope.avg_days_2015 = 19;
        $scope.avg_days_2016 = 22;
        $scope.avg_days_2017 = 14;
        $scope.avg_days_2018 = 12;
        drawChartx($scope.avg_days_2010, $scope.avg_days_2011, $scope.avg_days_2012, $scope.avg_days_2013, $scope.avg_days_2014, $scope.avg_days_2015, $scope.avg_days_2016, $scope.avg_days_2017, $scope.avg_days_2018, 'hs_chart1');
    };










    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChartx);
    function drawChartx(var0, var1, var2, var3, var4, var5, var6, var7, var8, var9) {
        console.log(var0);
        var data = google.visualization.arrayToDataTable([
            ['Year','Number of Days Taken(AVG)'],
            ['2010', parseInt(var0)],
            ['2011', parseInt(var1)],
            ['2012', parseInt(var2)],
            ['2013', parseInt(var3)],
            ['2014', parseInt(var4)],
            ['2015', parseInt(var5)],
            ['2016', parseInt(var6)],
            ['2017', parseInt(var7)],
            ['2018', parseInt(var8)],
            ['2019', parseInt(var9)]
        ]);
        var options = {
            title: 'Time_to_close ',
            legend: {position: 'bottom'},
            width:1100
            ,height:600,
            pointSize: 7,
            series: {0: { pointShape: 'circle' }},
            colors : ['#e7711b']
        };
        var chart = new google.visualization.LineChart(document.getElementById(var9));
        chart.draw(data, options);
    }
});
