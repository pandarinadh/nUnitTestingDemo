using BusinessDataModel;
using ServiceLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsoleApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            new TestService(null, null).Save(
                new Test {Name = "my Console" + DateTime.Now.ToString(), Address = "my console address" }
                );

            Console.WriteLine("Done");
            Console.ReadLine();

        }
    }
}
