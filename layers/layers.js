var wms_layers = [];

var format_sinai2017_0 = new ol.format.GeoJSON();
var features_sinai2017_0 = format_sinai2017_0.readFeatures(json_sinai2017_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sinai2017_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sinai2017_0.addFeatures(features_sinai2017_0);
var lyr_sinai2017_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sinai2017_0, 
                style: style_sinai2017_0,
                interactive: false,
    title: 'sinai2017<br />\
    <img src="styles/legend/sinai2017_0_0.png" /> 6932 - 83001<br />\
    <img src="styles/legend/sinai2017_0_1.png" /> 83001 - 119781<br />\
    <img src="styles/legend/sinai2017_0_2.png" /> 119781 - 259105<br />\
    <img src="styles/legend/sinai2017_0_3.png" /> 259105 - 621061<br />\
    <img src="styles/legend/sinai2017_0_4.png" /> 621061 - 1303993<br />'
        });

lyr_sinai2017_0.setVisible(true);
var layersList = [lyr_sinai2017_0];
lyr_sinai2017_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Gov_A_Name': 'Gov_A_Name', 'GOV_CODE': 'GOV_CODE', 'Orientatio': 'Orientatio', 'Degree': 'Degree', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Gov_A_Na_1': 'Gov_A_Na_1', 'GOV_CODE_1': 'GOV_CODE_1', 'male': 'male', 'female': 'female', 'total': 'total', });
lyr_sinai2017_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Gov_A_Name': 'TextEdit', 'GOV_CODE': 'TextEdit', 'Orientatio': 'TextEdit', 'Degree': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Gov_A_Na_1': 'TextEdit', 'GOV_CODE_1': 'TextEdit', 'male': 'TextEdit', 'female': 'TextEdit', 'total': 'TextEdit', });
lyr_sinai2017_0.set('fieldLabels', {'OBJECTID': 'no label', 'Gov_A_Name': 'inline label', 'GOV_CODE': 'no label', 'Orientatio': 'no label', 'Degree': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Gov_A_Na_1': 'no label', 'GOV_CODE_1': 'no label', 'male': 'inline label', 'female': 'inline label', 'total': 'inline label', });
lyr_sinai2017_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});