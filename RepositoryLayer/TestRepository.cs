using BusinessDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer
{
    public class TestRepository : BaseRepository<Test>, IRepository<Test>
    {
        public Test Save(Test businessModel)
        {
            EntityDataModel.Test entity = new EntityDataModel.Test
            {
                Name = businessModel.Name,
                Address = businessModel.Address
            };

            Context.Tests.Add(entity);

            Context.SaveChanges();

            ToBusinessModal(entity, businessModel);
            return businessModel;
        }

        public Test ToBusinessModal(EntityDataModel.Test entity, BusinessDataModel.Test businessModel)
        {
            businessModel.Id = entity.Id;
            businessModel.Name = entity.Name;
            businessModel.Address = entity.Address;
            return businessModel;
        }
    }
}
