using ASPNETMVCFilter.Models.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPNETMVCFilter.Controllers
{
    public class RegistrationController : Controller
    {
        private RegistrationBuilder registrationBuilder = new RegistrationBuilder();
        // GET: Registration
        public ActionResult Index()
        {
            return View(registrationBuilder.BuildRegistrationVMS());
        }
    }
}