using db as db from '../db/schema';

service MyService {

    entity college as projection on db.college;
    entity student as projection on db.student;

}