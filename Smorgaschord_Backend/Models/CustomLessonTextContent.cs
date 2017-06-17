using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Smorgaschord_Backend.Models
{
    public class CustomLessonTextContent
    {
        [Key]
        public int Id { get; set; }
        public int CustomLessonContainerId { get; set; }
        public string TextSection { get; set; } 
        public int ContentPlacementOrder { get; set; }
    }
}