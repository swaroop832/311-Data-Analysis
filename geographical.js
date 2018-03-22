var app = angular.module("app", []);

app.controller("MinCtrl",function ($scope,$http) {

    $scope.hfunction = function (selected_year) {

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=creation_year,count(case_id)&$group=creation_year&$where=creation_year="+selected_year+"").then(function (value) {
            $scope.kcvalue = value.data[0].count_case_id;
            $http.get("https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$select=date_extract_y(created_date),count(unique_key)&$group=date_extract_y(created_date)&$where=date_extract_y(created_date)="+selected_year+"&$order=date_extract_y(created_date)").then(function (value2) {
                $scope.nyvalue = value2.data[0].count_unique_key;
                $http.get("https://data.austintexas.gov/resource/5h38-fd8d.json?$select=date_extract_y(sr_status_date)%20as%20year,count(sr_number)&$where=year="+selected_year+"&$group=year&$order=year").then(function (value3) {
                    $scope.auvalue=value3.data[0].count_sr_number;
                    $http.get("https://data.brla.gov/resource/uqxt-dtpe.json?$select=date_extract_y(createdate)%20as%20year,count(id)&$where=year="+selected_year+"&$group=year&$order=year").then(function (value4) {
                        $scope.bavalue = value4.data[0].count_id;
                        $http.get("https://data.chattlibrary.org/resource/sf89-4qcw.json?$select=date_extract_y(created_date)%20as%20year,count(description)&$group=year&$where=year="+selected_year+"&$order=year").then(function (value5) {
                            $scope.chtvalue=value5.data[0].count_description;
                            $http.get("https://data.cityofgainesville.org/resource/cgd2-6k8s.json?$select=date_extract_y(created)%20as%20year,count(id)&$group=year&$where=year="+selected_year+"&$order=year").then(function (value6) {
                                $scope.gsvalue=value6.data[0].count_id;
                                $http.get("https://data.nola.gov/resource/m959-fs8u.json?$select=date_extract_y(ticket_created_date_time)%20as%20year,count(ticket_id)&$group=year&$where=year="+selected_year+"&$order=year").then(function (value7) {
                                    $scope.nrvalue = value7.data[0].count_ticket_id;
                                    drawMarkersMap();
                                });

                            })
                        });
                    })
                })
            })
        });
    };

    google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyBFVnXftTvVXgdkl_HCb3lXWg9_RnPn644'
    });

    google.charts.setOnLoadCallback(drawMarkersMap);

    function drawMarkersMap() {
        var data = google.visualization.arrayToDataTable([
            ['City', 'No.of Requests'],
            ['Kansas City', parseInt($scope.kcvalue)],
            ['New York', parseInt($scope.nyvalue)],
            ['Austin',parseInt($scope.auvalue)],
            ['Baton Rogue',parseInt($scope.bavalue)],
            ['Chattanooga',parseInt($scope.chtvalue)],
            ['Gainesville',parseInt($scope.gsvalue)],
            ['New Orleans',parseInt($scope.nrvalue)]
        ]);
        var options = {
            region: 'US',
            displayMode: 'markers',
            colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
            backgroundColor: '#81d4fa',
            datalessRegionColor: 'azure',
            defaultColor: '#f5f5f5'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
});