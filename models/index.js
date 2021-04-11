import { Appointments } from "./appointments.js";
import { Doctors } from "./doctors.js";
import { Users } from "./users.js";


Users.hasMany(Appointments, { foreignKey: 'usersId' });

Doctors.hasMany(Appointments, { foreignKey: 'doctorsId' });

Appointments.belongsTo(Users, { foreignKey: 'usersId' });

Appointments.belongsTo(Doctors, { foreignKey: 'doctorsId' });


export { Users, Doctors, Appointments }