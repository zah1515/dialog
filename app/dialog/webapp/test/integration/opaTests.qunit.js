sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'dialog/test/integration/FirstJourney',
		'dialog/test/integration/pages/studentList',
		'dialog/test/integration/pages/studentObjectPage'
    ],
    function(JourneyRunner, opaJourney, studentList, studentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('dialog') + '/index.html'
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