using ASPNETMVCFilter.Models.Registration;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace ASPNETMVCFilter.Models.Builder
{
    public class RegistrationBuilder
    {
        public RegistrationVM RegistrationVM  { get { return _registrationVM; } set { _registrationVM = value; } }
        public string Instructors { get; set; }

        public RegistrationVM _registrationVM = null;
        public RegistrationBuilder()
        {
            _registrationVM = new RegistrationVM();
        }

        public RegistrationVM BuildRegistrationVMS()
        {
            RegistrationVM.Courses = GetSerializedCoursesVms();
            RegistrationVM.Instructors = GetSerializedInstructorsVM();
            RegistrationVM.Students = GetSerializedStudentVms();

            return RegistrationVM;
        }

        private string GetSerializedCoursesVms()
        {
            var courses = new[]
            {
                new CourseVM { Number ="ZYXW",Name="ASP.NET Overview 1", Instructor = "Dravid" },
                new CourseVM { Number ="VUTS",Name="ASP.NET Overview 2", Instructor = "Dravid" },
                new CourseVM { Number ="RQPO",Name="ASP.NET Overview 3", Instructor = "Dravid" }
            };

            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

            return JsonConvert.SerializeObject(courses, Formatting.None, settings);
        }
        
        private string GetSerializedInstructorsVM()
        {
            var instructors = new[]
            {
                new InstructorsVM { Number ="ZYXW",Subject="ASP.NET Overview 1", Name = "Dravid" },
                new InstructorsVM { Number ="VUTS",Subject="ASP.NET Overview 2", Name = "Dravid" },
                new InstructorsVM { Number ="RQPO",Subject="ASP.NET Overview 3", Name = "Dravid" }
            };

            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

            return JsonConvert.SerializeObject(instructors, Formatting.None, settings);
        }

        private string GetSerializedStudentVms()
        {
            var students = new[]
            {
                new StudentVM { Number ="ZYXW",Name="Student1", Instructor = "Dravid", Course = "Course1"  },
                new StudentVM { Number ="VUTS",Name="Student2", Instructor = "Dravid", Course = "Course2" },
                new StudentVM { Number ="RQPO",Name="Student3", Instructor = "Dravid", Course = "Course3" },
                new StudentVM { Number ="RQPO",Name="Student4", Instructor = "Dravid", Course = "Course3" },
                new StudentVM { Number ="RQPO",Name="Student5", Instructor = "Dravid", Course = "Course3" },
                new StudentVM { Number ="RQPO",Name="Student6", Instructor = "Dravid", Course = "Course3" },
                new StudentVM { Number ="RQPO",Name="Student7", Instructor = "Dravid", Course = "Course3" },
                new StudentVM { Number ="RQPO",Name="Student8", Instructor = "Dravid", Course = "Course3" },
                new StudentVM { Number ="RQPO",Name="Student9", Instructor = "Dravid", Course = "Course3" }
            };

            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

            return JsonConvert.SerializeObject(students, Formatting.None, settings);
        }


    }
}