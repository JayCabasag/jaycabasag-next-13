import moment from 'moment'
export const calculateAge = (birthdate: string) => {
    const now = moment();
    const dob = moment(birthdate);
    const ageInYears = now.diff(dob, 'years');
    return ageInYears;
}