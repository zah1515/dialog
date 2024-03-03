using studentDervice as service from '../../srv/service';

annotate service.student with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'studentId',
            Value : studentId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'studentName',
            Value : studentName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'studentAge',
            Value : studentAge,
        },
        {
            $Type : 'UI.DataField',
            Label : 'studentAddress',
            Value : studentAddress,
        },
        {
            $Type : 'UI.DataField',
            Value : joiningDate,
            Label : 'joiningDate',
        },
    ]
);
annotate service.student with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'studentId',
                Value : studentId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'studentName',
                Value : studentName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'studentAge',
                Value : studentAge,
            },
            {
                $Type : 'UI.DataField',
                Label : 'studentAddress',
                Value : studentAddress,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
