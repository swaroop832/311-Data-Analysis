var app = angular.module("app", []);

app.controller("MinCtrl",function ($scope,$http) {
          $scope.kcfunction1 = function (selected_year) {

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
                  $scope.kc_category_9 =($scope.kcvalue[8].category);
                  $scope.kc_category_10 = ($scope.kcvalue[9].category);
                  $scope.kc_category_11 = ($scope.kcvalue[10].category);
                  $scope.kc_category_12 = ($scope.kcvalue[11].category);
                  $scope.kc_category_13 = ($scope.kcvalue[12].category);
                  $scope.kc_category_14 = ($scope.kcvalue[13].category);
                  $scope.kc_category_15 =($scope.kcvalue[14].category);
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

                  drawChartkc2($scope.kc_category_1,$scope.kc_category_2,$scope.kc_category_3,$scope.kc_category_4,$scope.kc_category_5,$scope.kc_category_6,$scope.kc_category_7,$scope.kc_category_8,$scope.kc_category_9,$scope.kc_category_10,$scope.kc_category_11,$scope.kc_category_12,$scope.kc_category_13,$scope.kc_category_14,$scope.kc_category_15,
                      $scope.kc_count_1,$scope.kc_count_2,$scope.kc_count_3,$scope.kc_count_4,$scope.kc_count_5,$scope.kc_count_6,$scope.kc_count_7,$scope.kc_count_8,$scope.kc_count_9,$scope.kc_count_10,$scope.kc_count_11,$scope.kc_count_12,$scope.kc_count_13,$scope.kc_count_14,$scope.kc_count_15,'kcchart1');

              });
      };

    google.charts.load('current', {'packages': ['corechart'],'callback': drawChartkc2});
    google.charts.setOnLoadCallback(drawChartkc2);
    function drawChartkc2(var0, var1 , var2, var3, var4, var5, var6, var7, var8,
                          var9, var10,var11,var12,var13,var14,var15,var16,var17,
                          var18,var19,var20,var21,var22,var23,var24,var25,var26,
                          var27,var28,var29,var30) {
        console.log(var0);
        var data = google.visualization.arrayToDataTable([
            ['category', 'No. call request for given year'],
            [var0, ($scope.var15)],
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
        chart.draw(data,options);

        }
});