"use strict";
const kvss = [
    {
        English: 90,
        Science: 89,
        History: 89,
        Math: 90,
        Swahil: 34,
    },
    {
        English: 90,
        Science: 89,
        History: 89,
        Math: 90,
        Swahil: 34,
    },
];
for (const s in kvss) {
    console.log(" subject :", kvss[s].English);
}
const UpdatedAssignment = (assign, propstoUpdate) => {
    return Object.assign(Object.assign({}, assign), propstoUpdate);
};
// from assigned assignment , we need to update grade from 34 to 90
const assignedData = UpdatedAssignment({ id: "12", title: "Kvss", grade: 34, verified: false }, { grade: 90, title: "kvss updated .." });
console.log(assignedData);
const studentKvss = [
    {
        id: "1",
        title: "Kvss student",
        grade: 12,
        verified: true,
    },
    {
        id: "2",
        title: "Kvss student",
        grade: 34,
        verified: false,
    },
];
