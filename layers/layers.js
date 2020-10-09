var wms_layers = [];

var lyr_GE2008AppraisalMAP_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "GE2008 Appraisal MAP",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GE2008AppraisalMAP_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13954049.727005, 7108363.013795, -13942426.106127, 7115919.759778]
                            })
                        });
var lyr_GE2008_CruisePlan_Blk1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "GE2008_CruisePlan_Blk1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GE2008_CruisePlan_Blk1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13952186.775433, 7110777.784114, -13947870.148430, 7113407.998996]
                            })
                        });
var lyr_GE2008_CruisePlan_Blk2_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "GE2008_CruisePlan_Blk2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GE2008_CruisePlan_Blk2_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13950147.581826, 7109914.117625, -13945830.767242, 7112545.151575]
                            })
                        });
var lyr_GE2008_CruisePlan_Blk3_rev1_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "GE2008_CruisePlan_Blk3_rev1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GE2008_CruisePlan_Blk3_rev1_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13948346.606967, 7109857.091164, -13944029.239896, 7112489.078593]
                            })
                        });
var lyr_GE2008_CruisePlan_Blk5_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "GE2008_CruisePlan_Blk5",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GE2008_CruisePlan_Blk5_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13946131.995994, 7111318.500011, -13941813.107841, 7113952.161029]
                            })
                        });

lyr_GE2008AppraisalMAP_0.setVisible(true);lyr_GE2008_CruisePlan_Blk1_1.setVisible(true);lyr_GE2008_CruisePlan_Blk2_2.setVisible(true);lyr_GE2008_CruisePlan_Blk3_rev1_3.setVisible(true);lyr_GE2008_CruisePlan_Blk5_4.setVisible(true);
var layersList = [lyr_GE2008AppraisalMAP_0,lyr_GE2008_CruisePlan_Blk1_1,lyr_GE2008_CruisePlan_Blk2_2,lyr_GE2008_CruisePlan_Blk3_rev1_3,lyr_GE2008_CruisePlan_Blk5_4];
