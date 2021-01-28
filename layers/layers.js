var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Terlet_1 = new ol.format.GeoJSON();
var features_Terlet_1 = format_Terlet_1.readFeatures(json_Terlet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terlet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terlet_1.addFeatures(features_Terlet_1);
var lyr_Terlet_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Terlet_1, 
                style: style_Terlet_1,
                interactive: false,
    title: 'Terület<br />\
    <img src="styles/legend/Terlet_1_0.png" /> 1 - 15 <br />\
    <img src="styles/legend/Terlet_1_1.png" /> 15 - 27 <br />\
    <img src="styles/legend/Terlet_1_2.png" /> 27 - 42 <br />\
    <img src="styles/legend/Terlet_1_3.png" /> 42 - 60 <br />\
    <img src="styles/legend/Terlet_1_4.png" /> 60 - 86 <br />\
    <img src="styles/legend/Terlet_1_5.png" /> 86 - 128 <br />\
    <img src="styles/legend/Terlet_1_6.png" /> 128 - 189 <br />\
    <img src="styles/legend/Terlet_1_7.png" /> 189 - 285 <br />\
    <img src="styles/legend/Terlet_1_8.png" /> 285 - 371 <br />\
    <img src="styles/legend/Terlet_1_9.png" /> 371 - 525 <br />'
        });
var format_Npessg_2 = new ol.format.GeoJSON();
var features_Npessg_2 = format_Npessg_2.readFeatures(json_Npessg_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Npessg_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Npessg_2.addFeatures(features_Npessg_2);
var lyr_Npessg_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Npessg_2, 
                style: style_Npessg_2,
                interactive: true,
    title: 'Népesség<br />\
    <img src="styles/legend/Npessg_2_0.png" /> 9 - 1374 <br />\
    <img src="styles/legend/Npessg_2_1.png" /> 1374 - 3845 <br />\
    <img src="styles/legend/Npessg_2_2.png" /> 3845 - 8476 <br />\
    <img src="styles/legend/Npessg_2_3.png" /> 8476 - 15866 <br />\
    <img src="styles/legend/Npessg_2_4.png" /> 15866 - 26361 <br />\
    <img src="styles/legend/Npessg_2_5.png" /> 26361 - 47337 <br />\
    <img src="styles/legend/Npessg_2_6.png" /> 47337 - 76528 <br />\
    <img src="styles/legend/Npessg_2_7.png" /> 76528 - 124743 <br />\
    <img src="styles/legend/Npessg_2_8.png" /> 124743 - 203493 <br />\
    <img src="styles/legend/Npessg_2_9.png" /> 203493 - 1693051 <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Terlet_1.setVisible(true);lyr_Npessg_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Terlet_1,lyr_Npessg_2];
lyr_Terlet_1.set('fieldAliases', {'Megnevezé': 'Megnevezé', 'terület': 'terület', 'férfiak': 'férfiak', 'nők': 'nők', 'népesség': 'népesség', });
lyr_Npessg_2.set('fieldAliases', {'Megnevezé': 'Megnevezé', 'terület': 'terület', 'férfiak': 'férfiak', 'nők': 'nők', 'népesség': 'népesség', });
lyr_Terlet_1.set('fieldImages', {'Megnevezé': 'TextEdit', 'terület': 'TextEdit', 'férfiak': 'TextEdit', 'nők': 'TextEdit', 'népesség': 'TextEdit', });
lyr_Npessg_2.set('fieldImages', {'Megnevezé': 'TextEdit', 'terület': 'TextEdit', 'férfiak': 'TextEdit', 'nők': 'TextEdit', 'népesség': 'TextEdit', });
lyr_Terlet_1.set('fieldLabels', {'Megnevezé': 'no label', 'terület': 'no label', 'férfiak': 'no label', 'nők': 'no label', 'népesség': 'no label', });
lyr_Npessg_2.set('fieldLabels', {'Megnevezé': 'header label', 'terület': 'inline label', 'férfiak': 'inline label', 'nők': 'inline label', 'népesség': 'inline label', });
lyr_Npessg_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});