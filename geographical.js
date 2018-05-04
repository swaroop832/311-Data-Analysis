/*var app = angular.module("app", []);

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
                                    $http.get("https://data.sfgov.org/resource/ktji-gk7t.json?$select=date_extract_y(requested_datetime)%20as%20year,count(service_request_id)&$group=year&$where=year="+selected_year+"&$order=year").then(function (value8) {
                                        $scope.sfvalue = value8.data[0].count_service_request_id;
                                        $http.get("https://data.cincinnati-oh.gov/resource/5zzw-knr5.json?$select=date_extract_y(requested_date)%20as%20year,count(service_request_id)&$group=year&$where=year="+selected_year+"&$order=year").then(function (value9) {
                                          $scope.ccvalue = value9.data[0].count_service_request_id;
                                          $http.get("https://data.oaklandnet.com/resource/x4j5-hbm8.json?$select=date_extract_y(datetimeinit)%20as%20year,count(requestid)&$group=year&$where=year="+selected_year+"&$order=year").then(function (value10) {
                                              $scope.oakvalue = value10.data[0].count_requestid;
                                              $http.get("https://data.cityofchicago.org/resource/6zsd-86xi.json?$select=date_extract_y(date)%20as%20year,count(case_number)&$where=year="+selected_year+"&$group=year&$order=year").then(function (value11) {
                                                  $scope.chivalue = value11.data[0].count_case_number;
                                                  drawMarkersMap();
                                                  $scope.hvalue =[$scope.kcvalue,$scope.nyvalue,$scope.auvalue,$scope.bavalue,$scope.chtvalue,$scope.gsvalue,$scope.nrvalue,$scope.sfvalue,$scope.ccvalue,$scope.oakvalue,$scope.chivalue];
                                              })})});});});})});})})})});
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
            ['New Orleans',parseInt($scope.nrvalue)],
            ['San Francisco',parseInt($scope.sfvalue)],
            ['Cincinnati',parseInt($scope.ccvalue)],
            ['Oakland',parseInt($scope.oakvalue)],
            ['Chicago',parseInt($scope.chivalue)]
        ]);
        var options = {
            region: 'US',
            displayMode: 'markers',
            colorAxis: {colors: ['#00853f','blue','yellow','orange', 'black', '#e31b23']},
            backgroundColor: '#81d4fa',
            datalessRegionColor: 'azure',
            defaultColor: '#f5f5f5'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
    $scope.City = ["Kansas City","New York","Austin","Baton Rogue","Chattanooga","Gainesville","New Orleans","San Francisco","Cincinnati","Oakland","Chicago"]
    console.log($scope.hvalue);
});


*/