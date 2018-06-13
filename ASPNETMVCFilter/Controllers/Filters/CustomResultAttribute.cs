using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPNETMVCFilter.Controllers.Filters
{
    public class CustomResultAttribute : FilterAttribute, IResultFilter
    {
        public void OnResultExecuted(ResultExecutedContext filterContext)
        {
            filterContext.Controller.ViewBag.OnResultExecuted = "IResultFilter.OnResultExecuted filter called";
        }

        public void OnResultExecuting(ResultExecutingContext filterContext)
        {
            filterContext.Controller.ViewBag.OnResultExecuting = "IResultFilter.OnResultExecuting filter called";
        }
    }
}