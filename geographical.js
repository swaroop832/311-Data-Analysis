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
                        drawMap();
                    })
                })
            })
        });
    };

    google.charts.load('current', {
        'packages':['geomap'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyBFVnXftTvVXgdkl_HCb3lXWg9_RnPn644'
    });
    google.charts.setOnLoadCallback(drawMap);

    function drawMap() {
        var data = google.visualization.arrayToDataTable([
            ['City', 'Popularity'],
            ['New York', 200],
            ['Boston', 300],
            ['Miami', 400],
            ['Chicago', 500],
            ['Los Angeles', 600],
            ['Houston', 700]
        ]);

        var options = {};
        options['region'] = 'US';
        options['colors'] = [0xFF8747, 0xFFB581, 0xc06000]; //orange colors
        options['dataMode'] = 'markers';

        var container = document.getElementById('map_canvas');
        var geomap = new google.visualization.GeoMap(container);
        geomap.draw(data, options);
    }

});