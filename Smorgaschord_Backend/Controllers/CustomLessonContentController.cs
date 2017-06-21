﻿using Smorgaschord_Backend.Models;
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

        // Custom Lesson Title (Container) ************************************************
        [Route("api/CustomLessonTitle")]
        [HttpGet]
        public List<CustomLessonContainer> GetAllLessonTitles()
        {
            return _context.CustomLessonContainers.ToList();
        }

        [Route("api/CustomLessonTitle")]
        [HttpPost]
        public CustomLessonContainer AddCustomLessonTitle(CustomLessonContainer newTitle)
        {
            _context.CustomLessonContainers.Add(newTitle);
            _context.SaveChanges();
            return newTitle;
        }
        

        // Custom Lesson Text ***************************************************************
        [Route ("api/CustomLessonText")]
        [HttpGet]
        public List<CustomLessonTextContent> GetAllTextForLesson()
        {
            return _context.CustomLessonTextContents.ToList();
            //Need to make sure the text will populate in the browser correctly...
        }


        [Route("api/CustomLessonText")]
        [HttpPost]
        public void AddTextSection(CustomLessonTextContent newTextSection)
        {
            _context.CustomLessonTextContents.Add(newTextSection);
            _context.SaveChanges();
        }

        [Route("api/CustomLessonText/EditTextSection")]
        [HttpPut]
        public void EditTextSection(CustomLessonTextContent editedSection)
        {
            CustomLessonTextContent editContent = _context.CustomLessonTextContents.Find(editedSection.Id);
            editContent.TextSection = editedSection.TextSection;
            editContent.ContentPlacementOrder = editedSection.ContentPlacementOrder;

            _context.Entry(editContent).State = EntityState.Modified;
            _context.SaveChanges();
        }

        [Route("api/CustomLessonText/{sectionId}")]
        [HttpDelete]
        public void DeleteSection(int sectionId)
        {
            CustomLessonTextContent targetedSection = _context.CustomLessonTextContents.Find(sectionId);
            _context.CustomLessonTextContents.Remove(targetedSection);
            _context.SaveChanges();
        }


        // Custom Lesson Songs ***************************************************************
        [Route("api/CustomLessonSong")]
        [HttpPost]
        public void AddSong(CustomLessonSongContent newSongExample)
        {
            var specificLessonContainer = _context.CustomLessonContainers.FirstOrDefault(x => x.Id == newSongExample.CustomLessonContainerId);
            //_context.CustomLessonSongContents.Add(newSongExample);
            specificLessonContainer.LessonContentItems.Add(newSongExample);
            _context.SaveChanges();
        }

        [Route("api/CustomLessonSong/{theLessonId}")]
        [HttpGet]
        public List<CustomLessonSongContent> GetSongDataForLesson(int theLessonId)
        {
            var theSpecificLessonContainer = _context.CustomLessonContainers.FirstOrDefault(x => x.Id == theLessonId);
            return theSpecificLessonContainer.LessonContentItems;
        }


    }
}
