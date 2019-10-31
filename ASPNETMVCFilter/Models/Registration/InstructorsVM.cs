using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ASPNETMVCFilter.Models.Registration
{
    public class InstructorsVM
    {
        public string Number { get; set; }
        public string Name { get; set; }
        public string Subject { get; set; }

        public List<StudentVM> Students { get; set; }
    }
}