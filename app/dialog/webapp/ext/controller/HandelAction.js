sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        handelpopup: function (oEvent, oBindingContext, aSelectedContexts) {
            MessageToast.show("Custom handler invoked.");
            debugger;
            this.loadFragment({
                id: "openpopup",
                name: "dialog.ext.fragment.HandelAction",
            }).then(function (oDialog) {
                oDialog.open();
            });
        },
        onCancel: function (oEvent) {
            oEvent.oSource.oParent.destroy();
        },
        onSave: function (oEvent) {
            debugger;
            var oContent = oEvent.oSource.oParent.mAggregations.content;
            var studId, studName, studAge, studAddress;
            oContent.forEach(function (contol) {
                switch (contol.sId) {
                    case "openpopup--idInput1":
                        studId = contol.mProperties.value;
                        break;
                    case "openpopup--nameInput1":
                        studName = contol.mProperties.value;
                        break;
                    case "openpopup--ageInput":
                        studAge = contol.mProperties.value;
                        break;
                    case "openpopup--addressInput":
                        studAddress = contol.mProperties.value;
                        break;

                    default:
                        break;
                }
            })
            console.log(studId);
            console.log(studName);
            console.log(studAge);
            console.log(studAddress);


            var data = {
                studentId: studId,
                studentName: studName,
                studentAge: studAge,
                studentAddress: studAddress
            }
            var stringeData = JSON.stringify(data);
            var url = '/odata/v4/student-dervice/student';
            $.ajax({
                url:url,
                type:'POST',
                contentType: 'application/json',
                data:stringeData,
                success:function(data){
                    console.log("Data saved successfully:", data);
                },
                error: function(jqXHR, textStatus, errorThrown){
                    console.error("Error:", jqXHR, textStatus, errorThrown);
                    debugger;
                }
            })
            oEvent.oSource.oParent.destroy();
            this.refresh();
        },
    };
});
