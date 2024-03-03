using db.dialog as db from '../db/schema';

service studentDervice {
    
    entity student as projection on db.student;

}
