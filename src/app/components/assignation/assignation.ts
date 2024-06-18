export class Assignation {
  private classroomId!:string;
   private subjectId!:string;
   private studentsIds!:any;
   constructor(classroomId :string , subjectId: string, studentsIds:any) {
    this.classroomId = classroomId;
    this.studentsIds = studentsIds;
    this.subjectId = subjectId;
    }

}
