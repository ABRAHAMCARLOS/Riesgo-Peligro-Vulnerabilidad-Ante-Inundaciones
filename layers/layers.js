var wms_layers = [];


        var lyr_GloogleMaps_0 = new ol.layer.Tile({
            'title': 'Gloogle Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_SATELITAL_1 = new ol.layer.Tile({
            'title': 'SATELITAL',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Vulnerabilidad_2 = new ol.format.GeoJSON();
var features_Vulnerabilidad_2 = format_Vulnerabilidad_2.readFeatures(json_Vulnerabilidad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vulnerabilidad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vulnerabilidad_2.addFeatures(features_Vulnerabilidad_2);
var lyr_Vulnerabilidad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vulnerabilidad_2, 
                style: style_Vulnerabilidad_2,
                interactive: true,
    title: 'Vulnerabilidad<br />\
    <img src="styles/legend/Vulnerabilidad_2_0.png" /> 0.0001 - 0.1091<br />\
    <img src="styles/legend/Vulnerabilidad_2_1.png" /> 0.1091 - 0.1383<br />\
    <img src="styles/legend/Vulnerabilidad_2_2.png" /> 0.1383 - 0.1615<br />\
    <img src="styles/legend/Vulnerabilidad_2_3.png" /> 0.1615 - 0.185<br />\
    <img src="styles/legend/Vulnerabilidad_2_4.png" /> 0.185 - 0.4244<br />'
        });
var lyr_PeligroInundacion_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Peligro Inundacion",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PeligroInundacion_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11280123.883189, 2222908.902841, -11252599.604285, 2245754.204563]
                            })
                        });
var lyr_PeligroPluvial_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Peligro Pluvial",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PeligroPluvial_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11280123.883189, 2222908.902841, -11252599.604285, 2245754.204563]
                            })
                        });
var lyr_PeligroFluvial_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Peligro Fluvial",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PeligroFluvial_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11280123.883189, 2222908.902841, -11252599.604285, 2245754.204563]
                            })
                        });
var lyr_RiesgoInundacionNormalizado_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Riesgo Inundacion Normalizado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RiesgoInundacionNormalizado_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11280123.883192, 2222908.902845, -11252599.604288, 2245754.204561]
                            })
                        });
var lyr_RiesgoPluvialNormalizado_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Riesgo Pluvial Normalizado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RiesgoPluvialNormalizado_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11280123.883192, 2222908.902845, -11252599.604288, 2245754.204561]
                            })
                        });
var lyr_RiesgoFluvialNormalizado_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Riesgo Fluvial Normalizado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RiesgoFluvialNormalizado_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11280123.883192, 2222908.902845, -11252599.604288, 2245754.204561]
                            })
                        });

lyr_GloogleMaps_0.setVisible(true);lyr_SATELITAL_1.setVisible(true);lyr_Vulnerabilidad_2.setVisible(true);lyr_PeligroInundacion_3.setVisible(true);lyr_PeligroPluvial_4.setVisible(true);lyr_PeligroFluvial_5.setVisible(true);lyr_RiesgoInundacionNormalizado_6.setVisible(true);lyr_RiesgoPluvialNormalizado_7.setVisible(true);lyr_RiesgoFluvialNormalizado_8.setVisible(true);
var layersList = [lyr_GloogleMaps_0,lyr_SATELITAL_1,lyr_Vulnerabilidad_2,lyr_PeligroInundacion_3,lyr_PeligroPluvial_4,lyr_PeligroFluvial_5,lyr_RiesgoInundacionNormalizado_6,lyr_RiesgoPluvialNormalizado_7,lyr_RiesgoFluvialNormalizado_8];
lyr_Vulnerabilidad_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'TIPOMZA': 'TIPOMZA', 'AREA': 'AREA', 'U4_VULNE': 'U4_VULNE', });
lyr_Vulnerabilidad_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'TIPOMZA': 'TextEdit', 'AREA': 'TextEdit', 'U4_VULNE': 'TextEdit', });
lyr_Vulnerabilidad_2.set('fieldLabels', {'CVEGEO': 'header label', 'TIPOMZA': 'header label', 'AREA': 'header label', 'U4_VULNE': 'header label', });
lyr_Vulnerabilidad_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});