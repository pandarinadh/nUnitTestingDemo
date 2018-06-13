using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LibraryForNUnit;
using NUnit.Framework;
using Moq;

namespace NUnitTestProject
{
    [TestFixture]
    public class MoqUnitDemo
    {
        [Test]
        public void SendMailTestFixture()
        {
            //Arrage
            var mockMailClient = new Moq.Mock<IMailClient>();

            mockMailClient.SetupProperty(client => client.Server, "chat.mail.com").SetupProperty(client => client.Port, "1212");

            mockMailClient.Setup(client => client.SendMail(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>())).Returns(true);

            IMailer mailer= new DefaultMailer() { From = "from@mail.com", To = "to@mail.com", Subject = "Using Moq", Body = "Moq is awesome" };

            //Act
            var result = mailer.SendMail(mockMailClient.Object);

            //Assert
            Assert.IsTrue(result);
            mockMailClient.Verify(client => client.SendMail(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()), Times.Once);


        }
    }
}
