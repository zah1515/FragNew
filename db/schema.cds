namespace db;

entity college{
    key collegeId : String(10);
    collegeName : String(20);
    collegeType : String(20);
    collegeAddress : String(30);
}

entity student{
    key studentId : String(10);
    collegeId : String(10);
    studentName : String(20);
    studentAge : String(3);
    phone : String(10);
    studentAddress : String(30);
}