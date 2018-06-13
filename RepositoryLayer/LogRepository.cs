using EntityDataModel;

using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer
{
    public class LogRepository 
    {
        public void SaveChanges(string excepiton, string level, string message, string logger)
        {
            //using (var context = new DynamicReportsContext())
            //{
            //    context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[Log] ON");


            //    Log log = new Log
            //    {
            //       // Id = 2,
            //        Date = DateTime.Now,
            //        Exception = excepiton,
            //  Level = level,
            //  Message = message,
            //  Logger = logger,
            //  Thread = "8"
            //    };

            //    context.Logs.Add(log);
            //    context.Entry(log).State = System.Data.Entity.EntityState.Added;
            //    context.SaveChanges();

            //    context.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[Log] OFF");
            //}
        }
      
    }
}
