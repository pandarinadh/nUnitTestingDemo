using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json.Serialization;

namespace ASPNETMVCFilter.Controllers
{
    public class CoursesController : Controller
    {
        // GET: Course
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult FromCode()
        {
            string str = GetSerializedCouseVms();
            return View("FromCode","",str);
        }

        // GET: Course/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Course/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Course/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Course/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Course/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Course/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Course/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        private string GetSerializedCouseVms()
        {
            var courses = new[]
            {
                new CourseVM { Number ="ZYXW",Name="ASP.NET Overview 1", Instructor = "Dravid" },
                new CourseVM { Number ="VUTS",Name="ASP.NET Overview 2", Instructor = "Dravid" },
                new CourseVM { Number ="RQPO",Name="ASP.NET Overview 3", Instructor = "Dravid" }
            };

            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };

            return JsonConvert.SerializeObject(courses,Formatting.None, settings);
        }

        public class CourseVM
        {
            public string Number { get; set; }
            public string Name { get; set; }
            public string Instructor { get; set; }

        }
    }
}
