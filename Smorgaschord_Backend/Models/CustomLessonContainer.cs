using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Smorgaschord_Backend.Models
{
    public class CustomLessonContainer
    {
        [Key]
        public int Id { get; set; }
        public string CustomLessonTitle { get; set; }
        public virtual List<CustomLessonSongContent> LessonContentItems { get; set; }


        //This Model is the focal point of:
        // -- CustomLessonText
        // -- CustomLessonSong
        // -- CustomLessonQuiz
    }
}