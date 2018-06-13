using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LibraryForNUnit;
using NUnit.Framework;
using Moq;
using RepositoryLayer;
using ServiceLayer;
using BusinessDataModel;

namespace NUnitTestProject
{
    [TestFixture]
    public class TestRepositoryDemo
    {
        [Test]
        public void TestService_Save_Single_Method()
        {
           //Arrage
            var mockTestRepository = new Moq.Mock<IRepository<Test>>();

            var mockValidationService = new Moq.Mock<IService<Test>>();

            Test test = new BusinessDataModel.Test { Name = "my mock", Address = "my mock address" };

            mockTestRepository.Setup(x => x.Save(It.IsAny<BusinessDataModel.Test>()))
                .Returns(() => null);

            mockValidationService.Setup(x => x.Validate(It.IsAny<BusinessDataModel.Test>()));

            TestService testService = new TestService(mockTestRepository.Object, mockValidationService.Object);
           
            //Act
           testService.Save(test);

            //Assert
            mockTestRepository.Verify(x => x.Save(It.IsAny<BusinessDataModel.Test>()));
            mockValidationService.Verify(x => x.Validate(It.IsAny<BusinessDataModel.Test>()));
        }

        [Test]
        public void TestService_Save_List_Method()
        {
            //Arrage
            var mockTestRepository = new Moq.Mock<IRepository<Test>>();
            var mockValidationService = new Moq.Mock<IService<Test>>();

            var list = new List<Test>() {
                new BusinessDataModel.Test { Name = "my mock", Address = "my mock address" },
                new BusinessDataModel.Test { Name = "my mock", Address = "my mock address" },
                new BusinessDataModel.Test { Name = "my mock", Address = "my mock address" },
                };
                
               
            mockTestRepository.Setup(x => x.Save(It.IsAny<BusinessDataModel.Test>()));

            TestService testService = new TestService(mockTestRepository.Object, mockValidationService.Object);

            //
            //Act
            testService.Save(list);

            //Assert
            mockTestRepository.Verify(x => x.Save(It.IsAny<BusinessDataModel.Test>()), Times.Exactly(list.Count));
        }



        #region comment
        /*  mockTestRepository.Verify(x => x.Save(
                 It.Is<BusinessDataModel.Test>(t => t.Name.Equals("my mock"))             
                 ));

            mockTestRepository.Verify(x => x.Save(
                 It.Is<BusinessDataModel.Test>(t => t.Address.Equals("my mock"))
                 ));*/

        #endregion comment
    }
}
