export function normalizePhone(phone:string):string {
    const digitsOnly = phone.replace(/\D/g,"");

    if (digitsOnly.startsWith("254")){
        return digitsOnly;
    }

    if (digitsOnly.startsWith("0")){
        return `254${digitsOnly.slice(1)}`;
    }
    return `254${digitsOnly}`;
}