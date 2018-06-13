using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryForNUnit
{

    public interface IMailer
    {
        string From { get; set; }
        string To { get; set; }
        string Subject { get; set; }
        string Body { get; set; }

        bool SendMail(IMailClient mailClient);
    }
    public interface IMailClient
    {
        string Server { get; set; }
        string Port { get; set; }

        bool SendMail(string from, string to, string subject, string body);
    }
   public class DefaultMailer : IMailer
    {
        public string From { get; set; }
        public string To { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }

        public bool SendMail(IMailClient mailClient)
        {
            mailClient.SendMail(this.From, this.To, this.Subject, this.Body);
            return true;
        }
    }

    public class MailImplementation : IMailClient
    {
        public string Server { get; set; }
        public string Port { get; set; }
        public bool SendMail(string from, string to, string subject, string body)
        {
            string str = from + to + subject;
            string str1 = str + body;
            return true;
        }
    }
}
