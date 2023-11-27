type subjects = "Math" | "English" | "Science" | "History" | "Swahil";

type StudentSubject = Record<subjects, number>[];

const kvss: StudentSubject = [
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

interface Assignment {
  id: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const UpdatedAssignment = (
  assign: Assignment,
  propstoUpdate: Partial<Assignment>
) => {
  return { ...assign, ...propstoUpdate };
};

// from assigned assignment , we need to update grade from 34 to 90
const assignedData = UpdatedAssignment(
  { id: "12", title: "Kvss", grade: 34, verified: false },
  { grade: 90, title: "kvss updated .." }
);
console.log(assignedData);

// Pick
type assignmTitle = Pick<Assignment, "title">;
type assignmGrade = Pick<Assignment, "grade">;

type AssArr = Assignment[];

const studentKvss: AssArr = [
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

// Omit
type AssignPreview = Omit<Assignment, "grade" | "title">



