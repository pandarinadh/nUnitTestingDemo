using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPNETMVCFilter.Controllers.Filters
{
    public class CustomAuthorizationAttribute : FilterAttribute, IAuthorizationFilter
    {
       

        public void OnAuthorization(AuthorizationContext filterContext)
        {
            filterContext.Controller.ViewBag.OnAuthorization = "IAuthorizationFilter.OnAuthorization filter called";
        }
    }
}