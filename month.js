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

    $scope.gainesville = function (selected_year) {

        $http.get("https://data.cityofgainesville.org/resource/cgd2-6k8s.json?$select=date_extract_m(created)%20as%20month,count(month)&$group=month&$where=date_extract_y(created)="+selected_year+"&$order=month").then(function (response) {

            $scope.gainvalue = response.data;
            $scope.gainjan = $scope.gainvalue[0].count_month;
            $scope.gainfeb = $scope.gainvalue[1].count_month;
            $scope.gainmar = $scope.gainvalue[2].count_month;
            $scope.gainapr = $scope.gainvalue[3].count_month;
            $scope.gainmay = $scope.gainvalue[4].count_month;
            $scope.gainjun = $scope.gainvalue[5].count_month;
            $scope.gainjul = $scope.gainvalue[6].count_month;
            $scope.gainaug = $scope.gainvalue[7].count_month;
            $scope.gainsep = $scope.gainvalue[8].count_month;
            $scope.gainoct = $scope.gainvalue[9].count_month;
            $scope.gainnov = $scope.gainvalue[10].count_month;
            $scope.gaindec = $scope.gainvalue[11].count_month;
            drawChart($scope.gainjan,$scope.gainfeb,$scope.gainmar,$scope.gainapr,$scope.gainmay,$scope.gainjun,$scope.gainjul,$scope.gainaug,$scope.gainsep,$scope.gainoct,$scope.gainnov,$scope.gaindec,'gainchart1')
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
    
   $scope.sffunction = function (selected_year) {

        $http.get("https://data.sfgov.org/resource/ktji-gk7t.json?$select=date_extract_m(requested_datetime)%20as%20month,count(month)&$group=month&$where=date_extract_y(requested_datetime)="+selected_year+"&$order=month").then(function (response) {

            $scope.sfvalue = response.data;
            $scope.sfjan = $scope.gainvalue[0].count_month;
            $scope.sffeb = $scope.gainvalue[1].count_month;
            $scope.sfmar = $scope.gainvalue[2].count_month;
            $scope.sfapr = $scope.gainvalue[3].count_month;
            $scope.sfmay = $scope.gainvalue[4].count_month;
            $scope.sfjun = $scope.gainvalue[5].count_month;
            $scope.sfjul = $scope.gainvalue[6].count_month;
            $scope.sfaug = $scope.gainvalue[7].count_month;
            $scope.sfsep = $scope.gainvalue[8].count_month;
            $scope.sfoct = $scope.gainvalue[9].count_month;
            $scope.sfnov = $scope.gainvalue[10].count_month;
            $scope.sfdec = $scope.gainvalue[11].count_month;
            drawChart($scope.sfjan,$scope.sffeb,$scope.sfmar,$scope.sfapr,$scope.sfmay,$scope.sfjun,$scope.sfjul,$scope.sfaug,$scope.sfsep,$scope.sfoct,$scope.sfnov,$scope.sfdec,'sfchart1')
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



    // Boston monthly api

    $scope.Bsfunction = function (selected_year) {

        $http.get("https://data.boston.gov/api/3/action/datastore_search_sql?sql=SELECT%20Extract(MONTH%20FROM%20open_dt)%20as%20month,count(open_dt)from%20%222968e2c0-d479-49ba-a884-4ef523ada3c0%22%20where%20EXTRACT(YEAR%20FROM%20OPEN_DT)%20=%20"+selected_year+"%20group%20by%20month%20order%20by%20month").then(function (value) {

            $scope.Bsvalue = value.data.result.records;
            $scope.Bs0 = $scope.Bsvalue[0].count;
            $scope.Bs1 = $scope.Bsvalue[1].count;
            $scope.Bs2 = $scope.Bsvalue[2].count;
            $scope.Bs3 = $scope.Bsvalue[3].count;
            $scope.Bs4 = $scope.Bsvalue[4].count;
            $scope.Bs5 = $scope.Bsvalue[5].count;
            $scope.Bs6 = $scope.Bsvalue[6].count;
            $scope.Bs7 = $scope.Bsvalue[7].count;
            $scope.Bs8 = $scope.Bsvalue[8].count;
            $scope.Bs9 = $scope.Bsvalue[9].count;
            $scope.Bs10 = $scope.Bsvalue[10].count;
            $scope.Bs11 = $scope.Bsvalue[11].count;
            drawChart($scope.Bs0,$scope.Bs1,$scope.Bs2,$scope.Bs3,$scope.Bs4,$scope.Bs5,$scope.Bs6,$scope.Bs7,$scope.Bs8,$scope.Bs9,$scope.Bs10,$scope.Bs11,'Bschart1');
        })
    };

    //Cincinnati monthly api

    $scope.Cifunction = function (selected_year) {

        $http.get("https://data.cincinnati-oh.gov/resource/5zzw-knr5.json?$select=date_extract_m(requested_date)%20as%20month,count(month)&$group=month&$where=date_extract_y(requested_date)="+selected_year+"&$order=month").then(function (value) {
          $scope.Civalue = value.data;
          $scope.Ci0 = $scope.Civalue[0].count_month;
            $scope.Ci1 = $scope.Civalue[1].count_month;
            $scope.Ci2 = $scope.Civalue[2].count_month;
            $scope.Ci3 = $scope.Civalue[3].count_month;
            $scope.Ci4 = $scope.Civalue[4].count_month;
            $scope.Ci5 = $scope.Civalue[5].count_month;
            $scope.Ci6 = $scope.Civalue[6].count_month;
            $scope.Ci7 = $scope.Civalue[7].count_month;
            $scope.Ci8 = $scope.Civalue[8].count_month;
            $scope.Ci9 = $scope.Civalue[9].count_month;
            $scope.Ci10 = $scope.Civalue[10].count_month;
            $scope.Ci11 = $scope.Civalue[11].count_month;

            drawChart($scope.Ci0,$scope.Ci1,$scope.Ci2,$scope.Ci3,$scope.Ci4,$scope.Ci5,$scope.Ci6,$scope.Ci7,$scope.Ci8,$scope.Ci9,$scope.Ci10,$scope.Ci11,'Cichart1')
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
