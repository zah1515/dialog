namespace db.dialog;

entity student{
    key studentId : String(10);
    studentName : String(30);
    studentAge : String(3);
    studentAddress : String(50);
    joiningDate : Date;
}