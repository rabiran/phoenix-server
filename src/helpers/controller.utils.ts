import kartoffelAPI from './kartoffel.api';

export default class Utils {

    static async materialTableData(person: any){
        let manages;
        if(person.responsibilityLocation){
            const group = await kartoffelAPI.getGroup(person.responsibilityLocation);
            manages = group.name;
        }
        return { id: person.id , name: person.fullName, number: person.personalNumber || 'none',
            unit: person.currentUnit || 'none' , rank: person.rank || 'none', manages: manages || 'none' }
    }
}

// const what = async (groupid:string)=> {
//     let hierarchy:string;
//     const group = await kartoffelAPI.getGroup(groupid);
//     for(let item of group.hierarchy){
//         hierarchy += '/'+item;
//     }
//     return hierarchy;
// }