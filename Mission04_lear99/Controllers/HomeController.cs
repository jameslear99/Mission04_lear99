using Microsoft.AspNetCore.Mvc;
using Mission04_lear99.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_lear99.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //for initially displaying the page
        [HttpGet]
        public IActionResult GradeCalc()
        {
            return View();
        }

        //for handling post requests
        [HttpPost]
        public IActionResult GradeCalc(GradeCalcModel model)
        {
            return View();
        }
    }
}
