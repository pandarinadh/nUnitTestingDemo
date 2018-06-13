using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RepositoryLayer;
using RepositoryLayer;
using BusinessDataModel;

namespace ServiceLayer
{
    public class LogService: IService<Test>
    {
        LogRepository repository;
        public LogService()
        {
            repository = new LogRepository();
        }


        public void SaveLog()
        {
          


          //  repository.SaveChanges("My Exception", "INFO", "TestApplication", "ServiceLayer.LogService");
        }

        public void Validate(Test T)
        {

        }
    }
}
