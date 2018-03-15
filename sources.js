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
            //fax
            $scope.au_fax_2015 = parseInt($scope.auvalue[8].count_sr_number);
            //mail
            $scope.au_mail_2014 = parseInt($scope.auvalue[11].count_sr_number);
            $scope.au_mail_2016 = parseInt($scope.auvalue[36].count_sr_number);
            //open 311
            $scope.au_open_311_2015 = parseInt($scope.auvalue[29].count_sr_number);
            $scope.au_open_311_2016 = parseInt($scope.auvalue[58].count_sr_number);
            $scope.au_open_311_2017 = parseInt($scope.auvalue[47].count_sr_number);

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

    //San Francisco, CA

    $scope.sffunction = function () {

        $http.get("https://data.sfgov.org/resource/ktji-gk7t.json?$query=SELECT%20source,count(service_request_id),date_extract_y(requested_datetime)%20as%20year%20group%20by%20source,year").then(function (value) {

            $scope.sfvalue = value.data;
            //phone
            $scope.sf_phone_2012 = parseInt($scope.sfvalue[61].count_service_request_id);
            $scope.sf_phone_2013 = parseInt($scope.sfvalue[26].count_service_request_id);
            $scope.sf_phone_2014 = parseInt($scope.sfvalue[21].count_service_request_id);
            $scope.sf_phone_2015 = parseInt($scope.sfvalue[35].count_service_request_id);
            $scope.sf_phone_2016 = parseInt($scope.sfvalue[28].count_service_request_id);
            $scope.sf_phone_2017 = parseInt($scope.sfvalue[4].count_service_request_id);
            //web
            $scope.sf_web_2012 = parseInt($scope.sfvalue[8].count_service_request_id);
            $scope.sf_web_2013 = parseInt($scope.sfvalue[51].count_service_request_id);
            $scope.sf_web_2014 = parseInt($scope.sfvalue[56].count_service_request_id);
            $scope.sf_web_2015 = parseInt($scope.sfvalue[47].count_service_request_id);
            $scope.sf_web_2016 = parseInt($scope.sfvalue[49].count_service_request_id);
            $scope.sf_web_2017 = parseInt($scope.sfvalue[63].count_service_request_id);
            //mobile
            $scope.sf_mobile_2012 = parseInt($scope.sfvalue[46].count_service_request_id);
            $scope.sf_mobile_2013 = parseInt($scope.sfvalue[14].count_service_request_id);
            $scope.sf_mobile_2014 = parseInt($scope.sfvalue[19].count_service_request_id);
            $scope.sf_mobile_2015 = parseInt($scope.sfvalue[7].count_service_request_id);
            $scope.sf_mobile_2016 = parseInt($scope.sfvalue[15].count_service_request_id);
            $scope.sf_mobile_2017 = parseInt($scope.sfvalue[31].count_service_request_id);
            //twitter
            $scope.sf_twitter_2012 = parseInt($scope.sfvalue[18].count_service_request_id);
            $scope.sf_twitter_2013 = parseInt($scope.sfvalue[40].count_service_request_id);
            $scope.sf_twitter_2014 = parseInt($scope.sfvalue[45].count_service_request_id);
            $scope.sf_twitter_2015 = parseInt($scope.sfvalue[53].count_service_request_id);
            $scope.sf_twitter_2016 = parseInt($scope.sfvalue[39].count_service_request_id);
            $scope.sf_twitter_2017 = parseInt($scope.sfvalue[58].count_service_request_id);
            //integrated agency
            $scope.sf_integrated_agency_2012 = parseInt($scope.sfvalue[60].count_service_request_id);
            $scope.sf_integrated_agency_2013 = parseInt($scope.sfvalue[32].count_service_request_id);
            $scope.sf_integrated_agency_2014 = parseInt($scope.sfvalue[38].count_service_request_id);
            $scope.sf_integrated_agency_2015 = parseInt($scope.sfvalue[25].count_service_request_id);
            $scope.sf_integrated_agency_2016 = parseInt($scope.sfvalue[33].count_service_request_id);
            $scope.sf_integrated_agency_2017 = parseInt($scope.sfvalue[13].count_service_request_id);
            //other department
            $scope.sf_other_department_2013 = parseInt($scope.sfvalue[36].count_service_request_id);
            $scope.sf_other_department_2014 = parseInt($scope.sfvalue[37].count_service_request_id);
            $scope.sf_other_department_2015 = parseInt($scope.sfvalue[27].count_service_request_id);
            $scope.sf_other_department_2016 = parseInt($scope.sfvalue[34].count_service_request_id);
            $scope.sf_other_department_2017 = parseInt($scope.sfvalue[12].count_service_request_id);
            //mail
            $scope.sf_mail_2013 = parseInt($scope.sfvalue[16].count_service_request_id);
            $scope.sf_mail_2014 = parseInt($scope.sfvalue[11].count_service_request_id);
            $scope.sf_mail_2015 = parseInt($scope.sfvalue[0].count_service_request_id);
            $scope.sf_mail_2016 = parseInt($scope.sfvalue[17].count_service_request_id);
            //web
            $scope.sf_email_2012 = parseInt($scope.sfvalue[50].count_service_request_id);
            $scope.sf_email_2013 = parseInt($scope.sfvalue[6].count_service_request_id);
            $scope.sf_email_2014 = parseInt($scope.sfvalue[1].count_service_request_id);
            $scope.sf_email_2017 = parseInt($scope.sfvalue[24].count_service_request_id);
            
            drawChartsf1($scope.sf_mobile_2012,$scope.sf_mobile_2013,$scope.sf_mobile_2014,$scope.sf_mobile_2015,$scope.sf_mobile_2016,$scope.sf_mobile_2017,
                /*twitter*/ $scope.sf_twitter_2012,$scope.sf_twitter_2013,$scope.sf_twitter_2014,$scope.sf_twitter_2015,$scope.sf_twitter_2016,$scope.sf_twitter_2017,
                /*integrated agency*/$scope.sf_integrated_agency_2012,$scope.sf_integrated_agency_2013,$scope.sf_integrated_agency_2014,$scope.sf_integrated_agency_2015,$scope.sf_integrated_agency_2016,$scope.sf_integrated_agency_2017,
                /*phone*/ $scope.sf_phone_2012,$scope.sf_phone_2013,$scope.sf_phone_2014,$scope.sf_phone_2015,$scope.sf_phone_2016,$scope.sf_phone_2017,
                /*other department*/0,$scope.sf_other_department_2013,$scope.sf_other_department_2014,$scope.sf_other_department_2015,$scope.sf_other_department_2016,$scope.sf_other_department_2017,
                /*web*/$scope.sf_web_2012,$scope.sf_web_2013,$scope.sf_web_2014,$scope.sf_web_2015,$scope.sf_web_2016,$scope.sf_web_2017,'sf_chart1');

            drawChartsf2($scope.sf_mobile_2012,$scope.sf_mobile_2013,$scope.sf_mobile_2014,$scope.sf_mobile_2015,$scope.sf_mobile_2016,$scope.sf_mobile_2017,
                /*twitter*/ $scope.sf_twitter_2012,$scope.sf_twitter_2013,$scope.sf_twitter_2014,$scope.sf_twitter_2015,$scope.sf_twitter_2016,$scope.sf_twitter_2017,
                /*integrated agency*/$scope.sf_integrated_agency_2012,$scope.sf_integrated_agency_2013,$scope.sf_integrated_agency_2014,$scope.sf_integrated_agency_2015,$scope.sf_integrated_agency_2016,$scope.sf_integrated_agency_2017,
                /*phone*/ $scope.sf_phone_2012,$scope.sf_phone_2013,$scope.sf_phone_2014,$scope.sf_phone_2015,$scope.sf_phone_2016,$scope.sf_phone_2017,
                /*other department*/0,$scope.sf_other_department_2013,$scope.sf_other_department_2014,$scope.sf_other_department_2015,$scope.sf_other_department_2016,$scope.sf_other_department_2017,
                /*web*/$scope.sf_web_2012,$scope.sf_web_2013,$scope.sf_web_2014,$scope.sf_web_2015,$scope.sf_web_2016,$scope.sf_web_2017,'sf_chart2');

        })
    };

    // Los Angeles, CA

    $scope.losangeles = function () {

         $http.get("https://data.lacity.org/resource/ms7h-a45h.json?$query=SELECT%20requestsource,count(srnumber),date_trunc_y(createddate)%20as%20year%20group%20by%20requestsource,year").then(function (value) {

            $scope.lavalue = value.data;
            //phone
            $scope.la_phone_2015 = parseInt($scope.lavalue[14].count_srnumber);
            //email
            $scope.la_email_2015 = parseInt($scope.lavalue[13].count_srnumber);
            //walkin
            $scope.la_walk_in_2015 = parseInt($scope.lavalue[6].count_srnumber);
            //mobile
            $scope.la_mobile_2015 = parseInt($scope.lavalue[12].count_srnumber);
            //fax
            $scope.la_fax_2015 = parseInt($scope.lavalue[7].count_srnumber);
            //self service
            $scope.la_self_service_2015 = parseInt($scope.lavalue[8].count_srnumber);
            //mail
            $scope.la_mail_2015 = parseInt($scope.lavalue[0].count_srnumber);
            //voice mail
            $scope.la_voice_mail_2015 = parseInt($scope.lavalue[9].count_srnumber);
            //web
            $scope.la_web_2015 = parseInt($scope.lavalue[4].count_srnumber);
            //driver self report
            $scope.la_driver_self_2015 = parseInt($scope.lavalue[11].count_srnumber);
            //council's office
            $scope.la_councils_office_2015 = parseInt($scope.lavalue[10].count_srnumber);
            //twitter
            $scope.la_twitter_2015 = parseInt($scope.lavalue[2].count_srnumber);

         $http.get("https://data.lacity.org/resource/ndkd-k878.json?$query=SELECT%20requestsource,count(srnumber),date_trunc_y(createddate)%20as%20year%20group%20by%20requestsource,year").then(function (value) {

                $scope.lavalue = value.data;
                //phone
                $scope.la_phone_2016 = parseInt($scope.lavalue[14].count_srnumber);
                //email
                $scope.la_email_2016 = parseInt($scope.lavalue[11].count_srnumber);
                //walkin
                $scope.la_walk_in_2016 = parseInt($scope.lavalue[3].count_srnumber);
                //mobile
                $scope.la_mobile_2016 = parseInt($scope.lavalue[13].count_srnumber);
                //fax
                $scope.la_fax_2016 = parseInt($scope.lavalue[8].count_srnumber);
                //self service
                $scope.la_self_service_2016 = parseInt($scope.lavalue[12].count_srnumber);
                //mail
                $scope.la_mail_2016 = parseInt($scope.lavalue[4].count_srnumber);
                //voice mail
                $scope.la_voice_mail_2016 = parseInt($scope.lavalue[9].count_srnumber);
                //web
                $scope.la_web_2016 = parseInt($scope.lavalue[6].count_srnumber);
                //driver self report
                $scope.la_driver_self_2016 = parseInt($scope.lavalue[15].count_srnumber);
                //council's office
                $scope.la_councils_office_2016 = parseInt($scope.lavalue[10].count_srnumber);
                //twitter
                $scope.la_twitter_2016 = parseInt($scope.lavalue[5].count_srnumber);


                drawChartla1($scope.la_email_2015,$scope.la_email_2016,
                    /*fax*/$scope.la_fax_2015,$scope.la_fax_2016,
                    /*mail*/$scope.la_mail_2015,$scope.la_mail_2016,
                    /*phone*/$scope.la_phone_2015,$scope.la_phone_2016,
                    /*walk*/$scope.la_walk_in_2015,$scope.la_walk_in_2016,
                    /*web*/$scope.la_web_2015,$scope.la_web_2016,
                    /*twitter*/$scope.la_twitter_2015,$scope.la_twitter_2016,
                    /*council's office*/$scope.la_councils_office_2015,$scope.la_councils_office_2016,
                    /*driver self report*/$scope.la_driver_self_2015,$scope.la_driver_self_2016,
                    /*voice mail*/$scope.la_voice_mail_2015,$scope.la_voice_mail_2016,
                    /*self service*/$scope.la_self_service_2015,$scope.la_self_service_2016,
                    /*mobile*/$scope.la_mobile_2015,$scope.la_mobile_2016,'la_chart1');

                drawChartla2($scope.la_email_2015,$scope.la_email_2016,
                    /*fax*/$scope.la_fax_2015,$scope.la_fax_2016,
                    /*mail*/$scope.la_mail_2015,$scope.la_mail_2016,
                    /*phone*/$scope.la_phone_2015,$scope.la_phone_2016,
                    /*walk*/$scope.la_walk_in_2015,$scope.la_walk_in_2016,
                    /*web*/$scope.la_web_2015,$scope.la_web_2016,
                    /*twitter*/$scope.la_twitter_2015,$scope.la_twitter_2016,
                    /*council's office*/$scope.la_councils_office_2015,$scope.la_councils_office_2016,
                    /*driver self report*/$scope.la_driver_self_2015,$scope.la_driver_self_2016,
                    /*voice mail*/$scope.la_voice_mail_2015,$scope.la_voice_mail_2016,
                    /*self service*/$scope.la_self_service_2015,$scope.la_self_service_2016,
                    /*mobile*/$scope.la_mobile_2015,$scope.la_mobile_2016,'los_chart2');
         });
         });
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
            ['Year', 'E-Mail','Spot 311 Interface','Mass Entry','Phone','Field Request','Web'],
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
            ['Year', 'E-Mail','Spot 311 Interface','Mass Entry','Phone','Field Request','Web'],
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

    function drawChartsf1(var0, var1, var2, var3, var4, var5,//mobile
                          var6,var7, var8,var9, var10,var11,//twitter
                          var12,var13,var14,var15,var16,var17,//integrated agency
                          var18,var19,var20,var21,var22,var23,//phone
                          var24,var25,var26,var27,var28,var29,//other department
                          var30,var31,var32,var33,var34,var35,//web
                          var36) {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Mobile','Twitter','Integrated Agency','Phone','Other Department','Web'],
            ['2012', parseInt(var0),parseInt(var6),parseInt(var12),parseInt(var18),parseInt(var24),parseInt(var30)],
            ['2013', parseInt(var1),parseInt(var7),parseInt(var13),parseInt(var19),parseInt(var25),parseInt(var31)],
            ['2014', parseInt(var2),parseInt(var8),parseInt(var14),parseInt(var20),parseInt(var26),parseInt(var32)],
            ['2015', parseInt(var3),parseInt(var9),parseInt(var15),parseInt(var21),parseInt(var27),parseInt(var33)],
            ['2016', parseInt(var4),parseInt(var10),parseInt(var16),parseInt(var22),parseInt(var28),parseInt(var34)],
            ['2017', parseInt(var5),parseInt(var11),parseInt(var17),parseInt(var23),parseInt(var29),parseInt(var35)]
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
        var chart = new google.visualization.LineChart(document.getElementById(var36));
        chart.draw(data, options);
    }

    function drawChartsf2(var0, var1, var2, var3, var4, var5,//mobile
                          var6,var7, var8,var9, var10,var11,//twitter
                          var12,var13,var14,var15,var16,var17,//integrated agency
                          var18,var19,var20,var21,var22,var23,//phone
                          var24,var25,var26,var27,var28,var29,//other department
                          var30,var31,var32,var33,var34,var35,//web
                          var36) {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Mobile','Twitter','Integrated Agency','Phone','Other Department','Web'],
            ['2012', parseInt(var0),parseInt(var6),parseInt(var12),parseInt(var18),parseInt(var24),parseInt(var30)],
            ['2013', parseInt(var1),parseInt(var7),parseInt(var13),parseInt(var19),parseInt(var25),parseInt(var31)],
            ['2014', parseInt(var2),parseInt(var8),parseInt(var14),parseInt(var20),parseInt(var26),parseInt(var32)],
            ['2015', parseInt(var3),parseInt(var9),parseInt(var15),parseInt(var21),parseInt(var27),parseInt(var33)],
            ['2016', parseInt(var4),parseInt(var10),parseInt(var16),parseInt(var22),parseInt(var28),parseInt(var34)],
            ['2017', parseInt(var5),parseInt(var11),parseInt(var17),parseInt(var23),parseInt(var29),parseInt(var35)]
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
        var chart = new google.visualization.LineChart(document.getElementById(var36));
        chart.draw(data, options);
    }

    function drawChartla1(var0, var1 , var2, var3,//email
                          var4,var5, var6, var7,//spot 311
                          var8,var9, var10,var11,//mass entry
                          var12,var13,var14,var15,//phone
                          var16,var17,var18,var19,//field request
                          var20,var21,var22,var23,var24) {//web
        var data = google.visualization.arrayToDataTable([
            ['Year', 'E-Mail','Fax','Mail','Phone','Walk','Web','Twitter',"Council's Office",'Driver Self Report','Voice Mail','Self Service','Mobile'],
            ['2015', parseInt(var0),parseInt(var2),parseInt(var4),parseInt(var6),parseInt(var8),parseInt(var10),parseInt(var12),parseInt(var14),parseInt(var16),parseInt(var18),parseInt(var20),parseInt(var22)],
            ['2016', parseInt(var1),parseInt(var3),parseInt(var5),parseInt(var7),parseInt(var9),parseInt(var11),parseInt(var13),parseInt(var15),parseInt(var17),parseInt(var19),parseInt(var21),parseInt(var23)]
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

    function drawChartla2(var0, var1 , var2, var3,//email
                          var4,var5, var6, var7,//spot 311
                          var8,var9, var10,var11,//mass entry
                          var12,var13,var14,var15,//phone
                          var16,var17,var18,var19,//field request
                          var20,var21,var22,var23,var24) {//web
        var data = google.visualization.arrayToDataTable([
            ['Year', 'E-Mail','Fax','Mail','Phone','Walk','Web','Twitter',"Council's Office",'Driver Self Report','Voice Mail','Self Service','Mobile'],
            ['2015', parseInt(var0),parseInt(var2),parseInt(var4),parseInt(var6),parseInt(var8),parseInt(var10),parseInt(var12),parseInt(var14),parseInt(var16),parseInt(var18),parseInt(var20),parseInt(var22)],
            ['2016', parseInt(var1),parseInt(var3),parseInt(var5),parseInt(var7),parseInt(var9),parseInt(var11),parseInt(var13),parseInt(var15),parseInt(var17),parseInt(var19),parseInt(var21),parseInt(var23)]
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
           // vAxis: {scaleType: 'log'},


            colors : ['#e7711b', '#C35817','#808000','#990012','#357EC7','#A9A9A9']
        };
        var chart = new google.visualization.LineChart(document.getElementById(var24));
        chart.draw(data, options);
    }
});