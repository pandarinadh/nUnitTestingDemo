using BusinessDataModel;
using RepositoryLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer
{
   public class TestService : IService<Test>
    {
        IRepository<Test> _repository;
        IService<Test> _validationService;
        public TestService(IRepository<Test> repository, IService<Test> validationService)
        {
            if (repository != null)
            {
                this._repository = repository;
            }
            else
            {
                this._repository = new TestRepository();
            }

            if (validationService != null)
            {
                this._validationService = validationService;
            }
            else
            {
                this._validationService = new ValidationService();
            }
        }


        public Test Save(Test t)
        {

            _validationService.Validate(t);

            Test test = this._repository.Save(t);

            if (test == null)
                throw new Exception();

           

            //Test test = null;
            ////this._repository.Save(t);

            return test;
        }

        public Test Save(IList<Test> list)
        {
            Test test = null;
            foreach (var t in list)
            {
                 test = this._repository.Save(t);
            }

            return test;
        }

        public void Validate(Test T)
        {

        }
    }
}
