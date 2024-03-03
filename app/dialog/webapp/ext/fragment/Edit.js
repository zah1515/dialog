sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        onPress: function (oEvent, oBindingContext, aSelectedContexts) {
            debugger;
            MessageToast.show("Custom handler invoked.");
            this.loadFragment({
                id: "openpopup",
                name: "dialog.ext.fragment.Edit1",
            }).then(function (oDialog) {
                var id = oEvent.getSource().getParent().getCells()[0].mProperties.text
                var name = oEvent.getSource().getParent().getCells()[1].mProperties.text
                var age = oEvent.getSource().getParent().getCells()[2].mProperties.text
                var address = oEvent.getSource().getParent().getCells()[3].mProperties.text
                var joiningDate = oEvent.getSource().getParent().getCells()[4].mProperties.text

                sap.ui.getCore().byId("openpopup--_IDDialogE").mAggregations.content[0].setValue(id).setEditable(false);
                sap.ui.getCore().byId("openpopup--_IDDialogE").mAggregations.content[1].setValue(name)
                sap.ui.getCore().byId("openpopup--_IDDialogE").mAggregations.content[2].setValue(age)
                sap.ui.getCore().byId("openpopup--_IDDialogE").mAggregations.content[3].setValue(address)
                sap.ui.getCore().byId("openpopup--_IDDialogE").mAggregations.content[4].setValue(joiningDate)


                oDialog.open();
            });
        },
        onCancel: function (oEvent) {
            oEvent.oSource.oParent.destroy();
        },
        onSave: function (oEvent) {
            debugger
            var oContent = oEvent.oSource.oParent.mAggregations.content;
            var studId, studName, studAge, studAddress, joiningDate;
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
                    case "openpopup--DateInput":
                        joiningDate = contol.mProperties.value;
                    default:
                        break;
                }
            })
            console.log(studId);
            console.log(studName);
            console.log(studAge);
            console.log(studAddress);
            console.log(joiningDate);

            var data = {
                studentId: studId,
                studentName: studName,
                studentAge: studAge,
                studentAddress: studAddress,
                joiningDate: joiningDate
            }
            var stringeData = JSON.stringify(data);
            var url = '/odata/v4/student-dervice/student/' + studId;

            $.ajax({
                url:url,
                type:'PUT',
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
            this.refresh();
            oEvent.oSource.oParent.destroy();
        }
    };
});
