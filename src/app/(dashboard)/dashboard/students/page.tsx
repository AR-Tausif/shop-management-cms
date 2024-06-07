import Link from "next/link";
import StudentsTable from "@/components/all-student/StudentsTable";
import FormHeadingContent from "@/components/FormHeadingContent";



const AllStudentsPage = () => {

  return (
    <div className="h-screen px-5 pb-5">
      <FormHeadingContent title="All students" desc="Here listed all students from our server." csName="text-center pb-5" />
      <StudentsTable/>
    </div>
  );
};

export default AllStudentsPage;
