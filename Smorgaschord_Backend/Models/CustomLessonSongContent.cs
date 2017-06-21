using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Smorgaschord_Backend.Models
{
    public class CustomLessonSongContent
    {
        [Key]
        public int Id { get; set; }
        public int CustomLessonContainerId { get; set; }
        public string TextSection { get; set; }
        public string SongTitle { get; set; }
        public string SongArtist { get; set; }
        public string SongClip { get; set; }
        public string Chord1 { get; set; }
        public string Chord2 { get; set; }
        public string Chord3 { get; set; }
        public string Chord4 { get; set; }
        public int Chord1Milisec { get; set; }
        public int Chord2Milisec { get; set; }
        public int Chord3Milisec { get; set; }
        public int Chord4Milisec { get; set; }
        public int ContentPlacementOrder { get; set; }
    }
}