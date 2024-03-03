sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'treeexpand/test/integration/FirstJourney',
		'treeexpand/test/integration/pages/studentList',
		'treeexpand/test/integration/pages/studentObjectPage'
    ],
    function(JourneyRunner, opaJourney, studentList, studentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('treeexpand') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThestudentList: studentList,
					onThestudentObjectPage: studentObjectPage
                }
            },
            opaJourney.run
        );
    }
);