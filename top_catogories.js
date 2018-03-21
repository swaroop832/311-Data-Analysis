var app = angular.module("app", []);

app.controller("MinCtrl",function ($scope,$http) {
    <!--Kansas city-->
    $scope.kcfunction = function (selected_year) {

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$limit=15&creation_year=" + selected_year + "&$select=category,count(case_id)&$group=category&$order=count(case_id) DESC").then(function (response) {

            $scope.kcvalue = response.data;
            $scope.kc_category_1 = ($scope.kcvalue[0].category);
            $scope.kc_category_2 = ($scope.kcvalue[1].category);
            $scope.kc_category_3 = ($scope.kcvalue[2].category);
            $scope.kc_category_4 = ($scope.kcvalue[3].category);
            $scope.kc_category_5 = ($scope.kcvalue[4].category);
            $scope.kc_category_6 = ($scope.kcvalue[5].category);
            $scope.kc_category_7 = ($scope.kcvalue[6].category);
            $scope.kc_category_8 = ($scope.kcvalue[7].category);
            $scope.kc_category_9 = ($scope.kcvalue[8].category);
            $scope.kc_category_10 = ($scope.kcvalue[9].category);
            $scope.kc_category_11 = ($scope.kcvalue[10].category);
            $scope.kc_category_12 = ($scope.kcvalue[11].category);
            $scope.kc_category_13 = ($scope.kcvalue[12].category);
            $scope.kc_category_14 = ($scope.kcvalue[13].category);
            $scope.kc_category_15 = ($scope.kcvalue[14].category);
            $scope.kc_count_1 = parseInt($scope.kcvalue[0].count_case_id);
            $scope.kc_count_2 = parseInt($scope.kcvalue[1].count_case_id);
            $scope.kc_count_3 = parseInt($scope.kcvalue[2].count_case_id);
            $scope.kc_count_4 = parseInt($scope.kcvalue[3].count_case_id);
            $scope.kc_count_5 = parseInt($scope.kcvalue[4].count_case_id);
            $scope.kc_count_6 = parseInt($scope.kcvalue[5].count_case_id);
            $scope.kc_count_7 = parseInt($scope.kcvalue[6].count_case_id);
            $scope.kc_count_8 = parseInt($scope.kcvalue[7].count_case_id);
            $scope.kc_count_9 = parseInt($scope.kcvalue[8].count_case_id);
            $scope.kc_count_10 = parseInt($scope.kcvalue[9].count_case_id);
            $scope.kc_count_11 = parseInt($scope.kcvalue[10].count_case_id);
            $scope.kc_count_12 = parseInt($scope.kcvalue[11].count_case_id);
            $scope.kc_count_13 = parseInt($scope.kcvalue[12].count_case_id);
            $scope.kc_count_14 = parseInt($scope.kcvalue[13].count_case_id);
            $scope.kc_count_15 = parseInt($scope.kcvalue[14].count_case_id);

            drawChartx($scope.kc_category_1, $scope.kc_category_2, $scope.kc_category_3, $scope.kc_category_4, $scope.kc_category_5, $scope.kc_category_6, $scope.kc_category_7, $scope.kc_category_8, $scope.kc_category_9, $scope.kc_category_10, $scope.kc_category_11, $scope.kc_category_12, $scope.kc_category_13, $scope.kc_category_14, $scope.kc_category_15,
                $scope.kc_count_1, $scope.kc_count_2, $scope.kc_count_3, $scope.kc_count_4, $scope.kc_count_5, $scope.kc_count_6, $scope.kc_count_7, $scope.kc_count_8, $scope.kc_count_9, $scope.kc_count_10, $scope.kc_count_11, $scope.kc_count_12, $scope.kc_count_13, $scope.kc_count_14, $scope.kc_count_15, 'kcchart1');

        });
    };

    <!--New York City, NY-->
        $scope.nyfunction = function (selected_year) {
            $http.get("https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$limit=15&$where=date_extract_y(created_date)= " + selected_year + "&$select=complaint_type,count(unique_key)&$group=complaint_type&$order=count(unique_key)%20DESC").then(function (response) {
                $scope.nyvalue = response.data;
                $scope.ny_category_1 = ($scope.nyvalue[0].complaint_type);
                $scope.ny_category_2 = ($scope.nyvalue[1].complaint_type);
                $scope.ny_category_3 = ($scope.nyvalue[2].complaint_type);
                $scope.ny_category_4 = ($scope.nyvalue[3].complaint_type);
                $scope.ny_category_5 = ($scope.nyvalue[4].complaint_type);
                $scope.ny_category_6 = ($scope.nyvalue[5].complaint_type);
                $scope.ny_category_7 = ($scope.nyvalue[6].complaint_type);
                $scope.ny_category_8 = ($scope.nyvalue[7].complaint_type);
                $scope.ny_category_9 = ($scope.nyvalue[8].complaint_type);
                $scope.ny_category_10 = ($scope.nyvalue[9].complaint_type);
                $scope.ny_category_11 = ($scope.nyvalue[10].complaint_type);
                $scope.ny_category_12 = ($scope.nyvalue[11].complaint_type);
                $scope.ny_category_13 = ($scope.nyvalue[12].complaint_type);
                $scope.ny_category_14 = ($scope.nyvalue[13].complaint_type);
                $scope.ny_category_15 = ($scope.nyvalue[14].complaint_type);
                $scope.ny_count_1 = parseInt($scope.nyvalue[0].count_unique_key);
                $scope.ny_count_2 = parseInt($scope.nyvalue[1].count_unique_key);
                $scope.ny_count_3 = parseInt($scope.nyvalue[2].count_unique_key);
                $scope.ny_count_4 = parseInt($scope.nyvalue[3].count_unique_key);
                $scope.ny_count_5 = parseInt($scope.nyvalue[4].count_unique_key);
                $scope.ny_count_6 = parseInt($scope.nyvalue[5].count_unique_key);
                $scope.ny_count_7 = parseInt($scope.nyvalue[6].count_unique_key);
                $scope.ny_count_8 = parseInt($scope.nyvalue[7].count_unique_key);
                $scope.ny_count_9 = parseInt($scope.nyvalue[8].count_unique_key);
                $scope.ny_count_10 = parseInt($scope.nyvalue[9].count_unique_key);
                $scope.ny_count_11 = parseInt($scope.nyvalue[10].count_unique_key);
                $scope.ny_count_12 = parseInt($scope.nyvalue[11].count_unique_key);
                $scope.ny_count_13 = parseInt($scope.nyvalue[12].count_unique_key);
                $scope.ny_count_14 = parseInt($scope.nyvalue[13].count_unique_key);
                $scope.ny_count_15 = parseInt($scope.nyvalue[14].count_unique_key);

                drawChartx($scope.ny_category_1, $scope.ny_category_2, $scope.ny_category_3, $scope.ny_category_4, $scope.ny_category_5, $scope.ny_category_6, $scope.ny_category_7, $scope.ny_category_8, $scope.ny_category_9, $scope.ny_category_10, $scope.ny_category_11, $scope.ny_category_12, $scope.ny_category_13, $scope.ny_category_14, $scope.ny_category_15,
                    $scope.ny_count_1, $scope.ny_count_2, $scope.ny_count_3, $scope.ny_count_4, $scope.ny_count_5, $scope.ny_count_6, $scope.ny_count_7, $scope.ny_count_8, $scope.ny_count_9, $scope.ny_count_10, $scope.ny_count_11, $scope.ny_count_12, $scope.ny_count_13, $scope.ny_count_14, $scope.ny_count_15, 'nychart1');

            });
        };

    <!--Austin, TX-->
            $scope.aufunction = function (selected_year) {
                $http.get("https://data.austintexas.gov/resource/5h38-fd8d.json?$limit=15&$where=date_extract_y(sr_created_date)= " + selected_year + "&$select=sr_type_desc,count(sr_number)&$group=sr_type_desc&$order=count(sr_number) DESC").then(function (response) {
                    $scope.auvalue = response.data;
                    $scope.au_category_1 = ($scope.auvalue[0].sr_type_desc);
                    $scope.au_category_2 = ($scope.auvalue[1].sr_type_desc);
                    $scope.au_category_3 = ($scope.auvalue[2].sr_type_desc);
                    $scope.au_category_4 = ($scope.auvalue[3].sr_type_desc);
                    $scope.au_category_5 = ($scope.auvalue[4].sr_type_desc);
                    $scope.au_category_6 = ($scope.auvalue[5].sr_type_desc);
                    $scope.au_category_7 = ($scope.auvalue[6].sr_type_desc);
                    $scope.au_category_8 = ($scope.auvalue[7].sr_type_desc);
                    $scope.au_category_9 = ($scope.auvalue[8].sr_type_desc);
                    $scope.au_category_10 = ($scope.auvalue[9].sr_type_desc);
                    $scope.au_category_11 = ($scope.auvalue[10].sr_type_desc);
                    $scope.au_category_12 = ($scope.auvalue[11].sr_type_desc);
                    $scope.au_category_13 = ($scope.auvalue[12].sr_type_desc);
                    $scope.au_category_14 = ($scope.auvalue[13].sr_type_desc);
                    $scope.au_category_15 = ($scope.auvalue[14].sr_type_desc);
                    $scope.au_count_1 = parseInt($scope.auvalue[0].count_sr_number);
                    $scope.au_count_2 = parseInt($scope.auvalue[1].count_sr_number);
                    $scope.au_count_3 = parseInt($scope.auvalue[2].count_sr_number);
                    $scope.au_count_4 = parseInt($scope.auvalue[3].count_sr_number);
                    $scope.au_count_5 = parseInt($scope.auvalue[4].count_sr_number);
                    $scope.au_count_6 = parseInt($scope.auvalue[5].count_sr_number);
                    $scope.au_count_7 = parseInt($scope.auvalue[6].count_sr_number);
                    $scope.au_count_8 = parseInt($scope.auvalue[7].count_sr_number);
                    $scope.au_count_9 = parseInt($scope.auvalue[8].count_sr_number);
                    $scope.au_count_10 = parseInt($scope.auvalue[9].count_sr_number);
                    $scope.au_count_11 = parseInt($scope.auvalue[10].count_sr_number);
                    $scope.au_count_12 = parseInt($scope.auvalue[11].count_sr_number);
                    $scope.au_count_13 = parseInt($scope.auvalue[12].count_sr_number);
                    $scope.au_count_14 = parseInt($scope.auvalue[13].count_sr_number);
                    $scope.au_count_15 = parseInt($scope.auvalue[14].count_sr_number);

                    drawChartx($scope.au_category_1, $scope.au_category_2, $scope.au_category_3, $scope.au_category_4, $scope.au_category_5, $scope.au_category_6, $scope.au_category_7, $scope.au_category_8, $scope.au_category_9, $scope.au_category_10, $scope.au_category_11, $scope.au_category_12, $scope.au_category_13, $scope.au_category_14, $scope.au_category_15,
                        $scope.au_count_1, $scope.au_count_2, $scope.au_count_3, $scope.au_count_4, $scope.au_count_5, $scope.au_count_6, $scope.au_count_7, $scope.au_count_8, $scope.au_count_9, $scope.au_count_10, $scope.au_count_11, $scope.au_count_12, $scope.au_count_13, $scope.au_count_14, $scope.au_count_15, 'auchart1');

                });
            };

    <!--Baton Rouge, LA-->
    $scope.bafunction = function (selected_year) {
        $http.get("https://data.brla.gov/resource/uqxt-dtpe.json?$limit=15&$where=date_extract_y(createdate)="+ selected_year +"&$select=division,count(id)&$group=division&$order=count(id)%20DESC").then(function (response) {
            $scope.bavalue = response.data;
            $scope.ba_category_1 = ($scope.bavalue[0].division);
            $scope.ba_category_2 = ($scope.bavalue[1].division);
            $scope.ba_category_3 = ($scope.bavalue[2].division);
            $scope.ba_category_4 = ($scope.bavalue[3].division);
            $scope.ba_category_5 = ($scope.bavalue[4].division);
            $scope.ba_category_6 = ($scope.bavalue[5].division);
            $scope.ba_category_7 = ($scope.bavalue[6].division);
            $scope.ba_category_8 = ($scope.bavalue[7].division);
            $scope.ba_category_9 = ($scope.bavalue[8].division);
            $scope.ba_category_10 = ($scope.bavalue[9].division);
            $scope.ba_category_11 = ($scope.bavalue[10].division);

            $scope.ba_count_1 = parseInt($scope.bavalue[0].count_id);
            $scope.ba_count_2 = parseInt($scope.bavalue[1].count_id);
            $scope.ba_count_3 = parseInt($scope.bavalue[2].count_id);
            $scope.ba_count_4 = parseInt($scope.bavalue[3].count_id);
            $scope.ba_count_5 = parseInt($scope.bavalue[4].count_id);
            $scope.ba_count_6 = parseInt($scope.bavalue[5].count_id);
            $scope.ba_count_7 = parseInt($scope.bavalue[6].count_id);
            $scope.ba_count_8 = parseInt($scope.bavalue[7].count_id);
            $scope.ba_count_9 = parseInt($scope.bavalue[8].count_id);
            $scope.ba_count_10 = parseInt($scope.bavalue[9].count_id);
            $scope.ba_count_11 = parseInt($scope.bavalue[10].count_id);


            drawChartx($scope.ba_category_1, $scope.ba_category_2, $scope.ba_category_3, $scope.ba_category_4, $scope.ba_category_5, $scope.ba_category_6, $scope.ba_category_7, $scope.ba_category_8, $scope.ba_category_9, $scope.ba_category_10, $scope.ba_category_11,0,0,0,0,
                $scope.ba_count_1, $scope.ba_count_2, $scope.ba_count_3, $scope.ba_count_4, $scope.ba_count_5, $scope.ba_count_6, $scope.ba_count_7, $scope.ba_count_8, $scope.ba_count_9, $scope.ba_count_10, $scope.ba_count_11,0,0,0,0, 'bachart1');

        });
    };

    <!--Chattanooga, TN-->
    $scope.ctfunction = function (selected_year) {
        $http.get("https://data.chattlibrary.org/resource/sf89-4qcw.json?$limit=15&$where=date_extract_y(created_date)="+selected_year+"&$select=description,count(service_request_key)&$group=description&$order=count(service_request_key)%20DESC").then(function (response) {
            $scope.ctvalue = response.data;
            $scope.ct_category_1 = ($scope.ctvalue[0].description);
            $scope.ct_category_2 = ($scope.ctvalue[1].description);
            $scope.ct_category_3 = ($scope.ctvalue[2].description);
            $scope.ct_category_4 = ($scope.ctvalue[3].description);
            $scope.ct_category_5 = ($scope.ctvalue[4].description);
            $scope.ct_category_6 = ($scope.ctvalue[5].description);
            $scope.ct_category_7 = ($scope.ctvalue[6].description);
            $scope.ct_category_8 = ($scope.ctvalue[7].description);
            $scope.ct_category_9 = ($scope.ctvalue[8].description);
            $scope.ct_category_10 = ($scope.ctvalue[9].description);
            $scope.ct_category_11 = ($scope.ctvalue[10].description);
            $scope.ct_category_12 = ($scope.ctvalue[11].description);
            $scope.ct_category_13 = ($scope.ctvalue[12].description);
            $scope.ct_category_14 = ($scope.ctvalue[13].description);
            $scope.ct_category_15 = ($scope.ctvalue[14].description);
            $scope.ct_count_1 = parseInt($scope.ctvalue[0].count_service_request_key);
            $scope.ct_count_2 = parseInt($scope.ctvalue[1].count_service_request_key);
            $scope.ct_count_3 = parseInt($scope.ctvalue[2].count_service_request_key);
            $scope.ct_count_4 = parseInt($scope.ctvalue[3].count_service_request_key);
            $scope.ct_count_5 = parseInt($scope.ctvalue[4].count_service_request_key);
            $scope.ct_count_6 = parseInt($scope.ctvalue[5].count_service_request_key);
            $scope.ct_count_7 = parseInt($scope.ctvalue[6].count_service_request_key);
            $scope.ct_count_8 = parseInt($scope.ctvalue[7].count_service_request_key);
            $scope.ct_count_9 = parseInt($scope.ctvalue[8].count_service_request_key);
            $scope.ct_count_10 = parseInt($scope.ctvalue[9].count_service_request_key);
            $scope.ct_count_11 = parseInt($scope.ctvalue[10].count_service_request_key);
            $scope.ct_count_12 = parseInt($scope.ctvalue[11].count_service_request_key);
            $scope.ct_count_13 = parseInt($scope.ctvalue[12].count_service_request_key);
            $scope.ct_count_14 = parseInt($scope.ctvalue[13].count_service_request_key);
            $scope.ct_count_15 = parseInt($scope.ctvalue[14].count_service_request_key);

            drawChartx($scope.ct_category_1, $scope.ct_category_2, $scope.ct_category_3, $scope.ct_category_4, $scope.ct_category_5, $scope.ct_category_6, $scope.ct_category_7, $scope.ct_category_8, $scope.ct_category_9, $scope.ct_category_10, $scope.ct_category_11, $scope.ct_category_12, $scope.ct_category_13, $scope.ct_category_14, $scope.ct_category_15,
                $scope.ct_count_1, $scope.ct_count_2, $scope.ct_count_3, $scope.ct_count_4, $scope.ct_count_5, $scope.ct_count_6, $scope.ct_count_7, $scope.ct_count_8, $scope.ct_count_9, $scope.ct_count_10, $scope.ct_count_11, $scope.ct_count_12, $scope.ct_count_13, $scope.ct_count_14, $scope.ct_count_15, 'ctchart1');

        });
    };

    <!--Gainesville, FL-->
    $scope.gafunction = function (selected_year) {
        $http.get("https://data.cityofgainesville.org/resource/cgd2-6k8s.json?$limit=15&$where=date_extract_y(created)="+selected_year+"&$select=category,count(id)&$group=category&$order=count(id)%20DESC").then(function (response) {
            $scope.gavalue = response.data;
            $scope.ga_category_1 = ($scope.gavalue[0].category);
            $scope.ga_category_2 = ($scope.gavalue[1].category);
            $scope.ga_category_3 = ($scope.gavalue[2].category);
            $scope.ga_category_4 = ($scope.gavalue[3].category);
            $scope.ga_category_5 = ($scope.gavalue[4].category);
            $scope.ga_category_6 = ($scope.gavalue[5].category);
            $scope.ga_category_7 = ($scope.gavalue[6].category);
            $scope.ga_category_8 = ($scope.gavalue[7].category);
            $scope.ga_category_9 = ($scope.gavalue[8].category);
            $scope.ga_category_10 = ($scope.gavalue[9].category);
            $scope.ga_category_11 = ($scope.gavalue[10].category);
            $scope.ga_category_12 = ($scope.gavalue[11].category);
            $scope.ga_category_13 = ($scope.gavalue[12].category);
            $scope.ga_category_14 = ($scope.gavalue[13].category);
            $scope.ga_category_15 = ($scope.gavalue[14].category);
            $scope.ga_count_1 = parseInt($scope.gavalue[0].count_id);
            $scope.ga_count_2 = parseInt($scope.gavalue[1].count_id);
            $scope.ga_count_3 = parseInt($scope.gavalue[2].count_id);
            $scope.ga_count_4 = parseInt($scope.gavalue[3].count_id);
            $scope.ga_count_5 = parseInt($scope.gavalue[4].count_id);
            $scope.ga_count_6 = parseInt($scope.gavalue[5].count_id);
            $scope.ga_count_7 = parseInt($scope.gavalue[6].count_id);
            $scope.ga_count_8 = parseInt($scope.gavalue[7].count_id);
            $scope.ga_count_9 = parseInt($scope.gavalue[8].count_id);
            $scope.ga_count_10 = parseInt($scope.gavalue[9].count_id);
            $scope.ga_count_11 = parseInt($scope.gavalue[10].count_id);
            $scope.ga_count_12 = parseInt($scope.gavalue[11].count_id);
            $scope.ga_count_13 = parseInt($scope.gavalue[12].count_id);
            $scope.ga_count_14 = parseInt($scope.gavalue[13].count_id);
            $scope.ga_count_15 = parseInt($scope.gavalue[14].count_id);

            drawChartx($scope.ga_category_1, $scope.ga_category_2, $scope.ga_category_3, $scope.ga_category_4, $scope.ga_category_5, $scope.ga_category_6, $scope.ga_category_7, $scope.ga_category_8, $scope.ga_category_9, $scope.ga_category_10, $scope.ga_category_11, $scope.ga_category_12, $scope.ga_category_13, $scope.ga_category_14, $scope.ga_category_15,
                $scope.ga_count_1, $scope.ga_count_2, $scope.ga_count_3, $scope.ga_count_4, $scope.ga_count_5, $scope.ga_count_6, $scope.ga_count_7, $scope.ga_count_8, $scope.ga_count_9, $scope.ga_count_10, $scope.ga_count_11, $scope.ga_count_12, $scope.ga_count_13, $scope.ga_count_14, $scope.ga_count_15, 'gachart1');

        });
    };

    <!--New Orleans, LA-->
    $scope.nrfunction = function (selected_year) {
        $http.get("https://data.nola.gov/resource/m959-fs8u.json?$limit=15&$where=date_extract_y(ticket_created_date_time)="+selected_year +"&$select=issue_type,count(ticket_id)&$group=issue_type&$order=count(ticket_id)%20DESC").then(function (response) {
            $scope.nrvalue = response.data;
            $scope.nr_category_1 = ($scope.nrvalue[0].issue_type);
            $scope.nr_category_2 = ($scope.nrvalue[1].issue_type);
            $scope.nr_category_3 = ($scope.nrvalue[2].issue_type);
            $scope.nr_category_4 = ($scope.nrvalue[3].issue_type);
            $scope.nr_category_5 = ($scope.nrvalue[4].issue_type);
            $scope.nr_category_6 = ($scope.nrvalue[5].issue_type);
            $scope.nr_category_7 = ($scope.nrvalue[6].issue_type);
            $scope.nr_category_8 = ($scope.nrvalue[7].issue_type);
            $scope.nr_category_9 = ($scope.nrvalue[8].issue_type);
            $scope.nr_category_10 = ($scope.nrvalue[9].issue_type);
            $scope.nr_category_11 = ($scope.nrvalue[10].issue_type);
            $scope.nr_category_12 = ($scope.nrvalue[11].issue_type);
            $scope.nr_category_13 = ($scope.nrvalue[12].issue_type);
            $scope.nr_category_14 = ($scope.nrvalue[13].issue_type);
            $scope.nr_category_15 = ($scope.nrvalue[14].issue_type);
            $scope.nr_count_1 = parseInt($scope.nrvalue[0].count_ticket_id);
            $scope.nr_count_2 = parseInt($scope.nrvalue[1].count_ticket_id);
            $scope.nr_count_3 = parseInt($scope.nrvalue[2].count_ticket_id);
            $scope.nr_count_4 = parseInt($scope.nrvalue[3].count_ticket_id);
            $scope.nr_count_5 = parseInt($scope.nrvalue[4].count_ticket_id);
            $scope.nr_count_6 = parseInt($scope.nrvalue[5].count_ticket_id);
            $scope.nr_count_7 = parseInt($scope.nrvalue[6].count_ticket_id);
            $scope.nr_count_8 = parseInt($scope.nrvalue[7].count_ticket_id);
            $scope.nr_count_9 = parseInt($scope.nrvalue[8].count_ticket_id);
            $scope.nr_count_10 = parseInt($scope.nrvalue[9].count_ticket_id);
            $scope.nr_count_11 = parseInt($scope.nrvalue[10].count_ticket_id);
            $scope.nr_count_12 = parseInt($scope.nrvalue[11].count_ticket_id);
            $scope.nr_count_13 = parseInt($scope.nrvalue[12].count_ticket_id);
            $scope.nr_count_14 = parseInt($scope.nrvalue[13].count_ticket_id);
            $scope.nr_count_15 = parseInt($scope.nrvalue[14].count_ticket_id);

            drawChartx($scope.nr_category_1, $scope.nr_category_2, $scope.nr_category_3, $scope.nr_category_4, $scope.nr_category_5, $scope.nr_category_6, $scope.nr_category_7, $scope.nr_category_8, $scope.nr_category_9, $scope.nr_category_10, $scope.nr_category_11, $scope.nr_category_12, $scope.nr_category_13, $scope.nr_category_14, $scope.nr_category_15,
                $scope.nr_count_1, $scope.nr_count_2, $scope.nr_count_3, $scope.nr_count_4, $scope.nr_count_5, $scope.nr_count_6, $scope.nr_count_7, $scope.nr_count_8, $scope.nr_count_9, $scope.nr_count_10, $scope.nr_count_11, $scope.nr_count_12, $scope.nr_count_13, $scope.nr_count_14, $scope.nr_count_15, 'nrchart1');

        });
    };

    <!--San Francisco, CA-->
    $scope.sffunction = function (selected_year) {
        $http.get("https://data.sfgov.org/resource/ktji-gk7t.json?$limit=15&$where=date_extract_y(requested_datetime)="+selected_year+"&$select=service_name,count(service_request_id)&$group=service_name&$order=count(service_request_id)%20DESC").then(function (response) {
            $scope.sfvalue = response.data;
            $scope.sf_category_1 = ($scope.sfvalue[0].service_name);
            $scope.sf_category_2 = ($scope.sfvalue[1].service_name);
            $scope.sf_category_3 = ($scope.sfvalue[2].service_name);
            $scope.sf_category_4 = ($scope.sfvalue[3].service_name);
            $scope.sf_category_5 = ($scope.sfvalue[4].service_name);
            $scope.sf_category_6 = ($scope.sfvalue[5].service_name);
            $scope.sf_category_7 = ($scope.sfvalue[6].service_name);
            $scope.sf_category_8 = ($scope.sfvalue[7].service_name);
            $scope.sf_category_9 = ($scope.sfvalue[8].service_name);
            $scope.sf_category_10 = ($scope.sfvalue[9].service_name);
            $scope.sf_category_11 = ($scope.sfvalue[10].service_name);
            $scope.sf_category_12 = ($scope.sfvalue[11].service_name);
            $scope.sf_category_13 = ($scope.sfvalue[12].service_name);
            $scope.sf_category_14 = ($scope.sfvalue[13].service_name);
            $scope.sf_category_15 = ($scope.sfvalue[14].service_name);
            $scope.sf_count_1 = parseInt($scope.sfvalue[0].count_service_request_id);
            $scope.sf_count_2 = parseInt($scope.sfvalue[1].count_service_request_id);
            $scope.sf_count_3 = parseInt($scope.sfvalue[2].count_service_request_id);
            $scope.sf_count_4 = parseInt($scope.sfvalue[3].count_service_request_id);
            $scope.sf_count_5 = parseInt($scope.sfvalue[4].count_service_request_id);
            $scope.sf_count_6 = parseInt($scope.sfvalue[5].count_service_request_id);
            $scope.sf_count_7 = parseInt($scope.sfvalue[6].count_service_request_id);
            $scope.sf_count_8 = parseInt($scope.sfvalue[7].count_service_request_id);
            $scope.sf_count_9 = parseInt($scope.sfvalue[8].count_service_request_id);
            $scope.sf_count_10 = parseInt($scope.sfvalue[9].count_service_request_id);
            $scope.sf_count_11 = parseInt($scope.sfvalue[10].count_service_request_id);
            $scope.sf_count_12 = parseInt($scope.sfvalue[11].count_service_request_id);
            $scope.sf_count_13 = parseInt($scope.sfvalue[12].count_service_request_id);
            $scope.sf_count_14 = parseInt($scope.sfvalue[13].count_service_request_id);
            $scope.sf_count_15 = parseInt($scope.sfvalue[14].count_service_request_id);

            drawChartx($scope.sf_category_1, $scope.sf_category_2, $scope.sf_category_3, $scope.sf_category_4, $scope.sf_category_5, $scope.sf_category_6, $scope.sf_category_7, $scope.sf_category_8, $scope.sf_category_9, $scope.sf_category_10, $scope.sf_category_11, $scope.sf_category_12, $scope.sf_category_13, $scope.sf_category_14, $scope.sf_category_15,
                $scope.sf_count_1, $scope.sf_count_2, $scope.sf_count_3, $scope.sf_count_4, $scope.sf_count_5, $scope.sf_count_6, $scope.sf_count_7, $scope.sf_count_8, $scope.sf_count_9, $scope.sf_count_10, $scope.sf_count_11, $scope.sf_count_12, $scope.sf_count_13, $scope.sf_count_14, $scope.sf_count_15, 'sfchart1');

        });
    };

    <!--Cincinnati, OH-->
    $scope.cincifunction = function (selected_year) {
        $http.get("https://data.cincinnati-oh.gov/resource/5zzw-knr5.json?$limit=15&$where=date_extract_y(requested_date)="+selected_year+"&$select=service_name,count(service_request_id)&$group=service_name&$order=count(service_request_id)%20DESC").then(function (response) {
            $scope.cincivalue = response.data;
            $scope.cinci_category_1 = ($scope.cincivalue[0].service_name);
            $scope.cinci_category_2 = ($scope.cincivalue[1].service_name);
            $scope.cinci_category_3 = ($scope.cincivalue[2].service_name);
            $scope.cinci_category_4 = ($scope.cincivalue[3].service_name);
            $scope.cinci_category_5 = ($scope.cincivalue[4].service_name);
            $scope.cinci_category_6 = ($scope.cincivalue[5].service_name);
            $scope.cinci_category_7 = ($scope.cincivalue[6].service_name);
            $scope.cinci_category_8 = ($scope.cincivalue[7].service_name);
            $scope.cinci_category_9 = ($scope.cincivalue[8].service_name);
            $scope.cinci_category_10 = ($scope.cincivalue[9].service_name);
            $scope.cinci_category_11 = ($scope.cincivalue[10].service_name);
            $scope.cinci_category_12 = ($scope.cincivalue[11].service_name);
            $scope.cinci_category_13 = ($scope.cincivalue[12].service_name);
            $scope.cinci_category_14 = ($scope.cincivalue[13].service_name);
            $scope.cinci_category_15 = ($scope.cincivalue[14].service_name);
            $scope.cinci_count_1 = parseInt($scope.cincivalue[0].count_service_request_id);
            $scope.cinci_count_2 = parseInt($scope.cincivalue[1].count_service_request_id);
            $scope.cinci_count_3 = parseInt($scope.cincivalue[2].count_service_request_id);
            $scope.cinci_count_4 = parseInt($scope.cincivalue[3].count_service_request_id);
            $scope.cinci_count_5 = parseInt($scope.cincivalue[4].count_service_request_id);
            $scope.cinci_count_6 = parseInt($scope.cincivalue[5].count_service_request_id);
            $scope.cinci_count_7 = parseInt($scope.cincivalue[6].count_service_request_id);
            $scope.cinci_count_8 = parseInt($scope.cincivalue[7].count_service_request_id);
            $scope.cinci_count_9 = parseInt($scope.cincivalue[8].count_service_request_id);
            $scope.cinci_count_10 = parseInt($scope.cincivalue[9].count_service_request_id);
            $scope.cinci_count_11 = parseInt($scope.cincivalue[10].count_service_request_id);
            $scope.cinci_count_12 = parseInt($scope.cincivalue[11].count_service_request_id);
            $scope.cinci_count_13 = parseInt($scope.cincivalue[12].count_service_request_id);
            $scope.cinci_count_14 = parseInt($scope.cincivalue[13].count_service_request_id);
            $scope.cinci_count_15 = parseInt($scope.cincivalue[14].count_service_request_id);

            drawChartx($scope.cinci_category_1, $scope.cinci_category_2, $scope.cinci_category_3, $scope.cinci_category_4, $scope.cinci_category_5, $scope.cinci_category_6, $scope.cinci_category_7, $scope.cinci_category_8, $scope.cinci_category_9, $scope.cinci_category_10, $scope.cinci_category_11, $scope.cinci_category_12, $scope.cinci_category_13, $scope.cinci_category_14, $scope.cinci_category_15,
                $scope.cinci_count_1, $scope.cinci_count_2, $scope.cinci_count_3, $scope.cinci_count_4, $scope.cinci_count_5, $scope.cinci_count_6, $scope.cinci_count_7, $scope.cinci_count_8, $scope.cinci_count_9, $scope.cinci_count_10, $scope.cinci_count_11, $scope.cinci_count_12, $scope.cinci_count_13, $scope.cinci_count_14, $scope.cinci_count_15, 'cincichart1');

        });
    };

    <!--Oakland, CA-->
    $scope.oakfunction = function (selected_year) {
        $http.get("https://data.oaklandnet.com/resource/x4j5-hbm8.json?$limit=15&$where=date_extract_y(datetimeinit)="+selected_year+"&$select=reqcategory,count(requestid)&$group=reqcategory&$order=count(requestid)%20DESC").then(function (response) {
            $scope.oakvalue = response.data;
            $scope.oak_category_1 = ($scope.oakvalue[0].reqcategory);
            $scope.oak_category_2 = ($scope.oakvalue[1].reqcategory);
            $scope.oak_category_3 = ($scope.oakvalue[2].reqcategory);
            $scope.oak_category_4 = ($scope.oakvalue[3].reqcategory);
            $scope.oak_category_5 = ($scope.oakvalue[4].reqcategory);
            $scope.oak_category_6 = ($scope.oakvalue[5].reqcategory);
            $scope.oak_category_7 = ($scope.oakvalue[6].reqcategory);
            $scope.oak_category_8 = ($scope.oakvalue[7].reqcategory);
            $scope.oak_category_9 = ($scope.oakvalue[8].reqcategory);
            $scope.oak_category_10 = ($scope.oakvalue[9].reqcategory);
            $scope.oak_category_11 = ($scope.oakvalue[10].reqcategory);
            $scope.oak_category_12 = ($scope.oakvalue[11].reqcategory);
            $scope.oak_category_13 = ($scope.oakvalue[12].reqcategory);
            $scope.oak_category_14 = ($scope.oakvalue[13].reqcategory);
            $scope.oak_category_15 = ($scope.oakvalue[14].reqcategory);
            $scope.oak_count_1 = parseInt($scope.oakvalue[0].count_requestid);
            $scope.oak_count_2 = parseInt($scope.oakvalue[1].count_requestid);
            $scope.oak_count_3 = parseInt($scope.oakvalue[2].count_requestid);
            $scope.oak_count_4 = parseInt($scope.oakvalue[3].count_requestid);
            $scope.oak_count_5 = parseInt($scope.oakvalue[4].count_requestid);
            $scope.oak_count_6 = parseInt($scope.oakvalue[5].count_requestid);
            $scope.oak_count_7 = parseInt($scope.oakvalue[6].count_requestid);
            $scope.oak_count_8 = parseInt($scope.oakvalue[7].count_requestid);
            $scope.oak_count_9 = parseInt($scope.oakvalue[8].count_requestid);
            $scope.oak_count_10 = parseInt($scope.oakvalue[9].count_requestid);
            $scope.oak_count_11 = parseInt($scope.oakvalue[10].count_requestid);
            $scope.oak_count_12 = parseInt($scope.oakvalue[11].count_requestid);
            $scope.oak_count_13 = parseInt($scope.oakvalue[12].count_requestid);
            $scope.oak_count_14 = parseInt($scope.oakvalue[13].count_requestid);
            $scope.oak_count_15 = parseInt($scope.oakvalue[14].count_requestid);

            drawChartx($scope.oak_category_1, $scope.oak_category_2, $scope.oak_category_3, $scope.oak_category_4, $scope.oak_category_5, $scope.oak_category_6, $scope.oak_category_7, $scope.oak_category_8, $scope.oak_category_9, $scope.oak_category_10, $scope.oak_category_11, $scope.oak_category_12, $scope.oak_category_13, $scope.oak_category_14, $scope.oak_category_15,
                $scope.oak_count_1, $scope.oak_count_2, $scope.oak_count_3, $scope.oak_count_4, $scope.oak_count_5, $scope.oak_count_6, $scope.oak_count_7, $scope.oak_count_8, $scope.oak_count_9, $scope.oak_count_10, $scope.oak_count_11, $scope.oak_count_12, $scope.oak_count_13, $scope.oak_count_14, $scope.oak_count_15, 'oakchart1');

        });
    };

    <!--Chicago, IL-->
    $scope.oakfunction = function (selected_year) {
        $http.get("https://data.oaklandnet.com/resource/x4j5-hbm8.json?$limit=15&$where=date_extract_y(datetimeinit)="+selected_year+"&$select=reqcategory,count(requestid)&$group=reqcategory&$order=count(requestid)%20DESC").then(function (response) {
            $scope.oakvalue = response.data;
            $scope.oak_category_1 = ($scope.oakvalue[0].reqcategory);
            $scope.oak_category_2 = ($scope.oakvalue[1].reqcategory);
            $scope.oak_category_3 = ($scope.oakvalue[2].reqcategory);
            $scope.oak_category_4 = ($scope.oakvalue[3].reqcategory);
            $scope.oak_category_5 = ($scope.oakvalue[4].reqcategory);
            $scope.oak_category_6 = ($scope.oakvalue[5].reqcategory);
            $scope.oak_category_7 = ($scope.oakvalue[6].reqcategory);
            $scope.oak_category_8 = ($scope.oakvalue[7].reqcategory);
            $scope.oak_category_9 = ($scope.oakvalue[8].reqcategory);
            $scope.oak_category_10 = ($scope.oakvalue[9].reqcategory);
            $scope.oak_category_11 = ($scope.oakvalue[10].reqcategory);
            $scope.oak_category_12 = ($scope.oakvalue[11].reqcategory);
            $scope.oak_category_13 = ($scope.oakvalue[12].reqcategory);
            $scope.oak_category_14 = ($scope.oakvalue[13].reqcategory);
            $scope.oak_category_15 = ($scope.oakvalue[14].reqcategory);
            $scope.oak_count_1 = parseInt($scope.oakvalue[0].count_requestid);
            $scope.oak_count_2 = parseInt($scope.oakvalue[1].count_requestid);
            $scope.oak_count_3 = parseInt($scope.oakvalue[2].count_requestid);
            $scope.oak_count_4 = parseInt($scope.oakvalue[3].count_requestid);
            $scope.oak_count_5 = parseInt($scope.oakvalue[4].count_requestid);
            $scope.oak_count_6 = parseInt($scope.oakvalue[5].count_requestid);
            $scope.oak_count_7 = parseInt($scope.oakvalue[6].count_requestid);
            $scope.oak_count_8 = parseInt($scope.oakvalue[7].count_requestid);
            $scope.oak_count_9 = parseInt($scope.oakvalue[8].count_requestid);
            $scope.oak_count_10 = parseInt($scope.oakvalue[9].count_requestid);
            $scope.oak_count_11 = parseInt($scope.oakvalue[10].count_requestid);
            $scope.oak_count_12 = parseInt($scope.oakvalue[11].count_requestid);
            $scope.oak_count_13 = parseInt($scope.oakvalue[12].count_requestid);
            $scope.oak_count_14 = parseInt($scope.oakvalue[13].count_requestid);
            $scope.oak_count_15 = parseInt($scope.oakvalue[14].count_requestid);

            drawChartx($scope.oak_category_1, $scope.oak_category_2, $scope.oak_category_3, $scope.oak_category_4, $scope.oak_category_5, $scope.oak_category_6, $scope.oak_category_7, $scope.oak_category_8, $scope.oak_category_9, $scope.oak_category_10, $scope.oak_category_11, $scope.oak_category_12, $scope.oak_category_13, $scope.oak_category_14, $scope.oak_category_15,
                $scope.oak_count_1, $scope.oak_count_2, $scope.oak_count_3, $scope.oak_count_4, $scope.oak_count_5, $scope.oak_count_6, $scope.oak_count_7, $scope.oak_count_8, $scope.oak_count_9, $scope.oak_count_10, $scope.oak_count_11, $scope.oak_count_12, $scope.oak_count_13, $scope.oak_count_14, $scope.oak_count_15, 'oakchart1');

        });
    };

    google.charts.load('current', {'packages': ['corechart']});
              google.charts.setOnLoadCallback(drawChartx);

              function drawChartx(var0, var1, var2, var3, var4, var5, var6, var7, var8,
                                    var9, var10, var11, var12, var13, var14, var15, var16, var17,
                                    var18, var19, var20, var21, var22, var23, var24, var25, var26,
                                    var27, var28, var29, var30) {
                  //console.log(var0);
                  var data = google.visualization.arrayToDataTable([
                      ['category', 'No. call request for given year'],
                      [var0, parseInt(var15)],
                      [var1, parseInt(var16)],
                      [var2, parseInt(var17)],
                      [var3, parseInt(var18)],
                      [var4, parseInt(var19)],
                      [var5, parseInt(var20)],
                      [var6, parseInt(var21)],
                      [var7, parseInt(var22)],
                      [var8, parseInt(var23)],
                      [var9, parseInt(var24)],
                      [var10, parseInt(var25)],
                      [var11, parseInt(var26)],
                      [var12, parseInt(var27)],
                      [var13, parseInt(var28)],
                      [var14, parseInt(var29)]
                  ]);
                  var options = {
                      title: 'Category',
                      legend: {position: 'right'},
                      width: 900,
                      height: 600,
                      backgroundColor: 'transparent',
                      is3D: true
                  };
                  // console.log(document.getElementById(var30));
                  var chart = new google.visualization.PieChart(document.getElementById(var30));
                  chart.draw(data, options);

              }

});