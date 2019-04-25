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

    //San Francisco, CA

    $scope.sffunction = function () {

        $http.get("https://data.sfgov.org/resource/ktji-gk7t.json?$query=SELECT%20source,count(service_request_id),date_extract_y(requested_datetime)%20as%20year%20group%20by%20source,year").then(function (value) {

            $scope.sfvalue = value.data;
            //phone
            $scope.sf_phone_2012 = parseInt($scope.sfvalue[148537].count_service_request_id);
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

    //Boston, MA

    $scope.bsfunction = function () {

        $http.get("https://data.boston.gov/api/3/action/datastore_search_sql?sql=SELECT%20%22Source%22,%20count(%22CASE_ENQUIRY_ID%22),date_part(%27YEAR%27%20,%20%22open_dt%22)%20as%20%22YEARVAL%22%20from%20%222968e2c0-d479-49ba-a884-4ef523ada3c0%22%20group%20by%20%22Source%22,%20%22YEARVAL%22").then(function (value) {

            $scope.bsvalue = value.data;
            //self service
            $scope.bs_self_service_2011 = parseInt($scope.bsvalue.result.records[18].count);
            $scope.bs_self_service_2012 = parseInt($scope.bsvalue.result.records[27].count);
            $scope.bs_self_service_2013 = parseInt($scope.bsvalue.result.records[8].count);
            $scope.bs_self_service_2014 = parseInt($scope.bsvalue.result.records[0].count);
            $scope.bs_self_service_2015 = parseInt($scope.bsvalue.result.records[6].count);
            $scope.bs_self_service_2016 = parseInt($scope.bsvalue.result.records[30].count);
            $scope.bs_self_service_2017 = parseInt($scope.bsvalue.result.records[37].count);
            //citizens connect app
            $scope.bs_citizens_connect_app_2011 = parseInt($scope.bsvalue.result.records[51].count);
            $scope.bs_citizens_connect_app_2012 = parseInt($scope.bsvalue.result.records[7].count);
            $scope.bs_citizens_connect_app_2013 = parseInt($scope.bsvalue.result.records[28].count);
            $scope.bs_citizens_connect_app_2014 = parseInt($scope.bsvalue.result.records[35].count);
            $scope.bs_citizens_connect_app_2015 = parseInt($scope.bsvalue.result.records[26].count);
            $scope.bs_citizens_connect_app_2016 = parseInt($scope.bsvalue.result.records[13].count);
            $scope.bs_citizens_connect_app_2017 = parseInt($scope.bsvalue.result.records[1].count);
            //employee generated
            $scope.bs_employee_generated_2011 = parseInt($scope.bsvalue.result.records[48].count);
            $scope.bs_employee_generated_2012 = parseInt($scope.bsvalue.result.records[10].count);
            $scope.bs_employee_generated_2013 = parseInt($scope.bsvalue.result.records[32].count);
            $scope.bs_employee_generated_2014 = parseInt($scope.bsvalue.result.records[39].count);
            $scope.bs_employee_generated_2015 = parseInt($scope.bsvalue.result.records[31].count);
            $scope.bs_employee_generated_2016 = parseInt($scope.bsvalue.result.records[5].count);
            $scope.bs_employee_generated_2017 = parseInt($scope.bsvalue.result.records[4].count);
            //twitter
            $scope.bs_twitter_2011 = parseInt($scope.bsvalue.result.records[22].count);
            $scope.bs_twitter_2012 = parseInt($scope.bsvalue.result.records[38].count);
            $scope.bs_twitter_2013 = parseInt($scope.bsvalue.result.records[3].count);
            $scope.bs_twitter_2014 = parseInt($scope.bsvalue.result.records[12].count);
            $scope.bs_twitter_2015 = parseInt($scope.bsvalue.result.records[2].count);
            $scope.bs_twitter_2016 = parseInt($scope.bsvalue.result.records[34].count);
            $scope.bs_twitter_2017 = parseInt($scope.bsvalue.result.records[33].count);
            //Constituent Call
            $scope.bs_constituent_call_2011 = parseInt($scope.bsvalue.result.records[11].count);
            $scope.bs_constituent_call_2012 = parseInt($scope.bsvalue.result.records[49].count);
            $scope.bs_constituent_call_2013 = parseInt($scope.bsvalue.result.records[15].count);
            $scope.bs_constituent_call_2014 = parseInt($scope.bsvalue.result.records[21].count);
            $scope.bs_constituent_call_2015 = parseInt($scope.bsvalue.result.records[16].count);
            $scope.bs_constituent_call_2016 = parseInt($scope.bsvalue.result.records[52].count);
            $scope.bs_constituent_call_2017 = parseInt($scope.bsvalue.result.records[41].count);
            //city worker app
            $scope.bs_city_worker_app_2012 = parseInt($scope.bsvalue.result.records[45].count);
            $scope.bs_city_worker_app_2013 = parseInt($scope.bsvalue.result.records[24].count);
            $scope.bs_city_worker_app_2014 = parseInt($scope.bsvalue.result.records[17].count);
            $scope.bs_city_worker_app_2015 = parseInt($scope.bsvalue.result.records[25].count);
            $scope.bs_city_worker_app_2016 = parseInt($scope.bsvalue.result.records[42].count);
            $scope.bs_city_worker_app_2017 = parseInt($scope.bsvalue.result.records[53].count);
            //maximo integration
            $scope.bs_maximo_integration_2011 = parseInt($scope.bsvalue.result.records[36].count);
            $scope.bs_maximo_integration_2012 = parseInt($scope.bsvalue.result.records[23].count);
            $scope.bs_maximo_integration_2013 = parseInt($scope.bsvalue.result.records[44].count);
            $scope.bs_maximo_integration_2014 = parseInt($scope.bsvalue.result.records[50].count);
            $scope.bs_maximo_integration_2015 = parseInt($scope.bsvalue.result.records[43].count);
            $scope.bs_maximo_integration_2016 = parseInt($scope.bsvalue.result.records[20].count);
            $scope.bs_maximo_integration_2017 = parseInt($scope.bsvalue.result.records[19].count);

            drawChartbs1($scope.bs_self_service_2011,$scope.bs_self_service_2012,$scope.bs_self_service_2013,$scope.bs_self_service_2014,$scope.bs_self_service_2015,$scope.bs_self_service_2016,$scope.bs_self_service_2017,
                /*twitter*/$scope.bs_twitter_2011,$scope.bs_twitter_2012,$scope.bs_twitter_2013,$scope.bs_twitter_2014,$scope.bs_twitter_2015,$scope.bs_twitter_2016,$scope.bs_twitter_2017,
                /*citizens connect app*/$scope.bs_citizens_connect_app_2011,$scope.bs_citizens_connect_app_2012,$scope.bs_citizens_connect_app_2013,$scope.bs_citizens_connect_app_2014,$scope.bs_citizens_connect_app_2015,$scope.bs_citizens_connect_app_2016,$scope.bs_citizens_connect_app_2017,
                /*employee generated*/ $scope.bs_employee_generated_2011,$scope.bs_employee_generated_2012,$scope.bs_employee_generated_2013,$scope.bs_employee_generated_2014,$scope.bs_employee_generated_2015,$scope.bs_employee_generated_2016,$scope.bs_employee_generated_2017,
                /*constituent call*/$scope.bs_constituent_call_2011,$scope.bs_constituent_call_2012,$scope.bs_constituent_call_2013,$scope.bs_constituent_call_2014,$scope.bs_constituent_call_2015,$scope.bs_constituent_call_2016,$scope.bs_constituent_call_2017,
                /*maximo integration*/$scope.bs_maximo_integration_2011,$scope.bs_maximo_integration_2012,$scope.bs_maximo_integration_2013,$scope.bs_maximo_integration_2014,$scope.bs_maximo_integration_2015,$scope.bs_maximo_integration_2016,$scope.bs_maximo_integration_2017,
                /*city worker app*/0,$scope.bs_city_worker_app_2012,$scope.bs_city_worker_app_2013,$scope.bs_city_worker_app_2014,$scope.bs_city_worker_app_2015,$scope.bs_city_worker_app_2016,$scope.bs_city_worker_app_2017,'bs_chart1');

            drawChartbs2($scope.bs_self_service_2011,$scope.bs_self_service_2012,$scope.bs_self_service_2013,$scope.bs_self_service_2014,$scope.bs_self_service_2015,$scope.bs_self_service_2016,$scope.bs_self_service_2017,
                /*twitter*/$scope.bs_twitter_2011,$scope.bs_twitter_2012,$scope.bs_twitter_2013,$scope.bs_twitter_2014,$scope.bs_twitter_2015,$scope.bs_twitter_2016,$scope.bs_twitter_2017,
                /*citizens connect app*/$scope.bs_citizens_connect_app_2011,$scope.bs_citizens_connect_app_2012,$scope.bs_citizens_connect_app_2013,$scope.bs_citizens_connect_app_2014,$scope.bs_citizens_connect_app_2015,$scope.bs_citizens_connect_app_2016,$scope.bs_citizens_connect_app_2017,
                /*employee generated*/ $scope.bs_employee_generated_2011,$scope.bs_employee_generated_2012,$scope.bs_employee_generated_2013,$scope.bs_employee_generated_2014,$scope.bs_employee_generated_2015,$scope.bs_employee_generated_2016,$scope.bs_employee_generated_2017,
                /*constituent call*/$scope.bs_constituent_call_2011,$scope.bs_constituent_call_2012,$scope.bs_constituent_call_2013,$scope.bs_constituent_call_2014,$scope.bs_constituent_call_2015,$scope.bs_constituent_call_2016,$scope.bs_constituent_call_2017,
                /*maximo integration*/$scope.bs_maximo_integration_2011,$scope.bs_maximo_integration_2012,$scope.bs_maximo_integration_2013,$scope.bs_maximo_integration_2014,$scope.bs_maximo_integration_2015,$scope.bs_maximo_integration_2016,$scope.bs_maximo_integration_2017,
                /*city worker app*/0,$scope.bs_city_worker_app_2012,$scope.bs_city_worker_app_2013,$scope.bs_city_worker_app_2014,$scope.bs_city_worker_app_2015,$scope.bs_city_worker_app_2016,$scope.bs_city_worker_app_2017,'bs_chart2');

        })
    };
       //Oakland
    $scope.oakfunction = function () {

        $http.get("https://data.oaklandnet.com/resource/x4j5-hbm8.json?$SELECT=%20source,count(requestid),date_extract_y(datetimeinit)%20as%20year%20group%20by%20source,year").then(function (value) {

            $scope.oakvalue = value.data;
            //phone
            $scope.oak_phone_2013 = parseInt($scope.oakvalue[47].count_requestid);
            $scope.oak_phone_2014 = parseInt($scope.oakvalue[15].count_requestid);
            $scope.oak_phone_2015 = parseInt($scope.oakvalue[22].count_requestid);
            $scope.oak_phone_2016 = parseInt($scope.oakvalue[56].count_requestid);
            $scope.oak_phone_2017 = parseInt($scope.oakvalue[38].count_requestid);
            //web
            $scope.oak_web_2013 = parseInt($scope.oakvalue[45].count_requestid);
            $scope.oak_web_2014 = parseInt($scope.oakvalue[18].count_requestid);
            $scope.oak_web_2015 = parseInt($scope.oakvalue[8].count_requestid);
            $scope.oak_web_2016 = parseInt($scope.oakvalue[40].count_requestid);
            $scope.oak_web_2017 = parseInt($scope.oakvalue[53].count_requestid);
            //phone or email
            $scope.oak_phone_or_email_2013 = parseInt($scope.oakvalue[17].count_requestid);
            $scope.oak_phone_or_email_2014 = parseInt($scope.oakvalue[46].count_requestid);
            $scope.oak_phone_or_email_2015 = parseInt($scope.oakvalue[52].count_requestid);
            $scope.oak_phone_or_email_2016 = parseInt($scope.oakvalue[20].count_requestid);
            $scope.oak_phone_or_email_2017 = parseInt($scope.oakvalue[11].count_requestid);
            //see click fix
            $scope.oak_see_click_fix_2013 = parseInt($scope.oakvalue[28].count_requestid);
            $scope.oak_see_click_fix_2014 = parseInt($scope.oakvalue[5].count_requestid);
            $scope.oak_see_click_fix_2015 = parseInt($scope.oakvalue[0].count_requestid);
            $scope.oak_see_click_fix_2016 = parseInt($scope.oakvalue[26].count_requestid);
            $scope.oak_see_click_fix_2017 = parseInt($scope.oakvalue[33].count_requestid);
            //city attorney
            $scope.oak_city_attorney_2014 = parseInt($scope.oakvalue[6].count_requestid);
            $scope.oak_city_attorney_2015 = parseInt($scope.oakvalue[3].count_requestid);
            $scope.oak_city_attorney_2016 = parseInt($scope.oakvalue[30].count_requestid);
            $scope.oak_city_attorney_2017 = parseInt($scope.oakvalue[31].count_requestid);
            //other 
            $scope.oak_other_2013 = parseInt($scope.oakvalue[34].count_requestid);
            $scope.oak_other_2014 = parseInt($scope.oakvalue[24].count_requestid);
            $scope.oak_other_2015 = parseInt($scope.oakvalue[13].count_requestid);
            $scope.oak_other_2016 = parseInt($scope.oakvalue[43].count_requestid);
            $scope.oak_other_2017 = parseInt($scope.oakvalue[51].count_requestid);
            //email
            $scope.oak_email_2013 = parseInt($scope.oakvalue[49].count_requestid);
            $scope.oak_email_2014 = parseInt($scope.oakvalue[16].count_requestid);
            $scope.oak_email_2015 = parseInt($scope.oakvalue[23].count_requestid);
            $scope.oak_email_2016 = parseInt($scope.oakvalue[57].count_requestid);
            $scope.oak_email_2017 = parseInt($scope.oakvalue[37].count_requestid);
            //voice mail
            $scope.oak_voice_mail_2013 = parseInt($scope.oakvalue[36].count_requestid);
            $scope.oak_voice_mail_2014 = parseInt($scope.oakvalue[25].count_requestid);
            $scope.oak_voice_mail_2015 = parseInt($scope.oakvalue[14].count_requestid);
            $scope.oak_voice_mail_2016 = parseInt($scope.oakvalue[44].count_requestid);
            $scope.oak_voice_mail_2017 = parseInt($scope.oakvalue[50].count_requestid);
//alert("this is 1");
            drawChartoak1(0,$scope.oak_city_attorney_2014,$scope.oak_city_attorney_2015,$scope.oak_city_attorney_2016,$scope.oak_city_attorney_2017,
                /*see click fix*/ $scope.oak_see_click_fix_2013,$scope.oak_see_click_fix_2014,$scope.oak_see_click_fix_2015,$scope.oak_see_click_fix_2016,$scope.oak_see_click_fix_2017,
                /*phone or email*/$scope.oak_phone_or_email_2013,$scope.oak_phone_or_email_2014,$scope.oak_phone_or_email_2015,$scope.oak_phone_or_email_2016,$scope.oak_phone_or_email_2017,
                /*phone*/ $scope.oak_phone_2013,$scope.oak_phone_2014,$scope.oak_phone_2015,$scope.oak_phone_2016,$scope.oak_phone_2017,
                /*other*/$scope.oak_other_2013,$scope.oak_other_2014,$scope.oak_other_2015,$scope.oak_other_2016,$scope.oak_other_2017,
                /*web*/$scope.oak_web_2013,$scope.oak_web_2014,$scope.oak_web_2015,$scope.oak_web_2016,$scope.oak_web_2017,
                /*email*/$scope.oak_email_2013,$scope.oak_email_2014,$scope.oak_email_2015,$scope.oak_email_2016,$scope.oak_email_2017,
                /*voice mail*/$scope.oak_voice_mail_2013,$scope.oak_voice_mail_2014,$scope.oak_voice_mail_2015,$scope.oak_voice_mail_2016,$scope.oak_voice_mail_2017,'oak_chart1');

            drawChartoak2(0,$scope.oak_city_attorney_2014,$scope.oak_city_attorney_2015,$scope.oak_city_attorney_2016,$scope.oak_city_attorney_2017,
                /*see click fix*/ $scope.oak_see_click_fix_2013,$scope.oak_see_click_fix_2014,$scope.oak_see_click_fix_2015,$scope.oak_see_click_fix_2016,$scope.oak_see_click_fix_2017,
                /*phone or email*/$scope.oak_phone_or_email_2013,$scope.oak_phone_or_email_2014,$scope.oak_phone_or_email_2015,$scope.oak_phone_or_email_2016,$scope.oak_phone_or_email_2017,
                /*phone*/ $scope.oak_phone_2013,$scope.oak_phone_2014,$scope.oak_phone_2015,$scope.oak_phone_2016,$scope.oak_phone_2017,
                /*other*/$scope.oak_other_2013,$scope.oak_other_2014,$scope.oak_other_2015,$scope.oak_other_2016,$scope.oak_other_2017,
                /*web*/$scope.oak_web_2013,$scope.oak_web_2014,$scope.oak_web_2015,$scope.oak_web_2016,$scope.oak_web_2017,
                /*email*/$scope.oak_email_2013,$scope.oak_email_2014,$scope.oak_email_2015,$scope.oak_email_2016,$scope.oak_email_2017,
                /*voice mail*/$scope.oak_voice_mail_2013,$scope.oak_voice_mail_2014,$scope.oak_voice_mail_2015,$scope.oak_voice_mail_2016,$scope.oak_voice_mail_2017,'oak_chart2');
        })
    };

    // Los Angeles, CA

    $scope.losangeles = function () {

         $http.get("https://data.lacity.org/resource/ms7h-a45h.json?$query=SELECT%20requestsource,count(srnumber),date_trunc_y(createddate)%20as%20year%20group%20by%20requestsource,year").then(function (value) {

            $scope.la1value = value.data;
            //phone
            $scope.la_phone_2015 = parseInt($scope.la1value[14].count_srnumber);
            //email
            $scope.la_email_2015 = parseInt($scope.la1value[13].count_srnumber);
            //walkin
            $scope.la_walk_in_2015 = parseInt($scope.la1value[6].count_srnumber);
            //mobile
            $scope.la_mobile_2015 = parseInt($scope.la1value[12].count_srnumber);
            //fax
            $scope.la_fax_2015 = parseInt($scope.la1value[7].count_srnumber);
            //self service
            $scope.la_self_service_2015 = parseInt($scope.la1value[8].count_srnumber);
            //mail
            $scope.la_mail_2015 = parseInt($scope.la1value[0].count_srnumber);
            //voice mail
            $scope.la_voice_mail_2015 = parseInt($scope.la1value[9].count_srnumber);
            //web
            $scope.la_web_2015 = parseInt($scope.la1value[4].count_srnumber);
            //driver self report
            $scope.la_driver_self_2015 = parseInt($scope.la1value[11].count_srnumber);
            //council's office
            $scope.la_councils_office_2015 = parseInt($scope.la1value[10].count_srnumber);
            //twitter
            $scope.la_twitter_2015 = parseInt($scope.la1value[2].count_srnumber);


         $http.get("https://data.lacity.org/resource/ndkd-k878.json?$query=SELECT%20requestsource,count(srnumber),date_trunc_y(createddate)%20as%20year%20group%20by%20requestsource,year").then(function (value) {

                $scope.la2value = value.data;
                //phone
                $scope.la_phone_2016 = parseInt($scope.la2value[14].count_srnumber);
                //email
                $scope.la_email_2016 = parseInt($scope.la2value[11].count_srnumber);
                //walkin
                $scope.la_walk_in_2016 = parseInt($scope.la2value[3].count_srnumber);
                //mobile
                $scope.la_mobile_2016 = parseInt($scope.la2value[13].count_srnumber);
                //fax
                $scope.la_fax_2016 = parseInt($scope.la2value[8].count_srnumber);
                //self service
                $scope.la_self_service_2016 = parseInt($scope.la2value[12].count_srnumber);
                //mail
                $scope.la_mail_2016 = parseInt($scope.la2value[4].count_srnumber);
                //voice mail
                $scope.la_voice_mail_2016 = parseInt($scope.la2value[9].count_srnumber);
                //web
                $scope.la_web_2016 = parseInt($scope.la2value[6].count_srnumber);
                //driver self report
                $scope.la_driver_self_2016 = parseInt($scope.la2value[15].count_srnumber);
                //council's office
                $scope.la_councils_office_2016 = parseInt($scope.la2value[10].count_srnumber);
                //twitter
                $scope.la_twitter_2016 = parseInt($scope.la2value[5].count_srnumber);


//alert("this is 1");


         });
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
             //alert("this is 2");

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

    function drawChartoak1(var0, var1, var2, var3, var4,//city attorney
                           var5,var6,var7, var8,var9,//see click fix
                           var10,var11,var12,var13,var14,//phone or email
                           var15,var16,var17,var18,var19,//phone
                           var20,var21,var22,var23,var24,//other
                           var25,var26,var27,var28,var29,//web
                           var30,var31,var32,var33,var34,//email
                           var35,var36,var37,var38,var39,//voice mail
                           var40) {
        //alert("this is 2");
        var data = google.visualization.arrayToDataTable([
            ['Year', 'City Attorney','See Click Fix','Phone or Email','Phone','Other','Web','Email','Voice Mail'],
            ['2013', parseInt(var0),parseInt(var5),parseInt(var10),parseInt(var15),parseInt(var20),parseInt(var25),parseInt(var30),parseInt(var35)],
            ['2014', parseInt(var1),parseInt(var6),parseInt(var11),parseInt(var16),parseInt(var21),parseInt(var26),parseInt(var32),parseInt(var36)],
            ['2015', parseInt(var2),parseInt(var7),parseInt(var12),parseInt(var17),parseInt(var22),parseInt(var27),parseInt(var32),parseInt(var37)],
            ['2016', parseInt(var3),parseInt(var8),parseInt(var13),parseInt(var18),parseInt(var23),parseInt(var28),parseInt(var33),parseInt(var38)],
            ['2017', parseInt(var4),parseInt(var9),parseInt(var14),parseInt(var19),parseInt(var24),parseInt(var29),parseInt(var34),parseInt(var39)]
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
                2: { pointShape: 'star' },
                3: { pointShape: 'polygon' },
                4: { pointShape: 'square' },
                5: { pointShape: 'diamond' }

            },
            vAxis: {scaleType: 'log'},


            colors : ['#e7711b', '#C35817','#808000','#990012','#357EC7','#A9A9A9']
        };
        var chart = new google.visualization.LineChart(document.getElementById(var40));
        chart.draw(data, options);
    }
    function drawChartoak2(var0, var1, var2, var3, var4,//city attorney
        var5,var6,var7, var8,var9,//see click fix
        var10,var11,var12,var13,var14,//phone or email
        var15,var16,var17,var18,var19,//phone
        var20,var21,var22,var23,var24,//other
        var25,var26,var27,var28,var29,//web
        var30,var31,var32,var33,var34,//email
        var35,var36,var37,var38,var39,//voice mail
        var40) {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'City Attorney','See Click Fix','Phone or Email','Phone','Other','Web','Email','Voice Mail'],
            ['2013', parseInt(var0),parseInt(var5),parseInt(var10),parseInt(var15),parseInt(var20),parseInt(var25),parseInt(var30),parseInt(var35)],
            ['2014', parseInt(var1),parseInt(var6),parseInt(var11),parseInt(var16),parseInt(var21),parseInt(var26),parseInt(var32),parseInt(var36)],
            ['2015', parseInt(var2),parseInt(var7),parseInt(var12),parseInt(var17),parseInt(var22),parseInt(var27),parseInt(var32),parseInt(var37)],
            ['2016', parseInt(var3),parseInt(var8),parseInt(var13),parseInt(var18),parseInt(var23),parseInt(var28),parseInt(var33),parseInt(var38)],
            ['2017', parseInt(var4),parseInt(var9),parseInt(var14),parseInt(var19),parseInt(var24),parseInt(var29),parseInt(var34),parseInt(var39)]
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
                2: { pointShape: 'star' },
                3: { pointShape: 'polygon' },
                4: { pointShape: 'square' },
                5: { pointShape: 'diamond' }

            },
            //vAxis: {scaleType: 'log'},


            colors : ['#e7711b', '#C35817','#808000','#990012','#357EC7','#A9A9A9']
        };
        var chart = new google.visualization.LineChart(document.getElementById(var40));
        chart.draw(data, options);
    }

    function drawChartbs1(var0, var1, var2, var3, var4,var5,var6,//Self Service
                          var7,var8,var9,var10,var11,var12,var13,//Twitter
                          var14,var15,var16,var17,var18,var19,var20,//Citizens Connect App
                          var21,var22,var23,var24,var25,var26,var27,//Employee Generated
                          var28,var29,var30,var31,var32,var33,var34,//Constituent Call
                          var35,var36,var37,var38,var39,var40,var41,//Maximo Integration
                          var42,var43,var44,var45,var46,var47,var48,//City Worker App
                          var49) {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Self Service','Twitter','Citizens Connect App','Employee Generated','Constituent Call','Maximo Integration','City Worker App'],
            ['2011', parseInt(var0),parseInt(var7),parseInt(var14),parseInt(var21),parseInt(var28),parseInt(var35),parseInt(var42)],
            ['2012', parseInt(var1),parseInt(var8),parseInt(var15),parseInt(var22),parseInt(var29),parseInt(var36),parseInt(var43)],
            ['2013', parseInt(var2),parseInt(var9),parseInt(var16),parseInt(var23),parseInt(var30),parseInt(var37),parseInt(var44)],
            ['2014', parseInt(var3),parseInt(var10),parseInt(var17),parseInt(var24),parseInt(var31),parseInt(var38),parseInt(var45)],
            ['2015', parseInt(var4),parseInt(var11),parseInt(var18),parseInt(var25),parseInt(var32),parseInt(var39),parseInt(var46)],
            ['2016', parseInt(var5),parseInt(var12),parseInt(var19),parseInt(var26),parseInt(var33),parseInt(var40),parseInt(var47)],
            ['2017', parseInt(var6),parseInt(var13),parseInt(var20),parseInt(var27),parseInt(var34),parseInt(var41),parseInt(var48)]
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
                2: { pointShape: 'star' },
                3: { pointShape: 'polygon' },
                4: { pointShape: 'square' },
                5: { pointShape: 'diamond' }

            },
            vAxis: {scaleType: 'log'},


            colors : ['#e7711b', '#C35817','#808000','#990012','#357EC7','#A9A9A9']
        };
        var chart = new google.visualization.LineChart(document.getElementById(var49));
        chart.draw(data, options);
    }

    function drawChartbs2(var0, var1, var2, var3, var4,var5,var6,//Self Service
                          var7, var8,var9,var10,var11,var12,var13,//Twitter
                          var14,var15,var16,var17,var18,var19,var20,//Citizens Connect App
                          var21,var22,var23,var24,var25,var26,var27,//Employee Generated
                          var28,var29,var30,var31,var32,var33,var34,//Constituent Call
                          var35,var36,var37,var38,var39,var40,var41,//Maximo Integration
                          var42,var43,var44,var45,var46,var47,var48,//City Worker App
                          var49) {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Self Service','Twitter','Citizens Connect App','Employee Generated','Constituent Call','Maximo Integration','City Worker App'],
            ['2011', parseInt(var0),parseInt(var7),parseInt(var14),parseInt(var21),parseInt(var28),parseInt(var35),parseInt(var42)],
            ['2012', parseInt(var1),parseInt(var8),parseInt(var15),parseInt(var22),parseInt(var29),parseInt(var36),parseInt(var43)],
            ['2013', parseInt(var2),parseInt(var9),parseInt(var16),parseInt(var23),parseInt(var30),parseInt(var37),parseInt(var44)],
            ['2014', parseInt(var3),parseInt(var10),parseInt(var17),parseInt(var24),parseInt(var31),parseInt(var38),parseInt(var45)],
            ['2015', parseInt(var4),parseInt(var11),parseInt(var18),parseInt(var25),parseInt(var32),parseInt(var39),parseInt(var46)],
            ['2016', parseInt(var5),parseInt(var12),parseInt(var19),parseInt(var26),parseInt(var33),parseInt(var40),parseInt(var47)],
            ['2017', parseInt(var6),parseInt(var13),parseInt(var20),parseInt(var27),parseInt(var34),parseInt(var41),parseInt(var48)]
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
                2: { pointShape: 'star' },
                3: { pointShape: 'polygon' },
                4: { pointShape: 'square' },
                5: { pointShape: 'diamond' }

            },
           // vAxis: {scaleType: 'log'},


            colors : ['#e7711b', '#C35817','#808000','#990012','#357EC7','#A9A9A9']
        };
        var chart = new google.visualization.LineChart(document.getElementById(var49));
        chart.draw(data, options);
    }
    function drawChartla1(var0, var1 , var2, var3,//email
                          var4,var5, var6, var7,//spot 311
                          var8,var9, var10,var11,//mass entry
                          var12,var13,var14,var15,//phone
                          var16,var17,var18,var19,//field request
                          var20,var21,var22,var23,var24) {//web
        //alert("this is 4");
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
       // alert("this is 3");
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
