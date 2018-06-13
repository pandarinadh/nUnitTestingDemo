using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryForNUnit
{
    public class ClassForNUnit
    {
        public int Sum(int i, int j)
        {
            return i + j;
        }
        public string Concat(string str1, string str2)
        {
            return "Hello " + str1 + " " + str2;
        }
        public int Sum(int[] i)
        {
            int res = 0;
            for (int a = 0; a < i.Length; a++)
            {
                res += i[a];
            }
            return res;
        }

        public IList<Contact> GetContacts()
        {
            IList<Contact> lst = new List<Contact>();
            lst.Add(new Contact { Id = "1", Name = "ONE" });
            lst.Add(new Contact { Id = "2", Name = "TWO" });
            lst.Add(new Contact { Id = "3", Name = "THREE" });

            return lst;
        }

        public Contact GetContact(string id)
        {
            var lst = GetContacts();
            return lst.FirstOrDefault(r => r.Id.Equals(id));
        }
    }

    public class Contact
    {
        public string Id;

        public string Name;
    }
}
