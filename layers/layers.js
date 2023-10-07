var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_STOrtofotocolor2020_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2020",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "[ST] Ortofoto color [2020]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2020_1, 0]);
var format_Positiuscabrilspositius_cabrils_2 = new ol.format.GeoJSON();
var features_Positiuscabrilspositius_cabrils_2 = format_Positiuscabrilspositius_cabrils_2.readFeatures(json_Positiuscabrilspositius_cabrils_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Positiuscabrilspositius_cabrils_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Positiuscabrilspositius_cabrils_2.addFeatures(features_Positiuscabrilspositius_cabrils_2);
var lyr_Positiuscabrilspositius_cabrils_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Positiuscabrilspositius_cabrils_2, 
                style: style_Positiuscabrilspositius_cabrils_2,
                interactive: true,
                title: '<img src="styles/legend/Positiuscabrilspositius_cabrils_2.png" /> Positius cabrils — positius_cabrils'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_STOrtofotocolor2020_1,],
                                title: "Mapas de fondo"});

lyr_GoogleSatellite_0.setVisible(true);lyr_STOrtofotocolor2020_1.setVisible(true);lyr_Positiuscabrilspositius_cabrils_2.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_Positiuscabrilspositius_cabrils_2];
lyr_Positiuscabrilspositius_cabrils_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', });
lyr_Positiuscabrilspositius_cabrils_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area': 'Range', });
lyr_Positiuscabrilspositius_cabrils_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', });
lyr_Positiuscabrilspositius_cabrils_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});