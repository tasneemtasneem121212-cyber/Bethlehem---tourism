var wms_layers = [];

var format_Building_0 = new ol.format.GeoJSON();
var features_Building_0 = format_Building_0.readFeatures(json_Building_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_0.addFeatures(features_Building_0);
var lyr_Building_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_0, 
                style: style_Building_0,
                popuplayertitle: 'Building',
                interactive: true,
                title: '<img src="styles/legend/Building_0.png" /> Building'
            });
var format_Jointplanning_1 = new ol.format.GeoJSON();
var features_Jointplanning_1 = format_Jointplanning_1.readFeatures(json_Jointplanning_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jointplanning_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jointplanning_1.addFeatures(features_Jointplanning_1);
var lyr_Jointplanning_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jointplanning_1, 
                style: style_Jointplanning_1,
                popuplayertitle: 'Joint planning',
                interactive: true,
                title: '<img src="styles/legend/Jointplanning_1.png" /> Joint planning'
            });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                popuplayertitle: 'Roads',
                interactive: true,
    title: 'Roads<br />\
    <img src="styles/legend/Roads_2_0.png" /> internal<br />\
    <img src="styles/legend/Roads_2_1.png" /> Local<br />\
    <img src="styles/legend/Roads_2_2.png" /> Main<br />\
    <img src="styles/legend/Roads_2_3.png" /> Regional<br />\
    <img src="styles/legend/Roads_2_4.png" /> Roundabout<br />\
    <img src="styles/legend/Roads_2_5.png" /> Settlement<br />\
    <img src="styles/legend/Roads_2_6.png" /> Unused<br />\
    <img src="styles/legend/Roads_2_7.png" /> <br />\
    <img src="styles/legend/Roads_2_8.png" /> <br />' });
var format_Publicfacilities_3 = new ol.format.GeoJSON();
var features_Publicfacilities_3 = format_Publicfacilities_3.readFeatures(json_Publicfacilities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Publicfacilities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Publicfacilities_3.addFeatures(features_Publicfacilities_3);
var lyr_Publicfacilities_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Publicfacilities_3, 
                style: style_Publicfacilities_3,
                popuplayertitle: 'Public facilities',
                interactive: true,
    title: 'Public facilities<br />\
    <img src="styles/legend/Publicfacilities_3_0.png" /> apartment<br />\
    <img src="styles/legend/Publicfacilities_3_1.png" /> artwork<br />\
    <img src="styles/legend/Publicfacilities_3_2.png" /> atm<br />\
    <img src="styles/legend/Publicfacilities_3_3.png" /> attraction<br />\
    <img src="styles/legend/Publicfacilities_3_4.png" /> bank<br />\
    <img src="styles/legend/Publicfacilities_3_5.png" /> bar<br />\
    <img src="styles/legend/Publicfacilities_3_6.png" /> bench<br />\
    <img src="styles/legend/Publicfacilities_3_7.png" /> bureau_de_change<br />\
    <img src="styles/legend/Publicfacilities_3_8.png" /> bus_station<br />\
    <img src="styles/legend/Publicfacilities_3_9.png" /> bus_stop<br />\
    <img src="styles/legend/Publicfacilities_3_10.png" /> cafe<br />\
    <img src="styles/legend/Publicfacilities_3_11.png" /> car_rental<br />\
    <img src="styles/legend/Publicfacilities_3_12.png" /> car_wash<br />\
    <img src="styles/legend/Publicfacilities_3_13.png" /> caravan_site<br />\
    <img src="styles/legend/Publicfacilities_3_14.png" /> castle<br />\
    <img src="styles/legend/Publicfacilities_3_15.png" /> childcare<br />\
    <img src="styles/legend/Publicfacilities_3_16.png" /> clinic<br />\
    <img src="styles/legend/Publicfacilities_3_17.png" /> community_centre<br />\
    <img src="styles/legend/Publicfacilities_3_18.png" /> dentist<br />\
    <img src="styles/legend/Publicfacilities_3_19.png" /> doctors<br />\
    <img src="styles/legend/Publicfacilities_3_20.png" /> driving_school<br />\
    <img src="styles/legend/Publicfacilities_3_21.png" /> fast_food<br />\
    <img src="styles/legend/Publicfacilities_3_22.png" /> fire_station<br />\
    <img src="styles/legend/Publicfacilities_3_23.png" /> fountain<br />\
    <img src="styles/legend/Publicfacilities_3_24.png" /> fuel<br />\
    <img src="styles/legend/Publicfacilities_3_25.png" /> guest_house<br />\
    <img src="styles/legend/Publicfacilities_3_26.png" /> hospital<br />\
    <img src="styles/legend/Publicfacilities_3_27.png" /> hostel<br />\
    <img src="styles/legend/Publicfacilities_3_28.png" /> hotel<br />\
    <img src="styles/legend/Publicfacilities_3_29.png" /> information<br />\
    <img src="styles/legend/Publicfacilities_3_30.png" /> kindergarten<br />\
    <img src="styles/legend/Publicfacilities_3_31.png" /> library<br />\
    <img src="styles/legend/Publicfacilities_3_32.png" /> lighthouse<br />\
    <img src="styles/legend/Publicfacilities_3_33.png" /> memorial<br />\
    <img src="styles/legend/Publicfacilities_3_34.png" /> monument<br />\
    <img src="styles/legend/Publicfacilities_3_35.png" /> motel<br />\
    <img src="styles/legend/Publicfacilities_3_36.png" /> museum<br />\
    <img src="styles/legend/Publicfacilities_3_37.png" /> parking<br />\
    <img src="styles/legend/Publicfacilities_3_38.png" /> parking_entrance<br />\
    <img src="styles/legend/Publicfacilities_3_39.png" /> pharmacy<br />\
    <img src="styles/legend/Publicfacilities_3_40.png" /> place_of_worship<br />\
    <img src="styles/legend/Publicfacilities_3_41.png" /> police<br />\
    <img src="styles/legend/Publicfacilities_3_42.png" /> post_box<br />\
    <img src="styles/legend/Publicfacilities_3_43.png" /> post_office<br />\
    <img src="styles/legend/Publicfacilities_3_44.png" /> public_building<br />\
    <img src="styles/legend/Publicfacilities_3_45.png" /> recycling<br />\
    <img src="styles/legend/Publicfacilities_3_46.png" /> rest_area<br />\
    <img src="styles/legend/Publicfacilities_3_47.png" /> restaurant<br />\
    <img src="styles/legend/Publicfacilities_3_48.png" /> ruins<br />\
    <img src="styles/legend/Publicfacilities_3_49.png" /> sacred_object<br />\
    <img src="styles/legend/Publicfacilities_3_50.png" /> school<br />\
    <img src="styles/legend/Publicfacilities_3_51.png" /> shelter<br />\
    <img src="styles/legend/Publicfacilities_3_52.png" /> street_lamp<br />\
    <img src="styles/legend/Publicfacilities_3_53.png" /> swimming_pool<br />\
    <img src="styles/legend/Publicfacilities_3_54.png" /> theatre<br />\
    <img src="styles/legend/Publicfacilities_3_55.png" /> tower<br />\
    <img src="styles/legend/Publicfacilities_3_56.png" /> townhall<br />\
    <img src="styles/legend/Publicfacilities_3_57.png" /> traffic_signals<br />\
    <img src="styles/legend/Publicfacilities_3_58.png" /> university<br />\
    <img src="styles/legend/Publicfacilities_3_59.png" /> viewpoint<br />\
    <img src="styles/legend/Publicfacilities_3_60.png" /> waste_basket<br />\
    <img src="styles/legend/Publicfacilities_3_61.png" /> water_tower<br />\
    <img src="styles/legend/Publicfacilities_3_62.png" /> <br />' });
var format_Mosques_4 = new ol.format.GeoJSON();
var features_Mosques_4 = format_Mosques_4.readFeatures(json_Mosques_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosques_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosques_4.addFeatures(features_Mosques_4);
var lyr_Mosques_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosques_4, 
                style: style_Mosques_4,
                popuplayertitle: 'Mosques',
                interactive: true,
                title: '<img src="styles/legend/Mosques_4.png" /> Mosques'
            });
var format_shops_5 = new ol.format.GeoJSON();
var features_shops_5 = format_shops_5.readFeatures(json_shops_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shops_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shops_5.addFeatures(features_shops_5);
var lyr_shops_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shops_5, 
                style: style_shops_5,
                popuplayertitle: 'shops',
                interactive: true,
    title: 'shops<br />\
    <img src="styles/legend/shops_5_0.png" /> bakery<br />\
    <img src="styles/legend/shops_5_1.png" /> beauty<br />\
    <img src="styles/legend/shops_5_2.png" /> books<br />\
    <img src="styles/legend/shops_5_3.png" /> car_repair<br />\
    <img src="styles/legend/shops_5_4.png" /> clothes<br />\
    <img src="styles/legend/shops_5_5.png" /> confectionery<br />\
    <img src="styles/legend/shops_5_6.png" /> garden_centre<br />\
    <img src="styles/legend/shops_5_7.png" /> gift<br />\
    <img src="styles/legend/shops_5_8.png" /> mobile_phone<br />\
    <img src="styles/legend/shops_5_9.png" /> sports<br />\
    <img src="styles/legend/shops_5_10.png" /> supermarket<br />' });
var format_Archaeologicalsites_6 = new ol.format.GeoJSON();
var features_Archaeologicalsites_6 = format_Archaeologicalsites_6.readFeatures(json_Archaeologicalsites_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Archaeologicalsites_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Archaeologicalsites_6.addFeatures(features_Archaeologicalsites_6);
var lyr_Archaeologicalsites_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Archaeologicalsites_6, 
                style: style_Archaeologicalsites_6,
                popuplayertitle: 'Archaeological sites',
                interactive: true,
                title: '<img src="styles/legend/Archaeologicalsites_6.png" /> Archaeological sites'
            });
var format_Church_7 = new ol.format.GeoJSON();
var features_Church_7 = format_Church_7.readFeatures(json_Church_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Church_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Church_7.addFeatures(features_Church_7);
var lyr_Church_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Church_7, 
                style: style_Church_7,
                popuplayertitle: 'Church',
                interactive: true,
                title: '<img src="styles/legend/Church_7.png" /> Church'
            });

lyr_Building_0.setVisible(true);lyr_Jointplanning_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_Publicfacilities_3.setVisible(true);lyr_Mosques_4.setVisible(true);lyr_shops_5.setVisible(true);lyr_Archaeologicalsites_6.setVisible(true);lyr_Church_7.setVisible(true);
var layersList = [lyr_Building_0,lyr_Jointplanning_1,lyr_Roads_2,lyr_Publicfacilities_3,lyr_Mosques_4,lyr_shops_5,lyr_Archaeologicalsites_6,lyr_Church_7];
lyr_Building_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LayerName_': 'LayerName_', 'LayerNam_1': 'LayerNam_1', 'YearOfCapt': 'YearOfCapt', 'ValueName_': 'ValueName_', 'ValueNam_1': 'ValueNam_1', 'CommunityN': 'CommunityN', 'Communit_1': 'Communit_1', 'Governorat': 'Governorat', 'Governor_1': 'Governor_1', 'Ref_MOLG': 'Ref_MOLG', 'Ref_B': 'Ref_B', 'Communit_2': 'Communit_2', 'Communit_3': 'Communit_3', 'Governor_2': 'Governor_2', 'Governor_3': 'Governor_3', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jointplanning_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LayerName_': 'LayerName_', 'LayerNam_1': 'LayerNam_1', 'CommunityN': 'CommunityN', 'Communit_1': 'Communit_1', 'BelnogsTo_': 'BelnogsTo_', 'Governorat': 'Governorat', 'Governor_1': 'Governor_1', 'PCBS_CO': 'PCBS_CO', 'Population': 'Population', 'Classifica': 'Classifica', 'Rank': 'Rank', 'Joint_Plan': 'Joint_Plan', 'Area_Land_': 'Area_Land_', 'Communit_2': 'Communit_2', 'Communit_3': 'Communit_3', 'Governor_2': 'Governor_2', 'Governor_3': 'Governor_3', 'AreaText_a': 'AreaText_a', 'AreaText_E': 'AreaText_E', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Roads_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'N_of_the_R': 'N_of_the_R', 'LayerName_': 'LayerName_', 'LayerNam_1': 'LayerNam_1', 'Classifica': 'Classifica', 'Classifi_1': 'Classifi_1', 'RoadType_A': 'RoadType_A', 'RoadType_E': 'RoadType_E', 'Shape__Len': 'Shape__Len', 'Shape__L_1': 'Shape__L_1', 'Shape__L_2': 'Shape__L_2', });
lyr_Publicfacilities_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', 'type': 'type', 'LayerName_': 'LayerName_', 'LayerNam_1': 'LayerNam_1', });
lyr_Mosques_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Governorat': 'Governorat', 'CommunityN': 'CommunityN', 'Commercial': 'Commercial', 'Economic_A': 'Economic_A', 'x': 'x', 'y': 'y', 'LayerName_': 'LayerName_', 'LayerNam_1': 'LayerNam_1', 'image_path': 'image_path', });
lyr_shops_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'shop': 'shop', 'female': 'female', 'name_tr': 'name_tr', 'street_ven': 'street_ven', 'name_it': 'name_it', 'name_pl': 'name_pl', 'start_date': 'start_date', 'contact_we': 'contact_we', 'name_he': 'name_he', 'addr_stree': 'addr_stree', 'addr_str_1': 'addr_str_1', 'website': 'website', 'operator': 'operator', 'email': 'email', 'phone': 'phone', 'opening_ho': 'opening_ho', 'internet_a': 'internet_a', 'addr_str_2': 'addr_str_2', 'addr_house': 'addr_house', 'name_en': 'name_en', 'addr_city': 'addr_city', 'name_ar': 'name_ar', 'name': 'name', });
lyr_Archaeologicalsites_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LayerName_': 'LayerName_', 'LayerNam_1': 'LayerNam_1', 'Archaeolog': 'Archaeolog', 'Archaeol_1': 'Archaeol_1', 'SiteName_A': 'SiteName_A', 'SiteName_E': 'SiteName_E', 'Archaeol_2': 'Archaeol_2', 'Archaeol_3': 'Archaeol_3', 'Region_Ara': 'Region_Ara', 'Region_Eng': 'Region_Eng', 'East__X_': 'East__X_', 'North__Y_': 'North__Y_', 'Image path': 'Image path', });
lyr_Church_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'imges': 'imges', 'Image path': 'Image path', });
lyr_Building_0.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LayerName_': 'TextEdit', 'LayerNam_1': 'TextEdit', 'YearOfCapt': 'TextEdit', 'ValueName_': 'TextEdit', 'ValueNam_1': 'TextEdit', 'CommunityN': 'TextEdit', 'Communit_1': 'TextEdit', 'Governorat': 'TextEdit', 'Governor_1': 'TextEdit', 'Ref_MOLG': 'TextEdit', 'Ref_B': 'TextEdit', 'Communit_2': 'TextEdit', 'Communit_3': 'TextEdit', 'Governor_2': 'TextEdit', 'Governor_3': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jointplanning_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LayerName_': 'TextEdit', 'LayerNam_1': 'TextEdit', 'CommunityN': 'TextEdit', 'Communit_1': 'TextEdit', 'BelnogsTo_': 'TextEdit', 'Governorat': 'TextEdit', 'Governor_1': 'TextEdit', 'PCBS_CO': 'TextEdit', 'Population': 'TextEdit', 'Classifica': 'TextEdit', 'Rank': 'TextEdit', 'Joint_Plan': 'TextEdit', 'Area_Land_': 'TextEdit', 'Communit_2': 'TextEdit', 'Communit_3': 'TextEdit', 'Governor_2': 'TextEdit', 'Governor_3': 'TextEdit', 'AreaText_a': 'TextEdit', 'AreaText_E': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Roads_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'N_of_the_R': 'TextEdit', 'LayerName_': 'TextEdit', 'LayerNam_1': 'TextEdit', 'Classifica': 'TextEdit', 'Classifi_1': 'TextEdit', 'RoadType_A': 'TextEdit', 'RoadType_E': 'TextEdit', 'Shape__Len': 'TextEdit', 'Shape__L_1': 'TextEdit', 'Shape__L_2': 'TextEdit', });
lyr_Publicfacilities_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'LayerName_': 'TextEdit', 'LayerNam_1': 'TextEdit', });
lyr_Mosques_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Governorat': 'TextEdit', 'CommunityN': 'TextEdit', 'Commercial': 'TextEdit', 'Economic_A': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'LayerName_': 'TextEdit', 'LayerNam_1': 'TextEdit', 'image_path': 'ExternalResource', });
lyr_shops_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'shop': 'TextEdit', 'female': 'TextEdit', 'name_tr': 'TextEdit', 'street_ven': 'TextEdit', 'name_it': 'TextEdit', 'name_pl': 'TextEdit', 'start_date': 'TextEdit', 'contact_we': 'TextEdit', 'name_he': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_str_1': 'TextEdit', 'website': 'TextEdit', 'operator': 'TextEdit', 'email': 'TextEdit', 'phone': 'TextEdit', 'opening_ho': 'TextEdit', 'internet_a': 'TextEdit', 'addr_str_2': 'TextEdit', 'addr_house': 'TextEdit', 'name_en': 'TextEdit', 'addr_city': 'TextEdit', 'name_ar': 'TextEdit', 'name': 'TextEdit', });
lyr_Archaeologicalsites_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LayerName_': 'TextEdit', 'LayerNam_1': 'TextEdit', 'Archaeolog': 'TextEdit', 'Archaeol_1': 'TextEdit', 'SiteName_A': 'TextEdit', 'SiteName_E': 'TextEdit', 'Archaeol_2': 'TextEdit', 'Archaeol_3': 'TextEdit', 'Region_Ara': 'TextEdit', 'Region_Eng': 'TextEdit', 'East__X_': 'TextEdit', 'North__Y_': 'TextEdit', 'Image path': 'ExternalResource', });
lyr_Church_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'imges': 'ExternalResource', 'Image path': 'ExternalResource', });
lyr_Building_0.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'LayerName_': 'no label', 'LayerNam_1': 'no label', 'YearOfCapt': 'no label', 'ValueName_': 'no label', 'ValueNam_1': 'no label', 'CommunityN': 'no label', 'Communit_1': 'no label', 'Governorat': 'no label', 'Governor_1': 'no label', 'Ref_MOLG': 'no label', 'Ref_B': 'no label', 'Communit_2': 'no label', 'Communit_3': 'no label', 'Governor_2': 'no label', 'Governor_3': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jointplanning_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'LayerName_': 'no label', 'LayerNam_1': 'no label', 'CommunityN': 'no label', 'Communit_1': 'no label', 'BelnogsTo_': 'no label', 'Governorat': 'no label', 'Governor_1': 'no label', 'PCBS_CO': 'no label', 'Population': 'no label', 'Classifica': 'no label', 'Rank': 'no label', 'Joint_Plan': 'no label', 'Area_Land_': 'no label', 'Communit_2': 'no label', 'Communit_3': 'no label', 'Governor_2': 'no label', 'Governor_3': 'no label', 'AreaText_a': 'no label', 'AreaText_E': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Roads_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'N_of_the_R': 'no label', 'LayerName_': 'no label', 'LayerNam_1': 'no label', 'Classifica': 'no label', 'Classifi_1': 'no label', 'RoadType_A': 'no label', 'RoadType_E': 'no label', 'Shape__Len': 'no label', 'Shape__L_1': 'no label', 'Shape__L_2': 'no label', });
lyr_Publicfacilities_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', 'type': 'no label', 'LayerName_': 'no label', 'LayerNam_1': 'no label', });
lyr_Mosques_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Governorat': 'no label', 'CommunityN': 'no label', 'Commercial': 'no label', 'Economic_A': 'no label', 'x': 'no label', 'y': 'no label', 'LayerName_': 'no label', 'LayerNam_1': 'no label', 'image_path': 'no label', });
lyr_shops_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'shop': 'no label', 'female': 'no label', 'name_tr': 'no label', 'street_ven': 'no label', 'name_it': 'no label', 'name_pl': 'no label', 'start_date': 'no label', 'contact_we': 'no label', 'name_he': 'no label', 'addr_stree': 'no label', 'addr_str_1': 'no label', 'website': 'no label', 'operator': 'no label', 'email': 'no label', 'phone': 'no label', 'opening_ho': 'no label', 'internet_a': 'no label', 'addr_str_2': 'no label', 'addr_house': 'no label', 'name_en': 'no label', 'addr_city': 'no label', 'name_ar': 'no label', 'name': 'no label', });
lyr_Archaeologicalsites_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'LayerName_': 'no label', 'LayerNam_1': 'no label', 'Archaeolog': 'no label', 'Archaeol_1': 'no label', 'SiteName_A': 'no label', 'SiteName_E': 'no label', 'Archaeol_2': 'no label', 'Archaeol_3': 'no label', 'Region_Ara': 'no label', 'Region_Eng': 'no label', 'East__X_': 'no label', 'North__Y_': 'no label', 'Image path': 'no label', });
lyr_Church_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'imges': 'no label', 'Image path': 'no label', });
lyr_Church_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});