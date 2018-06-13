using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NUnit.Framework;
using System.Collections.Generic;

namespace NUnitTestProject
{
    [TestFixture]
    public class NUnitDemo
    {

        LibraryForNUnit.ClassForNUnit target;
      
        [SetUp]
        public void  SetupTest()
        {
            target = new LibraryForNUnit.ClassForNUnit();
        }

        [Test]
        public void Test_ClassForNUnit_Sum()
        {
            int actual, expected = 30;
            actual = target.Sum(12, 18);
            NUnit.Framework.Assert.AreEqual(expected, actual);

        }

        [Test]
        public void Test_ClassForNUnit_Concat()
        {
            string actual, expected = "Hello World ";
            actual = target.Concat("World","");
            NUnit.Framework.Assert.AreEqual(expected, actual);

        }

        [Test]
        public void Test_ClassForNUnit_GetContact()
        {
            LibraryForNUnit.Contact contact = target.GetContact("1");
            IList<LibraryForNUnit.Contact> contacts = target.GetContacts();
        
            //NUnit.Framework.Assert.IsTrue(contacts.Contains(contact));
            NUnit.Framework.CollectionAssert.Contains(contacts, contact);
        }

        [ClassCleanup]
        public void CleanupTest()
        {
            target = null;
        }

    }
}
