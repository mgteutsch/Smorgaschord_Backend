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
        public ApplicationDbContext _context;

        public CustomLessonContainerController()
        {
            _context = new ApplicationDbContext();
        }

        [Route("api/CustomLessonTitle")]
        [HttpGet]
        public List<CustomLessonContainer> GetAllLessonTitles()
        {
            return _context.CustomLessonContainers.ToList();
        }

        [Route("api/CustomLessonTitle/{specificLessonId}")]
        [HttpGet]
        public CustomLessonContainer GetSpecificLessonContainer(int specificLessonId)
        {
            return _context.CustomLessonContainers.Find(specificLessonId);
        }

        [Route("api/CustomLessonTitle")]
        [HttpPost]
        public CustomLessonContainer AddCustomLessonTitle(CustomLessonContainer newTitle)
        {
            _context.CustomLessonContainers.Add(newTitle);
            _context.SaveChanges();
            return newTitle;
        }

        [Route("api/CustomLessonTitle/{containerId}")]
        [HttpDelete]
        public void DeleteCustomLessonByTitle(int containerId)
        {
            CustomLessonContainer targetedLessonContainer = _context.CustomLessonContainers.Find(containerId);
            _context.CustomLessonContainers.Remove(targetedLessonContainer);
            _context.SaveChanges();
        }
    }
}
