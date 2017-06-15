using Smorgaschord_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Smorgaschord_Backend.Controllers
{
    public class CustomLessonContainerController : ApiController
    {
        private ApplicationDbContext _context;

        public CustomLessonContainerController()
        {
            _context = new ApplicationDbContext();
        }

        [Route("api/CustomLessonTitle")]
        [HttpPost]
        public void AddCustomLessonTitle(CustomLessonContainer newTitle)
        {
            _context.CustomLessonContainers.Add(newTitle);
            _context.SaveChanges();
        }
    }
}
