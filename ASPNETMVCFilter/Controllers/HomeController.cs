using ASPNETMVCFilter.Controllers.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPNETMVCFilter.Controllers
{
    public class HomeController : Controller
    {
        [CustomAuthorization]
        [CustomActionAtrribute]
        [CustomResultAttribute]
        [CustomExceptionAttribute]
        [HandleError(View="Error")]
        public ActionResult Index()
        {
         
            ViewBag.Message = "Index Action of Home controller is being called.";
            return View();
        }
        [CustomAuthorization]
        [CustomActionAtrribute]
        [CustomResultAttribute]
        [CustomExceptionAttribute]
        [HandleError(View = "Error")]
        public ActionResult About()
        {
            throw new Exception("my message");
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}