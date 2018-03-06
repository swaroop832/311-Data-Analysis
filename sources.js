var app = angular.module("app", []);

app.controller("MinCtrl",function ($scope,$http) {

    $scope.kcfunction = function () {

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$query=SELECT%20source,count(case_id),creation_year%20as%20year%20group%20by%20source,creation_year").then(function (value) {

            $scope.kcvalue = value.data;
            //email
            $scope.kc_email_2010 = parseInt($scope.kcvalue[38].count_case_id);
            $scope.kc_email_2011 = parseInt($scope.kcvalue[39].count_case_id);
            $scope.kc_email_2012 = parseInt($scope.kcvalue[40].count_case_id);
            $scope.kc_email_2013 = parseInt($scope.kcvalue[41].count_case_id);
            $scope.kc_email_2014 = parseInt($scope.kcvalue[42].count_case_id);
            $scope.kc_email_2015 = parseInt($scope.kcvalue[43].count_case_id);
            $scope.kc_email_2016 = parseInt($scope.kcvalue[44].count_case_id);
            $scope.kc_email_2017 = parseInt($scope.kcvalue[45].count_case_id);
            $scope.kc_email_2018 = parseInt($scope.kcvalue[46].count_case_id);
            //fax
            $scope.kc_fax_2010 = parseInt($scope.kcvalue[50].count_case_id);
            $scope.kc_fax_2011 = parseInt($scope.kcvalue[51].count_case_id);
            $scope.kc_fax_2012 = parseInt($scope.kcvalue[52].count_case_id);
            $scope.kc_fax_2013 = parseInt($scope.kcvalue[53].count_case_id);
            $scope.kc_fax_2014 = parseInt($scope.kcvalue[54].count_case_id);
            $scope.kc_fax_2015 = parseInt($scope.kcvalue[55].count_case_id);
            $scope.kc_fax_2016 = parseInt($scope.kcvalue[56].count_case_id);
            $scope.kc_fax_2017 = parseInt($scope.kcvalue[57].count_case_id);
            $scope.kc_fax_2018 = parseInt($scope.kcvalue[58].count_case_id);
            //mail
            $scope.kc_mail_2010 = parseInt($scope.kcvalue[79].count_case_id);
            $scope.kc_mail_2011 = parseInt($scope.kcvalue[80].count_case_id);
            $scope.kc_mail_2012 = parseInt($scope.kcvalue[81].count_case_id);
            $scope.kc_mail_2013 = parseInt($scope.kcvalue[82].count_case_id);
            $scope.kc_mail_2014 = parseInt($scope.kcvalue[83].count_case_id);
            $scope.kc_mail_2015 = parseInt($scope.kcvalue[84].count_case_id);
            $scope.kc_mail_2016 = parseInt($scope.kcvalue[85].count_case_id);
            $scope.kc_mail_2017 = parseInt($scope.kcvalue[86].count_case_id);
            $scope.kc_mail_2018 = parseInt($scope.kcvalue[87].count_case_id);
            //phone
            $scope.kc_phone_2010 = parseInt($scope.kcvalue[92].count_case_id);
            $scope.kc_phone_2011 = parseInt($scope.kcvalue[93].count_case_id);
            $scope.kc_phone_2012 = parseInt($scope.kcvalue[94].count_case_id);
            $scope.kc_phone_2013 = parseInt($scope.kcvalue[95].count_case_id);
            $scope.kc_phone_2014 = parseInt($scope.kcvalue[96].count_case_id);
            $scope.kc_phone_2015 = parseInt($scope.kcvalue[97].count_case_id);
            $scope.kc_phone_2016 = parseInt($scope.kcvalue[98].count_case_id);
            $scope.kc_phone_2017 = parseInt($scope.kcvalue[99].count_case_id);
            $scope.kc_phone_2018 = parseInt($scope.kcvalue[100].count_case_id);
            //walk
            $scope.kc_walk_2010 = parseInt($scope.kcvalue[133].count_case_id);
            $scope.kc_walk_2011 = parseInt($scope.kcvalue[134].count_case_id);
            $scope.kc_walk_2012 = parseInt($scope.kcvalue[135].count_case_id);
            $scope.kc_walk_2013 = parseInt($scope.kcvalue[136].count_case_id);
            $scope.kc_walk_2014 = parseInt($scope.kcvalue[137].count_case_id);
            $scope.kc_walk_2015 = parseInt($scope.kcvalue[138].count_case_id);
            $scope.kc_walk_2016 = parseInt($scope.kcvalue[139].count_case_id);
            $scope.kc_walk_2017 = parseInt($scope.kcvalue[140].count_case_id);
            $scope.kc_walk_2018 = parseInt($scope.kcvalue[141].count_case_id);
            //website
            $scope.kc_web_2010 = parseInt($scope.kcvalue[145].count_case_id);
            $scope.kc_web_2011 = parseInt($scope.kcvalue[146].count_case_id);
            $scope.kc_web_2012 = parseInt($scope.kcvalue[147].count_case_id);
            $scope.kc_web_2013 = parseInt($scope.kcvalue[148].count_case_id);
            $scope.kc_web_2014 = parseInt($scope.kcvalue[149].count_case_id);
            $scope.kc_web_2015 = parseInt($scope.kcvalue[150].count_case_id);
            $scope.kc_web_2016 = parseInt($scope.kcvalue[151].count_case_id);
            $scope.kc_web_2017 = parseInt($scope.kcvalue[152].count_case_id);
            $scope.kc_web_2018 = parseInt($scope.kcvalue[153].count_case_id);

            drawChartkc1($scope.kc_email_2010,$scope.kc_email_2011,$scope.kc_email_2012,$scope.kc_email_2013,$scope.kc_email_2014,$scope.kc_email_2015,$scope.kc_email_2016,$scope.kc_email_2017,$scope.kc_email_2018,
                 /*fax*/ $scope.kc_fax_2010,$scope.kc_fax_2011,$scope.kc_fax_2012,$scope.kc_fax_2013,$scope.kc_fax_2014,$scope.kc_fax_2015,$scope.kc_fax_2016,$scope.kc_fax_2017,$scope.kc_fax_2018,
                /*mail*/$scope.kc_mail_2010,$scope.kc_mail_2011,$scope.kc_mail_2012,$scope.kc_mail_2013,$scope.kc_mail_2014,$scope.kc_mail_2015,$scope.kc_mail_2016,$scope.kc_mail_2017,$scope.kc_mail_2018,
                /*phone*/ $scope.kc_phone_2010,$scope.kc_phone_2011,$scope.kc_phone_2012,$scope.kc_phone_2013,$scope.kc_phone_2014,$scope.kc_phone_2015,$scope.kc_phone_2016,$scope.kc_phone_2017,$scope.kc_phone_2018,
                /*walk*/$scope.kc_walk_2010,$scope.kc_walk_2011,$scope.kc_walk_2012,$scope.kc_walk_2013,$scope.kc_walk_2014,$scope.kc_walk_2015,$scope.kc_walk_2016,$scope.kc_walk_2017,$scope.kc_walk_2018,
                /*web*/$scope.kc_web_2010,$scope.kc_web_2011,$scope.kc_web_2012,$scope.kc_web_2013,$scope.kc_web_2014,$scope.kc_web_2015,$scope.kc_web_2016,$scope.kc_web_2017,$scope.kc_web_2018,'kc_chart1');


            drawChartkc2($scope.kc_email_2010,$scope.kc_email_2011,$scope.kc_email_2012,$scope.kc_email_2013,$scope.kc_email_2014,$scope.kc_email_2015,$scope.kc_email_2016,$scope.kc_email_2017,$scope.kc_email_2018,
                /*fax*/ $scope.kc_fax_2010,$scope.kc_fax_2011,$scope.kc_fax_2012,$scope.kc_fax_2013,$scope.kc_fax_2014,$scope.kc_fax_2015,$scope.kc_fax_2016,$scope.kc_fax_2017,$scope.kc_fax_2018,
                /*mail*/$scope.kc_mail_2010,$scope.kc_mail_2011,$scope.kc_mail_2012,$scope.kc_mail_2013,$scope.kc_mail_2014,$scope.kc_mail_2015,$scope.kc_mail_2016,$scope.kc_mail_2017,$scope.kc_mail_2018,
                /*phone*/ $scope.kc_phone_2010,$scope.kc_phone_2011,$scope.kc_phone_2012,$scope.kc_phone_2013,$scope.kc_phone_2014,$scope.kc_phone_2015,$scope.kc_phone_2016,$scope.kc_phone_2017,$scope.kc_phone_2018,
                /*walk*/$scope.kc_walk_2010,$scope.kc_walk_2011,$scope.kc_walk_2012,$scope.kc_walk_2013,$scope.kc_walk_2014,$scope.kc_walk_2015,$scope.kc_walk_2016,$scope.kc_walk_2017,$scope.kc_walk_2018,
                /*web*/$scope.kc_web_2010,$scope.kc_web_2011,$scope.kc_web_2012,$scope.kc_web_2013,$scope.kc_web_2014,$scope.kc_web_2015,$scope.kc_web_2016,$scope.kc_web_2017,$scope.kc_web_2018,'kc_chart2');

        });
    };
    //Kansas City api https://data.kcmo.org/resource/cyqf-nban.json?$select=creation_year,count(case_id)&$group=creation_year


    $scope.nyfunction = function () {

        //New york city api
        $http.get("https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$select=date_extract_y(created_date),count(unique_key)&$group=date_extract_y(created_date)&$order=date_extract_y(created_date)").then(function (value) {

            $scope.nycvalue = value.data;
            //email
            $scope.nyc_email_2010 = parseInt($scope.nycvalue[38].count_case_id);
            $scope.nyc_email_2011 = parseInt($scope.nycvalue[39].count_case_id);
            $scope.nyc_email_2012 = parseInt($scope.nycvalue[40].count_case_id);
            $scope.nyc_email_2013 = parseInt($scope.nycvalue[41].count_case_id);
            $scope.nyc_email_2014 = parseInt($scope.nycvalue[42].count_case_id);
            $scope.nyc_email_2015 = parseInt($scope.nycvalue[43].count_case_id);
            $scope.nyc_email_2016 = parseInt($scope.nycvalue[44].count_case_id);
            $scope.nyc_email_2017 = parseInt($scope.nycvalue[45].count_case_id);
            $scope.nyc_email_2018 = parseInt($scope.nycvalue[46].count_case_id);
            //fax
            $scope.nyc_fax_2010 = parseInt($scope.nycvalue[50].count_case_id);
            $scope.nyc_fax_2011 = parseInt($scope.nycvalue[51].count_case_id);
            $scope.nyc_fax_2012 = parseInt($scope.nycvalue[52].count_case_id);
            $scope.nyc_fax_2013 = parseInt($scope.nycvalue[53].count_case_id);
            $scope.nyc_fax_2014 = parseInt($scope.nycvalue[54].count_case_id);
            $scope.nyc_fax_2015 = parseInt($scope.nycvalue[55].count_case_id);
            $scope.nyc_fax_2016 = parseInt($scope.nycvalue[56].count_case_id);
            $scope.nyc_fax_2017 = parseInt($scope.nycvalue[57].count_case_id);
            $scope.nyc_fax_2018 = parseInt($scope.nycvalue[58].count_case_id);
            //mail
            $scope.nyc_mail_2010 = parseInt($scope.nycvalue[79].count_case_id);
            $scope.nyc_mail_2011 = parseInt($scope.nycvalue[80].count_case_id);
            $scope.nyc_mail_2012 = parseInt($scope.nycvalue[81].count_case_id);
            $scope.nyc_mail_2013 = parseInt($scope.nycvalue[82].count_case_id);
            $scope.nyc_mail_2014 = parseInt($scope.nycvalue[83].count_case_id);
            $scope.nyc_mail_2015 = parseInt($scope.nycvalue[84].count_case_id);
            $scope.nyc_mail_2016 = parseInt($scope.nycvalue[85].count_case_id);
            $scope.nyc_mail_2017 = parseInt($scope.nycvalue[86].count_case_id);
            $scope.nyc_mail_2018 = parseInt($scope.nycvalue[87].count_case_id);
            //phone
            $scope.nyc_phone_2010 = parseInt($scope.nycvalue[92].count_case_id);
            $scope.nyc_phone_2011 = parseInt($scope.nycvalue[93].count_case_id);
            $scope.nyc_phone_2012 = parseInt($scope.nycvalue[94].count_case_id);
            $scope.nyc_phone_2013 = parseInt($scope.nycvalue[95].count_case_id);
            $scope.nyc_phone_2014 = parseInt($scope.nycvalue[96].count_case_id);
            $scope.nyc_phone_2015 = parseInt($scope.nycvalue[97].count_case_id);
            $scope.nyc_phone_2016 = parseInt($scope.nycvalue[98].count_case_id);
            $scope.nyc_phone_2017 = parseInt($scope.nycvalue[99].count_case_id);
            $scope.nyc_phone_2018 = parseInt($scope.nycvalue[100].count_case_id);
            //walk
            $scope.nyc_walk_2010 = parseInt($scope.nycvalue[133].count_case_id);
            $scope.nyc_walk_2011 = parseInt($scope.nycvalue[134].count_case_id);
            $scope.nyc_walk_2012 = parseInt($scope.nycvalue[135].count_case_id);
            $scope.nyc_walk_2013 = parseInt($scope.nycvalue[136].count_case_id);
            $scope.nyc_walk_2014 = parseInt($scope.nycvalue[137].count_case_id);
            $scope.nyc_walk_2015 = parseInt($scope.nycvalue[138].count_case_id);
            $scope.nyc_walk_2016 = parseInt($scope.nycvalue[139].count_case_id);
            $scope.nyc_walk_2017 = parseInt($scope.nycvalue[140].count_case_id);
            $scope.nyc_walk_2018 = parseInt($scope.nycvalue[141].count_case_id);
            //website
            $scope.nyc_web_2010 = parseInt($scope.nycvalue[145].count_case_id);
            $scope.nyc_web_2011 = parseInt($scope.nycvalue[146].count_case_id);
            $scope.nyc_web_2012 = parseInt($scope.nycvalue[147].count_case_id);
            $scope.nyc_web_2013 = parseInt($scope.nycvalue[148].count_case_id);
            $scope.nyc_web_2014 = parseInt($scope.nycvalue[149].count_case_id);
            $scope.nyc_web_2015 = parseInt($scope.nycvalue[150].count_case_id);
            $scope.nyc_web_2016 = parseInt($scope.nycvalue[151].count_case_id);
            $scope.nyc_web_2017 = parseInt($scope.nycvalue[152].count_case_id);
            $scope.nyc_web_2018 = parseInt($scope.nycvalue[153].count_case_id);

            drawChartx($scope.nyc_email_2010,$scope.nyc_email_2011,$scope.nyc_email_2012,$scope.nyc_email_2013,$scope.nyc_email_2014,$scope.nyc_email_2015,$scope.nyc_email_2016,$scope.nyc_email_2017,$scope.nyc_email_2018,
                /*fax*/ $scope.nyc_fax_2010,$scope.nyc_fax_2011,$scope.nyc_fax_2012,$scope.nyc_fax_2013,$scope.nyc_fax_2014,$scope.nyc_fax_2015,$scope.nyc_fax_2016,$scope.nyc_fax_2017,$scope.nyc_fax_2018,
                /*mail*/$scope.nyc_mail_2010,$scope.nyc_mail_2011,$scope.nyc_mail_2012,$scope.nyc_mail_2013,$scope.nyc_mail_2014,$scope.nyc_mail_2015,$scope.nyc_mail_2016,$scope.nyc_mail_2017,$scope.nyc_mail_2018,
                /*phone*/ $scope.nyc_phone_2010,$scope.nyc_phone_2011,$scope.nyc_phone_2012,$scope.nyc_phone_2013,$scope.nyc_phone_2014,$scope.nyc_phone_2015,$scope.nyc_phone_2016,$scope.nyc_phone_2017,$scope.nyc_phone_2018,
                /*walk*/$scope.nyc_walk_2010,$scope.nyc_walk_2011,$scope.nyc_walk_2012,$scope.nyc_walk_2013,$scope.nyc_walk_2014,$scope.nyc_walk_2015,$scope.nyc_walk_2016,$scope.nyc_walk_2017,$scope.nyc_walk_2018,
                /*web*/$scope.nyc_web_2010,$scope.nyc_web_2011,$scope.nyc_web_2012,$scope.nyc_web_2013,$scope.nyc_web_2014,$scope.nyc_web_2015,$scope.nyc_web_2016,$scope.nyc_web_2017,$scope.nyc_web_2018,'nyc_chart1');

        });
    };

//Austin api
    $scope.aufunction = function () {


        $http.get("https://data.austintexas.gov/resource/5h38-fd8d.json?$query=SELECT%20sr_method_received_desc,count(sr_number),date_extract_y(sr_created_date)%20as%20year%20group%20by%20sr_method_received_desc,year").then(function (value) {

            $scope.auvalue = value.data;
            //email
            $scope.au_email_2014 = parseInt($scope.auvalue[37].count_sr_number);
            $scope.au_email_2015 = parseInt($scope.auvalue[41].count_sr_number);
            $scope.au_email_2016 = parseInt($scope.auvalue[13].count_sr_number);
            $scope.au_email_2017 = parseInt($scope.auvalue[6].count_sr_number);
            //spot 311
            $scope.au_spot_311_Interface_2014 = parseInt($scope.auvalue[38].count_sr_number);
            $scope.au_spot_311_Interface_2015 = parseInt($scope.auvalue[34].count_sr_number);
            $scope.au_spot_311_Interface_2016 = parseInt($scope.auvalue[7].count_sr_number);
            $scope.au_spot_311_Interface_2017 = parseInt($scope.auvalue[12].count_sr_number);
            //mass entry  mail
            $scope.au_mass_entry_2014 = parseInt($scope.auvalue[2].count_sr_number);
            $scope.au_mass_entry_2015 = parseInt($scope.auvalue[9].count_sr_number);
            $scope.au_mass_entry_2016 = parseInt($scope.auvalue[40].count_sr_number);
            //phone
            $scope.au_phone_2014 = parseInt($scope.auvalue[24].count_sr_number);
            $scope.au_phone_2015 = parseInt($scope.auvalue[30].count_sr_number);
            $scope.au_phone_2016 = parseInt($scope.auvalue[61].count_sr_number);
            $scope.au_phone_2017 = parseInt($scope.auvalue[45].count_sr_number);
            //field request  fax
            $scope.au_field_request_2014 = parseInt($scope.auvalue[32].count_sr_number);
            $scope.au_field_request_2015 = parseInt($scope.auvalue[23].count_sr_number);
            $scope.au_field_request_2016 = parseInt($scope.auvalue[51].count_sr_number);
            $scope.au_field_request_2017 = parseInt($scope.auvalue[55].count_sr_number);
            //website
            $scope.au_web_2014 = parseInt($scope.auvalue[53].count_sr_number);
            $scope.au_web_2015 = parseInt($scope.auvalue[48].count_sr_number);
            $scope.au_web_2016 = parseInt($scope.auvalue[18].count_sr_number);
            $scope.au_web_2017 = parseInt($scope.auvalue[28].count_sr_number);

            drawChartau1($scope.au_email_2014,$scope.au_email_2015,$scope.au_email_2016,$scope.au_email_2017,
                /*fax*/ $scope.au_spot_311_Interface_2014,$scope.au_spot_311_Interface_2015,$scope.au_spot_311_Interface_2016,$scope.au_spot_311_Interface_2017,
                /*mail*/$scope.au_mass_entry_2014,$scope.au_mass_entry_2015,$scope.au_mass_entry_2016,0,
                /*phone*/ $scope.au_phone_2014,$scope.au_phone_2015,$scope.au_phone_2016,$scope.au_phone_2017,
                /*walk*/$scope.au_field_request_2014,$scope.au_field_request_2015,$scope.au_field_request_2016,$scope.au_field_request_2017,
                /*web*/$scope.au_web_2014,$scope.au_web_2015,$scope.au_web_2016,$scope.au_web_2017,'au_chart1');


            drawChartau2($scope.au_email_2014,$scope.au_email_2015,$scope.au_email_2016,$scope.au_email_2017,
                /*fax*/ $scope.au_spot_311_Interface_2014,$scope.au_spot_311_Interface_2015,$scope.au_spot_311_Interface_2016,$scope.au_spot_311_Interface_2017,
                /*mail*/$scope.au_mass_entry_2014,$scope.au_mass_entry_2015,$scope.au_mass_entry_2016,0,
                /*phone*/ $scope.au_phone_2014,$scope.au_phone_2015,$scope.au_phone_2016,$scope.au_phone_2017,
                /*walk*/$scope.au_field_request_2014,$scope.au_field_request_2015,$scope.au_field_request_2016,$scope.au_field_request_2017,
                /*web*/$scope.au_web_2014,$scope.au_web_2015,$scope.au_web_2016,$scope.au_web_2017,'au_chart2');
        });
    };



    //Baton Rouge, LA Api

    $scope.bafunction = function () {

        $http.get("https://data.brla.gov/resource/uqxt-dtpe.json?$select=date_extract_y(createdate)%20as%20year,count(id)&$group=year&$order=year").then(function (value) {

            $scope.bavalue = value.data;
            $scope.ba2016 = $scope.bavalue[1].count_id;
            drawChartx(0,0,0,0,0,0,$scope.ba2016,'ba_chart1');
            drawCharty(0,0,0,0,0,0,$scope.ba2016/$scope.population[6].Baton_Rouge,'ba_chart2');
        })
    };

    //Boston MA Api

    $scope.bsfunction = function () {

        $http.get("https://data.boston.gov/api/3/action/datastore_search?resource_id=2968e2c0-d479-49ba-a884-4ef523ada3c0&q=2010").then(function (value) {
            $scope.bsvalue2010 = value.data.result.total;
        });
        $http.get("https://data.boston.gov/api/3/action/datastore_search?resource_id=2968e2c0-d479-49ba-a884-4ef523ada3c0&q=2011").then(function (value) {
            $scope.bsvalue2011 = value.data.result.total;
        });
        $http.get("https://data.boston.gov/api/3/action/datastore_search?resource_id=2968e2c0-d479-49ba-a884-4ef523ada3c0&q=2012").then(function (value) {
            $scope.bsvalue2012 = value.data.result.total;
        });
        $http.get("https://data.boston.gov/api/3/action/datastore_search?resource_id=2968e2c0-d479-49ba-a884-4ef523ada3c0&q=2013").then(function (value) {
            $scope.bsvalue2013 = value.data.result.total;
        });
        $http.get("https://data.boston.gov/api/3/action/datastore_search?resource_id=2968e2c0-d479-49ba-a884-4ef523ada3c0&q=2014").then(function (value) {
            $scope.bsvalue2014 = value.data.result.total;
        });
        $http.get("https://data.boston.gov/api/3/action/datastore_search?resource_id=2968e2c0-d479-49ba-a884-4ef523ada3c0&q=2015").then(function (value) {
            $scope.bsvalue2015 = value.data.result.total;
        });
        $http.get("https://data.boston.gov/api/3/action/datastore_search?resource_id=2968e2c0-d479-49ba-a884-4ef523ada3c0&q=2016").then(function (value) {
            $scope.bsvalue2016 = value.data.result.total;
            drawChartx($scope.bsvalue2010,$scope.bsvalue2011,$scope.bsvalue2012,$scope.bsvalue2013,$scope.bsvalue2014,$scope.bsvalue2015,$scope.bsvalue2016,'bs_chart1');
            drawCharty($scope.bsvalue2010/$scope.population[0].Boston,$scope.bsvalue2011/$scope.population[1].Boston,$scope.bsvalue2012/$scope.population[2].Boston,$scope.bsvalue2013/$scope.population[3].Boston,$scope.bsvalue2014/$scope.population[4].Boston,$scope.bsvalue2015/$scope.population[5].Boston,$scope.bsvalue2016/$scope.population[6].Boston,'bs_chart2');
        });
    };

    //Chattanooga, TN Api

    $scope.ctfunction = function () {

        $http.get("https://data.chattlibrary.org/resource/sf89-4qcw.json?$select=date_extract_y(created_date)%20as%20year,count(description)&$group=year&$order=year").then(function (value) {
            $scope.ctvalue = value.data;
            $scope.ct2010 = $scope.ctvalue[7].count_description;
            $scope.ct2011 = $scope.ctvalue[8].count_description;
            $scope.ct2012 = $scope.ctvalue[9].count_description;
            $scope.ct2013 = $scope.ctvalue[10].count_description;
            $scope.ct2014 = $scope.ctvalue[11].count_description;
            $scope.ct2015 = $scope.ctvalue[12].count_description;
            $scope.ct2016 = $scope.ctvalue[13].count_description;
            drawChartx($scope.ct2010,$scope.ct2011,$scope.ct2012,$scope.ct2013,$scope.ct2014,$scope.ct2015,$scope.ct2016,'ct_chart1');
            drawCharty($scope.ct2010/$scope.population[0].Chattanooga,$scope.ct2011/$scope.population[1].Chattanooga,$scope.ct2012/$scope.population[2].Chattanooga,$scope.ct2013/$scope.population[3].Chattanooga,$scope.ct2014/$scope.population[4].Chattanooga,$scope.ct2015/$scope.population[5].Chattanooga,$scope.ct2016/$scope.population[6].Chattanooga,'ct_chart2')
        })
    };
//Gainesville api


    $scope.gainesville = function () {

        $http.get("https://data.cityofgainesville.org/resource/cgd2-6k8s.json?$select=date_extract_y(created)%20as%20year,count(id)&$group=year&$order=year").then(function (value) {

            $scope.gainvalue = value.data;
            $scope.gain2014 = $scope.gainvalue[0].count_id;
            $scope.gain2015 = $scope.gainvalue[1].count_id;
            $scope.gain2016 = $scope.gainvalue[2].count_id;
            drawChartx(0,0,0,0,$scope.gain2014,$scope.gain2015,$scope.gain2016,'gain_chart1');
            drawCharty(0,0,0,0,$scope.gain2014/$scope.population[4].Gainesville,$scope.gain2015/$scope.population[5].Gainesville,$scope.gain2016/$scope.population[6].Gainesville,'gain_chart2');

        })
    };
// Johns Creek, GA

    $scope.jcfunction = function () {

        $http.get("https://services1.arcgis.com/bqfNVPUK3HOnCFmA/arcgis/rest/services/Citizen_Requests_and_Calls/FeatureServer/0/query?where=ReportedDate%20%3E%3D%20%272016-01-01T06%3A00%3A00.000Z%27%20AND%20ReportedDate%20%3C%3D%20%272016-12-31T06%3A00%3A00.000Z%27&outFields=TaskID&returnCountOnly=true&outSR=4326&f=json").then(function (value) {

            $scope.jcvalue2016 = value.data.count;


        });
        $http.get("https://services1.arcgis.com/bqfNVPUK3HOnCFmA/arcgis/rest/services/Citizen_Requests_and_Calls/FeatureServer/0/query?where=ReportedDate%20%3E%3D%20%272015-01-01T06%3A00%3A00.000Z%27%20AND%20ReportedDate%20%3C%3D%20%272015-12-31T06%3A00%3A00.000Z%27&outFields=TaskID&returnCountOnly=true&outSR=4326&f=json").then(function (value) {

            $scope.jcvalue2015 = value.data.count;
            drawChartx(0,0,0,0,0,$scope.jcvalue2015,$scope.jcvalue2016,'jc_chart1');
            drawCharty(0,0,0,0,0,$scope.jcvalue2015/$scope.population[5].JohnsCreek,$scope.jcvalue2016/$scope.population[6].JohnsCreek,'jc_chart2')

        })

    };

    //Minneapolis Api

    $scope.mifunction = function () {

        $http.get("https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/311_2011/FeatureServer/0/query?where=1%3D1&outFields=CASEID&returnCountOnly=true&outSR=4326&f=json").then(function (value) {
            $scope.mi2011 = value.data.count;

            $http.get("https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/311_Incidents_2012/FeatureServer/0/query?where=1%3D1&outFields=CASEID&returnCountOnly=true&outSR=4326&f=json").then(function (value) {
                $scope.mi2012 = value.data.count;
                $http.get("https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/311_Incidents_2013/FeatureServer/0/query?where=1%3D1&outFields=CASEID&returnCountOnly=true&outSR=4326&f=json").then(function (value) {
                    $scope.mi2013 = value.data.count;

                    $http.get("https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/311_2014/FeatureServer/0/query?where=1%3D1&outFields=CASEID&returnCountOnly=true&outSR=4326&f=json").then(function (value) {
                        $scope.mi2014 = value.data.count;

                        $http.get("https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/311_Public_2015/FeatureServer/0/query?where=1%3D1&outFields=CASEID&returnCountOnly=true&outSR=4326&f=json").then(function (value) {
                            $scope.mi2015 = value.data.count;

                            $http.get("https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Public_311_2016/FeatureServer/0/query?where=1%3D1&outFields=*&returnCountOnly=true&outSR=4326&f=json").then(function (value) {
                                $scope.mi2016 = value.data.count;
                                drawChartx(0,$scope.mi2011,$scope.mi2012,$scope.mi2013,$scope.mi2014,$scope.mi2015,$scope.mi2016,'mi_chart1');
                                drawCharty(0,$scope.mi2011/$scope.population[1].Minneapolis,$scope.mi2012/$scope.population[2].Minneapolis,$scope.mi2013/$scope.population[3].Minneapolis,$scope.mi2014/$scope.population[4].Minneapolis,$scope.mi2015/$scope.population[5].Minneapolis,$scope.mi2016/$scope.population[6].Minneapolis,'mi_chart2');
                            });});});});});});
    };


    // New Orleans Api

    $scope.nrfunction = function () {

        $http.get("https://data.nola.gov/resource/m959-fs8u.json?$select=date_extract_y(ticket_created_date_time)%20as%20year,count(ticket_id)&$group=year&$order=year").then(function (value) {

            $scope.novalue = value.data;
            $scope.novalue2012 = $scope.novalue[0].count_ticket_id;
            $scope.novalue2013 = $scope.novalue[1].count_ticket_id;
            $scope.novalue2014 = $scope.novalue[2].count_ticket_id;
            $scope.novalue2015 = $scope.novalue[3].count_ticket_id;
            $scope.novalue2016 = $scope.novalue[4].count_ticket_id;
            drawChartx(0,0,$scope.novalue2012,$scope.novalue2013,$scope.novalue2014,$scope.novalue2015,$scope.novalue2016,'nr_chart1');
            drawCharty(0,0,$scope.novalue2012/$scope.population[2].New_Orleans,$scope.novalue2013/$scope.population[3].New_Orleans,$scope.novalue2014/$scope.population[4].New_Orleans,$scope.novalue2015/$scope.population[5].New_Orleans,$scope.novalue2016/$scope.population[6].New_Orleans,'nr_chart2');
        })
    };

    //Philadelphia, PA

    $scope.phfunction = function () {

        $http.get("https://phl.carto.com/api/v2/sql?q=SELECT%20count(cartodb_id)%20FROM%20public_cases_fc%20WHERE%20requested_datetime%20%3E=%20%272016-01-01%27%20AND%20requested_datetime%20%3C%20%272016-12-31%27").then(function (value) {

            $scope.phvalue2016 = value.data.rows[0].count;
            console.log($scope.phvalue2016);
            $http.get("https://phl.carto.com/api/v2/sql?q=SELECT%20count(cartodb_id)%20FROM%20public_cases_fc%20WHERE%20requested_datetime%20%3E=%20%272015-01-01%27%20AND%20requested_datetime%20%3C%20%272015-12-31%27").then(function (value) {

                $scope.phvalue2015 = value.data.rows[0].count;
                $http.get("https://phl.carto.com/api/v2/sql?q=SELECT%20count(cartodb_id)%20FROM%20public_cases_fc%20WHERE%20requested_datetime%20%3E=%20%272014-01-01%27%20AND%20requested_datetime%20%3C%20%272014-12-31%27").then(function (value) {

                    $scope.phvalue2014 = value.data.rows[0].count;
                    console.log($scope.phvalue2014);
                    drawChartx(0,0,0,0,$scope.phvalue2014,$scope.phvalue2015,$scope.phvalue2016,'ph_chart1');
                    drawCharty(0,0,0,0,$scope.phvalue2014/$scope.population[4].Philadelphia,$scope.phvalue2015/$scope.population[5].Philadelphia,$scope.phvalue2016/$scope.population[6].Philadelphia,'ph_chart2');
                }); }); });
    };

    //Sacramento

    $scope.scfunction = function () {

        $http.get("https://services5.arcgis.com/54falWtcpty3V47Z/arcgis/rest/services/311Calls_2016/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID&returnCountOnly=true&outSR=4326&f=json").then(function (value) {
            $scope.scvalue2016 = value.data.count;
            $http.get("https://services5.arcgis.com/54falWtcpty3V47Z/arcgis/rest/services/311Calls_2015/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID&returnCountOnly=true&outSR=4326&f=json").then(function (value2) {
                $scope.scvalue2015 = value2.data.count;
                $http.get("https://services5.arcgis.com/54falWtcpty3V47Z/arcgis/rest/services/311Calls_2014/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID&returnCountOnly=true&outSR=4326&f=json").then(function (value3) {
                    $scope.scvalue2014 = value3.data.count;
                    $http.get("https://services5.arcgis.com/54falWtcpty3V47Z/arcgis/rest/services/311Calls_2013/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID&returnCountOnly=true&outSR=4326&f=json").then(function (value4) {
                        $scope.scvalue2013 = value4.data.count;
                        drawChartx(0,0,0,$scope.scvalue2013,$scope.scvalue2014,$scope.scvalue2015,$scope.scvalue2016,'sc_chart1');
                        drawCharty(0,0,0,$scope.scvalue2013/$scope.population[3].Sacramento,$scope.scvalue2014/$scope.population[4].Sacramento,$scope.scvalue2015/$scope.population[5].Sacramento,$scope.scvalue2016/$scope.population[6].Sacramento,'sc_chart2')
                    })
                })
            })
        })
    };

    //San Francisco, CA

    $scope.sffunction = function () {

        $http.get("https://data.sfgov.org/resource/ktji-gk7t.json?$select=date_extract_y(requested_datetime)%20as%20year,count(service_request_id)&$group=year&$order=year").then(function (value) {

            $scope.sfvalue = value.data;
            $scope.sfvalue2010 = value.data[2].count_service_request_id;
            $scope.sfvalue2011 = value.data[3].count_service_request_id;
            $scope.sfvalue2012 = value.data[4].count_service_request_id;
            $scope.sfvalue2013 = value.data[5].count_service_request_id;
            $scope.sfvalue2014 = value.data[6].count_service_request_id;
            $scope.sfvalue2015 = value.data[7].count_service_request_id;
            $scope.sfvalue2016 = value.data[8].count_service_request_id;
            drawChartx($scope.sfvalue2010,$scope.sfvalue2011,$scope.sfvalue2012,$scope.sfvalue2013,$scope.sfvalue2014,$scope.sfvalue2015,$scope.sfvalue2016,'sf_chart1');
            drawCharty($scope.sfvalue2010/$scope.population[0].San_Francisco,$scope.sfvalue2011/$scope.population[1].San_Francisco,$scope.sfvalue2012/$scope.population[2].San_Francisco,$scope.sfvalue2013/$scope.population[3].San_Francisco,$scope.sfvalue2014/$scope.population[4].San_Francisco,$scope.sfvalue2015/$scope.population[5].San_Francisco,$scope.sfvalue2016/$scope.population[6].San_Francisco,'sf_chart2')

        })
    };


// Los Angeles, CA

    $scope.losangeles = function () {

        $http.get("https://data.lacity.org/resource/ms7h-a45h.json?$select=date_trunc_y(createddate)%20as%20year,count(srnumber)&$group=year&$order=year").then(function (value) {

            $scope.lagraphvalue2015 = value.data[0].count_srnumber;

            $http.get("https://data.lacity.org/resource/ndkd-k878.json?$select=date_trunc_y(createddate)%20as%20year,count(srnumber)&$group=year&$order=year").then(function (value) {

                $scope.lagraphvalue2016 = value.data[0].count_srnumber;
                drawChartx(0,0,0,0,0,$scope.lagraphvalue2015,$scope.lagraphvalue2016,'la_chart1');
                drawCharty(0,0,0,0,0,$scope.lagraphvalue2015/$scope.population[5].LosAngeles,$scope.lagraphvalue2016/$scope.population[6].LosAngeles,'la_chart2');
            }); });
    };
    //Cincinnati, OH Api

    $scope.cincifunction = function () {

        $http.get("https://data.cincinnati-oh.gov/resource/5zzw-knr5.json?$select=date_trunc_y(requested_date)%20as%20year,count(service_request_id)&$group=year&$order=year").then(function (value) {
            $scope.cinvalue = value.data;
            $scope.cin2012 = $scope.cinvalue[0].count_service_request_id;
            $scope.cin2013 = $scope.cinvalue[1].count_service_request_id;
            $scope.cin2014 = $scope.cinvalue[2].count_service_request_id;
            $scope.cin2015 = $scope.cinvalue[3].count_service_request_id;
            $scope.cin2016 = $scope.cinvalue[4].count_service_request_id;
            drawChartx(0,0,$scope.cin2012,$scope.cin2013,$scope.cin2014,$scope.cin2015,$scope.cin2016,'cin_chart1');
            drawCharty(0,0,$scope.cin2012/$scope.population[2].Cincinnati,$scope.cin2013/$scope.population[3].Cincinnati,$scope.cin2014/$scope.population[4].Cincinnati,$scope.cin2015/$scope.population[5].Cincinnati,$scope.cin2016/$scope.population[6].Cincinnati,'cin_chart2')
        })
    };

    //Washington, Dc Api

    $scope.wdfunction = function () {

        $http.get("https://maps2.dcgis.dc.gov/dcgis/rest/services/DDOT/Cityworks/MapServer/1/query?where=INITIATEDDATE%20%3E%3D%20%272010-01-01T06%3A00%3A00.000Z%27%20AND%20INITIATEDDATE%20%3C%3D%20%272010-12-31T06%3A00%3A00.000Z%27&outFields=OBJECTID&returnCountOnly=true&outSR=4326&f=json").then(function (value) {
            $scope.wdvalue2010 = value.data.count;
            $http.get("https://maps2.dcgis.dc.gov/dcgis/rest/services/DDOT/Cityworks/MapServer/1/query?where=INITIATEDDATE%20%3E%3D%20%272011-01-01T06%3A00%3A00.000Z%27%20AND%20INITIATEDDATE%20%3C%3D%20%272011-12-31T06%3A00%3A00.000Z%27&outFields=OBJECTID&returnCountOnly=true&outSR=4326&f=json").then(function (value2) {
                $scope.wdvalue2011 = value2.data.count;
                $http.get("https://maps2.dcgis.dc.gov/dcgis/rest/services/DDOT/Cityworks/MapServer/1/query?where=INITIATEDDATE%20%3E%3D%20%272012-01-01T06%3A00%3A00.000Z%27%20AND%20INITIATEDDATE%20%3C%3D%20%272012-12-31T06%3A00%3A00.000Z%27&outFields=OBJECTID&returnCountOnly=true&outSR=4326&f=json").then(function (value3) {
                    $scope.wdvalue2012 = value3.data.count;
                    $http.get("https://maps2.dcgis.dc.gov/dcgis/rest/services/DDOT/Cityworks/MapServer/1/query?where=INITIATEDDATE%20%3E%3D%20%272013-01-01T06%3A00%3A00.000Z%27%20AND%20INITIATEDDATE%20%3C%3D%20%272013-12-31T06%3A00%3A00.000Z%27&outFields=OBJECTID&returnCountOnly=true&outSR=4326&f=json").then(function (value4) {
                        $scope.wdvalue2013 = value4.data.count;
                        $http.get("https://maps2.dcgis.dc.gov/dcgis/rest/services/DDOT/Cityworks/MapServer/1/query?where=INITIATEDDATE%20%3E%3D%20%272014-01-01T06%3A00%3A00.000Z%27%20AND%20INITIATEDDATE%20%3C%3D%20%272014-12-31T06%3A00%3A00.000Z%27&outFields=OBJECTID&returnCountOnly=true&outSR=4326&f=json").then(function (value5) {
                            $scope.wdvalue2014 = value5.data.count;
                            $http.get("https://maps2.dcgis.dc.gov/dcgis/rest/services/DDOT/Cityworks/MapServer/1/query?where=INITIATEDDATE%20%3E%3D%20%272015-01-01T06%3A00%3A00.000Z%27%20AND%20INITIATEDDATE%20%3C%3D%20%272015-12-31T06%3A00%3A00.000Z%27&outFields=OBJECTID&returnCountOnly=true&outSR=4326&f=json").then(function (value6) {
                                $scope.wdvalue2015 = value6.data.count;
                                $http.get("https://maps2.dcgis.dc.gov/dcgis/rest/services/DDOT/Cityworks/MapServer/1/query?where=INITIATEDDATE%20%3E%3D%20%272016-01-01T06%3A00%3A00.000Z%27%20AND%20INITIATEDDATE%20%3C%3D%20%272016-12-31T06%3A00%3A00.000Z%27&outFields=OBJECTID&returnCountOnly=true&outSR=4326&f=json").then(function (value7) {
                                    $scope.wdvalue2016 = value7.data.count;
                                    drawChartx($scope.wdvalue2010, $scope.wdvalue2011, $scope.wdvalue2012, $scope.wdvalue2013, $scope.wdvalue2014, $scope.wdvalue2015, $scope.wdvalue2016, 'wd_chart1');
                                    drawCharty($scope.wdvalue2010 / $scope.population[0].Washington, $scope.wdvalue2011 / $scope.population[1].Washington, $scope.wdvalue2012 / $scope.population[2].Washington, $scope.wdvalue2013 / $scope.population[3].Washington, $scope.wdvalue2014 / $scope.population[4].Washington, $scope.wdvalue2015 / $scope.population[5].Washington, $scope.wdvalue2016 / $scope.population[6].Washington, 'wd_chart2')
                                })
                            })
                        })
                    })
                })
            })
        })
    };

    //Oakland, CA Api

    $scope.oakfunction = function () {

        $http.get("https://data.oaklandnet.com/resource/x4j5-hbm8.json?$select=date_extract_y(datetimeinit)%20as%20year,count(requestid)&$group=year&$order=year").then(function (value) {
            $scope.oakvalue = value.data;
            $scope.oak2010 = $scope.oakvalue[0].count_requestid;
            $scope.oak2011 = $scope.oakvalue[1].count_requestid;
            $scope.oak2012 = $scope.oakvalue[2].count_requestid;
            $scope.oak2013 = $scope.oakvalue[3].count_requestid;
            $scope.oak2014 = $scope.oakvalue[4].count_requestid;
            $scope.oak2015 = $scope.oakvalue[5].count_requestid;
            $scope.oak2016 = $scope.oakvalue[6].count_requestid;
            drawChartx($scope.oak2010,$scope.oak2011,$scope.oak2012,$scope.oak2013,$scope.oak2014,$scope.oak2015,$scope.oak2016,'oak_chart1');
            drawCharty($scope.oak2010/$scope.population[0].Oakland,$scope.oak2011/$scope.population[1].Oakland,$scope.oak2012/$scope.population[2].Oakland,$scope.oak2013/$scope.population[3].Oakland,$scope.oak2014/$scope.population[4].Oakland,$scope.oak2015/$scope.population[5].Oakland,$scope.oak2016/$scope.population[6].Oakland,'oak_chart2')
        })
    };

    // Santa Monica, CA Api

    $scope.santafunction = function () {

        $http.get("https://data.smgov.net/resource/tsas-mvez.json?$select=date_trunc_y(request_date)%20as%20year,count(id)&$group=year&$order=year").then(function (value) {
            $scope.santavalue = value.data;
            $scope.santa2010 = $scope.santavalue[5].count_request_id;
            $scope.santa2011 = $scope.santavalue[6].count_request_id;
            $scope.santa2012 = $scope.santavalue[7].count_request_id;
            $scope.santa2013 = $scope.santavalue[8].count_request_id;
            $scope.santa2014 = $scope.santavalue[9].count_request_id;
            $scope.santa2015 = $scope.santavalue[10].count_request_id;
            $scope.santa2016 = $scope.santavalue[11].count_request_id;
            drawChartx($scope.santa2010,$scope.santa2011,$scope.santa2012,$scope.santa2013,$scope.santa2014,$scope.santa2015,$scope.santa2016,'santa_chart1');
            drawCharty($scope.santa2010/$scope.population[0].SantaMonica,$scope.santa2011/$scope.population[1].SantaMonica,$scope.santa2012/$scope.population[2].SantaMonica,$scope.santa2013/$scope.population[3].SantaMonica,$scope.santa2014/$scope.population[4].SantaMonica,$scope.santa2015/$scope.population[5].SantaMonica,$scope.santa2016/$scope.population[6].SantaMonica,'santa_chart2')
        })
    };


    //chicago Api

    $scope.chfunction = function () {

        $http.get("https://data.cityofchicago.org/resource/6zsd-86xi.json?$select=date_extract_y(date)%20as%20year,count(case_number)&$group=year&$order=year").then(function (value) {
            $scope.chvalue = value.data;
            console.log($scope.chvalue);
            $scope.chvalue2010 = $scope.chvalue[9].count_case_number;
            $scope.chvalue2011 = $scope.chvalue[10].count_case_number;
            $scope.chvalue2012 = $scope.chvalue[11].count_case_number;
            $scope.chvalue2013 = $scope.chvalue[12].count_case_number;
            $scope.chvalue2014 = $scope.chvalue[13].count_case_number;
            $scope.chvalue2015 = $scope.chvalue[14].count_case_number;
            $scope.chvalue2016 = $scope.chvalue[15].count_case_number;
            drawChartx($scope.chvalue2010,$scope.chvalue2011,$scope.chvalue2012,$scope.chvalue2013,$scope.chvalue2014,$scope.chvalue2015,$scope.chvalue2016,'ch_chart1');
            drawCharty($scope.chvalue2010/$scope.population[0].chicago,$scope.chvalue2011/$scope.population[1].chicago,$scope.chvalue2012/$scope.population[2].chicago,$scope.chvalue2013/$scope.population[3].chicago,$scope.chvalue2014/$scope.population[4].chicago,$scope.chvalue2015/$scope.population[5].chicago,$scope.chvalue2016/$scope.population[6].chicago,'ch_chart2')
        })

    };

    //houston Api

    $scope.hsfunction = function () {

        $http.get("http://mycity.houstontx.gov/cohgis/rest/services/IT/BARC311_OpenData_wm/MapServer/0/query?where=SR_CREATE_DATE%20%3E%3D%20%272011-01-01T06%3A00%3A00.000Z%27%20AND%20SR_CREATE_DATE%20%3C%3D%20%272011-12-31T06%3A00%3A00.000Z%27&outFields=case_number&returnCountOnly=true&f=json").then(function (value) {
            $scope.hsvalue2011 = value.data.count;
            console.log($scope.hsvalue2011);
            $http.get("http://mycity.houstontx.gov/cohgis/rest/services/IT/BARC311_OpenData_wm/MapServer/0/query?where=SR_CREATE_DATE%20%3E%3D%20%272012-01-01T06%3A00%3A00.000Z%27%20AND%20SR_CREATE_DATE%20%3C%3D%20%272012-12-31T06%3A00%3A00.000Z%27&outFields=case_number&returnCountOnly=true&f=json").then(function (value2) {
                $scope.hsvalue2012 = value2.data.count;
                $http.get("http://mycity.houstontx.gov/cohgis/rest/services/IT/BARC311_OpenData_wm/MapServer/0/query?where=SR_CREATE_DATE%20%3E%3D%20%272013-01-01T06%3A00%3A00.000Z%27%20AND%20SR_CREATE_DATE%20%3C%3D%20%272013-12-31T06%3A00%3A00.000Z%27&outFields=case_number&returnCountOnly=true&f=json").then(function (value3) {
                    $scope.hsvalue2013 = value3.data.count;
                    $http.get("http://mycity.houstontx.gov/cohgis/rest/services/IT/BARC311_OpenData_wm/MapServer/0/query?where=SR_CREATE_DATE%20%3E%3D%20%272014-01-01T06%3A00%3A00.000Z%27%20AND%20SR_CREATE_DATE%20%3C%3D%20%272014-12-31T06%3A00%3A00.000Z%27&outFields=case_number&returnCountOnly=true&f=json").then(function (value4) {
                        $scope.hsvalue2014 = value4.data.count;
                        $http.get("http://mycity.houstontx.gov/cohgis/rest/services/IT/BARC311_OpenData_wm/MapServer/0/query?where=SR_CREATE_DATE%20%3E%3D%20%272015-01-01T06%3A00%3A00.000Z%27%20AND%20SR_CREATE_DATE%20%3C%3D%20%272015-12-31T06%3A00%3A00.000Z%27&outFields=case_number&returnCountOnly=true&f=json").then(function (value5) {
                            $scope.hsvalue2015 = value5.data.count;
                            $http.get("http://mycity.houstontx.gov/cohgis/rest/services/IT/BARC311_OpenData_wm/MapServer/0/query?where=SR_CREATE_DATE%20%3E%3D%20%272016-01-01T06%3A00%3A00.000Z%27%20AND%20SR_CREATE_DATE%20%3C%3D%20%272016-12-31T06%3A00%3A00.000Z%27&outFields=case_number&returnCountOnly=true&f=json").then(function (value6) {
                                $scope.hsvalue2016 = value6.data.count;
                                drawChartx(0,$scope.hsvalue2011,$scope.hsvalue2012,$scope.hsvalue2013,$scope.hsvalue2014,$scope.hsvalue2015,$scope.hsvalue2016,'hs_chart1');

                            })})})})})});
    };

    //Denver, manually from cvs file

    $scope.dvfunction = function () {

        $scope.dvvalue = [
            {"creation_year" : 2010, "number_of_requests" :305439},
            {"creation_year" : 2011, "number_of_requests" :460247},
            {"creation_year" : 2012, "number_of_requests" :447663},
            {"creation_year" : 2013, "number_of_requests" :459944},
            {"creation_year" : 2014, "number_of_requests" :457645},
            {"creation_year" : 2015, "number_of_requests" :471694},
            {"creation_year" : 2016, "number_of_requests" :479626}
        ]

        drawChartx($scope.dvvalue[0].number_of_requests, $scope.dvvalue[1].number_of_requests, $scope.dvvalue[2].number_of_requests, $scope.dvvalue[3].number_of_requests, $scope.dvvalue[4].number_of_requests, $scope.dvvalue[5].number_of_requests, $scope.dvvalue[6].number_of_requests, 'dv_chart1');
        drawCharty($scope.dvvalue[0].number_of_requests/$scope.population[0].Denver, $scope.dvvalue[1].number_of_requests/$scope.population[1].Denver, $scope.dvvalue[2].number_of_requests/$scope.population[2].Denver, $scope.dvvalue[3].number_of_requests/$scope.population[3].Denver, $scope.dvvalue[4].number_of_requests/$scope.population[4].Denver, $scope.dvvalue[5].number_of_requests/$scope.population[5].Denver, $scope.dvvalue[6].number_of_requests/$scope.population[6].Denver, 'dv_chart2');


    };


    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChartkc1);
    function drawChartkc1(var0, var1 , var2, var3, var4, var5, var6, var7, var8, //email
                        var9, var10,var11,var12,var13,var14,var15,var16,var17,//fax
                        var18,var19,var20,var21,var22,var23,var24,var25,var26,//mail
                        var27,var28,var29,var30,var31,var32,var33,var34,var35,//phone
                        var36,var37,var38,var39,var40,var41,var42,var43,var44,//walk
                        var45,var46,var47,var48,var49,var50,var51,var52,var53,var54) {//web
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Email','Fax','mail','phone','walk','web'],
            ['2010', parseInt(var0),parseInt(var9),parseInt(var18),parseInt(var27),parseInt(var36),parseInt(var45)],
            ['2011', parseInt(var1),parseInt(var10),parseInt(var19),parseInt(var28),parseInt(var37),parseInt(var46)],
            ['2012', parseInt(var2),parseInt(var11),parseInt(var20),parseInt(var29),parseInt(var38),parseInt(var47)],
            ['2013', parseInt(var3),parseInt(var12),parseInt(var21),parseInt(var30),parseInt(var39),parseInt(var48)],
            ['2014', parseInt(var4),parseInt(var13),parseInt(var22),parseInt(var31),parseInt(var40),parseInt(var49)],
            ['2015', parseInt(var5),parseInt(var14),parseInt(var23),parseInt(var32),parseInt(var41),parseInt(var50)],
            ['2016', parseInt(var6),parseInt(var15),parseInt(var24),parseInt(var33),parseInt(var42),parseInt(var51)],
            ['2017', parseInt(var7),parseInt(var16),parseInt(var25),parseInt(var34),parseInt(var43),parseInt(var52)],
            ['2018', parseInt(var8),parseInt(var17),parseInt(var26),parseInt(var35),parseInt(var44),parseInt(var53)]
        ]);
        var options = {
            title: 'Sources ',
            legend: {position: 'right'},
            width:1100
            ,height:600,
            pointSize: 7,
            series: {
                0: { pointShape: 'circle' },
                1: { pointShape: 'triangle' },
                4: { pointShape: 'star' },
                5: { pointShape: 'polygon' },
                2: { pointShape: 'square' },
                3: { pointShape: 'diamond' }

            },
           vAxis: {scaleType: 'log'},


            colors : ['#e7711b', '#C35817','#808000','#990012','#357EC7','#A9A9A9']
        };
        var chart = new google.visualization.LineChart(document.getElementById(var54));
        chart.draw(data, options);
    }

    function drawChartkc2(var0, var1 , var2, var3, var4, var5, var6, var7, var8, //email
                        var9, var10,var11,var12,var13,var14,var15,var16,var17,//fax
                        var18,var19,var20,var21,var22,var23,var24,var25,var26,//mail
                        var27,var28,var29,var30,var31,var32,var33,var34,var35,//phone
                        var36,var37,var38,var39,var40,var41,var42,var43,var44,//walk
                        var45,var46,var47,var48,var49,var50,var51,var52,var53,var54) {//web
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Email','Fax','mail','phone','walk','web'],
            ['2010', parseInt(var0),parseInt(var9),parseInt(var18),parseInt(var27),parseInt(var36),parseInt(var45)],
            ['2011', parseInt(var1),parseInt(var10),parseInt(var19),parseInt(var28),parseInt(var37),parseInt(var46)],
            ['2012', parseInt(var2),parseInt(var11),parseInt(var20),parseInt(var29),parseInt(var38),parseInt(var47)],
            ['2013', parseInt(var3),parseInt(var12),parseInt(var21),parseInt(var30),parseInt(var39),parseInt(var48)],
            ['2014', parseInt(var4),parseInt(var13),parseInt(var22),parseInt(var31),parseInt(var40),parseInt(var49)],
            ['2015', parseInt(var5),parseInt(var14),parseInt(var23),parseInt(var32),parseInt(var41),parseInt(var50)],
            ['2016', parseInt(var6),parseInt(var15),parseInt(var24),parseInt(var33),parseInt(var42),parseInt(var51)],
            ['2017', parseInt(var7),parseInt(var16),parseInt(var25),parseInt(var34),parseInt(var43),parseInt(var52)],
            ['2018', parseInt(var8),parseInt(var17),parseInt(var26),parseInt(var35),parseInt(var44),parseInt(var53)]
        ]);
        var options = {
            title: 'Sources ',
            legend: {position: 'right'},
            width:1100
            ,height:600,
            pointSize: 7,
            series: {
                0: { pointShape: 'circle' },
                1: { pointShape: 'triangle' },
                4: { pointShape: 'star' },
                5: { pointShape: 'polygon' },
                2: { pointShape: 'square' },
                3: { pointShape: 'diamond' }

            },
            //vAxis: {scaleType: 'log'},


            colors : ['#e7711b', '#C35817','#808000','#990012','#357EC7','#A9A9A9']
        };
        var chart = new google.visualization.LineChart(document.getElementById(var54));
        chart.draw(data, options);
    }

    function drawChartau1(var0, var1 , var2, var3,//email
                          var4,var5, var6, var7,//spot 311
                          var8,var9, var10,var11,//mass entry
                          var12,var13,var14,var15,//phone
                          var16,var17,var18,var19,//field request
                          var20,var21,var22,var23,var24) {//web
        var data = google.visualization.arrayToDataTable([
            ['Year', 'E-Mail','Spot_311_Interface','Mass Entry','Phone','Field Request','Web'],
            ['2014', parseInt(var0),parseInt(var4),parseInt(var8),parseInt(var12),parseInt(var16),parseInt(var20)],
            ['2015', parseInt(var1),parseInt(var5),parseInt(var9),parseInt(var13),parseInt(var17),parseInt(var21)],
            ['2016', parseInt(var2),parseInt(var6),parseInt(var10),parseInt(var14),parseInt(var18),parseInt(var22)],
            ['2017', parseInt(var3),parseInt(var7),parseInt(var11),parseInt(var15),parseInt(var19),parseInt(var23)]
        ]);
        var options = {
            title: 'Sources ',
            legend: {position: 'right'},
            width:1100
            ,height:600,
            pointSize: 7,
            series: {
                0: { pointShape: 'circle' },
                1: { pointShape: 'triangle' },
                4: { pointShape: 'star' },
                5: { pointShape: 'polygon' },
                2: { pointShape: 'square' },
                3: { pointShape: 'diamond' }

            },
            vAxis: {scaleType: 'log'},


            colors : ['#e7711b', '#C35817','#808000','#990012','#357EC7','#A9A9A9']
        };
        var chart = new google.visualization.LineChart(document.getElementById(var24));
        chart.draw(data, options);
    }

    function drawChartau2(var0, var1 , var2, var3,//email
                          var4,var5, var6, var7,//spot 311
                          var8,var9, var10,var11,//mass entry
                          var12,var13,var14,var15,//phone
                          var16,var17,var18,var19,//field request
                          var20,var21,var22,var23,var24) {//web
        var data = google.visualization.arrayToDataTable([
            ['Year', 'E-Mail','Spot_311_Interface','Mass Entry','Phone','Field Request','Web'],
            ['2014', parseInt(var0),parseInt(var4),parseInt(var8),parseInt(var12),parseInt(var16),parseInt(var20)],
            ['2015', parseInt(var1),parseInt(var5),parseInt(var9),parseInt(var13),parseInt(var17),parseInt(var21)],
            ['2016', parseInt(var2),parseInt(var6),parseInt(var10),parseInt(var14),parseInt(var18),parseInt(var22)],
            ['2017', parseInt(var3),parseInt(var7),parseInt(var11),parseInt(var15),parseInt(var19),parseInt(var23)]
        ]);
        var options = {
            title: 'Sources ',
            legend: {position: 'right'},
            width:1100
            ,height:600,
            pointSize: 7,
            series: {
                0: { pointShape: 'circle' },
                1: { pointShape: 'triangle' },
                4: { pointShape: 'star' },
                5: { pointShape: 'polygon' },
                2: { pointShape: 'square' },
                3: { pointShape: 'diamond' }

            },
            //vAxis: {scaleType: 'log'},


            colors : ['#e7711b', '#C35817','#808000','#990012','#357EC7','#A9A9A9']
        };
        var chart = new google.visualization.LineChart(document.getElementById(var24));
        chart.draw(data, options);
    }
});