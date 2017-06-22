using Smorgaschord_Backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Smorgaschord_Backend.Controllers
{
    public class CustomLessonContentController : ApiController
    {
        public ApplicationDbContext _context;

        public CustomLessonContentController()
        {
            _context = new ApplicationDbContext();
        }

        // Custom Lesson Songs ***************************************************************
        [Route("api/CustomLessonSongContent/{theLessonId}")]
        [HttpGet]
        public List<CustomLessonSongContent> GetSongDataForLesson(int theLessonId)
        {
            var theSpecificLessonContainer = _context.CustomLessonContainers.FirstOrDefault(x => x.Id == theLessonId);
            return theSpecificLessonContainer.LessonContentItems;
        }

        [Route("api/CustomLessonSongContent")]
        [HttpPost]
        public void AddSong(CustomLessonSongContent newSongExample)
        {
            var specificLessonContainer = _context.CustomLessonContainers.FirstOrDefault(x => x.Id == newSongExample.CustomLessonContainerId);
            //_context.CustomLessonSongContents.Add(newSongExample);
            specificLessonContainer.LessonContentItems.Add(newSongExample);
            _context.SaveChanges();
        }

        [Route("api/CustomLessonContent/{targetContentForEdit}")]
        [HttpPut]
        public void EditContentSection(CustomLessonSongContent targetContentForEdit)
        {
            CustomLessonSongContent editContent = _context.CustomLessonSongContents.Find(targetContentForEdit.Id);
            editContent = targetContentForEdit;

            _context.Entry(editContent).State = EntityState.Modified;
            _context.SaveChanges();
        }

        [Route("api/CustomLessonContent/{sectionId}")]
        [HttpDelete]
        public void DeleteSection(int sectionId)
        {
            CustomLessonTextContent targetedSection = _context.CustomLessonTextContents.Find(sectionId);
            _context.CustomLessonTextContents.Remove(targetedSection);
            _context.SaveChanges();
        }


    }
}
